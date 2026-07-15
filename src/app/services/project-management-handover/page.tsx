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
  title: "Fit-Out Project Management & Handover Dubai",
  description:
    "One coordinated project from start to completion — programme management, contractor and supplier coordination, quality assurance, snagging and final handover for commercial fit-outs in Dubai.",
  path: "/services/project-management-handover",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Project Management & Handover" },
];

// Responsibilities and handover activities organised into the three
// delivery phases — every previously listed item is preserved.
const PHASE_GROUPS = [
  {
    heading: "Plan",
    note: "Before works begin: the project is defined and organised.",
    items: [
      "Scope definition",
      "Programme preparation",
      "Budget coordination",
      "Procurement planning",
    ],
  },
  {
    heading: "Control",
    note: "During delivery: people, progress and change are actively managed.",
    items: [
      "Contractor coordination",
      "Supplier coordination",
      "Site management",
      "Progress reporting",
      "Change control",
      "Quality assurance",
    ],
  },
  {
    heading: "Complete",
    note: "At the end: the space is checked, corrected and handed back.",
    items: [
      "Snagging",
      "Defect correction",
      "Testing",
      "Cleaning coordination",
      "Completion records",
      "Keys, access and equipment information",
      "Final client walkthrough",
      "Handover coordination",
    ],
  },
];

const COMMUNICATION = [
  "Defined project contact",
  "Progress updates",
  "Decision tracking",
  "Variation approval",
  "Programme reporting",
  "Completion reporting",
];

export default function ProjectManagementPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Project Management & Handover", url: "/services/project-management-handover" },
          ]),
          serviceSchema({
            name: "Project Management and Handover",
            description:
              "Programme management, contractor coordination, quality control, snagging and final completion for commercial fit-out projects.",
            url: "/services/project-management-handover",
            serviceType: "Fit-out project management",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Project Management & Handover"
        headline="One Coordinated Project From Start to Completion"
        body="Engage manages the people, programme, information and delivery stages required to bring the complete fit-out together."
        primaryCTA={{ label: "Plan Your Project Delivery", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="project-management"
      />

      {/* ── Three delivery phases ────────────────────────────────────── */}
      <section className="bg-ink py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="phases-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="phases-heading"
              eyebrow="Plan · Control · Complete"
              headline="Responsibilities Across Three Delivery Phases"
              subheadline="The exact responsibilities are confirmed within the agreed scope for each project. Exact handover documentation depends on the agreed scope."
              align="left"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ScopeGroups groups={PHASE_GROUPS} columns={3} />
          </FadeUp>
        </div>
      </section>

      {/* ── Communication beside the programme-line drawing ──────────── */}
      <section className="bg-ink-raised border-y border-line py-[64px] md:py-[84px] lg:py-[104px]" aria-labelledby="communication-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visual="project-management" visualSide="right">
              <SectionHeader
                id="communication-heading"
                eyebrow="Communication"
                headline="Clear Reporting Throughout Delivery"
                align="left"
              />
              <p className="text-base text-stone leading-relaxed">
                Clients keep visibility of progress, decisions and changes
                through one defined point of contact — from the first programme
                milestone to the handover checkpoint.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {COMMUNICATION.map((item) => (
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
        headline="Ready to Plan the Delivery?"
        body="Engage can define the scope, programme and responsibilities before works begin, so the project starts with clarity."
        primaryCTA={{ label: "Plan Your Project Delivery", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
