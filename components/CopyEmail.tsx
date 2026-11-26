"use client";

import { useState } from "react";

/** Selectable email address with a one-click copy button. */
export function CopyEmail({ email, color = "#FDFBF0" }: { email: string; color?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
      <a
        className="dl-link"
        href={`mailto:${email}`}
        style={{ font: "400 18px/1.4 'Roboto Flex',sans-serif", color, textDecoration: "underline", textUnderlineOffset: "4px" }}
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        style={{
          font: "500 14px/1.2 'Roboto Flex',sans-serif",
          color,
          background: "transparent",
          border: `1px solid ${color}`,
          padding: "7px 12px",
          cursor: "pointer",
          opacity: 0.85,
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
