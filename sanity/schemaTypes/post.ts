import { defineField, defineType } from "sanity";
import { bodyField, groups, keywordsField, reviewField, reviewNotesField, seoField } from "./fields";

/** Articles and spotlights share one page template, so they share one set of
 *  fields; only the names, the URL prefix and the card defaults differ. */
function postType(opts: {
  name: "article" | "spotlight";
  title: string;
  urlPrefix: string;
  cardLabelHelp: string;
}) {
  return defineType({
    name: opts.name,
    title: opts.title,
    type: "document",
    groups,
    fields: [
      defineField({
        name: "title",
        title: "Headline",
        type: "string",
        group: "content",
        description: "No full stop at the end; the page adds one.",
        validation: (r) => r.required().max(90),
      }),
      defineField({
        name: "slug",
        title: "Web address",
        type: "slug",
        group: "content",
        description: `The page lives at designleverinc.com${opts.urlPrefix}/<this>. Don't change it after publishing, or old links break.`,
        options: { source: "title", maxLength: 80 },
        validation: (r) => r.required(),
      }),
      defineField({
        name: "standfirst",
        title: "Standfirst",
        type: "text",
        rows: 3,
        group: "content",
        description: "The large opening paragraph. Also used as the search description unless you set one.",
        validation: (r) => r.required().max(240),
      }),
      defineField({
        name: "heroImage",
        title: "Main image",
        type: "image",
        group: "content",
        options: { hotspot: true },
        validation: (r) => r.required(),
        fields: [
          defineField({
            name: "alt",
            title: "Image description",
            type: "string",
            description: "For screen readers. Leave empty if the image is purely decorative.",
          }),
        ],
      }),
      defineField({
        name: "byline",
        title: "Byline",
        type: "string",
        group: "content",
        initialValue: "By the Design Lever research team",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "readingMinutes",
        title: "Reading time (minutes)",
        type: "number",
        group: "content",
        validation: (r) => r.required().integer().min(1).max(60),
      }),
      defineField({
        name: "publishedAt",
        title: "Publication date",
        type: "date",
        group: "content",
        description: "Shown on the page and used to order the research library.",
        initialValue: () => new Date().toISOString().slice(0, 10),
        validation: (r) => r.required(),
      }),
      bodyField,
      defineField({
        name: "cardLabel",
        title: "Card label",
        type: "string",
        group: "listing",
        description: opts.cardLabelHelp,
        validation: (r) => r.required().max(28),
      }),
      defineField({
        name: "cardTitle",
        title: "Card title",
        type: "string",
        group: "listing",
        description: "Leave empty to use the headline.",
      }),
      defineField({
        name: "cardSummary",
        title: "Card summary",
        type: "text",
        rows: 2,
        group: "listing",
        description: "One sentence under the card title on the research page.",
        validation: (r) => r.required().max(160),
      }),
      defineField({
        name: "order",
        title: "Position on the research page",
        type: "number",
        group: "listing",
        description: "1 appears first. Leave empty to sort by publication date, newest first.",
      }),
      seoField,
      keywordsField,
      reviewNotesField,
      reviewField,
    ],
    orderings: [
      { title: "Research page order", name: "order", by: [{ field: "order", direction: "asc" }] },
      { title: "Newest", name: "newest", by: [{ field: "publishedAt", direction: "desc" }] },
    ],
    preview: {
      select: { title: "title", label: "cardLabel", status: "review.status", media: "heroImage" },
      prepare: ({ title, label, status, media }) => ({
        title,
        subtitle: [label, STATUS_LABEL[status as string] ?? "Draft"].filter(Boolean).join(" · "),
        media,
      }),
    },
  });
}

export const STATUS_LABEL: Record<string, string> = {
  draft: "Draft",
  in_review: "Ready for review",
  approved: "Approved",
  published: "Published",
};

export const article = postType({
  name: "article",
  title: "Article",
  urlPrefix: "/articles",
  cardLabelHelp: "What kind of piece this is, e.g. ESSAY or FIELD NOTE.",
});

export const spotlight = postType({
  name: "spotlight",
  title: "Spotlight",
  urlPrefix: "/spotlights",
  cardLabelHelp: "The evidence stream, e.g. QUALITATIVE RESEARCH or WORKFORCE DATA.",
});
