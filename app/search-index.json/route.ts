import { CONTENT_TAG, publishedClient } from "@/sanity/lib/fetch";
import { SEARCH_QUERY, postPath, type SearchDoc } from "@/sanity/lib/queries";
import { sanityConfigured } from "@/sanity/env";
import type { SearchEntry } from "@/lib/search";

/** Published articles and spotlights for the footer search, refreshed with
 *  the rest of the site whenever something is published. */
export const revalidate = 3600;

export async function GET() {
  const docs = sanityConfigured
    ? await publishedClient.fetch<SearchDoc[]>(SEARCH_QUERY, {}, { next: { tags: [CONTENT_TAG], revalidate: 3600 } })
    : [];
  const entries: SearchEntry[] = docs.map((d) => ({
    title: d.title,
    href: postPath(d._type, d.slug),
    type: d._type === "article" ? "Article" : "Spotlight",
    description: d.description,
    keywords: d.keywords ?? [],
  }));
  return Response.json(entries);
}
