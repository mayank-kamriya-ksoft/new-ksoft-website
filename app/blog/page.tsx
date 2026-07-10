import Link from "next/link";
import { PageHeader, Section } from "@/components/section";
import { posts } from "@/lib/content";

export const metadata = {
  title: "Journal — SEO, AI & Engineering Essays from KSoft Solution",
  description: "Essays and field notes on modern software, SEO, AEO/GEO and AI integration from the KSoft Solution team in Chhatrapati Sambhaji Nagar.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "KSoft Solution Journal",
    description: "Essays on software craft, SEO, AEO/GEO and AI integration.",
    url: "/blog",
    type: "website",
  },
};

export default function Blog() {
  const [feat, ...rest] = posts;
  return (
    <>
      <PageHeader
        eyebrow="Journal · field notes"
        title="Field notes from the studio."
        intro="Essays on software craft, SEO, AI integration and everything in between."
        meta={`${posts.length} essays · updated weekly`}
      />
      <Section>
        {/* Featured */}
        <Link
          href={`/blog/${feat.slug}`}
          className="rounded-3xl bg-foreground text-white p-10 md:p-14 block relative overflow-hidden group hover:shadow-2xl transition-shadow"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent" />
          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest">
              <span className="px-2.5 py-1 rounded-full bg-primary-glow/15 border border-primary-glow/30 text-primary-glow">Featured</span>
              <span className="text-white/60">{feat.category}</span>
              <span className="text-white/40">· {feat.readTime}</span>
            </div>
            <h2 className="mt-6 font-display font-bold text-3xl md:text-5xl leading-tight">{feat.title}</h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl">{feat.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-primary-glow font-mono text-sm">
              Read essay
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-3xl bg-surface border border-border p-6 group flex flex-col hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                <span className="text-primary">{p.category}</span>
                <span className="text-muted">{p.readTime}</span>
              </div>
              <h3 className="mt-5 font-display font-bold text-lg leading-snug">{p.title}</h3>
              <p className="mt-2 text-muted text-sm flex-1">{p.excerpt}</p>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted">{p.date}</span>
                <span className="text-primary text-sm transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
