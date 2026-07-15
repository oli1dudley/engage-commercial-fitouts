import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/shared/ProcessSteps";
import CTASection from "@/components/shared/CTASection";
import { FadeUp } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Commercial Fit-Out Process in Dubai",
  description:
    "A clear seven-stage route from property assessment to final handover — consultation, site assessment, brief and concept, scope and budget, pre-construction planning, fit-out delivery, snagging and handover.",
  path: "/process",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "Process" }];

const STAGES = [
  {
    title: "Initial Consultation",
    description:
      "We establish the property condition, client objective, intended outcome, budget expectations and target programme.",
  },
  {
    title: "Site Assessment",
    description:
      "We review the existing layout, building conditions, technical services, restrictions and potential project risks.",
  },
  {
    title: "Brief and Concept",
    description:
      "We develop the project requirements, proposed space plan, design direction and initial specification.",
  },
  {
    title: "Scope, Budget and Programme",
    description:
      "We define the work scope, cost structure, procurement requirements, responsibilities and delivery stages.",
  },
  {
    title: "Technical and Pre-Construction Planning",
    description:
      "We coordinate drawings, services, materials, suppliers, contractors, building requirements and approvals where included.",
  },
  {
    title: "Fit-Out Delivery",
    description:
      "We manage site works, technical installation, interior finishes, furniture, progress and quality.",
  },
  {
    title: "Snagging and Handover",
    description:
      "We inspect the completed project, coordinate corrections, complete the final walkthrough and prepare the space for its intended use.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Process", url: "/process" },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Process"
        headline="A Clear Route From Property Assessment to Final Handover"
        body="Every Engage project moves through the same managed structure, so clients always know what has been agreed, what happens next and who is responsible."
        primaryCTA={{ label: "Begin With a Project Consultation", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visualLabel="Delivery route concept"
      />

      {/* ── Seven stages ─────────────────────────────────────────────── */}
      <section className="bg-ink grid-texture section-padding" aria-labelledby="stages-heading">
        <div className="max-container container-padding flex flex-col gap-14">
          <FadeUp>
            <SectionHeader
              id="stages-heading"
              eyebrow="Seven Stages"
              headline="How a Project Moves From Enquiry to Completion"
            />
          </FadeUp>

          {/* CTA intentionally omitted here — the hero and the closing band
              already carry the same action, and three identical buttons on
              one page dilutes the conversion path. */}
          <FadeUp delay={0.08}>
            <ProcessSteps steps={STAGES} variant="timeline" />
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Start at Stage One"
        body="Share the property, its condition and your intended outcome, and Engage will arrange the initial consultation."
        primaryCTA={{ label: "Begin With a Project Consultation", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
