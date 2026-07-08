import Link from "next/link";
import { PageHeader, Section } from "@/components/section";
import { Hex } from "@/components/hex";
import { posts } from "@/lib/content";

export const metadata = {
  title: "Journal — SEO, AI and engineering essays",
  description: "Essays and field notes on modern software, SEO, AEO/GEO and AI integration from the KSoft Solution team.",
};

export default function Blog() {
  const [feat, ...rest] = posts;
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Field notes from the studio."
        intro="Essays on software craft, SEO, AI integration and everything in between."
      />
      <Section>
        <Link href={`/blog/${feat.slug}`} className="card p-8 md:p-12 block relative overflow-hidden group">
          <div className="absolute -top-16 -right-16 opacity-40 group-hover:opacity-70 transition">
            <Hex size={320} stroke="#2dd4a8" strokeWidth={1} />
          </div>
          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono text-muted">
              <span className="chip">Featured</span>
              <span>{feat.category.toUpperCase()}</span>
              <span>· {feat.readTime}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mt-5 leading-tight">{feat.title}</h2>
            <p className="text-muted mt-3">{feat.excerpt}</p>
            <span className="text-primary-glow mt-6 inline-flex">Read essay →</span>
          </div>
        </Link>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 group flex flex-col">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="text-primary-glow">{p.category.toUpperCase()}</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-display text-lg mt-4 leading-snug">{p.title}</h3>
              <p className="text-muted text-sm mt-2 flex-1">{p.excerpt}</p>
              <div className="mt-5 text-xs font-mono text-muted">{p.date}</div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
