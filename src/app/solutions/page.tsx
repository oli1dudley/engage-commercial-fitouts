import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CTA } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import SolutionCard from "@/components/shared/SolutionCard";
import ComparisonSection from "@/components/shared/ComparisonSection";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Fit-Out Solutions Dubai | Investors & Occupiers",
  description:
    "Commercial fit-out solutions built around your objective — property transformations for investors and asset owners, and complete office fit-outs for businesses and occupiers across Dubai.",
  path: "/solutions",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "Solutions" }];

const INVESTOR_SERVICES = [
  "Initial property assessment",
  "Commercial brief development",
  "Layout and design planning",
  "Strip-out and refurbishment",
  "MEP and HVAC works",
  "Interior construction and finishes",
  "Furniture and equipment",
  "Final presentation and handover",
];

const INVESTOR_OUTCOMES = [
  "Improve commercial presentation",
  "Prepare the office for resale",
  "Prepare the property for leasing",
  "Reposition an outdated asset",
  "Deliver a complete turnkey space",
];

const OCCUPIER_SERVICES = [
  "Workplace brief development",
  "Space planning",
  "Brand and design integration",
  "Workstations and private offices",
  "Meeting and collaboration spaces",
  "Technical infrastructure",
  "Furniture and storage",
  "Installation and operational handover",
];

export default function SolutionsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Solutions"
        headline="Commercial Fit-Out Solutions Built Around Your Objective"
        body="The same office can require a very different strategy depending on whether it is being prepared for resale, leasing or occupation. Engage structures each project around the client's commercial objective."
        primaryCTA={{ ...CTA.primary, variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visualLabel="Commercial strategy concept"
      />

      {/* ── Investors and Asset Owners ───────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="investors-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="investors-heading"
              eyebrow="Investors & Asset Owners"
              headline="Transforming Commercial Property Into a Market-Ready Asset"
              subheadline="Engage works with investors, landlords and asset owners purchasing or holding commercial offices that require full transformation."
              align="left"
            />
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeUp className="h-full">
              <SolutionCard
                eyebrow="Delivered Services"
                title="What Engage Delivers"
                description="The complete transformation scope, coordinated through one project team."
                points={INVESTOR_SERVICES}
                href="/solutions/investors-asset-owners"
                cta="View Investor Solutions"
                className="h-full"
              />
            </FadeUp>
            <FadeUp delay={0.08} className="h-full">
              <SolutionCard
                eyebrow="Potential Outcomes"
                title="What the Transformation Can Achieve"
                description="Each project is planned around the intended commercial result for the asset."
                points={INVESTOR_OUTCOMES}
                href="/solutions/investors-asset-owners"
                cta="View Investor Solutions"
                className="h-full"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Businesses and Occupiers ─────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="occupiers-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="occupiers-heading"
              eyebrow="Businesses & Occupiers"
              headline="Workplaces Designed and Delivered for Use"
              subheadline="Engage supports businesses moving into, expanding, relocating or refurbishing commercial offices."
              align="left"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OCCUPIER_SERVICES.map((service, i) => (
              <StaggerItem key={service}>
                <div className="flex items-center gap-4 rounded-[6px] bg-ink border border-line p-5 h-full">
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright shrink-0" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-cream/85">{service}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="h-full">
            <SolutionCard
              eyebrow="For Occupiers"
              title="Complete Office Fit-Outs for Businesses"
              description="From workplace brief and space planning through fit-out, furniture and operational handover — one coordinated route to a working office."
              href="/solutions/businesses-occupiers"
              cta="View Business Fit-Out Solutions"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="comparison-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="comparison-heading"
              eyebrow="Two Routes Compared"
              headline="Investor-Led and Occupier-Led Projects"
              subheadline="The delivery capability is the same. The strategy, specification and outcome are shaped by the objective."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ComparisonSection
              left={{
                eyebrow: "Investor-Led",
                heading: "Preparing Property for the Market",
                points: [
                  "Designed for broad market appeal",
                  "Resale, leasing or repositioning objective",
                  "Flexible target-user planning",
                  "Specification controlled against the asset strategy",
                  "Market-ready handover",
                ],
              }}
              right={{
                eyebrow: "Occupier-Led",
                heading: "Preparing Workplaces for Occupation",
                points: [
                  "Designed around a specific organisation",
                  "Operational occupation objective",
                  "Team and workflow requirements",
                  "Specification controlled against business needs",
                  "Move-in-ready handover",
                ],
              }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Not Sure Which Route Fits Your Project?"
        body="Share the property, its condition and your intended outcome. Engage will recommend the appropriate approach before any commitment."
        primaryCTA={{ ...CTA.primary, variant: "primary" }}
      />
    </>
  );
}
