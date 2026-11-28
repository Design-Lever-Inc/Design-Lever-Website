"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { defineDocuments, defineLocations, presentationTool } from "sanity/presentation";
import { apiVersion, dataset, projectId, studioUrl } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { resolveActions } from "./sanity/actions";

/** The editing Studio, served by the site itself at /studio. */
export default defineConfig({
  name: "design-lever",
  title: "Design Lever",
  basePath: studioUrl,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  document: {
    actions: resolveActions,
    // Only the content types can be created from the "+" menu.
    newDocumentOptions: (prev) => prev.filter((t) => ["article", "spotlight", "report"].includes(t.templateId)),
  },
  plugins: [
    structureTool({
      title: "Content",
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("article").title("Articles"),
            S.documentTypeListItem("spotlight").title("Spotlights"),
            S.documentTypeListItem("report").title("Research reports"),
          ]),
    }),
    // "Preview" tab: the real site with unpublished changes, side by side.
    presentationTool({
      title: "Preview",
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
      resolve: {
        mainDocuments: defineDocuments([
          { route: "/articles/:slug", filter: `_type == "article" && slug.current == $slug` },
          { route: "/spotlights/:slug", filter: `_type == "spotlight" && slug.current == $slug` },
        ]),
        locations: {
          article: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                { title: doc?.title || "Untitled", href: `/articles/${doc?.slug}` },
                { title: "Research page", href: "/research#articles" },
              ],
            }),
          }),
          spotlight: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                { title: doc?.title || "Untitled", href: `/spotlights/${doc?.slug}` },
                { title: "Research page", href: "/research#spotlights" },
              ],
            }),
          }),
          report: defineLocations({
            message: "Reports appear in the library on the research page",
            locations: [{ title: "Research page", href: "/research#reports" }],
          }),
        },
      },
    }),
  ],
  apiVersion,
});
