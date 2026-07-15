import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ScopeGroups from "@/components/shared/ScopeGroups";
import ComparisonSection from "@/components/shared/ComparisonSection";
import ProcessSteps from "@/components/shared/ProcessSteps";
import CTASection from "@/components/shared/CTASection";
import { FadeUp } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Office Furniture, Fixtures & Equipment Dubai",
  description:
    "Selection, procurement, supply and installation of office furniture, fixtures and equipment in Dubai — the final elements that turn a completed fit-out into a usable workplace or presentable asset.",
  path: "/services/furniture-fixtures-equipment",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Furniture, Fixtures & Equipment" },
];

const PRODUCT_GROUPS = [
  {
    heading: "Workstations",
    items: ["Workstations and desks", "Task chairs", "Executive furniture"],
  },
  {
    heading: "Meetings & Reception",
    items: ["Meeting tables and chairs", "Reception furniture"],
  },
  {
    heading: "Breakout & Amenities",
    items: ["Breakout furniture", "Kitchen and pantry equipment"],
  },
  {
    heading: "Storage & Support",
    items: [
      "Storage",
      "Shelving",
      "Blinds and window treatments",
      "Signage and wayfinding",
      "Decorative lighting",
      "Accessories and finishing items",
      "Audio-visual coordination where included",
    ],
  },
];

const PROCUREMENT_STEPS = [
  { title: "Select", description: "Product selection against the brief and budget" },
  { title: "Procure", description: "Supplier coordination and ordering" },
  { title: "Coordinate", description: "Lead-time management across suppliers" },
  { title: "Deliver", description: "Scheduled delivery to site" },
  { title: "Install", description: "Assembly and final placement" },
  { title: "Inspect", description: "Defect checks before handover" },
];

export default function FurniturePage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Furniture, Fixtures & Equipment", url: "/services/furniture-fixtures-equipment" },
          ]),
          serviceSchema({
            name: "Furniture, Fixtures and Equipment",
            description:
              "Selection, procurement, supply and installation of the furniture, fixtures and equipment required to complete a commercial office.",
            url: "/services/furniture-fixtures-equipment",
            serviceType: "Office furniture, fixtures and equipment",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Furniture, Fixtures & Equipment"
        headline="The Final Elements That Make the Office Complete"
        body="Engage can source, coordinate and install the furniture, fixtures and equipment required to turn a completed fit-out into a usable workplace or presentable commercial asset."
        primaryCTA={{ label: "Plan the Complete Office", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="furniture-equipment"
      />

      {/* ── Product groups ───────────────────────────────────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="categories-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="categories-heading"
              eyebrow="Scope"
              headline="What Can Be Supplied and Installed"
              subheadline="Fourteen categories organised by the part of the office they serve — specified for the project, never sold as retail products."
              align="left"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ScopeGroups groups={PRODUCT_GROUPS} columns={2} />
          </FadeUp>
        </div>
      </section>

      {/* ── Procurement sequence ─────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line grid-texture py-[56px] md:py-[72px] lg:py-[88px]" aria-labelledby="procurement-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="procurement-heading"
              eyebrow="Procurement"
              headline="Six Steps From Selection to Inspection"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ProcessSteps steps={PROCUREMENT_STEPS} variant="row" />
          </FadeUp>
        </div>
      </section>

      {/* ── Investor vs business approach ────────────────────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="ffe-approach-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="ffe-approach-heading"
              eyebrow="Specification"
              headline="Specified Around the Commercial Objective"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ComparisonSection
              left={{
                eyebrow: "Investor Approach",
                heading: "Furnishing for the Market",
                points: [
                  "Broad appeal",
                  "Practical specification",
                  "Controlled cost",
                  "Durability",
                  "Neutral design",
                  "Presentation readiness",
                ],
              }}
              right={{
                eyebrow: "Business Approach",
                heading: "Furnishing for the Team",
                points: [
                  "Employee comfort",
                  "Ergonomics",
                  "Brand fit",
                  "Team requirements",
                  "Storage",
                  "Technology",
                  "Long-term use",
                ],
              }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Completing a Fit-Out or Furnishing a Space?"
        body="Engage can plan, procure and install the complete furniture package as part of the wider project or as the finishing stage."
        primaryCTA={{ label: "Plan the Complete Office", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
