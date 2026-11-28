export type PostType = "article" | "spotlight";

/** Public URL of an article or spotlight. */
export const postPath = (type: PostType, slug: string) =>
  `/${type === "article" ? "articles" : "spotlights"}/${slug}`;
