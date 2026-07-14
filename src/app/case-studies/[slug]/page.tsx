import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, Tag } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CASE_STUDIES, getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/case-studies";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import CTASection from "@/components/shared/CTASection";
import ArticleBody from "@/components/blog/ArticleBody";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return generatePageMetadata({
    title: study.seo.title,
    description: study.seo.description,
    path: `/case-studies/${slug}`,
    ogImage: study.featuredImage,
  });
}

const PROPERTY_TYPE_LABELS: Record<"apartment" | "villa" | "office", string> = {
  apartment: "Apartment Move",
  villa: "Villa Move",
  office: "Office Move",
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const otherStudies = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: study.title },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="case-study-title">
        <div className="max-container container-padding flex flex-col gap-5">
          {/* Back link */}
          <FadeUp>
            <Button
              render={<Link href="/case-studies" />}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white -ml-2"
            >
              <ArrowLeft className="size-4" />
              Back to case studies
            </Button>
          </FadeUp>

          <FadeUp delay={0.05}>
            {/* Property type badge */}
            <span className="inline-flex items-center rounded-full bg-brand/20 border border-brand/30 px-2.5 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wide mb-4">
              {PROPERTY_TYPE_LABELS[study.propertyType]}
            </span>

            <h1
              id="case-study-title"
              className="text-[28px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight max-w-3xl"
            >
              {study.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              {study.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/55">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4" />
                {study.location}
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Outcome callout bar ───────────────────────────────────────────── */}
      <div className="bg-brand/10 border-b border-brand/20">
        <div className="max-container container-padding py-4">
          <FadeUp>
            <p className="text-sm font-semibold text-brand">
              <span className="text-navy font-bold mr-2">Result:</span>
              {study.outcome}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* ── Body + Sidebar ───────────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">
            {/* Main content */}
            <FadeUp>
              <ArticleBody blocks={study.content} />

              {/* Tags */}
              {study.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-light-grey/60 flex flex-wrap items-center gap-2">
                  <Tag className="size-4 text-muted-foreground" />
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#F7F9FC] border border-light-grey/60 px-3 py-1 text-xs font-medium text-navy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </FadeUp>

            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              {/* Stats card */}
              <div className="rounded-[14px] bg-[#F7F9FC] border border-light-grey/60 p-5 flex flex-col gap-4">
                <p className="text-sm font-semibold text-navy/60 uppercase tracking-wide">
                  Move at a glance
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-navy">{study.location}</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                      Move type
                    </p>
                    <p className="text-sm font-semibold text-navy">
                      {PROPERTY_TYPE_LABELS[study.propertyType]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                      Result
                    </p>
                    <p className="text-sm leading-snug text-dark-text">{study.outcome}</p>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="mt-5 rounded-[14px] bg-navy text-white p-5 flex flex-col gap-3 sticky top-24">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wide">
                  Planning a move?
                </p>
                <p className="text-base font-bold leading-snug">
                  Get a free quote from the WeMoveStuff team.
                </p>
                <Button render={<Link href="/quote" />} variant="primary" size="sm">
                  Get a Free Quote
                </Button>
                <Button
                  render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                  variant="whatsapp"
                  size="sm"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More case studies ────────────────────────────────────────────── */}
      {otherStudies.length > 0 && (
        <section className="bg-[#F7F9FC] section-padding" aria-labelledby="more-studies-heading">
          <div className="max-container container-padding flex flex-col gap-8">
            <FadeUp>
              <h2
                id="more-studies-heading"
                className="text-[22px] md:text-[28px] font-extrabold text-navy tracking-tight"
              >
                More case studies
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherStudies.map((related) => (
                <FadeUp key={related.slug}>
                  <Link
                    href={`/case-studies/${related.slug}`}
                    className="group flex flex-col h-full rounded-[14px] bg-white border border-light-grey/60 overflow-hidden hover:shadow-[0_4px_20px_rgba(0,31,91,0.08)] hover:border-brand/20 transition-all duration-200"
                  >
                    {/* Image placeholder */}
                    <div className="bg-[#F7F9FC] border-b border-light-grey/60 aspect-[16/9] flex items-center justify-center">
                      <svg
                        className="size-8 text-navy/20"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 16l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex flex-col gap-2 p-4 flex-1">
                      <span className="text-[10px] font-semibold text-brand uppercase tracking-wide">
                        {PROPERTY_TYPE_LABELS[related.propertyType]}
                      </span>
                      <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors">
                        {related.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy/60 mt-auto pt-2">
                        Read case study
                        <ArrowLeft className="size-3 rotate-180 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to plan your Dubai move?"
        body="Request a free, personalised quote from the WeMoveStuff team. We respond the same day."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
