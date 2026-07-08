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
    <section className={`max-w-7xl mx-auto px-6 py-24 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className="max-w-3xl mb-14">
          {eyebrow && <span className="chip mb-5">{eyebrow}</span>}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
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
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl bg-primary/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
        <span className="chip">{eyebrow}</span>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl">
          {title}
        </h1>
        {intro && <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl">{intro}</p>}
      </div>
    </section>
  );
}
