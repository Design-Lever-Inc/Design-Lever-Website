import "server-only";
import { draftMode } from "next/headers";
import type { QueryParams } from "next-sanity";
import { sanityConfigured } from "../env";
import { client } from "./client";

/** Server-only read token, used for previews of unpublished drafts. */
export const readToken = process.env.SANITY_API_READ_TOKEN;

/** Every published-content fetch is tagged "sanity". Publishing in the Studio
 *  calls /api/revalidate, which clears that tag, so the site updates within
 *  seconds. The hourly revalidate is only a safety net. */
export const CONTENT_TAG = "sanity";

export async function sanityFetch<T>(query: string, params: QueryParams = {}, fallback: T): Promise<T> {
  if (!sanityConfigured) return fallback;
  const preview = (await draftMode()).isEnabled;
  if (preview && readToken) {
    return client
      .withConfig({ token: readToken, perspective: "drafts", useCdn: false, stega: true })
      .fetch<T>(query, params, { cache: "no-store" });
  }
  return client.fetch<T>(query, params, { next: { tags: [CONTENT_TAG], revalidate: 3600 } });
}
