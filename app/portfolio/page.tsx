import { PageHeader, Section } from "@/components/section";
import { Hex } from "@/components/hex";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Portfolio — Products we've shipped",
  description: "Selected work: SaaS platforms, AI systems, mobile apps and growth engines by KSoft Solution.",
};

const spanClass = { sm: "md:col-span-4", md: "md:col-span-6", lg: "md:col-span-8" };

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="A working ledger of shipped products."
        intro="Every project below is in production, serving real users, generating real revenue."
      />
      <Section>
        <div className="grid grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <article key={p.slug} className={`card p-8 col-span-12 ${spanClass[p.span]} bg-gradient-to-br ${p.tint} relative overflow-hidden group min-h-[280px] flex flex-col justify-between`}>
              <div className="absolute -top-8 -right-8 opacity-30 group-hover:opacity-60 transition">
                <Hex size={p.span === "lg" ? 200 : 140} stroke="#0f7a5f" strokeWidth={1} />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="chip">{p.category}</span>
                  <span className="font-mono text-xs text-muted">#{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-3xl mt-6">{p.name}</h3>
                <p className="text-muted mt-2 max-w-md">{p.summary}</p>
              </div>
              <div className="relative mt-6 flex items-center gap-2 text-primary-glow font-mono text-sm">
                <span className="w-2 h-2 rotate-45 bg-primary" />
                {p.metric}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
