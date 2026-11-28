import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Reports, white papers, playbooks and data on design leadership in African business. Open research, publicly published.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
