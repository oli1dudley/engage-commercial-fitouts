/**
 * Central site configuration for Engage Commercial Fitouts.
 *
 * All company details, navigation structures, CTA labels and form options
 * are defined here — do not hard-code business details inside components.
 *
 * ── PLACEHOLDERS AWAITING CONFIRMATION ────────────────────────────────────
 * The following values are not yet confirmed and must be replaced before
 * launch. Empty strings are intentionally hidden by the UI rather than
 * displaying fake information:
 *   - url                  → final production domain
 *   - phone / email        → approved contact channels
 *   - social.*             → approved social profiles
 *   - legal.*              → registered company details for legal pages
 *   - budgetRanges         → approved indicative budget bands (empty array
 *                            renders a free-text budget field instead)
 *   - form destination     → set CONTACT_FORM_DESTINATION in environment
 *                            configuration (see .env.example)
 */

export const siteConfig = {
  name: "Engage Commercial Fitouts",
  shortName: "Engage",
  tagline: "Commercial Spaces, Transformed End to End",
  // TODO(launch): replace with the confirmed production domain, then set
  // urlConfirmed to true. Indexing cannot be enabled until both are done.
  url: "https://www.engagecommercialfitouts.com",
  urlConfirmed: false as boolean,
  description:
    "Engage Commercial Fitouts transforms outdated, vacant and shell-condition commercial properties into complete, market-ready offices through one fully managed service across Dubai.",
  footerDescription:
    "End-to-end commercial office transformation, fit-out and project delivery across Dubai.",

  // TODO(launch): confirmed contact channels. Empty values are hidden in the UI.
  phone: "" as string,
  email: "" as string,
  address: {
    locality: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
  },
  // TODO(launch): confirmed working hours. Empty value is hidden in the UI.
  openingHours: "" as string,

  // TODO(launch): approved social profiles. Empty values are hidden in the UI.
  social: {
    instagram: "" as string,
    facebook: "" as string,
    linkedin: "" as string,
  },

  // TODO(launch): registered company details for the legal pages.
  legal: {
    registeredName: "Engage Commercial Fitouts",
    companyNumber: "" as string,
    licenceNumber: "" as string,
    registeredAddress: "" as string,
  },

  images: {
    ogDefault: "/images/seo/og-default.jpg",
    logo: "/images/logo/engage-logo.jpeg",
  },
  titleTemplate: "%s | Engage Commercial Fitouts",
  defaultTitle: "Engage Commercial Fitouts | Commercial Fit-Out Dubai",
} as const;

export const phoneHref = siteConfig.phone
  ? `tel:${siteConfig.phone.replace(/\s/g, "")}`
  : "";

// ─── Pre-launch indexing lock ───────────────────────────────────────────────
/**
 * Fail-safe launch control. The site is only indexable when the environment
 * variable SITE_INDEXING_ENABLED is EXACTLY the string "true". Every other
 * state — missing, empty, "false", misspelled, local dev, preview or the
 * temporary vercel.app production deployment — keeps the site non-indexable
 * (robots meta noindex, X-Robots-Tag header, robots.txt Disallow: /).
 *
 * Deliberately independent of VERCEL_ENV: deploying to Vercel production is
 * NOT launch approval. This flag is the only switch.
 */
export const INDEXING_ENABLED = process.env.SITE_INDEXING_ENABLED === "true";

// Launch guard: indexing must never be enabled against a missing, malformed
// or temporary domain. Throwing here fails the production build (this module
// is imported by every page) with a clear explanation. It cannot trigger
// while SITE_INDEXING_ENABLED is unset or false.
if (INDEXING_ENABLED) {
  const url = siteConfig.url;
  const isValidHttps = /^https:\/\/[a-z0-9.-]+\.[a-z]{2,}$/i.test(url);
  if (!isValidHttps || url.includes("vercel.app") || !siteConfig.urlConfirmed) {
    throw new Error(
      `SITE_INDEXING_ENABLED=true but siteConfig.url ("${url}") is not a ` +
        "confirmed production domain. Before enabling indexing: set the final " +
        "branded domain in src/lib/site.config.ts (https://…, not a vercel.app " +
        "address), set urlConfirmed to true, complete the TODO(launch) items, " +
        "then rebuild."
    );
  }
}

