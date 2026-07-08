import { PageHeader, Section } from "@/components/section";
import { Hex } from "@/components/hex";
import Link from "next/link";

export const metadata = {
  title: "About — Engineering studio out of Chhatrapati Sambhaji Nagar",
  description:
    "KSoft Solution is a nine-person software studio building web apps, AI and growth systems for founders and growing businesses.",
};

const principles = [
  ["Systems over sprints", "We build design systems, deploy pipelines and observability from day one — because velocity compounds off infrastructure, not heroics."],
  ["Senior everything", "No juniors on your account. Every engineer, designer and strategist has shipped production software for years."],
  ["Own the outcome", "We're not paid for hours. We're paid for products that ship, rank, convert and retain."],
  ["Boring on purpose", "TypeScript, tests, feature flags, staged rollouts. The bleeding edge is where projects go to die."],
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
        eyebrow="About"
        title="A studio, not an agency."
        intro="Nine senior operators. One shared standard. We take a small number of projects a year and go deep on them — because that's the only way great software gets built."
      />

      <Section eyebrow="Principles" title="What we optimise for.">
        <div className="grid md:grid-cols-2 gap-5">
          {principles.map(([t, d]) => (
            <div key={t} className="card p-8 relative">
              <div className="absolute top-6 right-6 opacity-30"><Hex size={40} stroke="#0f7a5f" strokeWidth={1} /></div>
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="text-muted mt-3 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Team" title="The people you'll actually work with.">
        <div className="grid md:grid-cols-4 gap-5">
          {team.map(([n, r, b]) => (
            <div key={n} className="card p-6">
              <div className="relative w-20 h-20 mx-auto">
                <Hex size={80} stroke="#0f7a5f" strokeWidth={1.2} fill="#ffffff" />
                <span className="absolute inset-0 grid place-items-center font-display text-2xl text-primary-glow">
                  {n[0]}
                </span>
              </div>
              <div className="text-center mt-5">
                <div className="font-display text-lg">{n}</div>
                <div className="text-xs font-mono text-primary tracking-widest mt-1 uppercase">{r}</div>
                <p className="text-sm text-muted mt-3">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-20" />
          <h2 className="font-display text-4xl">Ready to work together?</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">We take a small number of engagements each quarter. Let&apos;s talk.</p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">Start a project →</Link>
        </div>
      </Section>
    </>
  );
}
