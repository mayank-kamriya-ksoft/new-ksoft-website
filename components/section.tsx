import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-24 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              // {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {intro && <p className="mt-5 text-lg text-muted leading-relaxed">{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  meta?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color-mix(in_oklab,var(--primary)_6%,transparent)] border border-[color-mix(in_oklab,var(--primary)_18%,transparent)] text-primary text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-glow" />
          </span>
          {eyebrow}
        </span>
        <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl text-foreground">
          {title}
        </h1>
        {intro && <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">{intro}</p>}
        {meta && <div className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted">{meta}</div>}
      </div>
    </section>
  );
}
