import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { CTA } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { FadeUp } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Fit-Out FAQs Dubai",
  description:
    "Answers to common questions about Engage's commercial fit-out, renovation and project delivery services in Dubai — scope, pricing, programmes, approvals and handover.",
  path: "/faqs",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "FAQs" }];

// Visible answers match the FAQPage structured data exactly.
const FAQS: FAQItem[] = [
  {
    question: "What types of commercial properties do you fit out?",
    answer:
      "Engage focuses on commercial office environments, including shell-and-core units, vacant fitted offices, outdated workplaces, partially completed spaces and existing offices requiring refurbishment or reconfiguration.",
  },
  {
    question: "Do you work with commercial property investors?",
    answer:
      "Yes. Engage works with investors, landlords and asset owners preparing commercial offices for resale, leasing or repositioning.",
  },
  {
    question: "Can you take a project from shell and core to completion?",
    answer:
      "Yes, subject to the agreed scope, building requirements and technical assessment. Engage can coordinate the project from initial planning through fit-out, furniture, snagging and handover.",
  },
  {
    question: "Do you provide both design and construction?",
    answer:
      "Engage can coordinate design, space planning, fit-out and project delivery within one service. The exact scope is agreed for each property.",
  },
  {
    question: "Can you supply office furniture?",
    answer:
      "Yes. Furniture, fixtures and equipment can be included within the project scope, including product selection, procurement, delivery and installation.",
  },
  {
    question: "Do you manage HVAC and MEP works?",
    answer:
      "HVAC, electrical, plumbing, lighting, power and related technical works can be included or coordinated depending on the project requirements.",
  },
  {
    question: "Can you refurbish an existing office?",
    answer:
      "Yes. Engage can renovate, reconfigure and upgrade existing commercial offices as well as deliver new shell-and-core fit-outs.",
  },
  {
    question: "Do you work with landlords and tenants?",
    answer:
      "Yes. Projects may be delivered for investors, landlords, asset owners, tenants and businesses occupying their own offices.",
  },
  {
    question: "Can you prepare an office for resale or leasing?",
    answer:
      "Yes. Investor-led transformations are planned around the intended buyer, tenant, quality level, flexibility, market position and commercial objective.",
  },
  {
    question: "How is a project priced?",
    answer:
      "Pricing depends on the property condition, size, design, specification, technical requirements, furniture scope and programme. A project assessment is normally required before a detailed proposal is prepared.",
  },
  {
    question: "How long does an office fit-out take?",
    answer:
      "The programme depends on the size, condition, scope, approvals, procurement requirements and building restrictions. A project-specific programme is prepared once the scope is established.",
  },
  {
    question: "Can work be completed in phases?",
    answer:
      "Phased delivery may be possible where the property, building rules and project scope allow it.",
  },
  {
    question: "Do you coordinate with building management?",
    answer:
      "Building-management coordination can form part of the project process where required and included within the agreed scope.",
  },
  {
    question: "Do you manage approvals?",
    answer:
      "Approval responsibilities vary between buildings, authorities and project types. Engage will clarify which approvals are required and which responsibilities are included before work begins.",
  },
  {
    question: "What information is required for an initial proposal?",
    answer:
      "Useful information includes the property location, approximate size, existing condition, intended use, floor plans, photographs, target programme and budget expectations.",
  },
  {
    question: "Can Engage complete only part of a project?",
    answer:
      "Engage is structured around complete delivery, but individual services may be considered depending on the project and scope.",
  },
  {
    question: "What happens during handover?",
    answer:
      "The final stage may include inspection, snagging, correction of defects, testing, cleaning coordination, completion records and a final client walkthrough, depending on the agreed scope.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "Engage serves commercial office projects across Dubai, subject to project scope and availability.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQs", url: "/faqs" },
          ]),
          faqPageSchema(FAQS),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Frequently Asked Questions"
        headline="Commercial Fit-Out Questions"
        body="Answers to common questions about Engage's commercial fit-out, renovation and project delivery services."
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* ── FAQ accordion ────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="faqs-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader
              id="faqs-heading"
              eyebrow="Eighteen Common Questions"
              headline="Scope, Delivery, Pricing and Handover"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="A Question We Haven't Answered?"
        body="Send the details of your property or project and the team will respond with specific guidance."
        primaryCTA={{ ...CTA.primary, variant: "primary" }}
      />
    </>
  );
}
