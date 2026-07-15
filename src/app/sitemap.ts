import type { MetadataRoute } from "next";
import { siteConfig, SERVICES, SOLUTIONS } from "@/lib/site.config";

const base = siteConfig.url;

type Frequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const coreRoutes: { url: string; priority: number; changeFrequency: Frequency }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { url: "/services", priority: 0.9, changeFrequency: "monthly" },
  { url: "/process", priority: 0.8, changeFrequency: "monthly" },
  { url: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { url: "/about", priority: 0.7, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  { url: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const coreEntries = coreRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const solutionEntries = SOLUTIONS.map((solution) => ({
    url: `${base}${solution.href}`,
    lastModified,
    changeFrequency: "monthly" as Frequency,
    priority: 0.9,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${base}${service.href}`,
    lastModified,
    changeFrequency: "monthly" as Frequency,
    priority: 0.8,
  }));

  return [...coreEntries, ...solutionEntries, ...serviceEntries];
}
