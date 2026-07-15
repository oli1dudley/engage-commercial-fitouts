import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContentSplit from "@/components/shared/ContentSplit";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
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

const TECHNICAL_SERVICES = [
  "HVAC planning and modification",
  "Air-conditioning distribution",
  "Ventilation",
  "Electrical systems",
  "Power outlets",
  "Lighting",
  "Emergency lighting",
  "Plumbing and drainage",
  "Data and network cabling",
  "Access-control coordination",
  "CCTV coordination",
  "Fire and life-safety coordination",
  "Testing and commissioning",
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
        visualLabel="Technical systems concept"
      />

      {/* ── Technical services ───────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="technical-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="technical-heading"
              eyebrow="Scope"
              headline="Technical Services the Project May Include"
              subheadline="Depending on the project scope, technical works may be delivered directly, through specialist contractors or in coordination with external consultants and building teams."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECHNICAL_SERVICES.map((item, i) => (
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

      {/* ── Alignment ────────────────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="alignment-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visualLabel="Services coordination concept" visualSide="left">
              <SectionHeader
                id="alignment-heading"
                eyebrow="Coordinated With the Design"
                headline="Technical Systems Aligned With the Finished Office"
                align="left"
              />
              <p className="text-base text-stone leading-relaxed">
                Technical infrastructure is planned against the final layout
                rather than treated as an isolated trade, so services support
                the way the completed office will actually be used.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {ALIGNMENT_POINTS.map((point) => (
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

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Reviewing the Technical Scope of a Fit-Out?"
        body="Share the property details and intended layout, and Engage will help clarify the technical works, responsibilities and coordination required."
        primaryCTA={{ label: "Review Your Technical Requirements", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
