import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: exported to plain HTML for static hosting (Vercel/CDN).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
