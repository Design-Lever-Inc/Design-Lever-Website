import { useState } from "react";
import {
  useCurrentUser,
  useDocumentOperation,
  type DocumentActionComponent,
  type DocumentActionProps,
  type DocumentActionsResolver,
} from "sanity";
import { PUBLISHABLE_TYPES } from "./schemaTypes";

/** The publishing lifecycle: draft → Send for review → Approve (by someone
 *  else) → Publish. Each step stamps who did it and when into the document's
 *  Review tab, and Sanity's History panel keeps every revision for rollback. */

type Review = {
  status?: string;
  submittedBy?: string;
};

const now = () => new Date().toISOString();
const reviewOf = (p: DocumentActionProps) =>
  ((p.draft ?? p.published) as { review?: Review } | null)?.review ?? {};

function useUserName() {
  const user = useCurrentUser();
  return user?.name || user?.email || "Unknown editor";
}

const SendForReviewAction: DocumentActionComponent = (props) => {
  const { patch } = useDocumentOperation(props.id, props.type);
  const name = useUserName();
  const status = reviewOf(props).status;
  if (!props.draft || status === "in_review" || status === "approved") return null;
  return {
    label: "Send for review",
    tone: "primary",
    onHandle: () => {
      patch.execute([
        {
          set: {
            "review.status": "in_review",
            "review.submittedBy": name,
            "review.submittedAt": now(),
          },
          unset: ["review.approvedBy", "review.approvedAt"],
        },
      ]);
      props.onComplete();
    },
  };
};

const ApproveAction: DocumentActionComponent = (props) => {
  const { patch } = useDocumentOperation(props.id, props.type);
  const name = useUserName();
  const [confirming, setConfirming] = useState(false);
  const review = reviewOf(props);
  if (!props.draft || review.status !== "in_review") return null;
  const ownWork = review.submittedBy === name;
  return {
    label: "Approve",
    tone: "positive",
    disabled: ownWork,
    title: ownWork ? "Someone other than the person who sent it for review must approve it." : undefined,
    onHandle: () => setConfirming(true),
    dialog: confirming && {
      type: "confirm",
      message: "Approve this version? It can then be published.",
      onCancel: () => setConfirming(false),
      onConfirm: () => {
        patch.execute([
          { set: { "review.status": "approved", "review.approvedBy": name, "review.approvedAt": now() } },
        ]);
        setConfirming(false);
        props.onComplete();
      },
    },
  };
};

/** Wraps the built-in Publish button: disabled until the draft is approved,
 *  and stamps the publisher before publishing. */
function approvedPublish(original: DocumentActionComponent): DocumentActionComponent {
  const Action: DocumentActionComponent = (props) => {
    const { patch, publish } = useDocumentOperation(props.id, props.type);
    const name = useUserName();
    const base = original(props);
    if (!base || !props.draft) return base;
    if (reviewOf(props).status !== "approved") {
      return { ...base, disabled: true, title: "Send for review and get approval before publishing." };
    }
    return {
      ...base,
      onHandle: () => {
        patch.execute([
          { set: { "review.status": "published", "review.publishedBy": name, "review.lastPublishedAt": now() } },
        ]);
        publish.execute();
        props.onComplete();
      },
    };
  };
  Action.action = original.action;
  return Action;
}

export const resolveActions: DocumentActionsResolver = (prev, { schemaType }) => {
  if (!PUBLISHABLE_TYPES.includes(schemaType)) return prev;
  // The first action that applies becomes the main button, so the review steps
  // lead and Publish takes over once the draft is approved.
  return [SendForReviewAction, ApproveAction, ...prev.map((a) => (a.action === "publish" ? approvedPublish(a) : a))];
};
