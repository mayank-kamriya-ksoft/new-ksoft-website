import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/section";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Start a project",
  description:
    "Get in touch with KSoft Solution. We respond within one business day.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact · Q4 · 2026 booking"
        title="Draft the spec together."
        intro="Tell us about your product, your users and your timeline. We'll respond within one business day with a real scoping call — not a template."
      />

      <Section>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 rounded-3xl bg-surface border border-border p-8">
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-4">
            <InfoCard
              label="Email"
              title={
                <a href="mailto:hello@ksoftsolution.com" className="hover:text-primary transition-colors">
                  hello@ksoftsolution.com
                </a>
              }
              hint="We reply within one business day."
            />
            <InfoCard
              label="Studio"
              title={<>Chhatrapati Sambhaji Nagar</>}
              hint="Maharashtra · India · GMT+5:30"
            />
            <InfoCard
              label="Availability"
              title={<>Booking Q3 · 2026</>}
              hint="2 engagements remaining this quarter."
            />
            <div className="rounded-3xl bg-foreground text-white p-6 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary-glow">// what happens next</div>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {[
                    ["01", "We read your brief within one business day."],
                    ["02", "30-minute scoping call, no sales pitch."],
                    ["03", "Fixed-scope proposal with real timeline."],
                  ].map(([n, t]) => (
                    <li key={n} className="flex gap-3">
                      <span className="font-mono text-[11px] text-primary-glow mt-0.5">{n}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoCard({ label, title, hint }: { label: string; title: React.ReactNode; hint?: string }) {
  return (
    <div className="rounded-3xl bg-surface border border-border p-6 hover:border-primary/40 transition-colors">
      <div className="font-mono text-[10px] uppercase tracking-widest text-primary">// {label}</div>
      <div className="mt-3 font-display font-bold text-xl text-foreground">{title}</div>
      {hint && <div className="mt-2 text-sm text-muted">{hint}</div>}
    </div>
  );
}
