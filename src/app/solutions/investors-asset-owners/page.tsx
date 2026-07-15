import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CTA } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContentSplit from "@/components/shared/ContentSplit";
import ProcessSteps from "@/components/shared/ProcessSteps";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Property Transformation for Investors | Dubai",
  description:
    "Engage helps investors, landlords and asset owners transform outdated, vacant and shell-condition commercial properties in Dubai into complete offices prepared for resale, leasing or repositioning.",
  path: "/solutions/investors-asset-owners",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Investors & Asset Owners" },
];

const DELIVERABLES = [
  "Property assessment",
  "Commercial brief",
  "Concept and space planning",
  "Fit-out specification",
  "Strip-out and enabling works",
  "HVAC, MEP, power and data",
  "Flooring, ceilings and partitions",
  "Joinery and finishes",
  "Kitchens, reception and meeting areas",
  "Furniture and equipment",
  "Snagging and final handover",
];

const DESIGN_CONSIDERATIONS = [
  "Property location",
  "Floor area",
  "Building type",
  "Likely occupier profile",
  "Resale or leasing strategy",
  "Appropriate quality level",
  "Layout flexibility",
  "Maintenance and durability",
  "Budget",
  "Project timeline",
];

const PROPERTY_CONDITIONS = [
  "Shell and core",
  "Vacant fitted office",
  "Dated office requiring refurbishment",
  "Poorly configured workspace",
  "Partially completed commercial unit",
  "Office requiring technical upgrades",
  "Office being repositioned before sale or lease",
];

const DELIVERY_LEVELS = [
  {
    title: "Commercial Upgrade",
    description:
      "A controlled refurbishment focused on presentation, usability and market readiness.",
  },
  {
    title: "Full Office Transformation",
    description:
      "Complete redesign, renovation, technical works and interior delivery.",
  },
  {
    title: "Turnkey Furnished Office",
    description:
      "A completed fitted and furnished office prepared for presentation, occupation, leasing or sale.",
  },
];

const INVESTOR_PROCESS = [
  { title: "Review the property" },
  { title: "Understand the resale, leasing or repositioning objective" },
  { title: "Establish scope and specification" },
  { title: "Develop design and budget" },
  { title: "Approve the delivery programme" },
  { title: "Deliver the transformation" },
  { title: "Complete snagging and handover" },
];

export default function InvestorsPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Investors & Asset Owners", url: "/solutions/investors-asset-owners" },
          ]),
          serviceSchema({
            name: "Commercial Property Transformation for Investors and Asset Owners",
            description:
              "Complete transformation of outdated, vacant and shell-condition commercial offices into market-ready spaces prepared for resale, leasing or repositioning.",
            url: "/solutions/investors-asset-owners",
            serviceType: "Commercial property transformation",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Investors & Asset Owners"
        headline="Turn Commercial Property Into a Complete, Market-Ready Office"
        body="Engage helps investors, landlords and asset owners transform outdated, vacant and shell-condition commercial properties into fully completed offices prepared for resale, leasing or repositioning."
        primaryCTA={{ label: "Discuss a Property", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="investor-property"
      />

      {/* ── The Commercial Challenge ─────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="challenge-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visual="commercial-transformation" visualSide="right">
              <SectionHeader
                id="challenge-heading"
                eyebrow="The Commercial Challenge"
                headline="Make the Finished Opportunity Easier to Understand"
                align="left"
              />
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Empty shells and outdated offices can require buyers or tenants
                to imagine the final space while also estimating cost, time,
                technical work and delivery risk. Engage removes much of that
                uncertainty by delivering a complete commercial transformation
                through one coordinated project.
              </p>
            </ContentSplit>
          </FadeUp>
        </div>
      </section>

      {/* ── What Engage Delivers ─────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="delivers-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="delivers-heading"
              eyebrow="Scope"
              headline="What Engage Delivers"
              subheadline="One coordinated project covering the complete transformation, from assessment to handover."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DELIVERABLES.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-4 rounded-[6px] bg-ink border border-line p-5 h-full">
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

      {/* ── Investment-Led Design ────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="design-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeUp className="flex flex-col gap-6">
              <SectionHeader
                id="design-heading"
                eyebrow="Investment-Led Design"
                headline="Designed for the Target Market, Not Personal Taste"
                align="left"
              />
              <p className="text-base md:text-lg text-stone leading-relaxed">
                An investor-led office should respond to its intended buyer or
                tenant rather than the preferences of a single occupier. Engage
                considers the property, target market, quality level,
                flexibility, durability, budget and programme when developing
                the project.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 rounded-[6px] bg-ink-panel border border-line px-7 py-4">
                {DESIGN_CONSIDERATIONS.map((point) => (
                  <li key={point} className="flex items-center gap-3 py-3 border-b border-line last:border-0 sm:[&:nth-last-child(2)]:border-0">
                    <span className="inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                    <span className="text-sm text-cream/85">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Property Conditions ──────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="conditions-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="conditions-heading"
              eyebrow="Starting Points"
              headline="Suitable for a Range of Starting Conditions"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
            {PROPERTY_CONDITIONS.map((condition) => (
              <StaggerItem key={condition}>
                <div className="flex items-start gap-3 rounded-[6px] bg-ink border border-line p-5 h-full">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-cream/85">{condition}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Delivery Levels ──────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="levels-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="levels-heading"
              eyebrow="Delivery Levels"
              headline="Three Levels of Transformation"
              subheadline="The appropriate level depends on the property, its market position and the intended outcome."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {DELIVERY_LEVELS.map((level, i) => (
              <StaggerItem key={level.title}>
                <div className="flex flex-col gap-4 rounded-[6px] bg-ink-panel border border-line p-7 lg:p-8 h-full transition-colors duration-200 hover:border-gold/40">
                  <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg lg:text-xl font-semibold text-cream">{level.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{level.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Investor Process ─────────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line grid-texture section-padding" aria-labelledby="investor-process-heading">
        <div className="max-container container-padding flex flex-col gap-14">
          <FadeUp>
            <SectionHeader
              id="investor-process-heading"
              eyebrow="The Investor Process"
              headline="From Property Review to Final Handover"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ProcessSteps steps={INVESTOR_PROCESS} variant="row" cta={CTA.process} />
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Have a Commercial Property Under Consideration?"
        body="Engage can review the space, intended market position and likely project scope before the transformation begins."
        primaryCTA={{ label: "Arrange a Property Consultation", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
