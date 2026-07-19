import type { MetadataRoute } from "next";

// TODO: set to your real domain once deployed.
const baseUrl = "https://portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
