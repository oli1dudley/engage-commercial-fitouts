import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CTA, SERVICES } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Fit-Out Services Dubai",
  description:
    "Engage brings the major stages of commercial office transformation into one coordinated service — design, fit-out, MEP and HVAC, furniture and project management across Dubai.",
  path: "/services",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "Services" }];

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Services"
        headline="One Team for the Complete Commercial Fit-Out"
        body="Engage brings the major stages of commercial office transformation into one coordinated delivery service."
        primaryCTA={{ ...CTA.primary, variant: "primary" }}
        secondaryCTA={{ ...CTA.process, variant: "secondary" }}
        breadcrumbs={BREADCRUMBS}
        visualLabel="Integrated delivery concept"
      />

      {/* ── Service cards ────────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              eyebrow="Five Coordinated Services"
              headline="The Stages of a Complete Transformation"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <StaggerItem key={service.slug} className={i === 4 ? "md:col-span-2 lg:col-span-1" : undefined}>
                <ServiceCard
                  index={i + 1}
                  title={service.label}
                  description={service.description}
                  href={service.href}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Integrated delivery ──────────────────────────────────────── */}
      <section className="bg-ink-raised border-y border-line grid-texture section-padding" aria-labelledby="integrated-heading">
        <div className="max-container container-padding">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <FadeUp>
              <SectionHeader
                id="integrated-heading"
                eyebrow="Integrated Delivery"
                headline="Coordinated Services, Not Disconnected Trades"
                subheadline="Each service informs the others. Space planning shapes the technical works, technical works shape the programme, and furniture completes the delivered space. Engage manages these stages as one project rather than a series of separate contracts."
              />
            </FadeUp>
            <FadeUp delay={0.08}>
              <Button render={<Link href="/process" />} variant="outline" size="lg">
                View the Full Delivery Process
                <ArrowRight className="size-4" />
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Scope Your Project?"
        body="Tell us about the property and its intended outcome, and Engage will recommend the appropriate services and delivery route."
        primaryCTA={{ ...CTA.primary, variant: "primary" }}
      />
    </>
  );
}
