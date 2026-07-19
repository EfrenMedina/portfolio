import type { MetadataRoute } from "next";

// TODO: set to your real domain once deployed.
const baseUrl = "https://portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
