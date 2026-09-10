"use client";

import { useState } from "react";

export function CopyBoilerplate({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <button
      onClick={copy}
      className="dl-link"
      style={{
        font: "400 11px 'Spline Sans Mono',monospace",
        color: "#FF7D44",
        background: "transparent",
        border: "0",
        padding: "0",
        cursor: "pointer",
        letterSpacing: ".06em",
        textTransform: "uppercase",
      }}
    >
      {copied ? "Copied ✓" : "Copy boilerplate →"}
    </button>
  );
}
