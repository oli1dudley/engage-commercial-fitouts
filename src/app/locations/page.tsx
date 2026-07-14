import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import AreaPills from "@/components/shared/AreaPills";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in Dubai | All Areas Covered | WeMoveStuff",
  description:
    "WeMoveStuff provides professional moving services across all major Dubai communities. Find your area and get a quote.",
  path: "/locations",
});

// ─── Data ──────────────────────────────────────────────────────────────────

interface LocationCard {
  name: string;
  description: string;
  href: string;
}

const MARINA_WATERFRONT: LocationCard[] = [
  {
    name: "Dubai Marina",
    description: "High-rise apartment and villa moves with lift access and building permit coordination.",
    href: "/locations/dubai-marina-movers",
  },
  {
    name: "JLT",
    description: "Apartment and office moves across Jumeirah Lake Towers clusters.",
    href: "/locations/jlt-movers",
  },
  {
    name: "Palm Jumeirah",
    description: "Villa and apartment relocations on Palm Jumeirah, including frond villas and towers.",
    href: "/locations/palm-jumeirah-movers",
  },
  {
    name: "Bluewaters Island",
    description: "Premium apartment moves on Bluewaters Island with full island access coordination.",
    href: "/locations/bluewaters-movers",
  },
  {
    name: "Dubai Creek Harbour",
    description: "Apartment moves in Dubai Creek Harbour towers with packing and lift access.",
    href: "/locations/dubai-creek-harbour-movers",
  },
];

const DOWNTOWN_BUSINESS: LocationCard[] = [
  {
    name: "Downtown Dubai",
    description: "High-rise apartment moves in Downtown Dubai with service lift and permit management.",
    href: "/locations/downtown-dubai-movers",
  },
  {
    name: "Business Bay",
    description: "Apartment and office moves across Business Bay residential and commercial towers.",
    href: "/locations/business-bay-movers",
  },
  {
    name: "City Walk",
    description: "Luxury apartment moves in City Walk with building access coordination.",
    href: "/locations/city-walk-movers",
  },
  {
    name: "Silicon Oasis",
    description: "Apartment and villa moves across Dubai Silicon Oasis.",
    href: "/locations/silicon-oasis-movers",
  },
  {
    name: "International City",
    description: "Apartment moves across all International City country clusters.",
    href: "/locations/international-city-movers",
  },
];

const VILLAS_COMMUNITIES: LocationCard[] = [
  {
    name: "Emirates Hills",
    description: "Specialist large villa moves in Emirates Hills with premium handling.",
    href: "/locations/emirates-hills-movers",
  },
  {
    name: "Arabian Ranches",
    description: "Full villa relocations across Arabian Ranches phases 1, 2 and 3.",
    href: "/locations/arabian-ranches-movers",
  },
  {
    name: "Dubai Hills",
    description: "Villa and apartment moves across Dubai Hills Estate.",
    href: "/locations/dubai-hills-movers",
  },
  {
    name: "Damac Hills",
    description: "Villa and apartment relocations across Damac Hills.",
    href: "/locations/damac-hills-movers",
  },
  {
    name: "The Springs",
    description: "Villa moves across The Springs community.",
    href: "/locations/the-springs-movers",
  },
  {
    name: "The Meadows",
    description: "Villa relocations across The Meadows community.",
    href: "/locations/the-meadows-movers",
  },
  {
    name: "Al Barsha",
    description: "Apartment and villa moves across Al Barsha 1, 2, 3 and South.",
    href: "/locations/al-barsha-movers",
  },
  {
    name: "Mirdif",
    description: "Villa and apartment relocations across Mirdif.",
    href: "/locations/mirdif-movers",
  },
];

