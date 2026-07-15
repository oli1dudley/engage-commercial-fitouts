import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ScopeGroups from "@/components/shared/ScopeGroups";
import ComparisonSection from "@/components/shared/ComparisonSection";
import ContentSplit from "@/components/shared/ContentSplit";
import CTASection from "@/components/shared/CTASection";
import { FadeUp } from "@/components/ui/motion";
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

const SCOPE_GROUPS = [
  {
    heading: "Discovery",
    note: "Understanding the property and the objective before anything is drawn.",
    items: ["Initial brief", "Site review"],
  },
  {
    heading: "Planning",
    note: "How the space is organised, sized and made to work.",
    items: [
      "Space planning",
      "Test-fit layouts",
      "Workstation planning",
      "Meeting-room planning",
      "Reception and front-of-house design",
      "Storage planning",
    ],
  },
  {
    heading: "Design Direction",
    note: "The look, materials and character of the finished office.",
    items: [
      "Concept direction",
      "Material and finish selection",
      "Lighting concepts",
      "Furniture planning",
    ],
  },
  {
    heading: "Coordination",
    note: "Keeping the design buildable and aligned with the technical works.",
    items: ["Technical coordination"],
  },
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
        visual="design-space-planning"
      />

      {/* ── Scope, grouped by design stage ───────────────────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="design-services-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="design-services-heading"
              eyebrow="Scope"
              headline="What the Design Stage Covers"
              subheadline="Thirteen services organised into four working stages."
              align="left"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ScopeGroups groups={SCOPE_GROUPS} columns={2} />
          </FadeUp>
        </div>
      </section>

      {/* ── Investor vs occupier design ──────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line py-[56px] md:py-[72px] lg:py-[88px]" aria-labelledby="design-approach-heading">
        <div className="max-container container-padding flex flex-col gap-10">
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

      {/* ── Deliverables beside the floor-plan drawing ───────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="deliverables-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visual="design-space-planning" visualSide="right">
              <SectionHeader
                id="deliverables-heading"
                eyebrow="Potential Deliverables"
                headline="What the Design Stage Can Produce"
                align="left"
              />
              <p className="text-base text-stone leading-relaxed">
                Deliverables depend on the agreed project scope — not every
                project requires every output. The appropriate package is
                confirmed when the brief is established.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream/80">
                    <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </ContentSplit>
          </FadeUp>
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
