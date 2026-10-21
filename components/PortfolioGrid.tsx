import type { SanityPortfolioItem } from "@/lib/sanity";

export default function PortfolioGrid({ items }: { items: SanityPortfolioItem[] }) {
  if (items.length === 0) return null;

  return (
    <section id="portfolio" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-stone-900">Selected Work</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item._id} className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <div
                className="flex h-48 items-center justify-center text-sm font-bold uppercase tracking-wide text-white/90"
                style={{ backgroundColor: item.color }}
              >
                {item.category}
              </div>
              <div className="bg-white p-6">
                <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
