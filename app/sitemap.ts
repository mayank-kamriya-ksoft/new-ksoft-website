import type { MetadataRoute } from "next";
import { services, posts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ksoftsolution.com";
  const currentDate = new Date().toISOString().split("T")[0];

  const mainPages = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogPosts = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...servicePages, ...blogPosts];
}
