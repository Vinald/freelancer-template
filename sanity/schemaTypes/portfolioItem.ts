import { defineType, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const portfolioItem = defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({ name: "category", type: "string", title: "Category" }),
    defineField({ name: "description", type: "text", title: "Description", rows: 2 }),
    defineField({ name: "color", type: "string", title: "Placeholder color (hex)" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
