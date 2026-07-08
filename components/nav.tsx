import Link from "next/link";
import { Hex } from "./hex";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative w-8 h-8 grid place-items-center">
            <Hex size={32} stroke="#2dd4a8" fill="#0f2620" strokeWidth={1.5} />
            <span className="absolute font-display font-bold text-primary-glow text-sm">K</span>
          </span>
          <span className="font-display font-semibold tracking-tight">
            KSoft<span className="text-primary">.</span>Solution
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-sm text-foreground/70 hover:text-foreground hover:bg-surface transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary text-sm">
          Start a project →
        </Link>
      </div>
    </header>
  );
}
