import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllPosts, getFeaturedPost } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/types/blog";
import type { BlogCategory } from "@/types/blog";
import { BLOG_POSTS } from "@/data/blog-posts";

import StructuredData from "@/components/seo/StructuredData";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryCard from "@/components/blog/CategoryCard";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Moving Tips & Guides Dubai | WeMoveStuff Blog",
  description:
    "Practical moving tips, checklists and guides for Dubai residents and businesses — apartments, villas, offices, packing and more from the WeMoveStuff team.",
  path: "/blog",
});

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog" },
];

// Build category post counts
function getCategoryCount(category: BlogCategory): number {
  return BLOG_POSTS.filter((p) => p.category === category).length;
}

const CATEGORY_LIST = (Object.keys(BLOG_CATEGORIES) as BlogCategory[]).filter(
  (c) => getCategoryCount(c) > 0
);

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPost();
  const recentPosts = allPosts.filter((p) => !p.featured).slice(0, 6);

  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <section className="relative bg-navy section-padding overflow-hidden" aria-labelledby="blog-hero-heading">
        {/* Background image */}
        <Image
          src="/images/blog/blog-hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="relative max-container container-padding flex flex-col gap-5 text-center">
          <FadeUp>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex items-center justify-center gap-1.5 text-sm text-white/50">
                {BREADCRUMBS.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <span aria-hidden>/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white/80">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <h1
              id="blog-hero-heading"
              className="text-[32px] md:text-[48px] font-extrabold text-white leading-tight tracking-tight"
            >
              Moving Tips &amp; Guides
            </h1>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
              Practical advice for every type of move in Dubai — from packing your apartment to
              relocating an office.
            </p>

            {/* Search shortcut */}
            <div className="flex justify-center mt-2">
              <Button
                render={<Link href="/blog/search" />}
                variant="secondary"
                size="md"
              >
                <Search className="size-4" />
                Search articles
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 2: Featured Post ──────────────────────────────────── */}
      {featured && (
        <section className="bg-white section-padding" aria-labelledby="featured-heading">
          <div className="max-container container-padding flex flex-col gap-8">
            <FadeUp>
              <SectionHeader
                id="featured-heading"
                headline="Featured article"
              />
            </FadeUp>
            <FadeUp delay={0.08}>
              <ArticleHero post={featured} />
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── Section 3: Recent Articles ────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="recent-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="recent-heading"
              headline="Latest articles"
              subheadline="Moving advice, checklists and guides published by the WeMoveStuff team."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <ArticleCard post={post} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>

          {allPosts.length > 7 && (
            <FadeUp className="flex justify-center">
              <Button render={<Link href="/blog/search" />} variant="secondary" size="lg">
                View all articles
                <ArrowRight className="size-4" />
              </Button>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── Section 4: Browse By Category ────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="categories-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="categories-heading"
              headline="Browse by topic"
              subheadline="Find articles by the type of move or topic you need advice on."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORY_LIST.map((category) => (
              <StaggerItem key={category}>
                <CategoryCard
                  category={category}
                  postCount={getCategoryCount(category)}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: All Articles Grid ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="all-articles-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="all-articles-heading"
              headline="All articles"
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <ArticleCard post={post} size="compact" className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 6: Newsletter / CTA ───────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="blog-cta-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="rounded-[20px] bg-navy text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex flex-col gap-2 flex-1">
                <h2
                  id="blog-cta-heading"
                  className="text-xl md:text-2xl font-extrabold leading-tight"
                >
                  Planning a move in Dubai?
                </h2>
                <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-lg">
                  Get a free, personalised quote from the WeMoveStuff team. We respond the same day.
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

      {/* ── Section 7: Final CTA ──────────────────────────────────────── */}
      <CTASection
        headline="Ready to move? Get a free quote today."
        body="Tell us about your move and receive a personalised quote from the WeMoveStuff team."
        primaryCTA={{ label: "Get My Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/blog/blog-cta.jpg"
      />
    </>
  );
}
