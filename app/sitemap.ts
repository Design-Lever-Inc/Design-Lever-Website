import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/** Every route with a page.tsx under app/, found at build time, so a new page
 *  is listed automatically without editing this file. */
function routes(dir: string, base = ""): string[] {
  const found: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") found.push(base || "/");
    if (entry.isDirectory() && !/^[_(\[]/.test(entry.name)) {
      found.push(...routes(path.join(dir, entry.name), `${base}/${entry.name}`));
    }
  }
  return found;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes(path.join(process.cwd(), "app"))
    .sort()
    .map((route) => ({ url: `${SITE_URL}${route === "/" ? "" : route}` }));
}
