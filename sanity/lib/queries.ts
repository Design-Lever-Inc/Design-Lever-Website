import { defineQuery, type PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

import type { PostType } from "./paths";
export type { PostType };

export interface Post {
  _id: string;
  _type: PostType;
  _updatedAt: string;
  title: string;
  slug: string;
  standfirst: string;
  heroImage: (SanityImageSource & { alt?: string }) | null;
  byline: string;
  readingMinutes: number;
  publishedAt: string;
  body: PortableTextBlock[];
  cardLabel: string;
  cardTitle?: string;
  cardSummary: string;
  seo?: { title?: string; description?: string; image?: SanityImageSource };
}

export type PostCard = Pick<Post, "_id" | "_type" | "title" | "slug" | "heroImage" | "cardLabel" | "cardTitle" | "cardSummary">;

export interface Report {
  _id: string;
  title: string;
  format: string;
  summary: string;
  stage: "planned" | "in_production" | "open_for_input" | "published";
  fileUrl?: string;
  link?: string;
  actionLabel: string;
  publishedAt?: string;
  flagship?: boolean;
  flagshipDetails?: { edition?: string; length?: string; facts?: { label?: string; value?: string }[] };
}

export interface SearchDoc {
  _type: PostType;
  title: string;
  slug: string;
  description: string;
  keywords?: string[];
}

const POST_FIELDS = `_id, _type, _updatedAt, title, "slug": slug.current, standfirst, heroImage,
  byline, readingMinutes, publishedAt, body, cardLabel, cardTitle, cardSummary, seo`;

// Listing order: explicit position first, then newest.
const ORDER = `order(coalesce(order, 999) asc, publishedAt desc)`;

export const POST_QUERY = defineQuery(
  `*[_type == $type && slug.current == $slug][0]{ ${POST_FIELDS} }`,
);

export const POST_SLUGS_QUERY = defineQuery(
  `*[_type == $type && defined(slug.current)]{ "slug": slug.current }`,
);

export const RESEARCH_QUERY = defineQuery(`{
  "articles": *[_type == "article" && defined(slug.current)] | ${ORDER}
    { _id, _type, title, "slug": slug.current, heroImage, cardLabel, cardTitle, cardSummary },
  "spotlights": *[_type == "spotlight" && defined(slug.current)] | ${ORDER}
    { _id, _type, title, "slug": slug.current, heroImage, cardLabel, cardTitle, cardSummary },
  "reports": *[_type == "report"] | ${ORDER}
    { _id, title, format, summary, stage, "fileUrl": file.asset->url, link, actionLabel,
      publishedAt, flagship, flagshipDetails }
}`);

export const SITEMAP_QUERY = defineQuery(
  `*[_type in ["article", "spotlight"] && defined(slug.current)]{ _type, "slug": slug.current, _updatedAt }`,
);

export const SEARCH_QUERY = defineQuery(
  `*[_type in ["article", "spotlight"] && defined(slug.current)] | ${ORDER}
    { _type, title, "slug": slug.current, "description": coalesce(cardSummary, standfirst), keywords }`,
);

export { postPath } from "./paths";
