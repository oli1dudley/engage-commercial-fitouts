import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Shield,
  Wrench,
  MapPin,
  Clock,
  ClipboardList,
  Check,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import AreaPills from "@/components/shared/AreaPills";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import QuoteForm from "@/components/forms/QuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Fragile Item Movers in Dubai | Specialist Packing | WeMoveStuff",
  description:
    "Specialist fragile item moving services in Dubai. WeMoveStuff provides expert packing and careful transport for antiques, artwork, glassware and delicate belongings.",
  path: "/services/fragile-item-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fragile Item Movers" },
];

const FEATURES = [
  {
    icon: Package,
    title: "Specialist Fragile Packing",
    description:
      "Each fragile item wrapped individually using specialist packing materials.",
  },
  {
    icon: Shield,
    title: "Careful Handling Throughout",
    description: "Every item handled with exceptional care at every stage of the move.",
  },
  {
    icon: Wrench,
    title: "Custom Crating if Required",
    description:
      "Specialist crating available for high-value or unusually shaped items.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description:
      "Fragile item moving services across all major communities in Dubai.",
  },
  {
    icon: Clock,
    title: "Planned & Methodical",
    description:
      "Fragile item moves planned carefully to minimise risk at every stage.",
  },
  {
    icon: ClipboardList,
    title: "Full Move Coordination",
    description:
      "We manage the entire fragile item relocation from packing to placement.",
  },
];

const INCLUDED_ITEMS = [
  "Individual Item Assessment",
  "Specialist Packing Materials",
  "Individual Wrapping",
  "Careful Loading",
  "Secure Transport",
  "Careful Unloading",
  "Placement at New Property",
  "Custom Crating Available",
];

const PROCESS_STEPS = [
  {
    title: "Item Assessment",
    description:
      "We assess your fragile items and determine the right packing approach for each.",
  },
  {
    title: "Specialist Packing",
    description: "Each item individually wrapped and packed using specialist materials.",
  },
  {
    title: "Careful Transport",
    description: "Fragile items loaded and transported with exceptional care.",
  },
  {
    title: "Placement & Unpacking",
    description: "Items carefully unpacked and placed at your new property.",
  },
];

const AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JLT",
  "Palm Jumeirah",
  "Dubai Hills",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
  "The Springs",
  "Silicon Oasis",
];

const REVIEWS = [
  {
    name: "Sophie B.",
    review:
      "Our antique furniture and artwork arrived perfectly. The packing was exceptional.",
  },
  {
    name: "Hassan M.",
    review:
      "Trusted WeMoveStuff with our most valuable pieces. Not a single item was damaged.",
  },
  {
    name: "Elaine W.",
    review:
      "Remarkable care taken with all our fragile items. The team knew exactly how to handle everything.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What fragile items do you move?",
    answer:
      "We move antiques, artwork, glassware, ceramics, mirrors, chandeliers, sculptures and other delicate belongings. Contact us to discuss your specific items and we'll advise on the best approach.",
  },
  {
    question: "How are fragile items packed for moving?",
    answer:
      "Each item is individually assessed and wrapped using specialist packing materials including bubble wrap, foam, packing paper and custom crating where required.",
  },
  {
    question: "Can you move valuable antiques and artwork in Dubai?",
    answer:
      "Yes. We have experience moving antiques and artwork of significant value. We recommend discussing your specific pieces in advance so we can plan the appropriate packing and handling approach.",
  },
  {
    question: "Do you provide crating for fragile items?",
    answer:
      "Yes. Custom wooden crating is available for high-value or unusually shaped items that require additional protection during transport.",
  },
  {
    question: "Is fragile item moving available as a standalone service?",
    answer:
      "Yes. We can move just your fragile items without the full moving service. Contact us to discuss your requirements.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function FragileItemMoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Fragile Item Movers", url: "/services/fragile-item-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Fragile Item Movers Dubai",
          description:
            "Specialist fragile item moving services in Dubai. WeMoveStuff provides expert packing and careful transport for antiques, artwork, glassware and delicate belongings.",
          url: "/services/fragile-item-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Fragile Item Movers In Dubai"
        subheadline="Specialist packing and careful transport for fragile, delicate and valuable belongings across Dubai."
        body="WeMoveStuff provides specialist fragile item moving services for antiques, artwork, glassware, ceramics and other delicate belongings. Every fragile item is packed and handled with exceptional care."
        primaryCTA={{ label: "Get Fragile Item Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Fragile Item Specialists",
          "Antiques & Artwork",
          "Specialist Packing",
          "Careful Handling",
          "Dubai-Wide Coverage",
        ]}
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* Quote form - navy bg */}
      <section className="bg-navy section-padding" aria-labelledby="quote-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Fragile Item Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your fragile items and we&apos;ll provide a tailored, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Fast response — usually within the hour",
                    "Transparent pricing, no hidden fees",
                    "Tailored to your requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                <QuoteForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Fragile items handled with exceptional care"
              subheadline="Specialist packing and careful transport for your most delicate belongings."
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* What's Included - navy */}
      <section className="bg-navy section-padding" aria-labelledby="included-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our fragile item moving service
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Included services">
                  {INCLUDED_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button render={<Link href="/quote" />} variant="primary" size="lg" className="self-start">
                  Request My Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Specialist", sublabel: "Packing & handling" },
                  { label: "All Types", sublabel: "Antiques, art & glassware" },
                  { label: "5★", sublabel: "Customer satisfaction" },
                  { label: "Dubai", sublabel: "Wide coverage" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 rounded-[16px] bg-white/10 border border-white/15 p-5"
                  >
                    <span className="text-[24px] font-extrabold text-white leading-none">{item.label}</span>
                    <span className="text-sm text-white/70">{item.sublabel}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How fragile item moving works"
              subheadline="A careful four-step process for safely moving your most delicate belongings."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Book My Move", href: "/quote" }} />
          </FadeUp>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Fragile item movers across Dubai"
              subheadline="We serve all major communities and residential areas in Dubai."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills areas={AREAS} cta={{ label: "Check Availability", href: "/contact" }} />
          </FadeUp>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative bg-navy section-padding overflow-hidden" aria-labelledby="reviews-heading">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 10% 50%, rgba(36,144,255,0.4) 0%, transparent 60%), radial-gradient(ellipse at 90% 50%, rgba(0,31,91,0.9) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="reviews-heading"
              headline="Fragile item moving reviews"
              subheadline="What our customers say about WeMoveStuff."
              light
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((review) => (
              <StaggerItem key={review.name}>
                <ReviewCard
                  name={review.name}
                  review={review.review}
                  rating={5}
                  variant="light"
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Fragile Item Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      <CTASection
        headline="Need to move fragile or valuable items?"
        body="Get a free quote from WeMoveStuff for your fragile item relocation across Dubai."
        primaryCTA={{ label: "Get Fragile Item Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
