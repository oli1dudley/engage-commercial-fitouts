export interface ServiceMeta {
  slug: string;
  name: string;
  title: string;
  description: string;
  priority?: number;
  changeFrequency?: "weekly" | "monthly" | "yearly";
}

export const SERVICES: ServiceMeta[] = [
  // ── Existing service pages ───────────────────────────────────────────────
  {
    slug: "apartment-moving",
    name: "Apartment Moving",
    title: "Apartment Movers in Dubai | WeMoveStuff",
    description:
      "Professional apartment movers in Dubai for studios to large apartments. WeMoveStuff handles packing, furniture dismantling, lift access, transport and full setup.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "villa-moving",
    name: "Villa Moving",
    title: "Villa Movers in Dubai | WeMoveStuff",
    description:
      "Professional villa movers in Dubai. WeMoveStuff handles full villa relocations with packing, furniture dismantling, transport and setup across Dubai.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "commercial-moving",
    name: "Commercial Moving",
    title: "Commercial Movers in Dubai | Office & Business Relocation | WeMoveStuff",
    description:
      "Professional commercial movers in Dubai for office and business relocations. WeMoveStuff handles packing, transport and setup with minimal disruption to your operations.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "packing-services",
    name: "Packing Services",
    title: "Professional Packing Services in Dubai | WeMoveStuff",
    description:
      "Professional packing and unpacking services in Dubai. WeMoveStuff supplies all packing materials and protects every item for safe transport.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    title: "Furniture Assembly & Dismantling in Dubai | WeMoveStuff",
    description:
      "Professional furniture dismantling and reassembly in Dubai. WeMoveStuff handles flat-pack and assembled furniture before and after your move.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "tv-installation",
    name: "TV Installation",
    title: "TV Installation in Dubai | Wall Mount & Removal | WeMoveStuff",
    description:
      "Professional TV removal and wall installation in Dubai. WeMoveStuff removes, transports and reinstalls TVs at your new property.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  // ── New service pages ────────────────────────────────────────────────────
  {
    slug: "office-movers",
    name: "Office Movers",
    title: "Office Movers in Dubai | Office Relocation | WeMoveStuff",
    description:
      "Professional office movers in Dubai. WeMoveStuff handles office relocations of all sizes with careful packing, transport and setup to minimise downtime.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "local-movers",
    name: "Local Movers",
    title: "Local Movers in Dubai | Same-City Moving | WeMoveStuff",
    description:
      "Professional local movers in Dubai for same-city relocations. WeMoveStuff provides efficient, reliable moving services across all Dubai communities.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "same-day-movers",
    name: "Same-Day Movers",
    title: "Same-Day Movers in Dubai | Urgent Moving | WeMoveStuff",
    description:
      "Same-day moving services in Dubai for urgent relocations. WeMoveStuff provides fast, efficient same-day moving support across Dubai.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "storage-services",
    name: "Storage Services",
    title: "Storage Services in Dubai | Short & Long-Term | WeMoveStuff",
    description:
      "Secure storage services in Dubai for short and long-term needs. WeMoveStuff arranges safe, accessible storage for your belongings during or between moves.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "long-distance-movers",
    name: "Long-Distance Movers",
    title: "Long-Distance Movers in Dubai | WeMoveStuff",
    description:
      "Professional long-distance moving services from Dubai. WeMoveStuff handles inter-emirate and long-distance relocations with careful packing and secure transport.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "corporate-relocation",
    name: "Corporate Relocation",
    title: "Corporate Relocation Services in Dubai | WeMoveStuff",
    description:
      "Professional corporate relocation services in Dubai. WeMoveStuff supports businesses and their employees with full relocation management across Dubai.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "piano-movers",
    name: "Piano Movers",
    title: "Piano Movers in Dubai | Specialist Piano Moving | WeMoveStuff",
    description:
      "Specialist piano moving services in Dubai. WeMoveStuff handles upright and grand piano relocations with the care and equipment required for safe transport.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    slug: "fragile-item-movers",
    name: "Fragile Item Moving",
    title: "Fragile Item Movers in Dubai | Specialist Packing | WeMoveStuff",
    description:
      "Specialist fragile item moving services in Dubai. WeMoveStuff provides expert packing and careful transport for antiques, artwork, glassware and delicate belongings.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    slug: "furniture-disassembly",
    name: "Furniture Disassembly",
    title: "Furniture Disassembly Service in Dubai | WeMoveStuff",
    description:
      "Professional furniture disassembly and reassembly in Dubai. WeMoveStuff dismantles and rebuilds wardrobes, beds, shelving and all assembled furniture.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
];

export function getServiceBySlug(slug: string): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
