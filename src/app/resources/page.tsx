import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { GUIDES } from "@/data/guides";
import type { Guide } from "@/data/guides";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { whatsappUrl } from "@/lib/seo.config";

export const metadata: Metadata = generatePageMetadata({
  title: "Dubai Moving Guides & Resources | WeMoveStuff",
  description:
    "Complete moving guides for Dubai residents — cost guides, checklists, packing tips, building permit guides and relocation advice from WeMoveStuff.",
  path: "/resources",
});

const CATEGORY_CONFIG: Record<
  Guide["category"],
  { label: string; description: string; color: string }
> = {
  moving: {
    label: "Moving Guides",
    description: "Practical guides covering every aspect of moving in Dubai.",
    color: "bg-brand/10 text-brand border-brand/20",
  },
  checklists: {
    label: "Checklists",
    description: "Step-by-step checklists for apartments, villas and offices.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  packing: {
    label: "Packing",
    description: "Expert packing guides for fragile items, kitchens and more.",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  dubai: {
    label: "Dubai Guides",
    description: "Dubai-specific guidance on permits, utilities and admin.",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  setup: {
    label: "Home Setup",
    description: "Furniture assembly, TV installation and setup guides.",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  relocation: {
    label: "Relocation",
    description: "Guides for families, pets and new residents moving to Dubai.",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
};

// Ordered category display with specific guide ordering
const CATEGORY_SECTIONS: {
  category: Guide["category"];
  slugs: string[];
}[] = [
  {
    category: "moving",
    slugs: [
      "dubai-moving-cost-guide",
      "moving-day-guide",
      "how-to-prepare-for-movers-guide",
      "storage-guide",
      "decluttering-guide",
      "moving-timeline-guide",
      "moving-budget-guide",
      "first-week-in-new-home-guide",
    ],
  },
  {
    category: "checklists",
    slugs: [
      "apartment-moving-checklist",
      "villa-moving-checklist",
      "office-relocation-checklist",
    ],
  },
  {
    category: "packing",
    slugs: ["packing-guide"],
  },
  {
    category: "dubai",
    slugs: [
      "moving-to-dubai-guide",
      "leaving-dubai-guide",
      "utility-transfer-guide",
      "building-permit-guide",
    ],
  },
  {
    category: "setup",
    slugs: ["furniture-assembly-guide", "tv-installation-guide"],
  },
  {
    category: "relocation",
    slugs: [
      "moving-with-children-guide",
      "moving-with-pets-guide",
    ],
  },
];

function GuideCard({ guide }: { guide: Guide }) {
  const catConfig = CATEGORY_CONFIG[guide.category];
  return (
    <Link
      href={`/resources/${guide.slug}`}
      className="group flex flex-col gap-3 rounded-[16px] bg-white border border-light-grey/60 p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,31,91,0.08)] hover:border-brand/20 transition-all duration-200 h-full"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${catConfig.color}`}
        >
          {catConfig.label}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden />
          {guide.readingTime} min
        </span>
      </div>

      <h3 className="text-[15px] font-bold text-navy leading-snug group-hover:text-brand transition-colors">
        {guide.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {guide.excerpt}
      </p>

      <div className="flex items-center gap-1 text-sm font-semibold text-brand mt-auto pt-1">
        Read guide
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  // Build guide lookup map
  const guideMap = new Map(GUIDES.map((g) => [g.slug, g]));

  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        variant="centered"
        headline="Dubai Moving Guides & Resources"
        subheadline="Comprehensive guides to every aspect of moving in Dubai — from cost planning to building permits, checklists and relocation advice."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />

      {/* ── Guide Sections by Category ────────────────────────────────────── */}
      {CATEGORY_SECTIONS.map(({ category, slugs }, sectionIndex) => {
        const guides = slugs
          .map((slug) => guideMap.get(slug))
          .filter((g): g is Guide => g !== undefined);

        if (guides.length === 0) return null;

        const config = CATEGORY_CONFIG[category];
        const isAlternate = sectionIndex % 2 === 0;

        return (
          <section
            key={category}
            className={`section-padding ${isAlternate ? "bg-[#F7F9FC]" : "bg-white"}`}
            aria-labelledby={`${category}-heading`}
          >
            <div className="max-container container-padding flex flex-col gap-8">
              <FadeUp>
                <SectionHeader
                  id={`${category}-heading`}
                  headline={config.label}
                  subheadline={config.description}
                  align="left"
                />
              </FadeUp>

              <StaggerGrid
                className={
                  guides.length === 1
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    : guides.length === 2
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-5"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                }
              >
                {guides.map((guide) => (
                  <StaggerItem key={guide.slug} className="h-full">
                    <GuideCard guide={guide} />
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </section>
        );
      })}

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in Dubai?"
        body="Get a free, personalised quote from the WeMoveStuff team. We respond the same day."
        primaryCTA={{ label: "Get My Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
