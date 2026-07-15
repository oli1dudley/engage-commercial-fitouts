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
  title: "Fit-Out Project Management & Handover Dubai",
  description:
    "One coordinated project from start to completion — programme management, contractor and supplier coordination, quality assurance, snagging and final handover for commercial fit-outs in Dubai.",
  path: "/services/project-management-handover",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Project Management & Handover" },
];

const RESPONSIBILITIES = [
  "Scope definition",
  "Programme preparation",
  "Budget coordination",
  "Procurement planning",
  "Contractor coordination",
  "Supplier coordination",
  "Site management",
  "Progress reporting",
  "Quality assurance",
  "Change control",
  "Snagging",
  "Handover coordination",
];

const COMMUNICATION = [
  "Defined project contact",
  "Progress updates",
  "Decision tracking",
  "Variation approval",
  "Programme reporting",
  "Completion reporting",
];

const HANDOVER = [
  "Final inspection",
  "Snagging",
  "Defect correction",
  "Cleaning coordination",
  "Testing",
  "Completion records",
  "Keys and access",
  "Equipment information",
  "Final client walkthrough",
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
        visualLabel="Project coordination concept"
      />

      {/* ── Responsibilities ─────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="responsibilities-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="responsibilities-heading"
              eyebrow="Responsibilities"
              headline="What Project Management May Include"
              subheadline="The exact responsibilities are confirmed within the agreed scope for each project."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESPONSIBILITIES.map((item, i) => (
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

      {/* ── Communication ────────────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="communication-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="communication-heading"
              eyebrow="Communication"
              headline="Clear Reporting Throughout Delivery"
              subheadline="Clients keep visibility of progress, decisions and changes through one defined point of contact."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
            {COMMUNICATION.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-[6px] bg-ink border border-line p-5 h-full">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-cream/85">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Handover ─────────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="handover-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="handover-heading"
              eyebrow="Handover"
              headline="Completing and Handing Back the Space"
              subheadline="The final stage prepares the space for its intended use. Exact documentation depends on the agreed scope."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HANDOVER.map((item, i) => (
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

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Plan the Delivery?"
        body="Engage can define the scope, programme and responsibilities before works begin, so the project starts with clarity."
        primaryCTA={{ label: "Plan Your Project Delivery", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
