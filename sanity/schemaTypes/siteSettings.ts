import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "name", type: "string", title: "Full Name", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", type: "string", title: "Role / Title" }),
    defineField({ name: "tagline", type: "text", title: "Tagline", rows: 2 }),
    defineField({ name: "bio", type: "text", title: "Bio", rows: 5 }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "phone", type: "string", title: "Phone" }),
    defineField({ name: "instagramUrl", type: "url", title: "Instagram URL" }),
    defineField({ name: "linkedinUrl", type: "url", title: "LinkedIn URL" }),
  ],
});
