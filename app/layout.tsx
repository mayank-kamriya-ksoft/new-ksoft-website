import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ksoftsolution.com"),
  title: {
    default: "KSoft Solution | Web Development & SEO Agency in Chhatrapati Sambhaji Nagar",
    template: "%s · KSoft Solution",
  },
  description:
    "KSoft Solution — a Chhatrapati Sambhaji Nagar (Aurangabad) software agency building Next.js web apps, AI integrations, mobile products and SEO/GEO growth systems.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.ksoftsolution.com/",
    title: "KSoft Solution — Software, AI & SEO Agency in Chhatrapati Sambhaji Nagar",
    description:
      "We design, build and scale software: web apps, AI, mobile, and SEO/GEO growth engines from Chhatrapati Sambhaji Nagar (Aurangabad), India.",
    siteName: "KSoft Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSoft Solution",
    description:
      "Software, AI, and growth engineering for the next generation of businesses.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": "https://www.ksoftsolution.com/#organization",
  name: "KSoft Solution",
  url: "https://www.ksoftsolution.com",
  logo: "https://www.ksoftsolution.com/icon.png",
  description:
    "Software development, AI integration, mobile apps, SEO/GEO and digital marketing agency based in Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra, India.",
  telephone: "+91-976-541-2319",
  address: {
    "@type": "PostalAddress",
    streetAddress: "T-16, STPI, Chikhalthana MIDC",
    addressLocality: "Chhatrapati Sambhaji Nagar",
    addressRegion: "Maharashtra",
    postalCode: "431008",
    addressCountry: "IN",
  },
  areaServed: ["Chhatrapati Sambhaji Nagar", "Aurangabad", "Marathwada", "Maharashtra", "India"],
  sameAs: [
    "https://www.facebook.com/ksoftsolutionaurangabad/",
    "https://twitter.com/ksoftsolution",
    "https://www.instagram.com/ksoftsolution/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ksoftsolution.com/#website",
  url: "https://www.ksoftsolution.com",
  name: "KSoft Solution",
  publisher: { "@id": "https://www.ksoftsolution.com/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
