import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";

import StructuredData from "@/components/seo/StructuredData";
import ArticleBody from "@/components/blog/ArticleBody";
import CTASection from "@/components/shared/CTASection";
import AreaPills from "@/components/shared/AreaPills";
import SectionHeader from "@/components/shared/SectionHeader";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return generatePageMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    path: `/resources/${slug}`,
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  moving: "Moving Guides",
  checklists: "Checklists",
  packing: "Packing",
  dubai: "Dubai Guides",
  setup: "Home Setup",
  relocation: "Relocation",
};

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const categoryLabel = CATEGORY_LABELS[guide.category] ?? guide.category;

  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: guide.title },
        ])}
      />

      {/* ── Guide Hero ────────────────────────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="guide-title">
        <div className="max-container container-padding flex flex-col gap-5">
          {/* Back link */}
          <FadeUp>
            <Button
              render={<Link href="/resources" />}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white -ml-2"
            >
              <ArrowLeft className="size-4" />
              All guides
            </Button>
          </FadeUp>

          <FadeUp delay={0.05}>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
                <li className="flex items-center gap-1.5">
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden>/</span>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden>/</span>
                  <span className="text-white/80">{guide.title}</span>
                </li>
              </ol>
            </nav>

            {/* Category badge */}
            <span className="inline-flex items-center rounded-full bg-brand/20 border border-brand/30 px-2.5 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wide mb-4">
              {categoryLabel}
            </span>

            <h1
              id="guide-title"
              className="text-[28px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight max-w-3xl"
            >
              {guide.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              {guide.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/55">
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden />
                {guide.readingTime} min read
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Guide Body + Sidebar ──────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">
            {/* Main content */}
            <FadeUp>
              <ArticleBody blocks={guide.content} />
            </FadeUp>

            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              {/* Service CTA */}
              <div className="rounded-[14px] bg-navy text-white p-5 flex flex-col gap-3 sticky top-24">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wide">
                  Need help moving?
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

              {/* Related service link if present */}
              {guide.relatedService && (
                <div className="mt-5 rounded-[14px] bg-[#F7F9FC] border border-light-grey/60 p-4 flex flex-col gap-2">
                  <p className="text-xs font-semibold text-navy/60 uppercase tracking-wide">
                    Related service
                  </p>
                  <Button
                    render={<Link href={guide.relatedService} />}
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    View service
                    <ArrowLeft className="size-4 rotate-180" aria-hidden />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas We Cover ────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Areas We Cover in Dubai"
              subheadline="WeMoveStuff moves homes and offices across every major community in Dubai."
            />
          </FadeUp>
          <FadeUp delay={0.05}>
            <AreaPills />
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        headline="Planning your move in Dubai?"
        body="Request a free, personalised quote from the WeMoveStuff team. We respond the same day."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
