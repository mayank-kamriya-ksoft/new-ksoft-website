import Link from "next/link";
import { PageHeader, Section } from "@/components/section";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Portfolio — Products we've shipped",
  description: "Selected work: SaaS platforms, AI systems, mobile apps and growth engines by KSoft Solution.",
};

const spanClass: Record<string, string> = {
  sm: "md:col-span-4",
  md: "md:col-span-6",
  lg: "md:col-span-8",
};

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio · in production"
        title="A working ledger of shipped products."
        intro="Every project below is in production, serving real users, generating real revenue."
        meta="120+ products shipped · 9 years of compounding craft"
      />
      <Section>
        <div className="grid grid-cols-12 gap-4">
          {projects.map((p, i) => {
            const isDark = i % 5 === 0;
            return (
              <article
                key={p.slug}
                className={`col-span-12 ${spanClass[p.span] ?? "md:col-span-6"} rounded-3xl p-8 border transition-colors relative overflow-hidden group min-h-[280px] flex flex-col justify-between ${
                  isDark
                    ? "bg-foreground text-white border-transparent hover:border-primary-glow/40"
                    : "bg-surface border-border hover:border-primary/40"
                }`}
              >
                {isDark && (
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${isDark ? "text-primary-glow" : "text-primary"}`}>
                      {p.category}
                    </span>
                    <span className={`font-mono text-[10px] ${isDark ? "text-white/40" : "text-muted"}`}>
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display font-bold text-3xl leading-tight">{p.name}</h3>
                  <p className={`mt-2 max-w-md text-sm ${isDark ? "text-white/70" : "text-muted"}`}>{p.summary}</p>
                </div>
                <div className={`relative mt-6 pt-5 border-t flex items-center justify-between ${isDark ? "border-white/10" : "border-border"}`}>
                  <span className={`font-mono text-xs ${isDark ? "text-primary-glow" : "text-primary"}`}>→ {p.metric}</span>
                  <span className={`text-xs font-mono ${isDark ? "text-white/40" : "text-muted"}`}>Case study</span>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
