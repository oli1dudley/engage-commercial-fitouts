import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Home } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CASE_STUDIES } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Moving Case Studies Dubai | WeMoveStuff",
  description:
    "Real Dubai moving case studies from WeMoveStuff — apartment moves, villa relocations and office moves across Dubai.",
  path: "/case-studies",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Case Studies" },
];

const PROPERTY_TYPE_LABELS: Record<CaseStudy["propertyType"], string> = {
  apartment: "Apartment Move",
  villa: "Villa Move",
  office: "Office Move",
};

const PROPERTY_TYPE_ICONS: Record<CaseStudy["propertyType"], React.ReactNode> = {
  apartment: <Building2 className="size-3.5" aria-hidden />,
  villa: <Home className="size-3.5" aria-hidden />,
  office: <Building2 className="size-3.5" aria-hidden />,
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />

      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <PageHero
        variant="centered"
        headline="Case Studies"
        subheadline="Real moves, real results."
        body="See how WeMoveStuff has helped residents and businesses across Dubai relocate successfully — from high-rise apartments to Palm Jumeirah villas and DIFC offices."
        breadcrumbs={BREADCRUMBS}
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />

      {/* ── Section 2: Case Study Grid ───────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="case-studies-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="case-studies-heading"
              headline="Our moves"
              subheadline="Six case studies across apartments, villas and offices — showing how we plan, execute and complete moves across Dubai."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study) => (
              <StaggerItem key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex flex-col h-full rounded-[18px] bg-white border border-light-grey/60 overflow-hidden hover:shadow-[0_8px_32px_rgba(0,31,91,0.10)] hover:border-brand/20 transition-all duration-200"
                >
                  {/* Image placeholder */}
                  <div className="relative bg-[#F7F9FC] border-b border-light-grey/60 aspect-[16/9] flex items-center justify-center shrink-0">
                    <svg
                      className="size-10 text-navy/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3 16l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Location badge */}
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm border border-light-grey/60 px-2.5 py-1 text-[11px] font-semibold text-navy">
                      <MapPin className="size-3" aria-hidden />
                      {study.location}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    {/* Property type badge */}
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wide">
                      {PROPERTY_TYPE_ICONS[study.propertyType]}
                      {PROPERTY_TYPE_LABELS[study.propertyType]}
                    </span>

                    <h2 className="text-base font-bold text-navy leading-snug group-hover:text-brand transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {study.excerpt}
                    </p>

                    {/* Outcome highlight */}
                    <p className="text-xs font-medium text-brand leading-snug border-t border-light-grey/60 pt-3 mt-auto">
                      {study.outcome}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-brand transition-colors mt-1">
                      Read case study
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 3: Why WeMoveStuff callout ───────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="rounded-[20px] bg-navy text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex flex-col gap-2 flex-1">
                <h2
                  id="why-heading"
                  className="text-xl md:text-2xl font-extrabold leading-tight"
                >
                  Planning a move? Get a quote today.
                </h2>
                <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-lg">
                  Every move we complete is planned in detail — same service, same results, regardless of size. Tell us about your move and we will send a personalised quote the same day.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button render={<Link href="/quote" />} variant="primary" size="md">
                  Get a Free Quote
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                  variant="whatsapp"
                  size="md"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 4: CTA ───────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move? Get a free quote today."
        body="Tell us about your move and receive a personalised quote from the WeMoveStuff team."
        primaryCTA={{ label: "Get My Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
