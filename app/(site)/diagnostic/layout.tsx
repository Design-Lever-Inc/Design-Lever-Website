import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Diagnostic",
  description:
    "A structured estimate of what a broken design function is costing you, in naira. Takes five minutes, free.",
};

export default function DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return children;
}
