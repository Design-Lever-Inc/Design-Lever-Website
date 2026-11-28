import { defineArrayMember, defineField, defineType } from "sanity";
import { groups, keywordsField, reviewField, reviewNotesField } from "./fields";
import { STATUS_LABEL } from "./post";

/** Research reports, white papers and data briefs listed in "The library" on
 *  /research. They have no page of their own: the card links to the PDF, an
 *  outside page, or the research contact form. */
export const report = defineType({
  name: "report",
  title: "Research report",
  type: "document",
  groups: groups.filter((g) => g.name !== "listing"),
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (r) => r.required().max(90),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      group: "content",
      options: {
        list: ["Annual report", "White paper", "Data report", "Field report", "Data brief"],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      group: "content",
      description: "One sentence for the list. The flagship report can take two or three.",
      validation: (r) => r.required().max(320),
    }),
    defineField({
      name: "stage",
      title: "Stage",
      type: "string",
      group: "content",
      description: "The tag shown next to the report.",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "In production", value: "in_production" },
          { title: "Open for input", value: "open_for_input" },
          { title: "Published", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "planned",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "file",
      title: "PDF",
      type: "file",
      group: "content",
      options: { accept: "application/pdf" },
      description: "Upload the finished report. The button then downloads it.",
    }),
    defineField({
      name: "link",
      title: "Or a link",
      type: "url",
      group: "content",
      description: "Use instead of a PDF to send readers to a survey or another page.",
      hidden: ({ document }) => Boolean((document?.file as { asset?: unknown } | undefined)?.asset),
    }),
    defineField({
      name: "actionLabel",
      title: "Button text",
      type: "string",
      group: "content",
      description:
        'E.g. "Download", "Take the survey", "Notify me". With no PDF or link, the button opens the research contact form.',
      validation: (r) => r.required().max(28),
    }),
    defineField({
      name: "publishedAt",
      title: "Date",
      type: "date",
      group: "content",
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: "order",
      title: "Position in the list",
      type: "number",
      group: "content",
      description: "1 appears first.",
    }),
    defineField({
      name: "flagship",
      title: "Flagship report",
      type: "boolean",
      group: "content",
      description: "Shows this report as the large feature card above the list. Use for one report at a time.",
      initialValue: false,
    }),
    defineField({
      name: "flagshipDetails",
      title: "Flagship details",
      type: "object",
      group: "content",
      hidden: ({ document }) => !document?.flagship,
      fields: [
        defineField({ name: "edition", title: "Edition", type: "string", description: 'E.g. "Volume 01".' }),
        defineField({ name: "length", title: "Length", type: "string", description: 'E.g. "EST. ~120 PP".' }),
        defineField({
          name: "facts",
          title: "Facts",
          type: "array",
          description: "Rows under the summary, e.g. Coverage / 20 interviews.",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "value", title: "Value", type: "string" }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),
    keywordsField,
    reviewNotesField,
    reviewField,
  ],
  orderings: [{ title: "List order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", format: "format", flagship: "flagship", status: "review.status" },
    prepare: ({ title, format, flagship, status }) => ({
      title,
      subtitle: [flagship ? "Flagship" : format, STATUS_LABEL[status as string] ?? "Draft"].join(" · "),
    }),
  },
});
