import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/content";
import { Hex } from "@/components/hex";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="absolute -top-24 -right-24 opacity-30">
          <Hex size={400} stroke="#0a7cff" strokeWidth={1} />
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 relative">
          <Link href="/blog" className="text-sm font-mono text-muted hover:text-primary-glow">← Journal</Link>
          <div className="mt-6 flex items-center gap-3 text-xs font-mono text-muted">
            <span className="chip">{post.category}</span>
            <span>{post.date} · {post.readTime}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">{post.title}</h1>
          <p className="mt-6 text-lg text-muted">{post.excerpt}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-16 prose-mint">
        {post.body.map((p, i) => <p key={i}>{p}</p>)}
        <h2>Why this matters</h2>
        <p>Every essay here is grounded in work we&apos;ve done for real clients. If the piece resonates, we&apos;re probably a fit — <Link href="/contact">let&apos;s talk</Link>.</p>
      </article>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-xs font-mono uppercase tracking-widest text-primary-glow mb-5">Keep reading</div>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 block">
              <div className="text-xs font-mono text-muted">{p.category.toUpperCase()} · {p.readTime}</div>
              <h3 className="font-display text-lg mt-3 leading-snug">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
