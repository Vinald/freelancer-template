import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioGrid from "@/components/PortfolioGrid";
import Skills from "@/components/Skills";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import { getSiteSettings, getPortfolioItems, getSkills, getTestimonials } from "@/lib/sanity";

export default async function Home() {
  const [settings, portfolioItems, skills, testimonials] = await Promise.all([
    getSiteSettings(),
    getPortfolioItems(),
    getSkills(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <About settings={settings} />
      <PortfolioGrid items={portfolioItems} />
      <Skills skills={skills} />
      <TestimonialCarousel testimonials={testimonials} />
      <ContactForm settings={settings} />
    </>
  );
}
