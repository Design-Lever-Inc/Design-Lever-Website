import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { client } from "@/sanity/lib/client";
import { CONTENT_TAG } from "@/sanity/lib/fetch";
import { SITEMAP_QUERY, postPath, type PostType } from "@/sanity/lib/queries";
import { sanityConfigured } from "@/sanity/env";

export const revalidate = 3600;

/** Every hand-built route with a page.tsx under app/, found at build time.
 *  Route groups like (site) add no URL segment; dynamic [slug] routes, the
 *  Studio and API routes are skipped (published content is added below). */
function routes(dir: string, base = ""): string[] {
  const found: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") found.push(base || "/");
    if (!entry.isDirectory() || /^[_\[]/.test(entry.name) || ["studio", "api"].includes(entry.name)) continue;
    const group = /^\(.*\)$/.test(entry.name);
    found.push(...routes(path.join(dir, entry.name), group ? base : `${base}/${entry.name}`));
  }
  return found;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = routes(path.join(process.cwd(), "app")).map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
  }));
  const content = sanityConfigured
    ? await client.fetch<{ _type: PostType; slug: string; _updatedAt: string }[]>(
        SITEMAP_QUERY,
        {},
        { next: { tags: [CONTENT_TAG], revalidate: 3600 } },
      )
    : [];
  const posts = content.map((d) => ({
    url: `${SITE_URL}${postPath(d._type, d.slug)}`,
    lastModified: d._updatedAt,
  }));
  return [...pages, ...posts].sort((a, b) => a.url.localeCompare(b.url));
}
