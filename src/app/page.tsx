import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { CTA, SOLUTIONS } from "@/lib/site.config";

import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import SolutionCard from "@/components/shared/SolutionCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Fit-Out & Property Transformation Dubai | Engage Commercial Fitouts",
  description:
    "Engage Commercial Fitouts delivers complete office transformations across Dubai — design, renovation, fit-out, technical works, furniture and final handover through one fully managed service.",
  path: "/",
});

// ─── Section data ───────────────────────────────────────────────────────────

const CAPABILITIES: { label: string; href: string }[] = [
  { label: "Design and space planning", href: "/services/design-space-planning" },
  { label: "Commercial renovation and fit-out", href: "/services/commercial-fit-out-renovation" },
  { label: "MEP, HVAC and electrical works", href: "/services/mep-hvac-technical-works" },
  { label: "Flooring, ceilings and partitions", href: "/services/commercial-fit-out-renovation" },
  { label: "Joinery and interior finishing", href: "/services/commercial-fit-out-renovation" },
  { label: "Furniture, fixtures and equipment", href: "/services/furniture-fixtures-equipment" },
  { label: "Project management", href: "/services/project-management-handover" },
  { label: "Snagging and final handover", href: "/services/project-management-handover" },
];

const INVESTOR_POINTS = [
  "Intended resale or leasing strategy",
  "Target occupier",
  "Property size and layout",
  "Required specification",
  "Budget and delivery programme",
  "Practical market appeal",
  "Flexibility and long-term usability",
];

const PROCESS_STEPS = [
  { title: "Property and project assessment" },
  { title: "Brief, scope and commercial objectives" },
  { title: "Design and space planning" },
  { title: "Costing and delivery programme" },
  { title: "Renovation and technical works" },
  { title: "Furniture and final installation" },
  { title: "Quality checks, snagging and handover" },
];

const WHY_ENGAGE = [
  {
    title: "One Accountable Team",
    description:
      "A single delivery partner coordinates the complete project from initial planning through final handover.",
  },
  {
    title: "Commercially Led Planning",
    description:
      "Every project is considered against the purpose of the property and the client's intended commercial outcome.",
  },
  {
    title: "End-to-End Capability",
    description:
      "Design, construction, technical works, furniture and handover are managed within one coordinated delivery structure.",
  },
  {
    title: "Clear Project Control",
    description:
      "Scope, costs, programme, responsibilities and changes are clearly managed throughout delivery.",
  },
  {
    title: "Ready for Market or Use",
    description:
      "The completed space is handed back prepared for resale, leasing, presentation or occupation.",
  },
];

