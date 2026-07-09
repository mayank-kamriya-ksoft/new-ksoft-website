import Link from "next/link";
import Image from "next/image";
import logo from "@/components/assets/ksoft-logo.webp";
import { services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <span className="inline-flex items-center rounded-lg bg-deep px-3 py-1.5">
              <Image
                src={logo}
                alt="KSoft Solution"
                width={140}
                height={28}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <p className="mt-4 text-muted max-w-md text-sm leading-relaxed">
            A software development studio building web apps, AI systems, mobile products
            and growth engines out of Chhatrapati Sambhaji Nagar for teams worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="chip">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Booking Q3 · 2026
            </span>
          </div>
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-primary-glow mb-4">
            Services
          </div>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-foreground/70 hover:text-primary-glow">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-primary-glow mb-4">
            Studio
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-foreground/70 hover:text-primary-glow">About</Link></li>
            <li><Link href="/portfolio" className="text-foreground/70 hover:text-primary-glow">Portfolio</Link></li>
            <li><Link href="/blog" className="text-foreground/70 hover:text-primary-glow">Blog</Link></li>
            <li><Link href="/contact" className="text-foreground/70 hover:text-primary-glow">Contact</Link></li>
            <li><Link href="/privacy" className="text-foreground/70 hover:text-primary-glow">Privacy</Link></li>
            <li><Link href="/terms" className="text-foreground/70 hover:text-primary-glow">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs font-mono text-muted">
          <span>© {new Date().getFullYear()} KSoft Solution — All systems nominal.</span>
          <span>Chhatrapati Sambhaji Nagar · IND</span>
        </div>
      </div>
    </footer>
  );
}
