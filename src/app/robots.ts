import type { MetadataRoute } from "next";
import { siteConfig, INDEXING_ENABLED } from "@/lib/site.config";

export default function robots(): MetadataRoute.Robots {
  // Pre-launch indexing lock: block all crawling and do not advertise the
  // sitemap until SITE_INDEXING_ENABLED is explicitly "true".
  if (!INDEXING_ENABLED) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
