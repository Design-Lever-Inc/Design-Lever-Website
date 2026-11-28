import { defineArrayMember, defineField } from "sanity";

/** Fields shared by every publishable document type. */

/** Review trail. Set only through the Send for review / Approve / Publish
 *  buttons (see sanity/actions.ts), so editors can read it but not edit it. */
export const reviewField = defineField({
  name: "review",
  title: "Review",
  type: "object",
  group: "review",
  readOnly: true,
  description: "Filled in by the Send for review, Approve and Publish buttons.",
  fields: [
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Ready for review", value: "in_review" },
          { title: "Approved", value: "approved" },
          { title: "Published", value: "published" },
        ],
      },
    }),
    defineField({ name: "submittedBy", title: "Sent for review by", type: "string" }),
    defineField({ name: "submittedAt", title: "Sent for review at", type: "datetime" }),
    defineField({ name: "approvedBy", title: "Approved by", type: "string" }),
    defineField({ name: "approvedAt", title: "Approved at", type: "datetime" }),
    defineField({ name: "publishedBy", title: "Published by", type: "string" }),
    defineField({ name: "lastPublishedAt", title: "Published at", type: "datetime" }),
  ],
});

export const reviewNotesField = defineField({
  name: "reviewNotes",
  title: "Notes for the reviewer",
  type: "text",
  rows: 3,
  group: "review",
  description: "Optional. What changed and what to check. Never shown on the site.",
});

/** SEO overrides. Both fall back to the main title and standfirst/summary. */
export const seoField = defineField({
  name: "seo",
  title: "Search and sharing",
  type: "object",
  group: "seo",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: "title",
      title: "Search title",
      type: "string",
      description: "Leave empty to use the headline. Google shows about 60 characters.",
      validation: (r) => r.max(70).warning("Google will cut this off after about 60 characters."),
    }),
    defineField({
      name: "description",
      title: "Search description",
      type: "text",
      rows: 3,
      description: "Leave empty to use the standfirst. Shown under the link in Google and on LinkedIn.",
      validation: (r) => r.max(160).warning("Google will cut this off after about 155 characters."),
    }),
    defineField({
      name: "image",
      title: "Share image",
      type: "image",
      description: "1200 × 630. Leave empty to use the standard Design Lever card.",
    }),
  ],
});

export const keywordsField = defineField({
  name: "keywords",
  title: "Search keywords",
  type: "array",
  group: "seo",
  of: [defineArrayMember({ type: "string" })],
  options: { layout: "tags" },
  description: "Words people might type into the site search to find this (e.g. attrition, japa, ROI).",
});

/** Article body: paragraphs, section headings and pull quotes. Section
 *  headings also build the "In this piece" contents list. */
export const bodyField = defineField({
  name: "body",
  title: "Body",
  type: "array",
  group: "content",
  validation: (r) => r.required().min(1),
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Paragraph", value: "normal" },
        { title: "Section heading", value: "h2" },
        { title: "Pull quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullets", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "Address",
                type: "url",
                validation: (r) =>
                  r.required().uri({ scheme: ["http", "https", "mailto"], allowRelative: true }),
              }),
            ],
          }),
        ],
      },
    }),
  ],
});

export const groups = [
  { name: "content", title: "Content", default: true },
  { name: "listing", title: "Research page card" },
  { name: "seo", title: "Search and sharing" },
  { name: "review", title: "Review" },
];
