import Link from "next/link";
import { PageHeader, Section } from "@/components/section";
import { Hex } from "@/components/hex";
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
        eyebrow="Services"
        title="Composable services. One senior team."
        intro="Eight practice areas. Mix and match, or hand us the whole product — either way, no handoffs, no juniors, no surprises."
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card p-8 group relative overflow-hidden flex flex-col">
              <div className="absolute -right-8 -bottom-8 opacity-30 group-hover:opacity-60 transition">
                <Hex size={160} stroke="#0a7cff" strokeWidth={1} />
              </div>
              <div className="relative flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary/10 text-primary-glow border border-border">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl mt-6">{s.title}</h3>
                <p className="text-muted text-sm mt-2">{s.tagline}</p>
              </div>
              <div className="relative mt-8 text-primary-glow font-mono text-sm">Explore →</div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
