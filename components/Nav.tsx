import Link from "next/link";
import type { SanitySiteSettings } from "@/lib/sanity";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ settings }: { settings: SanitySiteSettings }) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/5 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-[var(--color-primary-dark)]">
          {settings.name}
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold text-stone-700 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--color-primary)]">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white shadow-sm hover:brightness-110"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
