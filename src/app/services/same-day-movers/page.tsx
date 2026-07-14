import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Package,
  Wrench,
  MapPin,
  Building2,
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
  title: "Same-Day Movers in Dubai | Urgent Moving | WeMoveStuff",
  description:
    "Same-day moving services in Dubai for urgent relocations. WeMoveStuff provides fast, efficient same-day moving support across Dubai.",
  path: "/services/same-day-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Same-Day Movers" },
];

const FEATURES = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "We respond quickly to same-day move requests and confirm availability promptly.",
  },
  {
    icon: Package,
    title: "Packing on Request",
    description: "Packing services available on the same day, subject to requirements and timing.",
  },
  {
    icon: Wrench,
    title: "Furniture Handling",
    description: "Furniture dismantling and reassembly handled as part of the same-day move.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Same-day moves available across all major communities and areas in Dubai.",
  },
  {
    icon: Building2,
    title: "All Property Types",
    description: "We handle same-day moves for apartments, villas and offices of all sizes.",
  },
  {
    icon: ClipboardList,
    title: "Organised & Efficient",
    description: "Even urgent moves are planned and executed in an organised, professional manner.",
  },
];

const INCLUDED_ITEMS = [
  "Same-Day Move Coordination",
  "Furniture Dismantling",
  "Loading & Transport",
  "Furniture Reassembly",
  "Packing on Request",
  "Placement of Furniture",
  "Setup at New Property",
  "Flexible Scheduling",
];

const PROCESS_STEPS = [
  {
    title: "Contact Us Early",
    description: "Reach out as early as possible to check same-day availability and confirm your move.",
  },
  {
    title: "Quick Planning",
    description: "We agree a plan and dispatch our team to your property.",
  },
  {
    title: "Move & Set Up",
    description: "Your belongings are moved and set up at your new property on the same day.",
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
    name: "Rachel B.",
    review: "Needed to move at very short notice and WeMoveStuff came through. Fast, efficient and professional.",
  },
  {
    name: "Khalid A.",
    review: "Same-day move completed without any issues. The team were quick and very well organised.",
  },
  {
    name: "Laura S.",
    review: "Incredible service for an urgent move. Everything was done the same day and nothing was damaged.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you offer same-day moving services in Dubai?",
    answer:
      "Yes. WeMoveStuff offers same-day moving services across Dubai, subject to availability. Contact us as early as possible in the day to check availability and confirm your move.",
  },
  {
    question: "How much notice do I need for a same-day move?",
    answer:
      "For best results, contact us first thing in the morning for a same-day move. We recommend contacting us by 9am to allow time for planning and dispatch.",
  },
  {
    question: "Can you pack on the same day as the move?",
    answer:
      "Yes, packing can be arranged as part of a same-day move. Please let us know when you contact us so we can bring the necessary materials and allow time in the schedule.",
  },
  {
    question: "What areas do you cover for same-day moves?",
    answer:
      "We cover all major communities across Dubai for same-day moves, including Dubai Marina, JVC, Business Bay, Downtown Dubai and more.",
  },
  {
    question: "Can you move a villa or office on the same day?",
    answer:
      "Yes, we can accommodate same-day moves for villas and offices, subject to size and availability. Larger moves may require more planning time, so early contact is recommended.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function SameDayMoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Same-Day Movers", url: "/services/same-day-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Same-Day Movers Dubai",
          description:
            "Same-day moving services in Dubai for urgent relocations. WeMoveStuff provides fast, efficient same-day moving support across Dubai.",
          url: "/services/same-day-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero - centered variant */}
      <PageHero
        headline="Same-Day Movers In Dubai"
        subheadline="Fast, efficient same-day moving services when you need to move urgently across Dubai."
        body="WeMoveStuff offers same-day moving services across Dubai for urgent apartment, villa and office relocations. Contact us early in the day to check availability and secure your move."
        primaryCTA={{ label: "Check Same-Day Availability", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Same-Day Availability",
          "Fast Response",
          "Packing Available",
          "Furniture Assembly",
          "Dubai-Wide Coverage",
        ]}
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* Quote Form Section - navy bg */}
      <section className="bg-navy section-padding" aria-labelledby="quote-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Same-Day Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your urgent move and we&apos;ll confirm availability and provide a clear quote.
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

      {/* Features section */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Urgent moves handled professionally"
              subheadline="Fast, efficient and organised same-day moving services across Dubai."
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

      {/* What's Included - navy bg */}
      <section className="bg-navy section-padding" aria-labelledby="included-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our same-day moving service
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
                  { label: "Fast", sublabel: "Response to requests" },
                  { label: "All Sizes", sublabel: "Apartments to villas" },
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

      {/* Process Steps */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How same-day moving works"
              subheadline="A streamlined process for urgent moves across Dubai."
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
              headline="Same-day movers across Dubai"
              subheadline="We serve all major communities and residential areas in Dubai."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills areas={AREAS} cta={{ label: "Check Availability", href: "/contact" }} />
          </FadeUp>
        </div>
      </section>

      {/* Reviews - navy bg */}
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
              headline="Same-day moving reviews"
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
            <SectionHeader id="faq-heading" headline="Same-Day Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Need to move today?"
        body="Contact WeMoveStuff now to check same-day availability and get your urgent move underway."
        primaryCTA={{ label: "Check Same-Day Availability", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
