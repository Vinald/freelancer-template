import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "quote", type: "text", title: "Quote", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: "author", type: "string", title: "Author name", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", type: "string", title: "Author role" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
