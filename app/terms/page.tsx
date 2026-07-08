import { PageHeader, Section } from "@/components/section";

export const metadata = { title: "Terms of Service", description: "Terms of use for the KSoft Solution website." };

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" intro="Last updated: July 8, 2026." />
      <Section>
        <div className="max-w-3xl prose-mint">
          <h2>Use of this website</h2>
          <p>By accessing ksoftsolution.com you agree to use it lawfully and not to attempt to disrupt or reverse-engineer the service.</p>
          <h2>Intellectual property</h2>
          <p>All content, code, and design on this site is © KSoft Solution unless otherwise credited. Do not reuse without permission.</p>
          <h2>Engagement terms</h2>
          <p>Project engagements are governed by a signed statement of work. Nothing on this website constitutes a binding offer of services.</p>
          <h2>Liability</h2>
          <p>The website is provided &quot;as is&quot; without warranties of any kind. We are not liable for indirect or consequential damages arising from its use.</p>
          <h2>Contact</h2>
          <p>Questions? <a href="mailto:hello@ksoftsolution.com">hello@ksoftsolution.com</a>.</p>
        </div>
      </Section>
    </>
  );
}
