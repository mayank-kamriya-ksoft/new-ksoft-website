import Link from "next/link";
import Image from "next/image";
import logo from "@/components/assets/ksoft-logo.webp";

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
        <Link href="/" className="flex items-center group">
          <span className="inline-flex items-center rounded-lg bg-deep px-3 py-1.5">
            <Image
              src={logo}
              alt="KSoft Solution"
              width={140}
              height={28}
              priority
              className="h-6 w-auto"
            />
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
