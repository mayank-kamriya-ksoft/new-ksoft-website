import { PageHeader, Section } from "@/components/section";
import Link from "next/link";

export const metadata = {
  title: "About — Engineering studio out of Chhatrapati Sambhaji Nagar",
  description:
    "KSoft Solution is a nine-person software studio building web apps, AI and growth systems for founders and growing businesses.",
};

const principles = [
  ["01", "Systems over sprints", "We build design systems, deploy pipelines and observability from day one — because velocity compounds off infrastructure, not heroics."],
  ["02", "Senior everything", "No juniors on your account. Every engineer, designer and strategist has shipped production software for years."],
  ["03", "Own the outcome", "We're not paid for hours. We're paid for products that ship, rank, convert and retain."],
  ["04", "Boring on purpose", "TypeScript, tests, feature flags, staged rollouts. The bleeding edge is where projects go to die."],
];

const team = [
  ["Aarav K.", "Founder · Full-stack", "Ex-lead on two acquired SaaS products."],
  ["Neha D.", "Design lead", "10 yrs shipping consumer + B2B interfaces."],
  ["Rohan V.", "AI engineer", "RAG, agents, evals. Ex-ML research."],
  ["Priya S.", "SEO lead", "Programmatic SEO, GEO / AEO systems."],
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title="A studio, not an agency."
        intro="Nine senior operators. One shared standard. We take a small number of projects a year and go deep on them — because that's the only way great software gets built."
        meta="Est. 2017 · Chhatrapati Sambhaji Nagar · 4 continents"
      />

      <Section eyebrow="principles" title="What we optimise for.">
        <div className="grid md:grid-cols-2 gap-4">
          {principles.map(([n, t, d]) => (
            <div key={t} className="rounded-3xl bg-surface border border-border p-8 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] tracking-[0.2em] text-primary">PRINCIPLE · {n}</div>
                <span className="w-7 h-7 rounded-full bg-primary/5 grid place-items-center text-[10px] font-mono text-primary">{n}</span>
              </div>
              <h3 className="mt-5 font-display font-bold text-2xl">{t}</h3>
              <p className="mt-3 text-muted leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="team" title="The people you'll actually work with.">
        <div className="grid md:grid-cols-4 gap-4">
          {team.map(([n, r, b]) => (
            <div key={n} className="rounded-3xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display font-bold text-2xl text-white">
                {n[0]}
              </div>
              <div className="mt-5">
                <div className="font-display font-bold text-lg">{n}</div>
                <div className="text-[10px] font-mono text-primary tracking-widest mt-1 uppercase">{r}</div>
                <p className="text-sm text-muted mt-3">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-foreground text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-primary-glow/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Ready to work <span className="text-primary-glow">together?</span>
            </h2>
            <p className="text-white/70 mt-4">We take a small number of engagements each quarter. Let&apos;s talk.</p>
            <Link href="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-lg bg-white text-foreground font-semibold hover:bg-primary-glow transition-colors">
              Start a project →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
