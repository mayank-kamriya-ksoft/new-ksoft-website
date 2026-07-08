import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://ksoftsolution.com/sitemap.xml",
    host: "https://ksoftsolution.com",
  };
}
