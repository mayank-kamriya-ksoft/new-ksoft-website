import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/section";
import { Hex } from "@/components/hex";
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
        eyebrow="Contact"
        title="Draft the spec together."
        intro="Tell us about your product, your users and your timeline. We'll respond within one business day with a real scoping call — not a template."
      />

      <Section>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="card p-8 md:col-span-3">
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-5">
            <InfoCard label="Email" title={
              <a href="mailto:hello@ksoftsolution.com" className="hover:text-primary">
                hello@ksoftsolution.com
              </a>
            } />
            <InfoCard label="Studio" title={<>Chhatrapati Sambhaji Nagar<br /><span className="text-muted text-base">Maharashtra · India</span></>} />
            <InfoCard label="Availability" title={<>Booking Q3 · 2026<br /><span className="text-muted text-base">2 engagements remaining.</span></>} />
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoCard({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3">
        <Hex size={40} stroke="#0a7cff" fill="#ffffff" strokeWidth={1.4} />
        <div className="text-xs font-mono uppercase tracking-widest text-forest">{label}</div>
      </div>
      <div className="font-display text-xl mt-3 text-foreground">{title}</div>
    </div>
  );
}
