import type { SanitySiteSettings } from "@/lib/sanity";

export default function About({ settings }: { settings: SanitySiteSettings }) {
  if (!settings.bio) return null;

  return (
    <section id="about" className="bg-[var(--color-primary-dark)] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold">About</h2>
        <p className="mt-6 text-lg leading-relaxed text-white/85">{settings.bio}</p>
      </div>
    </section>
  );
}
