import type { SanityTestimonial } from "@/lib/sanity";

export default function TestimonialCarousel({ testimonials }: { testimonials: SanityTestimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-stone-900">Client Notes</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial._id}
              className="flex flex-col justify-between rounded-2xl border-t-4 border-[var(--color-accent)] bg-white p-6 shadow-sm"
            >
              <span className="text-4xl font-black leading-none text-[var(--color-primary)]">&ldquo;</span>
              <blockquote className="mt-2 text-sm text-stone-700">{testimonial.quote}</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-stone-900">
                {testimonial.author}
                <span className="block font-medium text-stone-500">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
