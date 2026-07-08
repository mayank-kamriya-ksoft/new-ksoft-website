import { PageHeader, Section } from "@/components/section";
import { Hex } from "@/components/hex";

export const metadata = {
  title: "Contact — Start a project",
  description: "Get in touch with KSoft Solution. We respond within one business day.",
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
          <form className="card p-8 md:col-span-3 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Name" type="text" placeholder="Jane Doe" />
              <Field label="Company" type="text" placeholder="Acme Inc." />
            </div>
            <Field label="Email" type="email" placeholder="jane@acme.com" />
            <Field label="Budget" type="text" placeholder="$25k – $100k" />
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-primary-glow mb-2">Project</label>
              <textarea rows={6} placeholder="Tell us what you're building." className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition" />
            </div>
            <button type="button" className="btn-primary w-full justify-center">Send inquiry →</button>
          </form>

          <div className="md:col-span-2 space-y-5">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <Hex size={40} stroke="#2dd4a8" fill="#0f2620" strokeWidth={1.4} />
                <div className="text-xs font-mono uppercase tracking-widest text-primary-glow">Email</div>
              </div>
              <a href="mailto:hello@ksoftsolution.com" className="block font-display text-xl mt-3 hover:text-primary-glow">hello@ksoftsolution.com</a>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <Hex size={40} stroke="#2dd4a8" fill="#0f2620" strokeWidth={1.4} />
                <div className="text-xs font-mono uppercase tracking-widest text-primary-glow">Studio</div>
              </div>
              <p className="text-foreground mt-3">Chhatrapati Sambhaji Nagar<br /><span className="text-muted">Maharashtra · India</span></p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <Hex size={40} stroke="#2dd4a8" fill="#0f2620" strokeWidth={1.4} />
                <div className="text-xs font-mono uppercase tracking-widest text-primary-glow">Availability</div>
              </div>
              <p className="text-foreground mt-3">Booking Q3 · 2026<br /><span className="text-muted">2 engagements remaining.</span></p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-primary-glow mb-2">{label}</label>
      <input {...rest} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition" />
    </div>
  );
}
