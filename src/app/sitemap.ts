import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo.config";
import { getAllSlugs, getAllCategories, getAllTags } from "@/lib/blog";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { GUIDES } from "@/data/guides";
import { CASE_STUDIES } from "@/data/case-studies";

const base = siteConfig.url;

type Frequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const coreRoutes: { url: string; priority: number; changeFrequency: Frequency }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/services", priority: 0.8, changeFrequency: "monthly" },
  { url: "/about", priority: 0.7, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { url: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { url: "/quote", priority: 0.8, changeFrequency: "monthly" },
  { url: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { url: "/partnerships", priority: 0.6, changeFrequency: "monthly" },
  { url: "/locations", priority: 0.8, changeFrequency: "monthly" as Frequency },
  { url: "/resources", priority: 0.7, changeFrequency: "monthly" as Frequency },
  { url: "/case-studies", priority: 0.6, changeFrequency: "monthly" as Frequency },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const coreEntries = coreRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified,
    changeFrequency: (service.changeFrequency ?? "monthly") as Frequency,
    priority: service.priority ?? 0.8,
  }));

  const locationEntries = LOCATIONS.map((location) => ({
    url: `${base}/locations/${location.slug}`,
    lastModified,
    changeFrequency: (location.changeFrequency ?? "monthly") as Frequency,
    priority: location.priority ?? 0.8,
  }));

  const blogPostEntries = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as Frequency,
    priority: 0.6,
  }));

  const categoryEntries = getAllCategories().map((category) => ({
    url: `${base}/blog/category/${category}`,
    lastModified,
    changeFrequency: "weekly" as Frequency,
    priority: 0.5,
  }));

  const tagEntries = getAllTags().map(({ tag }) => ({
    url: `${base}/blog/tag/${tag}`,
    lastModified,
    changeFrequency: "weekly" as Frequency,
    priority: 0.4,
  }));

  const guideEntries = GUIDES.map((guide) => ({
    url: `${base}/resources/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly" as Frequency,
    priority: 0.7,
  }));

  const caseStudyEntries = CASE_STUDIES.map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified,
    changeFrequency: "monthly" as Frequency,
    priority: 0.6,
  }));

  return [
    ...coreEntries,
    ...serviceEntries,
    ...locationEntries,
    ...blogPostEntries,
    ...categoryEntries,
    ...tagEntries,
    ...guideEntries,
    ...caseStudyEntries,
  ];
}
