import type { SanitySiteSettings } from "@/lib/sanity";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Hero({ settings }: { settings: SanitySiteSettings }) {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 sm:flex-row">
        <div className="flex-1">
          <span className="rounded-full bg-[var(--color-accent)]/15 px-4 py-1 text-sm font-bold text-[var(--color-accent-dark)]">
            {settings.role}
          </span>
          <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight text-stone-900 sm:text-5xl">
            {settings.tagline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-bold text-white shadow-md hover:bg-[var(--color-primary-dark)]"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-[var(--color-primary)] px-6 py-3 text-base font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
            >
              Book a Session
            </a>
          </div>
        </div>
        <div className="flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-4xl font-black text-white shadow-xl sm:h-56 sm:w-56">
          {initials(settings.name)}
        </div>
      </div>
    </section>
  );
}
