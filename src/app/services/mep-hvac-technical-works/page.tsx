import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ScopeGroups from "@/components/shared/ScopeGroups";
import ContentSplit from "@/components/shared/ContentSplit";
import CTASection from "@/components/shared/CTASection";
import { FadeUp } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "MEP, HVAC & Technical Works Dubai",
  description:
    "Coordination of the technical infrastructure behind a complete office — HVAC, electrical, plumbing, lighting, power, data and life-safety coordination for commercial fit-outs in Dubai.",
  path: "/services/mep-hvac-technical-works",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "MEP, HVAC & Technical Works" },
];

const SYSTEM_GROUPS = [
  {
    heading: "Mechanical",
    items: ["HVAC planning and modification", "Air-conditioning distribution", "Ventilation"],
  },
  {
    heading: "Electrical",
    items: ["Electrical systems", "Power outlets", "Lighting", "Emergency lighting"],
  },
  {
    heading: "Plumbing",
    items: ["Plumbing", "Drainage"],
  },
  {
    heading: "Data & Security",
    items: [
      "Data and network cabling",
      "Access-control coordination",
      "CCTV coordination",
    ],
  },
  {
    heading: "Compliance & Completion",
    items: ["Fire and life-safety coordination", "Testing and commissioning"],
  },
];

const ALIGNMENT_POINTS = [
  "Final office layout",
  "Workstation positions",
  "Meeting rooms",
  "Equipment",
  "Lighting",
  "Ceiling design",
  "Building systems",
  "Landlord requirements",
  "Applicable approvals and regulations",
];

export default function TechnicalWorksPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "MEP, HVAC & Technical Works", url: "/services/mep-hvac-technical-works" },
          ]),
          serviceSchema({
            name: "MEP, HVAC and Technical Works",
            description:
              "Mechanical, electrical, plumbing, air-conditioning, lighting, power and data coordination for commercial office fit-outs.",
            url: "/services/mep-hvac-technical-works",
            serviceType: "MEP and technical coordination",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="MEP, HVAC & Technical Works"
        headline="The Technical Systems Behind a Complete Office"
        body="A successful commercial fit-out depends on more than visible finishes. Engage coordinates the technical infrastructure required for the office to operate safely and effectively."
        primaryCTA={{ label: "Review Your Technical Requirements", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="mep-hvac"
      />

      {/* ── Systems diagram + grouped scope ──────────────────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="technical-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <ContentSplit visual="mep-hvac" visualSide="right">
              <SectionHeader
                id="technical-heading"
                eyebrow="Five Technical Systems"
                headline="Coordinated as One Installation"
                align="left"
              />
              <p className="text-base text-stone leading-relaxed">
                Ductwork, power, lighting, data and life-safety routes share the
                same ceiling voids, risers and programme. Engage plans them
                together — as in the services drawing — rather than as isolated
                trades.
              </p>
              <p className="text-sm text-cream/60 leading-relaxed">
                Depending on the project scope, technical works may be delivered
                directly, through specialist contractors or in coordination with
                external consultants and building teams.
              </p>
            </ContentSplit>
          </FadeUp>

          <FadeUp delay={0.08}>
            <ScopeGroups groups={SYSTEM_GROUPS} columns={3} />
          </FadeUp>
        </div>
      </section>

      {/* ── Alignment ────────────────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line py-[56px] md:py-[72px] lg:py-[88px]" aria-labelledby="alignment-heading">
        <div className="max-container container-padding flex flex-col gap-8 max-w-4xl">
          <FadeUp>
            <SectionHeader
              id="alignment-heading"
              eyebrow="Coordinated With the Design"
              headline="Technical Systems Aligned With the Finished Office"
              subheadline="Technical infrastructure is planned against the final layout rather than treated as an isolated trade, so services support the way the completed office will actually be used."
              align="left"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5">
              {ALIGNMENT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-cream/80">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Reviewing the Technical Scope of a Fit-Out?"
        body="Share the property details and intended layout, and Engage will help clarify the technical works, responsibilities and coordination required."
        primaryCTA={{ label: "Review Your Technical Requirements", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