const TRANSFORMATION_TYPES = [
  "Shell-and-core office transformation",
  "Outdated office refurbishment",
  "Investor resale or leasing preparation",
  "Complete business office fit-out",
  "Workspace reconfiguration",
  "Technical and services upgrade",
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Commercial Fit-Out and Property Transformation"
        headline="Commercial Spaces, Transformed End to End"
        body="Engage Commercial Fitouts delivers complete office transformations across Dubai, managing everything from design and technical planning to renovation, fit-out, furniture and final handover."
        primaryCTA={{ ...CTA.primary, variant: "primary" }}
        secondaryCTA={{ ...CTA.services, variant: "secondary" }}
        visualLabel="Commercial office concept"
      />

      {/* ── Section 2: Two Solutions ────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="solutions-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="solutions-heading"
              eyebrow="Two Commercial Routes"
              headline="One Complete Service. Two Commercial Objectives."
              subheadline="Engage delivers the same complete fit-out capability around two different commercial outcomes: preparing property for the market and preparing workplaces for occupation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StaggerItem className="h-full">
              <SolutionCard
                eyebrow="Route One"
                title="For Investors & Asset Owners"
                description="We transform outdated, vacant and shell-condition offices into complete, market-ready commercial spaces prepared for resale, leasing or asset repositioning."
                href={SOLUTIONS[0].href}
                cta="Explore Investor Solutions"
                className="h-full"
              />
            </StaggerItem>
            <StaggerItem className="h-full">
              <SolutionCard
                eyebrow="Route Two"
                title="For Businesses & Occupiers"
                description="We design, renovate and fit out offices for businesses that need a functional, professional and fully operational workplace."
                href={SOLUTIONS[1].href}
                cta="Explore Business Fit-Outs"
                className="h-full"
              />
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 3: End-to-End Capability ────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="capability-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="capability-heading"
              eyebrow="End-to-End Capability"
              headline="From Empty Space to Finished Office"
              subheadline="Engage provides one coordinated delivery service covering the full commercial fit-out journey. Clients work with one project team rather than separately managing designers, contractors, technical specialists, furniture suppliers and installers."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((capability, i) => (
              <StaggerItem key={capability.label}>
                <Link
                  href={capability.href}
                  className="group flex items-center gap-4 rounded-[6px] bg-ink border border-line p-5 h-full transition-colors duration-200 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                >
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright shrink-0" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-cream/85 group-hover:text-cream transition-colors">
                    {capability.label}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 4: Investor Proposition ─────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="investor-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeUp className="flex flex-col gap-6">
              <SectionHeader
                id="investor-heading"
                eyebrow="The Investor Proposition"
                headline="Built Around the Commercial Outcome"
                align="left"
              />
              <p className="text-base md:text-lg text-stone leading-relaxed">
                For investors and property owners, the objective is not simply to
                renovate an office. The objective is to create a commercially
                attractive product aligned with the target buyer, tenant and
                market position.
              </p>
              <p className="text-base text-stone leading-relaxed">
                Engage plans each transformation around the intended resale or
                leasing strategy, likely occupier, property size, layout,
                required specification, budget, programme and practical market
                appeal.
              </p>
              <Button render={<Link href={CTA.investor.href} />} variant="outline" size="lg" className="w-full sm:w-fit mt-2">
                {CTA.investor.label}
                <ArrowRight className="size-4" />
              </Button>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="flex flex-col divide-y divide-line rounded-[6px] bg-ink-panel border border-line px-7 py-3">
                {INVESTOR_POINTS.map((point, i) => (
                  <li key={point} className="flex items-center gap-5 py-4">
                    <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright shrink-0" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-[15px] text-cream/85">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 5: Process Preview ──────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line grid-texture section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-14">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              eyebrow="Our Process"
              headline="A Managed Route From Assessment to Handover"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={CTA.process}
              variant="row"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Why Engage ───────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-heading"
              eyebrow="Why Engage"
              headline="Why Clients Work With Engage"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ENGAGE.map((item, i) => (
              <StaggerItem key={item.title} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}>
                <div className="flex flex-col gap-3 rounded-[6px] bg-ink-panel border border-line p-6 lg:p-7 h-full transition-colors duration-200 hover:border-gold/40">
                  <span className="inline-block w-8 h-px bg-gold" aria-hidden />
                  <h3 className="text-base lg:text-lg font-semibold text-cream">{item.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 7: Commercial Transformations ───────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="transformations-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="transformations-heading"
              eyebrow="Capabilities"
              headline="Commercial Transformations"
              subheadline="Explore the types of spaces, scopes and commercial outcomes supported through the Engage delivery model."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRANSFORMATION_TYPES.map((type) => (
              <StaggerItem key={type}>
                <div className="flex items-start gap-3 rounded-[6px] bg-ink border border-line p-5 h-full">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm md:text-[15px] font-medium text-cream/85">{type}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/projects" />} variant="outline" size="lg">
              Explore Our Capabilities
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 8: Final CTA ────────────────────────────────────── */}
      <CTASection
        headline="Planning a Commercial Property Transformation?"
        body="Whether you are preparing an office for sale, leasing or occupation, Engage can manage the complete journey from initial assessment to final handover."
        primaryCTA={{ ...CTA.consultation, variant: "primary" }}
      />
    </>
  );
}
