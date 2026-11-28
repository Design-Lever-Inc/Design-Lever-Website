import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Design Lever Inc. | Africa's first fractional design leadership company",
    template: "%s · Design Lever Inc.",
  },
  description:
    "Design leadership infrastructure, built for African business. We install it, certify it, and publish the return.",
  icons: { icon: "/assets/favicon.png" },
  // "./" resolves to each page's own path, so every page gets a self-canonical.
  alternates: { canonical: "./" },
  // Default share card. Pages inherit it; their own title/description fill in.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "./",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image" },
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
      <body>{children}</body>
    </html>
  );
}