const NEW_COMMUNITIES: LocationCard[] = [
  {
    name: "JVC",
    description: "Apartment, townhouse and villa moves across Jumeirah Village Circle.",
    href: "/locations/jvc-movers",
  },
  {
    name: "JVT",
    description: "Apartment and villa moves across Jumeirah Village Triangle.",
    href: "/locations/jvt-movers",
  },
  {
    name: "Al Furjan",
    description: "Villa, townhouse and apartment moves across all four Al Furjan districts.",
    href: "/locations/al-furjan-movers",
  },
  {
    name: "Discovery Gardens",
    description: "Apartment moves across all six Discovery Gardens clusters.",
    href: "/locations/discovery-gardens-movers",
  },
  {
    name: "Dubai Sports City",
    description: "Apartment moves across Dubai Sports City.",
    href: "/locations/sports-city-movers",
  },
  {
    name: "Motor City",
    description: "Apartment and villa moves across Motor City.",
    href: "/locations/motor-city-movers",
  },
  {
    name: "Town Square",
    description: "Apartment and villa relocations across Town Square Dubai.",
    href: "/locations/town-square-movers",
  },
  {
    name: "Dubai South",
    description: "Apartment and villa moves across Dubai South.",
    href: "/locations/dubai-south-movers",
  },
];

// ─── Subcomponents ─────────────────────────────────────────────────────────

function LocationCard({ name, description, href }: LocationCard) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 p-5 bg-white rounded-2xl border border-light-grey shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-brand hover:shadow-[0_4px_16px_rgba(36,144,255,0.12)] transition-all duration-200 h-full"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-brand shrink-0 mt-0.5" aria-hidden />
          <h3 className="font-bold text-navy text-base leading-snug group-hover:text-brand transition-colors">
            {name}
          </h3>
        </div>
        <ArrowRight className="size-4 text-light-grey group-hover:text-brand transition-colors shrink-0 mt-0.5" aria-hidden />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Link>
  );
}

function AreaGroup({
  id,
  headline,
  locations,
}: {
  id: string;
  headline: string;
  locations: LocationCard[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3
        id={id}
        className="text-lg font-bold text-navy border-b border-light-grey pb-3"
      >
        {headline}
      </h3>
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc) => (
          <StaggerItem key={loc.href} className="h-full">
            <LocationCard {...loc} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function LocationsHubPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
        ])}
      />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Dubai Moving Services — Every Area Covered"
        subheadline="WeMoveStuff provides professional moving services across all major Dubai communities — from Marina and Downtown to the villa communities and emerging neighbourhoods."
        body="Find your area below and get a tailored moving quote. We cover 26 Dubai locations with the same professional service, whatever the property type."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "26 Dubai Areas",
          "Apartments & Villas",
          "Packing Available",
          "Same-Day Available",
        ]}
        variant="centered"
      />

      {/* ── Section 2: Breadcrumbs ───────────────────────────────────── */}
      <section className="bg-[#F7F9FC] border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-navy transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li>
                <span className="font-medium text-navy" aria-current="page">
                  Locations
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── Section 3: Intro ─────────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2
                id="intro-heading"
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Moving services across Dubai
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                WeMoveStuff covers all major Dubai communities — from high-rise towers in the Marina and Downtown to villa communities like Arabian Ranches and Emirates Hills, and newer developments in JVC, Al Furjan and Town Square. Whatever the property type or community, we bring the same professional approach to every move.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Select your area from the list below to find out more about moving services in your community, or contact us directly for a quote.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 4: Location Grid ─────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="locations-heading">
        <div className="max-container container-padding flex flex-col gap-14">
          <FadeUp>
            <SectionHeader
              id="locations-heading"
              headline="Find your area"
              subheadline="Browse all 26 Dubai areas we serve, organised by neighbourhood type."
            />
          </FadeUp>

          <FadeUp delay={0.06}>
            <AreaGroup
              id="marina-waterfront"
              headline="Marina & Waterfront"
              locations={MARINA_WATERFRONT}
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaGroup
              id="downtown-business"
              headline="Downtown & Business"
              locations={DOWNTOWN_BUSINESS}
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <AreaGroup
              id="villas-communities"
              headline="Villas & Established Communities"
              locations={VILLAS_COMMUNITIES}
            />
          </FadeUp>

          <FadeUp delay={0.12}>
            <AreaGroup
              id="new-communities"
              headline="New Communities"
              locations={NEW_COMMUNITIES}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Area Pills ────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="areas-pill-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-pill-heading"
              headline="All Dubai service areas"
              subheadline="WeMoveStuff moves in all major Dubai communities and many more."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Not sure which area you need?"
        body="Contact us directly and we'll confirm coverage and provide a quote for your move, wherever in Dubai you are."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
