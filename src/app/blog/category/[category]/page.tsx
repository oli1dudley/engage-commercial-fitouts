import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllCategories, getPostsByCategory } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/types/blog";
import type { BlogCategory } from "@/types/blog";

import StructuredData from "@/components/seo/StructuredData";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import ArticleCard from "@/components/blog/ArticleCard";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;

  if (!(category in BLOG_CATEGORIES)) return {};

  const cat = BLOG_CATEGORIES[category as BlogCategory];
  return generatePageMetadata({
    title: `${cat.name} Articles | WeMoveStuff Blog`,
    description: `${cat.description} Browse all ${cat.name.toLowerCase()} articles from the WeMoveStuff team.`,
    path: `/blog/category/${category}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (!(category in BLOG_CATEGORIES)) notFound();

  const cat = BLOG_CATEGORIES[category as BlogCategory];
  const posts = getPostsByCategory(category as BlogCategory);

  if (posts.length === 0) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: cat.name },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="category-heading">
        <div className="max-container container-padding flex flex-col gap-4">
          <FadeUp>
            <Button
              render={<Link href="/blog" />}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white -ml-2 mb-2"
            >
              <ArrowLeft className="size-4" />
              All articles
            </Button>
            <p className="text-xs font-semibold text-brand uppercase tracking-wider">Category</p>
            <h1
              id="category-heading"
              className="text-[28px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight"
            >
              {cat.name}
            </h1>
            <p className="text-base text-white/70 leading-relaxed max-w-xl mt-1">
              {cat.description}
            </p>
            <p className="text-sm text-white/45 mt-2">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Articles ─────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="articles-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader id="articles-heading" headline={`${cat.name} articles`} />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <ArticleCard post={post} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <CTASection
        headline="Planning your move in Dubai?"
        body="Request a free, personalised quote from the WeMoveStuff team."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/blog/blog-cta.jpg"
      />
    </>
  );
}
