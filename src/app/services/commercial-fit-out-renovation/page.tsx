import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
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

const WORKS = [
  "Strip-out and removal",
  "Demolition and preparation",
  "Partitioning",
  "Ceilings",
  "Flooring",
  "Wall finishes",
  "Painting and decoration",
  "Joinery",
  "Doors and glazing",
  "Reception areas",
  "Meeting rooms",
  "Kitchens and pantries",
  "Washroom upgrades where applicable",
  "Storage",
  "Built-in furniture",
  "Final finishes",
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
        visualLabel="Fit-out works concept"
      />

      {/* ── Works ────────────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="works-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="works-heading"
              eyebrow="Scope of Works"
              headline="Works the Fit-Out May Include"
              subheadline="The exact scope is agreed for each property based on its condition, design and intended outcome."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKS.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-4 rounded-[6px] bg-ink-panel border border-line p-5 h-full">
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright shrink-0" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-cream/85">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Starting conditions ──────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="conditions-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="conditions-heading"
              eyebrow="Starting Conditions"
              headline="From Any Reasonable Starting Point"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STARTING_CONDITIONS.map((condition) => (
              <StaggerItem key={condition}>
                <div className="flex items-start gap-3 rounded-[6px] bg-ink border border-line p-5 h-full">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-cream/85">{condition}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Quality and coordination ─────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="quality-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="quality-heading"
              eyebrow="Quality & Coordination"
              headline="Controlled From Scope to Completion"
              subheadline="Site works are managed against the approved scope, with supervision, sequencing and quality checks built into the programme."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUALITY_POINTS.map((point, i) => (
              <StaggerItem key={point}>
                <div className="flex flex-col gap-3 rounded-[6px] bg-ink-panel border border-line p-5 h-full">
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-cream/85">{point}</span>
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
