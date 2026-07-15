import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CTA } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContentSplit from "@/components/shared/ContentSplit";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Complete Office Fit-Outs for Businesses & Occupiers | Dubai",
  description:
    "Engage designs and delivers commercial offices across Dubai for businesses moving, expanding, relocating or refurbishing — from workplace brief through fit-out, furniture and operational handover.",
  path: "/solutions/businesses-occupiers",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Businesses & Occupiers" },
];

const WHO_FOR = [
  "Businesses moving into a new office",
  "Companies expanding",
  "Occupiers refurbishing an existing space",
  "Businesses relocating",
  "Landlords fitting offices for tenants",
  "Companies reconfiguring teams or departments",
  "Organisations upgrading technical systems",
];

const PLANNING_CONSIDERATIONS = [
  "Number of employees",
  "Team structure",
  "Workstations",
  "Private offices",
  "Meeting rooms",
  "Collaboration areas",
  "Reception",
  "Storage",
  "Breakout areas",
  "Kitchen and pantry",
  "Technology",
  "Privacy",
  "Acoustics",
  "Future growth",
];

const DELIVERY_SCOPE = [
  "Workplace brief",
  "Interior design",
  "Space planning",
  "Technical coordination",
  "Commercial fit-out",
  "MEP and HVAC",
  "Furniture and equipment",
  "Installation",
  "Snagging",
  "Operational handover",
];

const CONTINUITY_POINTS = [
  "Defined delivery programme",
  "Coordination with building management",
  "Progress reporting",
  "Planned decisions and approvals",
  "Phased works where appropriate",
  "Managed final handover",
];

export default function OccupiersPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Businesses & Occupiers", url: "/solutions/businesses-occupiers" },
          ]),
          serviceSchema({
            name: "Complete Office Fit-Outs for Businesses and Occupiers",
            description:
              "Design and delivery of commercial offices for businesses moving into, expanding, relocating or refurbishing workplaces in Dubai.",
            url: "/solutions/businesses-occupiers",
            serviceType: "Office fit-out",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Businesses & Occupiers"
        headline="Complete Office Fit-Outs for Businesses and Occupiers"
        body="Engage designs and delivers commercial offices that support how businesses work, present themselves and grow."
        primaryCTA={{ ...CTA.workplace, variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="occupier-workplace"
      />

      {/* ── Who This Is For ──────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="who-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="who-heading"
              eyebrow="Who This Is For"
              headline="Built for the Way Organisations Change"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
            {WHO_FOR.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-[6px] bg-ink-panel border border-line p-5 h-full">
                  <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-cream/85">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Workplace Planning ───────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="planning-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeUp className="flex flex-col gap-6">
              <SectionHeader
                id="planning-heading"
                eyebrow="Workplace Planning"
                headline="Designed Around the Way Your Business Works"
                align="left"
              />
              <p className="text-base md:text-lg text-stone leading-relaxed">
                The workplace brief considers the people, processes, spaces and
                systems required for the office to operate effectively.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="grid grid-cols-2 gap-x-8 rounded-[6px] bg-ink-panel border border-line px-7 py-4">
                {PLANNING_CONSIDERATIONS.map((point) => (
                  <li key={point} className="flex items-center gap-3 py-2.5 border-b border-line last:border-0 [&:nth-last-child(2)]:border-0">
                    <span className="inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                    <span className="text-sm text-cream/85">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Complete Delivery ────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="delivery-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="delivery-heading"
              eyebrow="Complete Delivery"
              headline="One Route From Brief to Operational Office"
              subheadline="Each stage is coordinated within a single delivery structure rather than split across separate suppliers."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DELIVERY_SCOPE.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex flex-col gap-3 rounded-[6px] bg-ink-panel border border-line p-5 h-full">
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-cream/85">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Delivery and Business Continuity ─────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="continuity-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visual="project-management" visualSide="left">
              <SectionHeader
                id="continuity-heading"
                eyebrow="Delivery & Business Continuity"
                headline="Structured Delivery With Clear Communication"
                align="left"
              />
              <p className="text-base text-stone leading-relaxed">
                Each project is planned around the agreed scope, programme,
                building requirements and operational priorities. Where
                appropriate, works may be coordinated in phases to reduce
                avoidable disruption.
              </p>
              <ul className="flex flex-col gap-2.5">
                {CONTINUITY_POINTS.map((point) => (
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
        headline="Planning a New Office or Refurbishment?"
        body="Share your requirements and Engage will review the space, scope and programme with you before work begins."
        primaryCTA={{ ...CTA.workplace, variant: "primary" }}
      />
    </>
  );
}
