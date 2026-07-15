import type { Metadata } from "next";
import { siteConfig, INDEXING_ENABLED } from "./site.config";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? siteConfig.images.ogDefault;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    // Pre-launch indexing lock: while INDEXING_ENABLED is false every page is
    // explicitly noindex/nofollow regardless of the per-page noIndex option.
    ...(!INDEXING_ENABLED
      ? {
          robots: {
            index: false,
            follow: false,
            noarchive: true,
            nosnippet: true,
          },
        }
      : noIndex
        ? { robots: { index: false, follow: false } }
        : {}),
  };
}
