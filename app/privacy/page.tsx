import { PageHeader, Section } from "@/components/section";

export const metadata = { title: "Privacy Policy", description: "How KSoft Solution handles your data." };

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Last updated: July 8, 2026." />
      <Section>
        <div className="max-w-3xl prose-mint">
          <h2>What we collect</h2>
          <p>When you contact us, we collect the details you submit — name, email, company, and the project description you share. That&apos;s it.</p>
          <h2>How we use it</h2>
          <p>Solely to respond to your inquiry and, if we work together, to deliver the engagement. We do not sell, rent, or share your data with third parties for marketing.</p>
          <h2>Analytics</h2>
          <p>We use privacy-respecting analytics to understand aggregate traffic patterns. No personal identifiers are collected.</p>
          <h2>Cookies</h2>
          <p>Our site uses essential cookies only. No third-party ad tracking.</p>
          <h2>Your rights</h2>
          <p>You may request access, correction, or deletion of your data by emailing <a href="mailto:hello@ksoftsolution.com">hello@ksoftsolution.com</a>.</p>
        </div>
      </Section>
    </>
  );
}
