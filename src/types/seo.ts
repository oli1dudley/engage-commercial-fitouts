export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export type SchemaType =
  | "LocalBusiness"
  | "Organization"
  | "WebSite"
  | "BreadcrumbList"
  | "Service"
  | "FAQPage"
  | "ContactPage"
  | "BlogPosting";
