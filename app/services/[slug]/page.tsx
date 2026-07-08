import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/content";
import { ServiceIcon } from "@/components/icons";
import { Hex } from "@/components/hex";
import { Section } from "@/components/section";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — ${s.tagline}`,
    description: s.summary,
    openGraph: { title: s.title, description: s.summary },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="absolute -top-24 -right-24 animate-spin-slow opacity-30">
          <Hex size={480} stroke="#2dd4a8" strokeWidth={1} />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <Link href="/services" className="text-sm font-mono text-muted hover:text-primary-glow">← All services</Link>
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="chip">Service</span>
              <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">{s.title}</h1>
              <p className="mt-5 text-xl text-muted max-w-2xl">{s.tagline}</p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="relative w-40 h-40">
                <Hex size={160} stroke="#2dd4a8" strokeWidth={1.4} fill="#0f2620" />
                <div className="absolute inset-0 grid place-items-center text-primary-glow">
                  <ServiceIcon name={s.icon} className="w-14 h-14" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 prose-mint">
            <h2>What we do</h2>
            <p>{s.summary}</p>
            <h3>What&apos;s included</h3>
            <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <h3>Deliverables</h3>
            <ul>{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <aside className="lg:col-span-5 space-y-5">
            <div className="card p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-primary-glow">Typical stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 bg-background/60">{t}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-primary-glow">Engagement</div>
              <ul className="mt-4 space-y-3 text-sm">
                <Row k="Timeline" v="4–12 weeks" />
                <Row k="Team" v="2–4 senior specialists" />
                <Row k="Pricing" v="Fixed-scope or retainer" />
              </ul>
            </div>
            <Link href="/contact" className="btn-primary w-full justify-center">Start a project →</Link>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Related" title="Pairs well with">
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="card p-6 block">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-primary/10 text-primary-glow border border-border">
                <ServiceIcon name={o.icon} />
              </div>
              <h3 className="font-display text-lg mt-4">{o.title}</h3>
              <p className="text-muted text-sm mt-1">{o.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-center justify-between border-b border-border/60 pb-2">
      <span className="text-muted">{k}</span>
      <span className="text-foreground">{v}</span>
    </li>
  );
}
