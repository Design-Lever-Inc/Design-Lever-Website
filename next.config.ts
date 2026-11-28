import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages are still pre-rendered as static HTML. Articles, spotlights and the
  // research page are refreshed from Sanity when something is published.
  images: { unoptimized: true },
};

export default nextConfig;
