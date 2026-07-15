"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "./Breadcrumbs";
import ArchitecturalVisual, { type ArchitecturalVariant } from "./ArchitecturalVisual";
import { unbreakable } from "@/lib/text";
import type { BreadcrumbItem } from "@/types/seo";
import type { ApprovedImage } from "@/types/images";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface PageHeroProps {
  headline: string;
  eyebrow?: string;
  body?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  breadcrumbs?: BreadcrumbItem[];
  /** "split" shows a visual beside the copy */
  variant?: "split" | "centered";
  /** Page-specific architectural fallback drawing */
  visual?: ArchitecturalVariant;
  /** Reduced vertical padding for lightweight heroes (e.g. FAQs, legal) */
  compact?: boolean;
  /**
   * Approved hero imagery. When provided it replaces the architectural
   * visual — pass real, approved photography only (never imagery implying
   * completed Engage projects unless genuine).
   */
  image?: ApprovedImage;
}

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
const noMotion = { hidden: {}, visible: {} };

function HeroMedia({
  image,
  visual,
  compact,
}: {
  image?: ApprovedImage;
  visual: ArchitecturalVariant;
  compact?: boolean;
}) {
  if (image) {
    return (
      <figure className="m-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-line">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={image.focal ? { objectPosition: image.focal } : undefined}
            priority={image.priority ?? true}
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          {image.illustrative && (
            <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/70 bg-ink/70 px-2 py-1 rounded-[2px]">
              Illustrative
            </span>
          )}
        </div>
        {image.caption && (
          <figcaption className="mt-2 text-xs text-cream/45">{image.caption}</figcaption>
        )}
      </figure>
    );
  }
  return <ArchitecturalVisual variant={visual} compact={compact} />;
}

export default function PageHero({
  headline,
  eyebrow,
  body,
  primaryCTA,
  secondaryCTA,
  breadcrumbs,
  variant = "split",
  visual = "commercial-transformation",
  compact = false,
  image,
}: PageHeroProps) {
  const reduced = useReducedMotion();
  const containerVariants = reduced ? noMotion : container;
  const itemVariants = reduced ? noMotion : item;

  const padding = compact
    ? "py-10 md:py-12 lg:py-14"
    : variant === "centered"
      ? "py-14 md:py-16 lg:py-20"
      : "py-12 md:py-16 lg:py-20";

  return (
    <section className="relative bg-ink overflow-hidden border-b border-line">
      {/* Subtle gold atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 0%, rgba(183,154,98,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className={`relative max-container container-padding ${padding}`}>
        <div
          className={
            variant === "split"
              ? "grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-center"
              : "flex flex-col items-center text-center max-w-3xl mx-auto"
          }
        >
          {/* Text */}
          <motion.div
            className={variant === "centered" ? "flex flex-col gap-5 items-center text-center" : "flex flex-col gap-6"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {breadcrumbs && (
              <motion.div variants={itemVariants}>
                <Breadcrumbs items={breadcrumbs} />
              </motion.div>
            )}

            {eyebrow && (
              <motion.p className="eyebrow flex items-center gap-3" variants={itemVariants}>
                <span className="inline-block w-8 h-px bg-gold" aria-hidden />
                {eyebrow}
              </motion.p>
            )}

            <motion.h1
              className="text-[34px] md:text-[44px] lg:text-[56px] font-bold text-cream leading-[1.08] tracking-tight text-balance"
              variants={itemVariants}
            >
              {unbreakable(headline)}
            </motion.h1>

            {body && (
              <motion.p
                className="text-base md:text-lg text-stone leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                {body}
              </motion.p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <motion.div
                className={variant === "centered" ? "flex flex-col sm:flex-row items-center justify-center gap-3 mt-2" : "flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2"}
                variants={itemVariants}
              >
                {primaryCTA && (
                  <Button
                    render={<Link href={primaryCTA.href} />}
                    variant={primaryCTA.variant ?? "primary"}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {primaryCTA.label}
                    <ArrowRight className="size-4" />
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    render={<Link href={secondaryCTA.href} />}
                    variant={secondaryCTA.variant ?? "secondary"}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </motion.div>
            )}

            {/* Compact visual below the CTAs on mobile — keeps the first
                screen focused while still giving the page its drawing */}
            {variant === "split" && (
              <motion.div className="lg:hidden mt-4" variants={itemVariants}>
                <HeroMedia image={image} visual={visual} compact />
              </motion.div>
            )}
          </motion.div>

          {/* Desktop visual */}
          {variant === "split" && (
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              className="relative w-full hidden lg:block"
            >
              <HeroMedia image={image} visual={visual} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
