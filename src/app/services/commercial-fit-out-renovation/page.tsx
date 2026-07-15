import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ScopeGroups from "@/components/shared/ScopeGroups";
import ContentSplit from "@/components/shared/ContentSplit";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Fit-Out & Renovation Dubai",
  description:
    "Complete commercial renovation and interior fit-out in Dubai — strip-out, partitions, ceilings, flooring, joinery, finishes and final installation managed as one coordinated project.",
  path: "/services/commercial-fit-out-renovation",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Commercial Fit-Out & Renovation" },
];

const SCOPE_GROUPS = [
  {
    heading: "Preparation",
    note: "Clearing and preparing the space before construction begins.",
    items: ["Strip-out and removal", "Demolition", "Site preparation"],
  },
  {
    heading: "Construction",
    note: "The physical build of the new interior.",
    items: [
      "Partitioning",
      "Ceilings",
      "Doors and glazing",
      "Joinery",
      "Built-in furniture",
    ],
  },
  {
    heading: "Finishes",
    note: "The surfaces and detail that complete the interior.",
    items: [
      "Flooring",
      "Wall finishes",
      "Painting and decoration",
      "Final finishes",
    ],
  },
  {
    heading: "Facilities",
    note: "The functional spaces every working office depends on.",
    items: [
      "Reception areas",
      "Meeting rooms",
      "Kitchens and pantries",
      "Washroom upgrades where applicable",
      "Storage",
    ],
  },
];

const STARTING_CONDITIONS = [
  "Shell and core",
  "Existing fitted office",
  "Vacant office",
  "Partially completed unit",
  "Occupied office requiring planned refurbishment",
];

const QUALITY_POINTS = [
  "Approved project scope",
  "Material selection",
  "Work sequencing",
  "Site supervision",
  "Progress updates",
  "Quality checks",
  "Snagging",
  "Completion review",
];

export default function FitOutRenovationPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Commercial Fit-Out & Renovation", url: "/services/commercial-fit-out-renovation" },
          ]),
          serviceSchema({
            name: "Commercial Fit-Out and Renovation",
            description:
              "Full interior construction and refurbishment from strip-out and preparation through construction, finishes and final installation.",
            url: "/services/commercial-fit-out-renovation",
            serviceType: "Commercial fit-out and renovation",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Commercial Fit-Out & Renovation"
        headline="Complete Commercial Renovation and Interior Fit-Out"
        body="Engage manages the physical transformation of commercial offices, from initial strip-out and preparation through construction, finishes and final installation."
        primaryCTA={{ label: "Discuss a Fit-Out Project", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="fit-out-renovation"
      />

      {/* ── Scope, grouped by build stage ────────────────────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="works-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="works-heading"
              eyebrow="Scope of Works"
              headline="Four Stages of the Physical Transformation"
              subheadline="The exact scope is agreed for each property based on its condition, design and intended outcome. The drawing follows the same sequence: existing condition, preparation, construction, finished office."
              align="left"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ScopeGroups groups={SCOPE_GROUPS} columns={4} />
          </FadeUp>
        </div>
      </section>

      {/* ── Quality beside the section build-up drawing ──────────────── */}
      <section className="bg-ink-raised border-y border-line py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="quality-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visual="fit-out-renovation" visualSide="left">
              <SectionHeader
                id="quality-heading"
                eyebrow="Quality & Coordination"
                headline="Controlled From Scope to Completion"
                align="left"
              />
              <p className="text-base text-stone leading-relaxed">
                Site works are managed against the approved scope, with
                supervision, sequencing and quality checks built into the
                programme.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {QUALITY_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-cream/80">
                    <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </ContentSplit>
          </FadeUp>
        </div>
      </section>

      {/* ── Starting conditions ──────────────────────────────────────── */}
      <section className="bg-ink py-[56px] md:py-[72px] lg:py-[88px]" aria-labelledby="conditions-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="conditions-heading"
              eyebrow="Starting Conditions"
              headline="From Any Reasonable Starting Point"
              align="left"
            />
          </FadeUp>

          <StaggerGrid className="flex flex-wrap gap-3">
            {STARTING_CONDITIONS.map((condition) => (
              <StaggerItem key={condition}>
                <div className="flex items-center gap-3 rounded-[6px] bg-ink-panel border border-line px-4 py-3">
                  <span className="inline-block w-3.5 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-cream/85">{condition}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Planning a Renovation or Fit-Out?"
        body="Engage can review the property, establish the likely scope and prepare a delivery programme built around your objective."
        primaryCTA={{ label: "Discuss a Fit-Out Project", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
