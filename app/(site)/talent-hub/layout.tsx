import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Hub",
  description:
    "Fractional design leadership, matched to your mandate. Brief the Hub or join the executive bench.",
};

export default function TalentHubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
