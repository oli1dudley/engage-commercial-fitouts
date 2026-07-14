export interface LocationMeta {
  slug: string;
  name: string;
  title: string;
  description: string;
  priority?: number;
  changeFrequency?: "weekly" | "monthly" | "yearly";
}

export const LOCATIONS: LocationMeta[] = [
  // ── Existing locations ───────────────────────────────────────────────────
  {
    slug: "dubai-marina-movers",
    name: "Dubai Marina",
    title: "Movers in Dubai Marina | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Dubai Marina for apartment and villa relocations. WeMoveStuff handles packing, lift access, building permits, transport and setup in Dubai Marina towers.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "downtown-dubai-movers",
    name: "Downtown Dubai",
    title: "Movers in Downtown Dubai | Apartment Moving | WeMoveStuff",
    description:
      "Professional apartment movers in Downtown Dubai. WeMoveStuff handles packing, building access, lift coordination, transport and setup for high-rise apartment moves in Downtown Dubai.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "business-bay-movers",
    name: "Business Bay",
    title: "Movers in Business Bay | Apartment & Office Moving | WeMoveStuff",
    description:
      "Professional movers in Business Bay for apartment and office relocations. WeMoveStuff handles packing, building access, transport and setup for residential and commercial moves in Business Bay.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "jvc-movers",
    name: "JVC",
    title: "Movers in JVC | Apartment, Townhouse & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Jumeirah Village Circle (JVC). WeMoveStuff handles apartment, townhouse and villa moves in JVC with packing, furniture assembly, transport and full setup.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "jlt-movers",
    name: "JLT",
    title: "Movers in JLT | Apartment & Office Moving | WeMoveStuff",
    description:
      "Professional movers in Jumeirah Lake Towers (JLT). WeMoveStuff handles apartment and office moves in JLT with packing, lift access, transport and setup.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    slug: "palm-jumeirah-movers",
    name: "Palm Jumeirah",
    title: "Movers on Palm Jumeirah | Villa & Apartment Moving | WeMoveStuff",
    description:
      "Professional movers on Palm Jumeirah for villa and apartment relocations. WeMoveStuff handles packing, furniture dismantling, transport and setup for Palm Jumeirah moves.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  // ── New locations ────────────────────────────────────────────────────────
  {
    slug: "jvt-movers",
    name: "JVT",
    title: "Movers in JVT | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Jumeirah Village Triangle (JVT). WeMoveStuff handles apartment and villa moves in JVT with packing, furniture assembly, transport and full setup.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "dubai-hills-movers",
    name: "Dubai Hills",
    title: "Movers in Dubai Hills | Villa & Apartment Moving | WeMoveStuff",
    description:
      "Professional movers in Dubai Hills Estate. WeMoveStuff handles villa and apartment moves across Dubai Hills with packing, furniture assembly, transport and full setup.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "arabian-ranches-movers",
    name: "Arabian Ranches",
    title: "Movers in Arabian Ranches | Villa Moving | WeMoveStuff",
    description:
      "Professional villa movers in Arabian Ranches. WeMoveStuff handles full villa relocations across Arabian Ranches with packing, furniture dismantling, transport and setup.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "damac-hills-movers",
    name: "Damac Hills",
    title: "Movers in Damac Hills | Villa & Apartment Moving | WeMoveStuff",
    description:
      "Professional movers in Damac Hills. WeMoveStuff handles villa and apartment relocations across Damac Hills with packing, furniture assembly, transport and full setup.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "al-barsha-movers",
    name: "Al Barsha",
    title: "Movers in Al Barsha | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Al Barsha. WeMoveStuff handles apartment and villa moves across Al Barsha with packing, furniture assembly, transport and full setup.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "mirdif-movers",
    name: "Mirdif",
    title: "Movers in Mirdif | Villa & Apartment Moving | WeMoveStuff",
    description:
      "Professional movers in Mirdif. WeMoveStuff handles villa and apartment relocations across Mirdif with packing, furniture dismantling, transport and full setup.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    slug: "sports-city-movers",
    name: "Dubai Sports City",
    title: "Movers in Dubai Sports City | Apartment Moving | WeMoveStuff",
    description:
      "Professional movers in Dubai Sports City. WeMoveStuff handles apartment moves across Sports City with packing, furniture assembly, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "motor-city-movers",
    name: "Motor City",
    title: "Movers in Motor City | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Motor City Dubai. WeMoveStuff handles apartment and villa moves across Motor City with packing, furniture assembly, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "the-springs-movers",
    name: "The Springs",
    title: "Movers in The Springs | Villa Moving | WeMoveStuff",
    description:
      "Professional villa movers in The Springs, Dubai. WeMoveStuff handles full villa relocations across The Springs with packing, furniture dismantling, transport and setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "the-meadows-movers",
    name: "The Meadows",
    title: "Movers in The Meadows | Villa Moving | WeMoveStuff",
    description:
      "Professional villa movers in The Meadows, Dubai. WeMoveStuff handles full villa relocations across The Meadows with packing, furniture dismantling, transport and setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "dubai-creek-harbour-movers",
    name: "Dubai Creek Harbour",
    title: "Movers in Dubai Creek Harbour | Apartment Moving | WeMoveStuff",
    description:
      "Professional apartment movers in Dubai Creek Harbour. WeMoveStuff handles packing, lift access, transport and setup for apartment moves across Dubai Creek Harbour.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "silicon-oasis-movers",
    name: "Silicon Oasis",
    title: "Movers in Silicon Oasis | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Dubai Silicon Oasis. WeMoveStuff handles apartment and villa moves across Silicon Oasis with packing, furniture assembly, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "town-square-movers",
    name: "Town Square",
    title: "Movers in Town Square Dubai | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Town Square Dubai. WeMoveStuff handles apartment and villa relocations across Town Square with packing, furniture assembly, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "dubai-south-movers",
    name: "Dubai South",
    title: "Movers in Dubai South | Apartment & Villa Moving | WeMoveStuff",
    description:
      "Professional movers in Dubai South. WeMoveStuff handles apartment and villa relocations across Dubai South with packing, furniture assembly, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  // ── Additional locations ─────────────────────────────────────────────────
  {
    slug: "discovery-gardens-movers",
    name: "Discovery Gardens",
    title: "Movers in Discovery Gardens Dubai | WeMoveStuff",
    description:
      "Professional movers in Discovery Gardens Dubai. WeMoveStuff handles apartment moves across Discovery Gardens with packing, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "al-furjan-movers",
    name: "Al Furjan",
    title: "Movers in Al Furjan Dubai | WeMoveStuff",
    description:
      "Professional movers in Al Furjan. WeMoveStuff handles villa, townhouse and apartment moves across Al Furjan with packing, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "emirates-hills-movers",
    name: "Emirates Hills",
    title: "Movers in Emirates Hills Dubai | Villa Moving | WeMoveStuff",
    description:
      "Professional villa movers in Emirates Hills Dubai. WeMoveStuff provides specialist handling for large villa moves including packing, furniture assembly and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "bluewaters-movers",
    name: "Bluewaters Island",
    title: "Movers in Bluewaters Island Dubai | WeMoveStuff",
    description:
      "Professional movers in Bluewaters Island Dubai. WeMoveStuff handles apartment moves in Bluewaters with packing, lift coordination, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "city-walk-movers",
    name: "City Walk",
    title: "Movers in City Walk Dubai | WeMoveStuff",
    description:
      "Professional movers in City Walk Dubai. WeMoveStuff handles apartment moves in City Walk with packing, lift coordination, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    slug: "international-city-movers",
    name: "International City",
    title: "Movers in International City Dubai | WeMoveStuff",
    description:
      "Professional movers in International City Dubai. WeMoveStuff handles apartment moves across all International City clusters with packing, transport and full setup.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export function getLocationBySlug(slug: string): LocationMeta | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
