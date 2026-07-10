import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/content";
import { ServiceIcon } from "@/components/icons";
import { Section } from "@/components/section";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type SeoBundle = {
  title: string;
  description: string;
  h1?: string;
  faqs: { q: string; a: string }[];
};

const SEO: Record<string, SeoBundle> = {
  "web-development": {
    title: "Web Development Company in Chhatrapati Sambhaji Nagar | React & Next.js | KSoft",
    description:
      "Custom React & Next.js web development in Chhatrapati Sambhaji Nagar (Aurangabad). 90+ PageSpeed scores, built-in SEO, production-grade delivery. Get a free quote.",
    h1: "Web Development Company in Chhatrapati Sambhaji Nagar",
    faqs: [
      { q: "How much does a website cost in Chhatrapati Sambhaji Nagar?", a: "Marketing websites typically range from ₹25,000 to ₹1.5L, while custom web apps and SaaS platforms start around ₹3L and scale with scope. We share a fixed-scope quote after a 30-minute discovery call." },
      { q: "How long does web development take?", a: "A 5–8 page marketing site ships in 3–5 weeks. A custom web application typically takes 8–14 weeks from kickoff to production, delivered in weekly review cycles." },
      { q: "Do you use WordPress or custom development?", a: "We build on Next.js + TypeScript for performance, SEO, and long-term maintainability. WordPress is offered only for content-heavy sites where a CMS is a hard requirement." },
      { q: "Will my website rank on Google?", a: "Every site we ship includes technical SEO (schema, sitemaps, Core Web Vitals, semantic HTML) so it is ready to rank. Ongoing SEO retainers are available if you need active content and link work." },
    ],
  },
  seo: {
    title: "SEO Services in Chhatrapati Sambhaji Nagar | Rank #1 on Google | KSoft Solution",
    description:
      "Data-driven SEO for Chhatrapati Sambhaji Nagar (Aurangabad) businesses. Technical SEO, local SEO, AEO and GEO for AI-search visibility. Free SEO audit.",
    h1: "SEO Services in Chhatrapati Sambhaji Nagar",
    faqs: [
      { q: "How much does SEO cost in Chhatrapati Sambhaji Nagar?", a: "Local SEO retainers start at ₹25,000/month and scale with the size of the site and the competitiveness of the keywords. National and e-commerce campaigns typically start at ₹60,000/month." },
      { q: "How long does SEO take to show results?", a: "Expect meaningful movement in Google Search Console impressions within 6–8 weeks, first-page rankings for long-tail keywords in 3–4 months, and compounding traffic growth from month 6 onwards." },
      { q: "What is GEO (Generative Engine Optimization)?", a: "GEO is the practice of optimizing content, schema and entity signals so ChatGPT, Perplexity, Google AI Overviews and Gemini cite your brand as an answer. Every retainer we run in 2026 includes GEO work." },
      { q: "Do you guarantee #1 rankings?", a: "No credible SEO agency guarantees rankings because Google's algorithm is not deterministic. We guarantee an evidence-based process, monthly reporting, and clear leading indicators." },
    ],
  },
  "ai-integration": {
    title: "AI Chatbots & Automation for Businesses in Chhatrapati Sambhaji Nagar | KSoft",
    description:
      "Custom AI agents, RAG chatbots and workflow automation for Marathwada businesses. GPT and Claude integrations with evals, guardrails and cost controls.",
    h1: "AI Integration & Automation",
    faqs: [
      { q: "What can AI actually do for my small business?", a: "The three highest-ROI patterns are: support automation using RAG on your own docs, sales enablement that drafts personalized outreach, and ops copilots that summarize, categorize and route work." },
      { q: "Which AI models do you work with?", a: "We build on OpenAI GPT, Anthropic Claude, and open-source Llama models depending on latency, cost, and privacy requirements. We handle vector storage (pgvector, Pinecone) and orchestration." },
      { q: "How do you control hallucinations and cost?", a: "Every deployment ships with an eval harness, guardrails, prompt versioning, and per-request cost telemetry. You get a dashboard, not a black box." },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development in Chhatrapati Sambhaji Nagar | React Native & Flutter | KSoft",
    description:
      "Cross-platform iOS & Android apps built in Chhatrapati Sambhaji Nagar. React Native and native modules, offline-first, App Store and Play Store launch.",
    h1: "Mobile App Development",
    faqs: [
      { q: "React Native or native — which should I choose?", a: "For 90% of business apps, React Native ships faster with a single codebase and near-native performance. We use native modules for camera, BLE, or heavy graphics where it matters." },
      { q: "How long does a mobile app take to build?", a: "An MVP with authentication, a few core screens and one backend integration ships in 6–10 weeks. Production apps with payments, offline sync and native modules typically run 12–20 weeks." },
      { q: "Do you handle App Store submission?", a: "Yes — we own the App Store and Play Store listing setup, screenshots, privacy declarations, and OTA update pipeline through EAS." },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design Services in Chhatrapati Sambhaji Nagar | Figma Experts | KSoft",
    description:
      "User-research-backed UI and UX design for web and mobile from Chhatrapati Sambhaji Nagar. Design systems, prototypes and dev-ready specs in Figma.",
    h1: "UI / UX Design Services",
    faqs: [
      { q: "Do you offer design without development?", a: "Yes. Design-only engagements are available for teams that already have in-house engineering. We deliver a Figma design system and dev-ready specs." },
      { q: "What does a UX process look like?", a: "Discovery interviews, user flows, low-fi wireframes, high-fi UI, prototype testing and a design system handoff — typically 4–8 weeks depending on scope." },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing Agency in Chhatrapati Sambhaji Nagar | Google & Meta Ads | KSoft",
    description:
      "Performance digital marketing for Chhatrapati Sambhaji Nagar businesses. Google Ads, Meta Ads, lifecycle email and attribution dashboards.",
    h1: "Digital Marketing Agency in Chhatrapati Sambhaji Nagar",
    faqs: [
      { q: "What is the minimum ad budget you work with?", a: "We work with monthly ad budgets from ₹50,000. Below that, organic SEO and content typically outperforms paid on ROI." },
      { q: "Do you handle creative production?", a: "Yes — static ads, motion, and short-form video are produced in-house so tests can iterate in days, not weeks." },
    ],
  },
  "wordpress-maintenance": {
    title: "WordPress Maintenance Services in Chhatrapati Sambhaji Nagar | KSoft Solution",
    description:
      "Monthly WordPress maintenance: security patching, off-site backups, uptime monitoring, and performance tuning for Chhatrapati Sambhaji Nagar businesses.",
    h1: "WordPress Maintenance & Support",
    faqs: [
      { q: "How often do you update plugins and core?", a: "Weekly, on a staging environment first. If a plugin update breaks the site, we roll back before touching production." },
      { q: "What happens if my site gets hacked?", a: "Emergency malware removal, restoration from the last clean backup, and a hardening pass are included in every retainer." },
    ],
  },
  "local-citations": {
    title: "Local Citations & Google Business Profile Services in Chhatrapati Sambhaji Nagar | KSoft",
    description:
      "Local SEO citation building, NAP consistency and Google Business Profile optimization for Chhatrapati Sambhaji Nagar businesses that want to rank in the Map Pack.",
    h1: "Local Citations & GBP Optimization",
    faqs: [
      { q: "What is NAP consistency and why does it matter?", a: "NAP is Name, Address, Phone. When these match exactly across your website, GBP, and 50+ directories, Google trusts your local listing and rewards it with higher Map Pack rankings." },
      { q: "How many citations do I actually need?", a: "For most Chhatrapati Sambhaji Nagar service businesses, 40–60 high-quality, industry-relevant citations outperform 200 generic ones. We focus on directory quality, not volume." },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  const seo = SEO[slug];
  const title = seo?.title ?? `${s.title} — ${s.tagline}`;
  const description = seo?.description ?? s.summary;
  const url = `/services/${slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const seo = SEO[slug];
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);
  const canonical = `https://www.ksoftsolution.com/services/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: seo?.h1 ?? s.title,
    serviceType: s.title,
    description: seo?.description ?? s.summary,
    provider: { "@id": "https://www.ksoftsolution.com/#organization" },
    areaServed: [
      { "@type": "City", name: "Chhatrapati Sambhaji Nagar" },
      { "@type": "City", name: "Aurangabad" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
    ],
    url: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksoftsolution.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ksoftsolution.com/services" },
      { "@type": "ListItem", position: 3, name: s.title, item: canonical },
    ],
  };

  const faqSchema = seo?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative animate-fade-up">
          <Link href="/services" className="text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors">← All services</Link>
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 min-w-0">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color-mix(in_oklab,var(--primary)_6%,transparent)] border border-[color-mix(in_oklab,var(--primary)_18%,transparent)] text-primary text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
                Service · 0{services.findIndex((x) => x.slug === s.slug) + 1}
              </span>
              <h1 className="mt-6 font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight break-words">{seo?.h1 ?? s.title}</h1>
              <p className="mt-6 text-xl text-muted max-w-2xl leading-relaxed">{s.tagline}</p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-white shadow-lg shadow-primary/20">
                <ServiceIcon name={s.icon} className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 prose-mint">
            <h2>What we do</h2>
            <p>{s.summary}</p>
            <h3>What&apos;s included</h3>
            <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <h3>Deliverables</h3>
            <ul>{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <aside className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl bg-surface border border-border p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">// typical stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg border border-border bg-surface-2 text-xs font-mono text-foreground/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-surface border border-border p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">// engagement</div>
              <ul className="mt-4 space-y-3 text-sm">
                <Row k="Timeline" v="4–12 weeks" />
                <Row k="Team" v="2–4 senior specialists" />
                <Row k="Pricing" v="Fixed-scope or retainer" />
              </ul>
            </div>
            <Link href="/contact" className="w-full inline-flex justify-center px-7 py-3.5 rounded-lg bg-foreground text-white font-semibold hover:bg-primary transition-colors">
              Start a project →
            </Link>
          </aside>
        </div>
      </Section>

      {seo?.faqs?.length ? (
        <Section eyebrow="faq" title="Frequently asked questions">
          <div className="grid gap-3">
            {seo.faqs.map((f, i) => (
              <article key={f.q} className="rounded-2xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[11px] text-primary mt-1 tracking-widest">Q{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display font-bold text-lg leading-snug">{f.q}</h3>
                    <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      <Section eyebrow="related" title="Pairs well with">
        <div className="grid md:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-3xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors group block">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ServiceIcon name={o.icon} />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{o.title}</h3>
              <p className="mt-1 text-muted text-sm">{o.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="text-muted text-xs font-mono uppercase tracking-widest">{k}</span>
      <span className="text-foreground font-medium">{v}</span>
    </li>
  );
}
