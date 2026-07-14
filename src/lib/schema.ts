import { siteConfig } from "./seo.config";

// ─── Local Business / Moving Company ──────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.images.logo}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
      containedInPlace: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    },
    openingHours: siteConfig.openingHours,
    priceRange: "$$",
  };
}

// ─── Organization ─────────────────────────────────────────────────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.images.logo}`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

// ─── WebSite ───────────────────────────────────────────────────────────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

// ─── Breadcrumb ────────────────────────────────────────────────────────────
export function breadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: `${siteConfig.url}${item.url}` } : {}),
    })),
  };
}

// ─── Service ──────────────────────────────────────────────────────────────
interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType = "MovingService",
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${url}#service`,
    name,
    description,
    serviceType,
    provider: {
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    url: `${siteConfig.url}${url}`,
  };
}

// ─── FAQ Page ─────────────────────────────────────────────────────────────
export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Contact Page ─────────────────────────────────────────────────────────
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#page`,
    name: `Contact ${siteConfig.name}`,
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

// ─── Blog Article ─────────────────────────────────────────────────────────
interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  modifiedDate?: string;
  imageUrl?: string;
  authorName?: string;
}

export function articleSchema({
  title,
  description,
  url,
  publishedDate,
  modifiedDate,
  imageUrl,
  authorName = siteConfig.name,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished: publishedDate,
    dateModified: modifiedDate ?? publishedDate,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    ...(imageUrl
      ? {
          image: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${imageUrl}`,
          },
        }
      : {}),
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };
}
