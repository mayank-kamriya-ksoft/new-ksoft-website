export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  deliverables: string[];
  stack: string[];
  icon: "code" | "ai" | "seo" | "mobile" | "ux" | "growth" | "wp" | "map";
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, typed, production-grade web apps.",
    summary:
      "We ship high-performance web apps built on modern React frameworks. From marketing sites that convert to complex SaaS dashboards, we own architecture, DX, and delivery.",
    bullets: [
      "Next.js, TypeScript, edge-first architecture",
      "Design systems + component libraries",
      "CI/CD, testing and observability from day one",
    ],
    deliverables: ["Design system", "Frontend + API", "Deploy pipeline", "Handover docs"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "tRPC"],
    icon: "code",
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    tagline: "LLMs and agents that ship revenue.",
    summary:
      "We embed language models, RAG pipelines and autonomous agents into your product with guardrails, evals and cost controls — not demos, production.",
    bullets: [
      "Retrieval augmented generation (RAG)",
      "Agent workflows, function calling, tool use",
      "Evals, red-teaming and cost monitoring",
    ],
    deliverables: ["Model architecture", "Vector store", "Agent runtime", "Eval harness"],
    stack: ["OpenAI", "Anthropic", "pgvector", "LangGraph", "Vercel AI"],
    icon: "ai",
  },
  {
    slug: "seo",
    title: "SEO & GEO",
    tagline: "Ranking systems for search + generative engines.",
    summary:
      "Technical SEO, content architecture and AI-search optimization (AEO/GEO) so you get found by both Google and ChatGPT.",
    bullets: [
      "Technical audits + Core Web Vitals",
      "Content architecture + topical maps",
      "AEO / GEO / LLM visibility programs",
    ],
    deliverables: ["Audit", "Roadmap", "On-page", "Reporting"],
    stack: ["Ahrefs", "Screaming Frog", "GSC", "Schema.org", "Perplexity Labs"],
    icon: "seo",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    tagline: "iOS + Android, one codebase, native feel.",
    summary:
      "React Native and native modules for products that need to live in your customer's pocket — offline-first, animated, App Store ready.",
    bullets: [
      "React Native + Expo",
      "Native modules where it matters",
      "App Store + Play Store launch",
    ],
    deliverables: ["Design", "App", "Store listing", "OTA update pipeline"],
    stack: ["React Native", "Expo", "Reanimated", "Sentry", "EAS"],
    icon: "mobile",
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    tagline: "Interfaces engineered for clarity.",
    summary:
      "Product design that respects your users' time — grounded in research, driven by systems, delivered as code-ready specs.",
    bullets: [
      "Product discovery + user research",
      "Design systems in Figma",
      "Motion + micro-interactions",
    ],
    deliverables: ["Research", "Prototype", "Design system", "Dev handoff"],
    stack: ["Figma", "Framer", "Rive", "Storybook"],
    icon: "ux",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Growth systems, not ad spend roulette.",
    summary:
      "Full-funnel programs: paid, organic, lifecycle. Instrumented with dashboards so you know exactly what's compounding.",
    bullets: [
      "Paid media across Google + Meta",
      "Lifecycle email + retention",
      "Attribution + growth dashboards",
    ],
    deliverables: ["Strategy", "Creative", "Campaigns", "Analytics"],
    stack: ["GA4", "Google Ads", "Meta Ads", "Klaviyo", "Segment"],
    icon: "growth",
  },
  {
    slug: "wordpress-maintenance",
    title: "WordPress Maintenance",
    tagline: "Uptime, security and speed — handled.",
    summary:
      "Monthly maintenance for WordPress sites: security patches, backups, uptime monitoring and performance tuning.",
    bullets: [
      "Weekly plugin + core updates",
      "Daily off-site backups",
      "Performance + uptime monitoring",
    ],
    deliverables: ["Backups", "Updates", "Security", "Monthly report"],
    stack: ["WordPress", "Cloudflare", "WP Rocket", "Wordfence"],
    icon: "wp",
  },
  {
    slug: "local-citations",
    title: "Local Citations",
    tagline: "Local SEO signals that actually rank.",
    summary:
      "Google Business Profile, NAP consistency and citation building across directories to dominate local pack results.",
    bullets: [
      "Google Business Profile optimization",
      "NAP consistency across 50+ directories",
      "Review generation + response systems",
    ],
    deliverables: ["GBP setup", "Citations", "Reviews", "Local audit"],
    stack: ["GBP", "BrightLocal", "Whitespark", "Schema"],
    icon: "map",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
};

