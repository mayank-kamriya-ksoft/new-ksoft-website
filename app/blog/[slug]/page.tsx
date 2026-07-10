import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);
  const canonical = `https://www.ksoftsolution.com/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonical}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "KSoft Solution" },
    publisher: { "@id": "https://www.ksoftsolution.com/#organization" },
    mainEntityOfPage: canonical,
    articleSection: post.category,
    inLanguage: "en",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksoftsolution.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ksoftsolution.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 relative animate-fade-up">
          <Link href="/blog" className="text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors">← Journal</Link>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest">
            <span className="px-2.5 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary">{post.category}</span>
            <span className="text-muted">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="mt-6 font-display font-bold text-4xl md:text-6xl leading-[1.02] tracking-tight">{post.title}</h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-16 prose-mint">
        {post.body.map((p, i) => <p key={i}>{p}</p>)}
        <h2>Why this matters</h2>
        <p>Every essay here is grounded in work we&apos;ve done for real clients. If the piece resonates, we&apos;re probably a fit — <Link href="/contact">let&apos;s talk</Link>.</p>
      </article>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-6">// keep reading</div>
        <div className="grid md:grid-cols-3 gap-4">
          {others.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-3xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors group block">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted"><span className="text-primary">{p.category}</span> · {p.readTime}</div>
              <h3 className="mt-4 font-display font-bold text-lg leading-snug">{p.title}</h3>
              <span className="mt-4 inline-flex text-primary text-sm transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
