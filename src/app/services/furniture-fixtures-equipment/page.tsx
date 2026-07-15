import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ComparisonSection from "@/components/shared/ComparisonSection";
import ProcessSteps from "@/components/shared/ProcessSteps";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
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

const CATEGORIES = [
  "Workstations and desks",
  "Task chairs",
  "Executive furniture",
  "Meeting tables and chairs",
  "Reception furniture",
  "Breakout furniture",
  "Storage",
  "Shelving",
  "Kitchen and pantry equipment",
  "Blinds and window treatments",
  "Decorative lighting",
  "Accessories and finishing items",
  "Signage and wayfinding",
  "Audio-visual coordination where included",
];

const PROCUREMENT_STEPS = [
  { title: "Product selection" },
  { title: "Supplier coordination" },
  { title: "Lead-time management" },
  { title: "Delivery scheduling" },
  { title: "Installation" },
  { title: "Final placement" },
  { title: "Defect checks" },
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
        visualLabel="Furnished office concept"
      />

      {/* ── Categories ───────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="categories-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="categories-heading"
              eyebrow="Categories"
              headline="What Can Be Supplied and Installed"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-[6px] bg-ink-panel border border-line p-5 h-full">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-cream/85">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Investor vs business approach ────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="ffe-approach-heading">
        <div className="max-container container-padding flex flex-col gap-12">
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

      {/* ── Procurement process ──────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="procurement-heading">
        <div className="max-container container-padding flex flex-col gap-14">
          <FadeUp>
            <SectionHeader
              id="procurement-heading"
              eyebrow="Procurement"
              headline="A Managed Procurement and Installation Process"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ProcessSteps steps={PROCUREMENT_STEPS} variant="row" />
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
