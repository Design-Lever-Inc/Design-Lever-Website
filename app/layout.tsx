import type { Metadata } from "next";
import "./globals.css";
import "../styles/prototype.css";
import "../styles/responsive.css";
import "../styles/motion.css";
import { SiteBehaviors } from "@/components/SiteBehaviors";
import { ScrollRestore } from "@/components/ScrollRestore";
import { MotionScript } from "@/components/MotionScript";

export const metadata: Metadata = {
  title: {
    default: "Design Lever Inc. | Africa's first fractional design leadership company",
    template: "%s · Design Lever Inc.",
  },
  description:
    "Design leadership infrastructure, built for African business. We install it, certify it, and publish the return.",
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Roboto+Flex:wght@300;400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="dl-canvas">{children}</div>
        <SiteBehaviors />
        <ScrollRestore />
        <MotionScript />
      </body>
    </html>
  );
}
