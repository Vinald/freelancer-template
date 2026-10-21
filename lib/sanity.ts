import { cache } from "react";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ax4zc4ha",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

export type SanitySiteSettings = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

export type SanityPortfolioItem = {
  _id: string;
  title: string;
  category: string;
  description: string;
  color: string;
};

export type SanitySkill = {
  _id: string;
  name: string;
  level: string;
};

export type SanityTestimonial = {
  _id: string;
  quote: string;
  author: string;
  role: string;
};

const fallbackSiteSettings: SanitySiteSettings = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Add a tagline in Sanity Studio to replace this placeholder.",
  bio: "",
  email: "",
};

export const getSiteSettings = cache(async (): Promise<SanitySiteSettings> => {
  const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
  return data ?? fallbackSiteSettings;
});

export const getPortfolioItems = cache(async (): Promise<SanityPortfolioItem[]> => {
  return sanityClient.fetch(`*[_type == "portfolioItem"] | order(order asc)`);
});

export const getSkills = cache(async (): Promise<SanitySkill[]> => {
  return sanityClient.fetch(`*[_type == "skill"] | order(order asc)`);
});

export const getTestimonials = cache(async (): Promise<SanityTestimonial[]> => {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`);
});
