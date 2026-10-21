import type { SanitySiteSettings } from "@/lib/sanity";

export default function Footer({ settings }: { settings: SanitySiteSettings }) {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm sm:flex-row sm:justify-between">
        <div>
          <p className="font-bold text-white">{settings.name}</p>
          <p>{settings.role}</p>
        </div>
        <div>
          {settings.email && <p>{settings.email}</p>}
          {settings.phone && <p>{settings.phone}</p>}
        </div>
        <div className="flex gap-4">
          {settings.instagramUrl && (
            <a href={settings.instagramUrl} className="hover:text-[var(--color-accent)]">
              Instagram
            </a>
          )}
          {settings.linkedinUrl && (
            <a href={settings.linkedinUrl} className="hover:text-[var(--color-accent)]">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <p className="border-t border-stone-800 py-4 text-center text-xs text-stone-500">
        {settings.name}. All rights reserved.
      </p>
    </footer>
  );
}