const D = (m: number, d: number) => `2026-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

export const posts: Post[] = [
  {
    slug: "best-web-development-company-chhatrapati-sambhaji-nagar-2025",
    title: "Choosing a Web Development Partner in Chhatrapati Sambhaji Nagar (2025)",
    excerpt:
      "A field guide to selecting a development studio that ships production software — not just landing pages.",
    date: D(1, 12), readTime: "8 min", category: "Web",
    body: [
      "The city's tech scene has matured. Here's how to separate serious studios from freelancer collectives.",
      "Look for evidence of production ownership: CI/CD pipelines, observability, on-call rotations, and post-launch SLAs. Portfolios full of static marketing sites are a signal — not a bad one, but a limiting one.",
      "Ask about their design system philosophy, TypeScript posture, testing coverage, and how they handle incidents. If they can't answer, they aren't ready for your revenue-critical work.",
    ],
  },
  {
    slug: "top-seo-strategies-chhatrapati-sambhaji-nagar-businesses",
    title: "Top SEO Strategies for Chhatrapati Sambhaji Nagar Businesses",
    excerpt: "Localised technical SEO, GBP dominance, and topical authority — the 2026 playbook.",
    date: D(1, 22), readTime: "10 min", category: "SEO",
    body: [
      "Local SEO is no longer a checklist — it's a system. Start with a locked-down NAP layer, then compound with topical clusters that Google's helpful content system rewards.",
      "GBP is your most under-utilised channel. Publish weekly, seed reviews with SMS flows, and respond within 24 hours to every one.",
    ],
  },
  {
    slug: "ai-integration-small-business-guide",
    title: "The Small Business Guide to AI Integration",
    excerpt: "Cut through the hype: three AI patterns every small business should evaluate this quarter.",
    date: D(2, 4), readTime: "7 min", category: "AI",
    body: [
      "1) Support automation with RAG on your own docs. 2) Sales enablement that drafts personalised outreach. 3) Ops copilots that summarise, categorise and route.",
      "Start with a single workflow, measure the hours saved, then expand. AI without measurement is theatre.",
    ],
  },
  {
    slug: "mobile-app-development-trends-2025",
    title: "Mobile App Development Trends Shaping 2025",
    excerpt: "React Native's second wind, on-device AI, and the return of native-feel interactions.",
    date: D(2, 18), readTime: "6 min", category: "Mobile",
    body: [
      "On-device inference with Apple Intelligence and Gemini Nano changes what mobile apps can do without a round-trip.",
      "React Native's New Architecture is finally stable — expect a fresh wave of cross-platform apps that don't feel cross-platform.",
    ],
  },
  {
    slug: "digital-marketing-roi-chhatrapati-sambhaji-nagar",
    title: "Measuring Digital Marketing ROI in Chhatrapati Sambhaji Nagar",
    excerpt: "Attribution frameworks that survive iOS privacy changes and GA4 quirks.",
    date: D(3, 5), readTime: "9 min", category: "Growth",
    body: [
      "Stop optimising for last-click. Use position-based attribution with GA4 explorations, and validate against a matched-market lift study every quarter.",
    ],
  },
  {
    slug: "importance-of-ui-ux-design",
    title: "Why UI/UX Design Determines Whether Your Product Ships Revenue",
    excerpt: "Design is not decoration — it is the compression algorithm your product runs on.",
    date: D(3, 20), readTime: "7 min", category: "Design",
    body: [
      "Every interface is a hypothesis about your user's mental model. Bad design widens the gap; good design closes it.",
      "The ROI shows up in three places: activation rate, support ticket volume, and expansion revenue.",
    ],
  },
  {
    slug: "web-development-trends-2026",
    title: "Web Development Trends Defining 2026",
    excerpt: "React Server Components go mainstream, edge databases eat the middle tier.",
    date: D(4, 3), readTime: "8 min", category: "Web",
    body: [
      "The RSC + streaming stack is now the default for serious teams. Edge Postgres providers (Neon, Turso) collapse the traditional 3-tier stack into 2.",
    ],
  },
  {
    slug: "seo-predictions-2026",
    title: "SEO Predictions for 2026",
    excerpt: "AI overviews, entity-first indexing, and the death of the ten blue links.",
    date: D(4, 15), readTime: "9 min", category: "SEO",
    body: [
      "The SERP is being disaggregated. Ranking now means ranking in three different substrates: classic search, AI overviews, and generative engines.",
    ],
  },
  {
    slug: "digital-marketing-2026-privacy-personalization",
    title: "Digital Marketing in 2026: Privacy vs. Personalisation",
    excerpt: "First-party data strategies that respect consent and still convert.",
    date: D(5, 1), readTime: "8 min", category: "Growth",
    body: ["The winners in 2026 are teams that built first-party data pipes two years ago."],
  },
  {
    slug: "geo-generative-engine-optimization-guide",
    title: "GEO: A Practical Guide to Generative Engine Optimization",
    excerpt: "Show up in Perplexity, ChatGPT and Gemini — with content built for citation.",
    date: D(5, 12), readTime: "11 min", category: "AEO/GEO",
    body: ["Structure > style. Generative engines quote what they can parse."],
  },
  {
    slug: "aeo-answer-engine-optimization-strategies",
    title: "AEO: Answer Engine Optimization Strategies That Actually Work",
    excerpt: "From FAQ schema to entity graphs, the tactics moving the needle.",
    date: D(5, 20), readTime: "10 min", category: "AEO/GEO",
    body: ["Own the answer before your competitor does. That's the whole game."],
  },
  {
    slug: "llms-reshaping-digital-marketing-seo",
    title: "How LLMs Are Reshaping Digital Marketing & SEO",
    excerpt: "The category shifts you need to price into your 2026 plan.",
    date: D(6, 1), readTime: "9 min", category: "AI",
    body: ["LLMs collapse the funnel. Awareness and consideration can now happen in a single prompt."],
  },
  {
    slug: "best-digital-agency-chhatrapati-sambhaji-nagar",
    title: "How to Pick the Best Digital Agency in Chhatrapati Sambhaji Nagar",
    excerpt: "The five questions that separate senior studios from junior shops.",
    date: D(6, 10), readTime: "7 min", category: "Local",
    body: ["Ask about their post-launch commitments. If there aren't any, that's your answer."],
  },
  {
    slug: "web-development-chhatrapati-sambhaji-nagar",
    title: "Web Development in Chhatrapati Sambhaji Nagar: A 2026 Snapshot",
    excerpt: "The talent, the rates, the emerging startups.",
    date: D(6, 22), readTime: "6 min", category: "Local",
    body: ["The gap between studio work and freelancer output has never been wider."],
  },
  {
    slug: "seo-services-chhatrapati-sambhaji-nagar",
    title: "SEO Services in Chhatrapati Sambhaji Nagar",
    excerpt: "What a comprehensive SEO engagement actually looks like today.",
    date: D(7, 2), readTime: "8 min", category: "Local",
    body: ["Retainers should include AEO/GEO work — not just backlinks and blog posts."],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  metric: string;
  span: "sm" | "md" | "lg";
  tint: string;
};

export const projects: Project[] = [
  { slug: "orbit-crm", name: "Orbit CRM", category: "SaaS · Web App", summary: "Enterprise CRM rebuilt on Next.js + Postgres, 4× faster than v1.", metric: "410ms → 90ms p95", span: "lg", tint: "from-emerald-400/20 to-teal-500/5" },
  { slug: "meridian-ai", name: "Meridian AI", category: "AI · RAG", summary: "Legal research copilot with citation-grade retrieval.", metric: "92% eval accuracy", span: "md", tint: "from-lime-300/20 to-emerald-500/5" },
  { slug: "atlas-mobile", name: "Atlas Mobile", category: "Mobile · React Native", summary: "Logistics app for a 400-vehicle fleet, offline-first.", metric: "4.9★ on App Store", span: "sm", tint: "from-teal-300/20 to-cyan-500/5" },
  { slug: "harbor-ecom", name: "Harbor E-com", category: "Growth · SEO", summary: "Headless storefront with programmatic SEO across 12k SKUs.", metric: "+380% organic clicks", span: "md", tint: "from-emerald-400/20 to-green-500/5" },
  { slug: "quantum-dashboard", name: "Quantum Dashboard", category: "Web · Analytics", summary: "Real-time analytics for an infra provider, 30k+ metrics/sec.", metric: "Sub-1s dashboards", span: "sm", tint: "from-cyan-400/20 to-teal-500/5" },
  { slug: "verse-studio", name: "Verse Studio", category: "UI · Design System", summary: "Design system + component library for a fintech.", metric: "180+ components", span: "sm", tint: "from-teal-400/20 to-emerald-500/5" },
];