// ─── CTA labels ─────────────────────────────────────────────────────────────
export const CTA = {
  primary: { label: "Discuss Your Project", href: "/contact" },
  consultation: { label: "Request a Project Consultation", href: "/contact" },
  assessment: { label: "Arrange a Property Assessment", href: "/contact" },
  investor: { label: "Discuss an Investment Property", href: "/contact" },
  workplace: { label: "Discuss Your Workplace Project", href: "/contact" },
  services: { label: "Explore Our Services", href: "/services" },
  process: { label: "View Our Process", href: "/process" },
} as const;

// ─── Solutions ──────────────────────────────────────────────────────────────
export const SOLUTIONS = [
  {
    slug: "investors-asset-owners",
    label: "Investors & Asset Owners",
    href: "/solutions/investors-asset-owners",
    description:
      "Transforming outdated, vacant and shell-condition offices into complete, market-ready commercial spaces prepared for resale, leasing or asset repositioning.",
  },
  {
    slug: "businesses-occupiers",
    label: "Businesses & Occupiers",
    href: "/solutions/businesses-occupiers",
    description:
      "Designing, renovating and fitting out offices for businesses that need a functional, professional and fully operational workplace.",
  },
] as const;

// ─── Services ───────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    slug: "design-space-planning",
    label: "Design & Space Planning",
    href: "/services/design-space-planning",
    description:
      "Commercial layouts, concepts, material direction and workplace planning developed around the property and its intended use.",
  },
  {
    slug: "commercial-fit-out-renovation",
    label: "Commercial Fit-Out & Renovation",
    href: "/services/commercial-fit-out-renovation",
    description:
      "Full interior construction and refurbishment from strip-out and preparation through finishing.",
  },
  {
    slug: "mep-hvac-technical-works",
    label: "MEP, HVAC & Technical Works",
    href: "/services/mep-hvac-technical-works",
    description:
      "Mechanical, electrical, plumbing, air-conditioning, lighting, power and data coordination.",
  },
  {
    slug: "furniture-fixtures-equipment",
    label: "Furniture, Fixtures & Equipment",
    href: "/services/furniture-fixtures-equipment",
    description:
      "Selection, procurement, supply and installation of the elements required to complete the office.",
  },
  {
    slug: "project-management-handover",
    label: "Project Management & Handover",
    href: "/services/project-management-handover",
    description:
      "Programme management, contractor coordination, quality control, snagging and final completion.",
  },
] as const;

// ─── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Solutions Overview", href: "/solutions" },
      ...SOLUTIONS.map(({ label, href }) => ({ label, href })),
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services Overview", href: "/services" },
      ...SERVICES.map(({ label, href }) => ({ label, href })),
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Footer link groups ─────────────────────────────────────────────────────
export const FOOTER_GROUPS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Solutions",
    links: SOLUTIONS.map(({ label, href }) => ({ label, href })),
  },
  {
    heading: "Services",
    links: SERVICES.map(({ label, href }) => ({ label, href })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Projects", href: "/projects" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

// ─── Project enquiry form options ───────────────────────────────────────────
export const CLIENT_TYPES = [
  "Investor",
  "Asset owner",
  "Landlord",
  "Business occupier",
  "Tenant",
  "Broker or consultant",
  "Developer",
  "Other",
] as const;

export const PROJECT_TYPES = [
  "Investor property transformation",
  "New office fit-out",
  "Office renovation",
  "Shell-and-core fit-out",
  "Workspace reconfiguration",
  "Technical upgrade",
  "Furniture and final setup",
  "Unsure",
] as const;

export const PROPERTY_CONDITIONS = [
  "Shell and core",
  "Vacant fitted office",
  "Dated office requiring refurbishment",
  "Partially completed unit",
  "Occupied office",
  "Other / unsure",
] as const;

/**
 * Indicative budget bands shown in the enquiry form.
 * TODO(launch): populate with approved bands. While empty, the form renders
 * a free-text budget field instead of a select, so no invented figures are
 * displayed publicly.
 */
export const BUDGET_RANGES: readonly string[] = [];
