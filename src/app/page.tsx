import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { CTA, SOLUTIONS } from "@/lib/site.config";

import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import SolutionCard from "@/components/shared/SolutionCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ContentSplit from "@/components/shared/ContentSplit";
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
  "Target occupier and market appeal",
  "Property size, layout and specification",
  "Budget and delivery programme",
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

// Three representative categories — the full set lives on /projects
const TRANSFORMATION_PREVIEW = [
  {
    title: "Shell-and-core office transformation",
    description: "From bare shell to a complete office ready for market or occupation.",
  },
  {
    title: "Investor resale or leasing preparation",
    description: "Market-led transformation planned around the intended buyer or tenant.",
  },
  {
    title: "Complete business office fit-out",
    description: "A fully operational workplace delivered ready for the team to work in.",
  },
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
        visual="commercial-transformation"
      />

      {/* ── Section 2: Two Solutions ────────────────────────────────── */}
      <section className="bg-ink py-[48px] md:py-[76px] lg:py-[92px]" aria-labelledby="solutions-heading">
        <div className="max-container container-padding flex flex-col gap-10">
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
                mark="investor"
                markLabel="Market-ready asset"
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
                mark="occupier"
                markLabel="Operational workplace"
                className="h-full"
              />
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 3: End-to-End Capability ────────────────────────── */}
      <section className="bg-ink-raised border-y border-line py-[44px] md:py-[64px] lg:py-[80px]" aria-labelledby="capability-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="capability-heading"
              eyebrow="End-to-End Capability"
              headline="From Empty Space to Finished Office"
              subheadline="One coordinated delivery service covering the full commercial fit-out journey — one project team rather than separately managed designers, contractors, technical specialists, furniture suppliers and installers."
              align="left"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CAPABILITIES.map((capability, i) => (
              <StaggerItem key={capability.label} className={capability.label.length > 28 ? "col-span-2 lg:col-span-1" : undefined}>
                <Link
                  href={capability.href}
                  className="group flex items-center gap-3 rounded-[6px] bg-ink border border-line px-4 py-3.5 min-h-[44px] h-full transition-colors duration-200 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                >
                  <span className="font-heading text-[11px] font-semibold tracking-[0.2em] text-gold-bright shrink-0" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] leading-snug font-medium text-cream/85 group-hover:text-cream transition-colors">
                    {capability.label}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 4: Investor Proposition ─────────────────────────── */}
      <section className="bg-ink py-[48px] md:py-[76px] lg:py-[92px]" aria-labelledby="investor-heading">
        <div className="max-container container-padding">
          <FadeUp>
            {/* Visual on the left — alternating direction from the hero */}
            <ContentSplit visual="investor-property" visualSide="left">
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
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {INVESTOR_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-cream/80">
                    <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <Button render={<Link href={CTA.investor.href} />} variant="outline" size="lg" className="w-full sm:w-fit mt-1">
                {CTA.investor.label}
                <ArrowRight className="size-4" />
              </Button>
            </ContentSplit>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Process Preview ──────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line grid-texture py-[44px] md:py-[64px] lg:py-[80px]" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              eyebrow="Our Process"
              headline="A Managed Route From Assessment to Handover"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ProcessSteps steps={PROCESS_STEPS} cta={CTA.process} variant="row" />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Why Engage — 3 + 2 editorial arrangement ─────── */}
      <section className="bg-ink py-[44px] md:py-[64px] lg:py-[80px]" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="why-heading"
              eyebrow="Why Engage"
              headline="Why Clients Work With Engage"
              align="left"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {WHY_ENGAGE.map((item, i) => (
              <StaggerItem
                key={item.title}
                className={i < 3 ? "lg:col-span-2" : i === 3 ? "lg:col-span-3" : "sm:col-span-2 lg:col-span-3"}
              >
                <div className="flex flex-col gap-2 rounded-[6px] bg-ink-panel border border-line p-5 lg:p-6 h-full transition-colors duration-200 hover:border-gold/40">
                  <span className="inline-block w-7 h-px bg-gold" aria-hidden />
                  <h3 className="text-[15px] lg:text-base font-semibold text-cream">{item.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 7: Capabilities Preview ─────────────────────────── */}
      <section className="bg-ink-raised border-y border-line py-[44px] md:py-[64px] lg:py-[80px]" aria-labelledby="transformations-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <SectionHeader
                id="transformations-heading"
                eyebrow="Capabilities"
                headline="Commercial Transformations"
                subheadline="Three of the eight transformation types supported through the Engage delivery model."
                align="left"
                className="max-w-xl"
              />
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-bright hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-[2px] shrink-0"
              >
                View all eight capabilities
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TRANSFORMATION_PREVIEW.map((type, i) => (
              <StaggerItem key={type.title}>
                <Link
                  href="/projects"
                  className="group flex flex-col gap-2.5 rounded-[6px] bg-ink border border-line p-5 lg:p-6 h-full transition-colors duration-200 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                >
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold text-cream leading-snug">{type.title}</span>
                  <span className="text-sm text-stone leading-relaxed">{type.description}</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
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
