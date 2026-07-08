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
  metadataBase: new URL("https://ksoftsolution.com"),
  title: {
    default: "KSoft Solution — Software Development, AI & SEO in Chhatrapati Sambhaji Nagar",
    template: "%s · KSoft Solution",
  },
  description:
    "KSoft Solution is a software development firm building web apps, AI integrations, mobile products and SEO systems for founders and growing businesses.",
  openGraph: {
    type: "website",
    title: "KSoft Solution — Engineering the digital edge",
    description:
      "We design, build and scale software: web apps, AI, mobile, and SEO growth engines.",
    siteName: "KSoft Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSoft Solution",
    description:
      "Software, AI, and growth engineering for the next generation of businesses.",
  },
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
