import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (Rule) => Rule.required() }),
    defineField({
      name: "level",
      type: "string",
      title: "Level",
      options: { list: ["Familiar", "Proficient", "Expert"] },
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
