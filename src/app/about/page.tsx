import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContentSplit from "@/components/shared/ContentSplit";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us | Commercial Fit-Out Company Dubai",
  description:
    "Engage was created to simplify the transformation of commercial offices by bringing design, technical works, renovation, furniture and handover into one coordinated service across Dubai.",
  path: "/about",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "About" }];

const WHO_WE_SERVE = [
  "Investors",
  "Asset owners",
  "Landlords",
  "Developers",
  "Property companies",
  "Business owners",
  "Corporate occupiers",
  "Tenants",
  "Property consultants",
  "Commercial brokers",
];

const PRINCIPLES = [
  {
    title: "Commercially Minded",
    description: "Projects are planned around the intended use and commercial objective.",
  },
  {
    title: "Complete Accountability",
    description: "The complete scope is coordinated through one delivery structure.",
  },
  {
    title: "Clear Communication",
    description: "Scope, decisions, changes and progress are managed transparently.",
  },
  {
    title: "Practical Design",
    description: "Commercial spaces must function effectively as well as present well.",
  },
  {
    title: "Controlled Delivery",
    description: "Programme, procurement, cost and quality require active management.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="About Engage"
        headline="A Commercial Fit-Out Company Built Around Complete Delivery"
        body="Engage was created to simplify the transformation of commercial offices by bringing design, technical works, renovation, furniture and handover into one coordinated service."
        primaryCTA={{ label: "Meet With the Engage Team", href: "/contact", variant: "primary" }}
        breadcrumbs={BREADCRUMBS}
        visual="commercial-transformation"
      />

      {/* ── The market problem ───────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="problem-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <ContentSplit visual="about" visualSide="right">
              <SectionHeader
                id="problem-heading"
                eyebrow="The Market Problem"
                headline="Commercial Transformation Often Involves Too Many Disconnected Parties"
                align="left"
              />
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Property owners and occupiers may otherwise need to separately
                coordinate designers, fit-out contractors, MEP specialists,
                HVAC teams, furniture suppliers, installers and project
                managers. Engage provides one managed route through the full
                project.
              </p>
              {/* Purpose statement, integrated as a compact highlight */}
              <blockquote className="m-0 border-l-2 border-gold pl-5 py-1">
                <p className="eyebrow mb-2">Our Purpose</p>
                <p className="text-base md:text-lg text-cream/90 leading-relaxed m-0">
                  Our purpose is to make commercial property transformation
                  clearer, more controlled and more commercially focused.
                </p>
              </blockquote>
            </ContentSplit>
          </FadeUp>
        </div>
      </section>

      {/* ── Who Engage serves ────────────────────────────────────────── */}
      <section className="bg-ink py-[56px] md:py-[72px] lg:py-[88px]" aria-labelledby="serves-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="serves-heading"
              eyebrow="Who We Serve"
              headline="Built for Commercial Decision-Makers"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto w-full">
            {WHO_WE_SERVE.map((audience) => (
              <StaggerItem key={audience}>
                <div className="flex items-center justify-center rounded-[6px] bg-ink-panel border border-line px-4 py-4 h-full text-center">
                  <span className="text-sm font-medium text-cream/85">{audience}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Brand principles ─────────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line section-padding" aria-labelledby="principles-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="principles-heading"
              eyebrow="How We Work"
              headline="Five Principles Behind Every Project"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map((principle, i) => (
              <StaggerItem key={principle.title} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}>
                <div className="flex flex-col gap-3 rounded-[6px] bg-ink border border-line p-6 lg:p-7 h-full transition-colors duration-200 hover:border-gold/40">
                  <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base lg:text-lg font-semibold text-cream">{principle.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{principle.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/*
        Team section intentionally not published — no approved team details
        exist yet. When they do, add a reusable TeamSection component here
        rather than fabricating profiles.
      */}

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Talk to the People Delivering the Work"
        body="Discuss the property, the objective and the practical route to a completed commercial space."
        primaryCTA={{ label: "Meet With the Engage Team", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
