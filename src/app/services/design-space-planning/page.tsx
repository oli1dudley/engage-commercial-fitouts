import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ComparisonSection from "@/components/shared/ComparisonSection";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Design & Space Planning Dubai",
  description:
    "Commercial office design and space planning in Dubai — briefs, test-fit layouts, concepts, material direction and technical coordination developed around the property and its intended use.",
  path: "/services/design-space-planning",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Design & Space Planning" },
];

const DESIGN_SERVICES = [
  "Initial brief",
  "Site review",
  "Space planning",
  "Test-fit layouts",
  "Concept direction",
  "Workstation planning",
  "Meeting-room planning",
  "Reception and front-of-house design",
  "Material and finish selection",
  "Lighting concepts",
  "Furniture planning",
  "Storage planning",
  "Technical coordination",
];

const DELIVERABLES = [
  "Layout plans",
  "Design concepts",
  "Mood boards",
  "Finish schedules",
  "Furniture plans",
  "Technical coordination drawings",
  "Visual presentations",
  "Project scope",
  "Cost plan",
  "Delivery programme",
];

export default function DesignSpacePlanningPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Design & Space Planning", url: "/services/design-space-planning" },
          ]),
          serviceSchema({
            name: "Commercial Design and Space Planning",
            description:
              "Commercial layouts, concepts, material direction and workplace planning developed around the property and its intended use.",
            url: "/services/design-space-planning",
            serviceType: "Commercial interior design and space planning",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Design & Space Planning"
        headline="Commercial Design Built Around Purpose"
        body="The design stage establishes how the space should function, look, perform and support its commercial objective."
        primaryCTA={{ label: "Start With a Project Brief", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visualLabel="Space planning concept"
      />

      {/* ── Design services ──────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="design-services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="design-services-heading"
              eyebrow="Scope"
              headline="What the Design Stage Covers"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DESIGN_SERVICES.map((item, i) => (
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

      {/* ── Investor vs occupier design ──────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="design-approach-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="design-approach-heading"
              eyebrow="Two Design Approaches"
              headline="The Objective Shapes the Design"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ComparisonSection
              left={{
                eyebrow: "Investor-Led Design",
                heading: "Designed for the Market",
                points: [
                  "Broad appeal",
                  "Practical specification",
                  "Flexible layouts",
                  "Controlled cost",
                  "Durability",
                  "Market suitability",
                ],
              }}
              right={{
                eyebrow: "Occupier-Led Design",
                heading: "Designed for the Organisation",
                points: [
                  "Organisational identity",
                  "Workflow",
                  "Team needs",
                  "Technology",
                  "Comfort",
                  "Future growth",
                ],
              }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="deliverables-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="deliverables-heading"
              eyebrow="Potential Deliverables"
              headline="What the Design Stage Can Produce"
              subheadline="Deliverables depend on the agreed project scope — not every project requires every output. The appropriate package is confirmed when the brief is established."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DELIVERABLES.map((item) => (
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

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Define the Space?"
        body="Share the property and its intended use, and the Engage team will help shape the brief, layout and design direction."
        primaryCTA={{ label: "Start With a Project Brief", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
