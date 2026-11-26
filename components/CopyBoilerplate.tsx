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
        font: "500 15px/1.2 'Roboto Flex',sans-serif",
        color: "#B8430F",
        background: "transparent",
        border: "0",
        padding: "0",
        cursor: "pointer",
      }}
    >
      {copied ? "Copied ✓" : "Copy boilerplate"}
    </button>
  );
}
