import Link from "next/link";
import { HeroStack } from "@/components/product-visuals";
import { ServiceIcon } from "@/components/icons";
import { services, projects, posts } from "@/lib/content";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <>
      {/* HERO — centered editorial */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative">
          <div className="flex flex-col items-center text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color-mix(in_oklab,var(--primary)_6%,transparent)] border border-[color-mix(in_oklab,var(--primary)_18%,transparent)] text-primary text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-glow" />
              </span>
              Available for Q4 · 2026 engagements
            </span>
            <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-4xl">
              We build <span className="text-primary">products</span>,
              <br /> not just features.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
              KSoft Solution is a boutique engineering studio out of Chhatrapati
              Sambhaji Nagar, crafting high-performance web, AI and mobile products
              for teams worldwide.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="px-7 py-3.5 rounded-lg bg-foreground text-white font-semibold shadow-lg shadow-foreground/10 hover:bg-primary transition-colors">
                Start a project
              </Link>
              <Link href="/portfolio" className="px-7 py-3.5 rounded-lg bg-surface border border-border font-semibold hover:border-primary transition-colors">
                View our work
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-16 grid grid-cols-3 gap-10 md:gap-16">
              {[
                ["120+", "Products shipped"],
                ["9 yrs", "Compounding craft"],
                ["24/7", "On-call support"],
              ].map(([v, l]) => (
                <div key={l} className="text-center">
                  <dt className="font-display font-bold text-3xl md:text-4xl text-foreground">{v}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero product artifact */}
          <div className="mt-20 hidden md:flex justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <HeroStack className="w-full max-w-[820px]" />
          </div>
        </div>
      </section>

      {/* BENTO — editorial services + work */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// what we do</div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">A studio built like a product team.</h2>
          </div>
          <Link href="/services" className="hidden md:inline-flex text-primary text-sm font-semibold items-center gap-1 group">
            All services
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[620px]">
          {/* Product Strategy — wide */}
          <Link
            href={`/services/${services[0].slug}`}
            className="md:col-span-2 md:row-span-1 bg-surface border border-border p-8 rounded-3xl flex flex-col justify-between hover:border-primary/40 transition-colors group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-primary/5 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ServiceIcon name={services[0].icon} />
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl">{services[0].title}</h3>
              <p className="mt-2 text-sm text-muted max-w-sm">{services[0].tagline}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full border-2 border-surface bg-primary-glow" />
                <span className="w-8 h-8 rounded-full border-2 border-surface bg-primary" />
                <span className="w-8 h-8 rounded-full border-2 border-surface bg-foreground" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Senior · zero-handoff pod</span>
            </div>
          </Link>

          {/* Featured case study — tall dark */}
          <Link
            href="/portfolio"
            className="md:col-span-1 md:row-span-2 bg-foreground rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-8 relative z-10">
              <span className="text-primary-glow text-[10px] font-bold uppercase tracking-widest">Case study · 01</span>
              <h3 className="font-display font-bold text-2xl text-white mt-3 leading-tight">
                {projects[0]?.name ?? "Fintech Core"}
              </h3>
              <p className="mt-2 text-sm text-white/60 max-w-[240px]">
                {projects[0]?.summary ?? "A ledger platform rebuilt on the edge."}
              </p>
              <div className="mt-4 font-mono text-[11px] text-primary-glow">
                → {projects[0]?.metric ?? "+38% conversion"}
              </div>
            </div>
            {/* mock UI peek */}
            <div className="absolute bottom-0 right-0 w-[85%] h-[52%] bg-white/[0.03] rounded-tl-2xl border-t border-l border-white/10 p-4 transform translate-y-3 group-hover:translate-y-0 transition-transform">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="mt-4 h-2 w-1/2 bg-white/10 rounded" />
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="h-14 rounded-lg bg-white/[0.04] border border-white/5" />
                <div className="h-14 rounded-lg bg-primary/25 border border-primary-glow/20" />
              </div>
              <div className="mt-2 h-1.5 w-2/3 bg-white/10 rounded" />
              <div className="mt-1.5 h-1.5 w-1/3 bg-white/10 rounded" />
            </div>
          </Link>

          {/* DevOps tile — cyan */}
          <Link
            href={`/services/${services[1].slug}`}
            className="md:col-span-1 md:row-span-1 bg-primary-glow/10 border border-primary-glow/25 p-7 rounded-3xl hover:bg-primary-glow/20 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-surface grid place-items-center text-primary">
                <ServiceIcon name={services[1].icon} className="w-4 h-4" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{services[1].title}</h3>
              <p className="mt-1.5 text-[13px] text-foreground/70 leading-relaxed">{services[1].tagline}</p>
            </div>
            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-primary">→ Explore</span>
          </Link>

          {/* Full-stack Engineering — wide */}
          <Link
            href={`/services/${services[2].slug}`}
            className="md:col-span-2 md:row-span-1 bg-surface border border-border p-8 rounded-3xl flex flex-col justify-between hover:border-primary/40 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-2xl">{services[2].title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">03</span>
              </div>
              <p className="mt-2 text-sm text-muted max-w-md">{services[2].tagline}</p>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              <div className="h-1 bg-primary/10 rounded-full group-hover:bg-primary transition-colors" />
              <div className="h-1 bg-primary/10 rounded-full group-hover:bg-primary delay-75 transition-colors" />
              <div className="h-1 bg-primary/10 rounded-full group-hover:bg-primary delay-150 transition-colors" />
              <div className="h-1 rounded-full bg-primary-glow" />
            </div>
          </Link>

          {/* Small — nav to another project */}
          <Link
            href="/portfolio"
            className="md:col-span-1 md:row-span-1 bg-surface border border-border p-7 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="absolute top-5 right-5 text-primary">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Case study · 02</span>
            <h3 className="mt-6 font-display font-bold text-lg leading-tight">{projects[1]?.name ?? "Nexus ERP"}</h3>
            <p className="mt-1.5 text-xs text-muted">{projects[1]?.summary ?? "Modernizing legacy supply chains."}</p>
            <div className="mt-4 font-mono text-[11px] text-primary">→ {projects[1]?.metric ?? "3× throughput"}</div>
          </Link>
        </div>

        {/* Client proof strip */}
        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10 md:gap-14 opacity-50 hover:opacity-100 transition-opacity font-display">
            <span className="font-black text-lg tracking-tighter">ALPHA</span>
            <span className="font-black text-lg tracking-tighter italic">Vanguard</span>
            <span className="font-black text-lg tracking-tighter">QUANTUM</span>
            <span className="font-black text-lg tracking-tighter">NORTHWIND</span>
            <span className="font-black text-lg tracking-tighter italic">helios/</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Trusted by 50+ teams · 4 continents
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <Section
        eyebrow="How we work"
        title="Six weeks to production, in six honest steps."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["01", "Discover", "Deep dive into your product, users and constraints. We leave with a spec, not a slide deck."],
            ["02", "Design", "Systems-first UI. Every screen is a state, every state is documented."],
            ["03", "Engineer", "TypeScript, tests, CI. We build like the product must outlive us."],
            ["04", "Instrument", "Analytics, error tracking, dashboards. If it isn't measured, it doesn't exist."],
            ["05", "Ship", "Zero-downtime deploy, feature flags, staged rollouts. Boring is a feature."],
            ["06", "Iterate", "Weekly experiments. Compound improvements. Full-team accountability."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] tracking-[0.2em] text-primary">STEP · {n}</div>
                <span className="w-6 h-6 rounded-full bg-primary/5 grid place-items-center text-[10px] font-mono text-primary">{n}</span>
              </div>
              <h3 className="font-display font-bold text-xl mt-4">{t}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORK PREVIEW */}
      <Section eyebrow="Recent work" title="Products that pay for themselves." intro="A slice of what we've shipped this year for founders, series-B startups and legacy teams.">
        <div className="grid md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((p, i) => (
            <Link key={p.slug} href="/portfolio" className="rounded-2xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors group block">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{p.category}</span>
                <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-2xl mt-6 leading-tight">{p.name}</h3>
              <p className="text-muted text-sm mt-2">{p.summary}</p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div className="font-mono text-xs text-primary">{p.metric}</div>
                <span className="text-primary text-sm transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/portfolio" className="btn-ghost">View full portfolio →</Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl bg-foreground text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-primary-glow/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-primary-glow text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
              Q3 · 2026 booking
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-5 leading-tight">
              Have a product to ship?{" "}
              <span className="text-primary-glow">Let&apos;s draft the spec.</span>
            </h2>
            <p className="text-white/70 mt-4 max-w-lg">
              We&apos;ll respond within one business day with a scoping call and a real
              timeline — not a template.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="px-7 py-3.5 rounded-lg bg-white text-foreground font-semibold hover:bg-primary-glow transition-colors">
                Book a call →
              </Link>
              <Link href="/services" className="px-7 py-3.5 rounded-lg border border-white/20 font-semibold hover:border-white transition-colors">
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOG TEASE */}
      <Section eyebrow="From the journal" title="Signals worth reading.">
        <div className="grid md:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors block">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-primary">{p.category}</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-lg mt-6 leading-snug">{p.title}</h3>
              <p className="text-muted text-sm mt-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
