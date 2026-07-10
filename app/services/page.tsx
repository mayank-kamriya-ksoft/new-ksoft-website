import Link from "next/link";
import { PageHeader, Section } from "@/components/section";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services — Software, AI, SEO and growth",
  description: "Full-service software engineering: web development, AI integration, mobile apps, SEO, UX and digital marketing.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Services · composable practice"
        title="Composable services. One senior team."
        intro="Eight practice areas. Mix and match, or hand us the whole product — either way, no handoffs, no juniors, no surprises."
        meta={`${services.length} practice areas · zero-handoff pod`}
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const isFeatured = i === 0;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`rounded-3xl p-8 group relative overflow-hidden flex flex-col border transition-colors ${
                  isFeatured
                    ? "bg-foreground text-white border-transparent md:col-span-2 lg:col-span-1 hover:border-primary-glow/40"
                    : "bg-surface border-border hover:border-primary/40"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
                )}
                <div className="relative flex-1">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 grid place-items-center rounded-xl transition-colors ${
                        isFeatured
                          ? "bg-white/10 text-primary-glow"
                          : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <ServiceIcon name={s.icon} />
                    </div>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${isFeatured ? "text-white/40" : "text-muted"}`}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display font-bold text-2xl leading-tight">{s.title}</h3>
                  <p className={`mt-2 text-sm ${isFeatured ? "text-white/70" : "text-muted"}`}>{s.tagline}</p>
                </div>
                <div className={`relative mt-8 pt-5 border-t flex items-center justify-between ${isFeatured ? "border-white/10" : "border-border"}`}>
                  <span className={`font-mono text-xs ${isFeatured ? "text-primary-glow" : "text-primary"}`}>Explore</span>
                  <span className={`text-sm transition-transform group-hover:translate-x-1 ${isFeatured ? "text-primary-glow" : "text-primary"}`}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
