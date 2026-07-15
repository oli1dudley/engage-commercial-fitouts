import { siteConfig } from "./site.config";

// ─── Organization ─────────────────────────────────────────────────────────
// Only verified organisation data is included. Contact channels are added
// automatically once confirmed values exist in site.config.ts.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
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
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(Object.values(siteConfig.social).some(Boolean)
      ? { sameAs: Object.values(siteConfig.social).filter(Boolean) }
      : {}),
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
  serviceType = "Commercial fit-out",
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${url}#service`,
    name,
    description,
    serviceType,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
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
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
