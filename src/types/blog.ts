// ─── Content Blocks ───────────────────────────────────────────────────────
// Structured article body — no MDX packages required; upgradeable to MDX
// later by swapping the renderer without touching consuming components.

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; title?: string; items: string[] }
  | { type: "callout"; variant: "tip" | "warning" | "info"; title?: string; text: string }
  | { type: "cta" }
  | { type: "image"; src: string; alt: string; caption?: string };

// ─── Author ────────────────────────────────────────────────────────────────
export interface BlogAuthor {
  name: string;
  bio: string;
  avatar?: string;
}

// ─── Category ─────────────────────────────────────────────────────────────
export type BlogCategory =
  | "moving-guides"
  | "apartment-moving"
  | "villa-moving"
  | "commercial-moving"
  | "packing-tips"
  | "furniture-setup"
  | "moving-costs"
  | "checklists"
  | "dubai-living"
  | "moving-tips"
  | "relocation";

export const BLOG_CATEGORIES: Record<BlogCategory, { name: string; description: string }> = {
  "moving-guides": {
    name: "Moving Guides",
    description: "Complete guides and advice for every type of move in Dubai.",
  },
  "apartment-moving": {
    name: "Apartment Moving",
    description: "Tips, checklists and advice for moving apartments across Dubai.",
  },
  "villa-moving": {
    name: "Villa Moving",
    description: "Everything you need to know about moving a villa in Dubai.",
  },
  "commercial-moving": {
    name: "Commercial Moving",
    description: "Office and business relocation guides for Dubai companies.",
  },
  "packing-tips": {
    name: "Packing Tips",
    description: "Practical packing advice to protect your belongings during a move.",
  },
  "furniture-setup": {
    name: "Furniture & Setup",
    description: "Furniture assembly, TV installation and home setup guides.",
  },
  "moving-costs": {
    name: "Moving Costs",
    description: "Transparent breakdowns of moving costs and pricing in Dubai.",
  },
  checklists: {
    name: "Checklists",
    description: "Step-by-step moving checklists for apartments, villas and offices.",
  },
  "dubai-living": {
    name: "Dubai Living",
    description: "Area guides and relocation advice for living in Dubai.",
  },
  "moving-tips": {
    name: "Moving Tips",
    description: "Practical moving tips to make your Dubai move easier and less stressful.",
  },
  relocation: {
    name: "Relocation",
    description: "Relocation guides for moving to, from and within Dubai.",
  },
};

// ─── Post ──────────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedDate: string; // ISO date string
  updatedDate?: string;
  readingTime: number;   // minutes
  featuredImage: string;
  featured?: boolean;
  content: ContentBlock[];
  relatedService?: string; // href to related service page
  seo?: {
    title?: string;
    description?: string;
  };
}

// ─── Post Summary (no content — for lists, cards, search) ─────────────────
export type BlogPostSummary = Omit<BlogPost, "content">;

// ─── Table of Contents ────────────────────────────────────────────────────
export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

// ─── Search ───────────────────────────────────────────────────────────────
export interface BlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
}
