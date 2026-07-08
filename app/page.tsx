import Link from "next/link";
import { Hex, HexCluster, HexGrid } from "@/components/hex";
import { ServiceIcon } from "@/components/icons";
import { services, projects, posts } from "@/lib/content";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
        <HexGrid className="absolute -top-10 -right-10 w-[900px] h-[700px] opacity-40 pointer-events-none" cols={9} rows={7} />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="chip">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                Software · AI · Growth Systems
              </span>
              <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                We engineer <span className="text-gradient">software that ships</span>
                <br /> revenue — not slides.
              </h1>
              <p className="mt-6 text-lg text-muted max-w-xl">
                KSoft Solution is a software development studio building web apps,
                AI systems, mobile products and SEO growth engines out of
                Chhatrapati Sambhaji Nagar for teams worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Start a project →</Link>
                <Link href="/portfolio" className="btn-ghost">See our work</Link>
              </div>
              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  ["120+", "Products shipped"],
                  ["9 yrs", "Compounding craft"],
                  ["24/7", "On-call support"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl text-primary-glow">{v}</dt>
                    <dd className="text-xs font-mono uppercase tracking-widest text-muted mt-1">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-5 h-[520px] hidden lg:block">
              <HexCluster className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* BENTO SERVICES */}
      <Section
        eyebrow="What we do"
        title="A studio built like a product team."
        intro="Design, engineering, AI and growth under one roof. Composable services, one senior team, zero handoffs."
      >
        <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[180px]">
          {/* Featured */}
          <div className="card p-8 col-span-12 md:col-span-8 md:row-span-2 group">
            <div className="flex items-start justify-between h-full">
              <div className="max-w-md">
                <span className="chip">Flagship</span>
                <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                  End-to-end product engineering
                </h3>
                <p className="text-muted mt-3">
                  From zero to production: architecture, design system, engineering,
                  deploy, and iteration. We embed like a co-founder team, not a vendor.
                </p>
                <Link href="/services/web-development" className="mt-6 inline-flex text-primary-glow font-medium">
                  Explore engineering →
                </Link>
              </div>
              <div className="relative w-40 h-40 shrink-0">
                <div className="absolute inset-0 animate-spin-slow">
                  <Hex size={160} stroke="#2dd4a8" strokeWidth={1.2} />
                </div>
                <div className="absolute inset-4 animate-floaty">
                  <Hex size={128} stroke="#73ffb8" strokeWidth={1.5} fill="#0f2620" />
                </div>
                <div className="absolute inset-10 grid place-items-center font-mono text-xs text-primary-glow">
                  {`{ ship }`}
                </div>
              </div>
            </div>
          </div>

          {/* AI */}
          <BentoTile service={services[1]} className="col-span-6 md:col-span-4" />
          {/* SEO */}
          <BentoTile service={services[2]} className="col-span-6 md:col-span-4" />

          {/* Mobile */}
          <BentoTile service={services[3]} className="col-span-6 md:col-span-3" />
          {/* UX */}
          <BentoTile service={services[4]} className="col-span-6 md:col-span-3" />
          {/* Growth wide */}
          <div className="card p-6 col-span-12 md:col-span-6 group flex items-center gap-6">
            <div className="relative w-24 h-24 shrink-0">
              <Hex size={96} stroke="#2dd4a8" strokeWidth={1.3} fill="#0f2620" />
              <span className="absolute inset-0 grid place-items-center text-primary-glow">
                <ServiceIcon name={services[5].icon} className="w-8 h-8" />
              </span>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-primary-glow">05 · Growth</div>
              <h3 className="font-display text-xl mt-1">{services[5].title}</h3>
              <p className="text-sm text-muted mt-1">{services[5].tagline}</p>
              <Link href={`/services/${services[5].slug}`} className="text-primary-glow text-sm mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        eyebrow="How we work"
        title="Six weeks to production, in six honest steps."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ["01", "Discover", "Deep dive into your product, users and constraints. We leave with a spec, not a slide deck."],
            ["02", "Design", "Systems-first UI. Every screen is a state, every state is documented."],
            ["03", "Engineer", "TypeScript, tests, CI. We build like the product must outlive us."],
            ["04", "Instrument", "Analytics, error tracking, dashboards. If it isn't measured, it doesn't exist."],
            ["05", "Ship", "Zero-downtime deploy, feature flags, staged rollouts. Boring is a feature."],
            ["06", "Iterate", "Weekly experiments. Compound improvements. Full-team accountability."],
          ].map(([n, t, d]) => (
            <div key={n} className="card p-6 relative">
              <div className="absolute top-4 right-4 opacity-40">
                <Hex size={44} stroke="#2dd4a8" strokeWidth={1} />
              </div>
              <div className="font-mono text-xs text-primary tracking-widest">{n}</div>
              <h3 className="font-display text-xl mt-3">{t}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORK PREVIEW */}
      <Section eyebrow="Recent work" title="Products that pay for themselves." intro="A slice of what we've shipped this year for founders, series-B startups and legacy teams.">
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} href="/portfolio" className={`card p-6 bg-gradient-to-br ${p.tint} block`}>
              <div className="flex items-center justify-between">
                <span className="chip">{p.category}</span>
                <Hex size={28} stroke="#73ffb8" strokeWidth={1} />
              </div>
              <h3 className="font-display text-2xl mt-6">{p.name}</h3>
              <p className="text-muted text-sm mt-2">{p.summary}</p>
              <div className="mt-6 font-mono text-xs text-primary-glow">→ {p.metric}</div>
            </Link>
          ))}
        </div>
        <div className="mt-10"><Link href="/portfolio" className="btn-ghost">View full portfolio →</Link></div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 opacity-40">
            <Hex size={320} stroke="#2dd4a8" strokeWidth={1} />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-30">
            <Hex size={220} stroke="#73ffb8" strokeWidth={1} />
          </div>
          <div className="relative max-w-2xl">
            <span className="chip">Q3 · 2026 booking</span>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">
              Have a product to ship? <span className="text-gradient">Let&apos;s draft the spec.</span>
            </h2>
            <p className="text-muted mt-4">
              We&apos;ll respond within one business day with a scoping call and a real
              timeline — not a template.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn-primary">Book a call →</Link>
              <Link href="/services" className="btn-ghost">Browse services</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOG TEASE */}
      <Section eyebrow="From the journal" title="Signals worth reading.">
        <div className="grid md:grid-cols-3 gap-5">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 block">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>{p.category.toUpperCase()}</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-display text-lg mt-4 leading-snug">{p.title}</h3>
              <p className="text-muted text-sm mt-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function BentoTile({ service, className = "" }: { service: (typeof services)[number]; className?: string }) {
  return (
    <Link href={`/services/${service.slug}`} className={`card p-6 group relative overflow-hidden ${className}`}>
      <div className="absolute -right-6 -bottom-6 opacity-40 group-hover:opacity-80 transition">
        <Hex size={140} stroke="#2dd4a8" strokeWidth={1} />
      </div>
      <div className="relative">
        <div className="w-11 h-11 grid place-items-center rounded-xl bg-primary/10 text-primary-glow border border-border">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="font-display text-lg mt-4">{service.title}</h3>
        <p className="text-xs text-muted mt-1">{service.tagline}</p>
      </div>
    </Link>
  );
}
