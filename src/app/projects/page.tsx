import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CASE_STUDIES } from "@/data/case-studies";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CapabilityCard from "@/components/shared/CapabilityCard";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Fit-Out Capabilities Dubai",
  description:
    "Explore the property conditions, project scopes and commercial outcomes supported through the Engage delivery model — from shell-and-core transformations to technical upgrades across Dubai.",
  path: "/projects",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "Projects" }];

const CAPABILITIES = [
  {
    title: "Shell-and-Core Office Transformation",
    details: [
      { label: "Starting point", value: "Bare shell unit with no internal fit-out, finishes or services distribution." },
      { label: "Likely scope", value: "Full design, technical works, interior construction, finishes and furniture." },
      { label: "Outcome", value: "A complete office ready for market presentation or occupation." },
    ],
    services: [
      { label: "Design & Space Planning", href: "/services/design-space-planning" },
      { label: "Fit-Out & Renovation", href: "/services/commercial-fit-out-renovation" },
      { label: "MEP & Technical", href: "/services/mep-hvac-technical-works" },
    ],
  },
  {
    title: "Existing Office Refurbishment",
    details: [
      { label: "Starting point", value: "A dated or tired office that no longer presents or performs well." },
      { label: "Likely scope", value: "Strip-out of selected elements, new finishes, updated layout and lighting." },
      { label: "Outcome", value: "A refreshed, professional workspace aligned with current requirements." },
    ],
    services: [
      { label: "Fit-Out & Renovation", href: "/services/commercial-fit-out-renovation" },
      { label: "Design & Space Planning", href: "/services/design-space-planning" },
    ],
  },
  {
    title: "Investor Resale Preparation",
    details: [
      { label: "Starting point", value: "An outdated, vacant or incomplete office held or purchased as an asset." },
      { label: "Likely scope", value: "Market-led design, controlled specification and complete delivery." },
      { label: "Outcome", value: "A finished, presentable office prepared for the sales process." },
    ],
    services: [
      { label: "Investor Solutions", href: "/solutions/investors-asset-owners" },
      { label: "Project Management", href: "/services/project-management-handover" },
    ],
  },
  {
    title: "Leasing Preparation",
    details: [
      { label: "Starting point", value: "A vacant unit that needs to appeal to prospective tenants." },
      { label: "Likely scope", value: "Flexible layout planning, durable specification and complete finishing." },
      { label: "Outcome", value: "A market-ready space that tenants can assess and occupy with confidence." },
    ],
    services: [
      { label: "Investor Solutions", href: "/solutions/investors-asset-owners" },
      { label: "Design & Space Planning", href: "/services/design-space-planning" },
    ],
  },
  {
    title: "Complete Business Office Fit-Out",
    details: [
      { label: "Starting point", value: "A business moving into, expanding within or relocating to a new space." },
      { label: "Likely scope", value: "Workplace brief, design, fit-out, technical works, furniture and handover." },
      { label: "Outcome", value: "A fully operational office delivered ready for the team to work in." },
    ],
    services: [
      { label: "Business Fit-Outs", href: "/solutions/businesses-occupiers" },
      { label: "Furniture & Equipment", href: "/services/furniture-fixtures-equipment" },
    ],
  },
  {
    title: "Workspace Reconfiguration",
    details: [
      { label: "Starting point", value: "An occupied office whose layout no longer suits the organisation." },
      { label: "Likely scope", value: "Replanning, partition changes, services adjustments and phased works." },
      { label: "Outcome", value: "A reconfigured workspace that supports current teams and workflow." },
    ],
    services: [
      { label: "Design & Space Planning", href: "/services/design-space-planning" },
      { label: "Fit-Out & Renovation", href: "/services/commercial-fit-out-renovation" },
    ],
  },
  {
    title: "Furniture and Final Setup",
    details: [
      { label: "Starting point", value: "A completed or near-complete fit-out that needs furnishing." },
      { label: "Likely scope", value: "Product selection, procurement, delivery, installation and placement." },
      { label: "Outcome", value: "A furnished space ready for presentation, occupation or handover." },
    ],
    services: [
      { label: "Furniture & Equipment", href: "/services/furniture-fixtures-equipment" },
    ],
  },
  {
    title: "MEP, HVAC and Technical Upgrade",
    details: [
      { label: "Starting point", value: "An office whose technical systems are dated, inadequate or misaligned with the layout." },
      { label: "Likely scope", value: "HVAC, electrical, lighting, power and data works coordinated with the space." },
      { label: "Outcome", value: "Technical infrastructure that supports the office safely and effectively." },
    ],
    services: [
      { label: "MEP & Technical", href: "/services/mep-hvac-technical-works" },
      { label: "Project Management", href: "/services/project-management-handover" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Capabilities"
        headline="Commercial Fit-Out Capabilities"
        body="Explore the property conditions, project scopes and commercial outcomes supported through the Engage delivery model."
        primaryCTA={{ label: "Discuss a Similar Project", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visualLabel="Capability overview concept"
      />

      {/* ── Capability categories ────────────────────────────────────── */}
      {/*
        Genuine case studies will replace this grid as Engage projects
        complete — the data structure is ready in src/data/case-studies.ts.
      */}
      <section className="bg-ink section-padding" aria-labelledby="capabilities-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="capabilities-heading"
              eyebrow="Eight Capability Categories"
              headline="Spaces, Scopes and Outcomes"
              subheadline="Project scope, specification and programme are developed around the individual property and client objective."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {CAPABILITIES.map((capability, i) => (
              <StaggerItem key={capability.title} className="h-full">
                <CapabilityCard
                  index={i + 1}
                  title={capability.title}
                  details={capability.details}
                  services={capability.services}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>

          {CASE_STUDIES.length === 0 && (
            <FadeUp>
              <p className="text-sm text-cream/45 text-center max-w-xl mx-auto leading-relaxed">
                Completed Engage case studies will be published here as
                projects are delivered and approved for release.
              </p>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Working on Something Similar?"
        body="Describe the property and the outcome you need, and Engage will confirm how the delivery model applies to your project."
        primaryCTA={{ label: "Discuss a Similar Project", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
