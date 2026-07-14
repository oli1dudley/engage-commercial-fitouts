import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Package,
  Wrench,
  Shield,
  ClipboardList,
  Clock,
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
  title: "Long-Distance Movers in Dubai | WeMoveStuff",
  description:
    "Professional long-distance moving services from Dubai. WeMoveStuff handles inter-emirate and long-distance relocations with careful packing and secure transport.",
  path: "/services/long-distance-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Long-Distance Movers" },
];

const FEATURES = [
  {
    icon: MapPin,
    title: "UAE-Wide Coverage",
    description:
      "Long-distance moves across all emirates, including Abu Dhabi, Sharjah, Ajman and RAK.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "All belongings packed securely for the longer transit distance.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description:
      "Furniture dismantled before the move and reassembled at your new property.",
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description:
      "Your belongings protected throughout the journey with professional handling.",
  },
  {
    icon: ClipboardList,
    title: "Full Move Management",
    description: "We plan and coordinate every stage of your long-distance relocation.",
  },
  {
    icon: Clock,
    title: "Planned to Your Timeline",
    description:
      "Long-distance moves coordinated around your schedule and move-in date.",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning & Coordination",
  "Professional Packing",
  "Furniture Dismantling",
  "Long-Distance Transport",
  "Furniture Reassembly",
  "Setup at New Property",
  "Unpacking Support Available",
  "Insurance Options Available",
];

const PROCESS_STEPS = [
  {
    title: "Get A Quote",
    description:
      "Tell us your origin, destination and move details for a tailored quote.",
  },
  {
    title: "Plan The Move",
    description:
      "We agree a full plan covering packing, transport route and delivery timeline.",
  },
  {
    title: "Moving Day",
    description:
      "Professional packing and transport of all your belongings to your new location.",
  },
  {
    title: "Setup & Completion",
    description: "Furniture reassembled and placed at your new property.",
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
    name: "Nadia F.",
    review:
      "Moved from Dubai to Abu Dhabi seamlessly. WeMoveStuff handled everything perfectly.",
  },
  {
    name: "Steven G.",
    review:
      "Professional service for our long-distance move across the UAE. Nothing was damaged and everything arrived on time.",
  },
  {
    name: "Yasmin A.",
    review:
      "Excellent long-distance moving service. The team were organised, careful and reliable throughout.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you offer long-distance moves from Dubai?",
    answer:
      "Yes. We provide long-distance moving services from Dubai to other emirates including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and beyond.",
  },
  {
    question: "How much does a long-distance move from Dubai cost?",
    answer:
      "Long-distance moving costs depend on the volume of belongings, destination, distance and additional services. We provide a free, no-obligation quote based on your specific requirements.",
  },
  {
    question: "How long does a long-distance move from Dubai take?",
    answer:
      "This depends on your destination and the size of the move. A move from Dubai to Abu Dhabi typically takes one day including packing and setup. We'll give you a clear timeline when you book.",
  },
  {
    question: "Do you provide insurance for long-distance moves?",
    answer:
      "We handle all belongings with great care. If you require specific insurance for your long-distance move, let us know when getting a quote and we can advise on available options.",
  },
  {
    question: "Can you pack and unpack as part of a long-distance move?",
    answer:
      "Yes. Full packing and unpacking services are available for long-distance moves. We supply all materials and pack everything securely for the journey.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function LongDistanceMoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Long-Distance Movers", url: "/services/long-distance-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Long-Distance Movers Dubai",
          description:
            "Professional long-distance moving services from Dubai. WeMoveStuff handles inter-emirate and long-distance relocations with careful packing and secure transport.",
          url: "/services/long-distance-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Long-Distance Movers In Dubai"
        subheadline="Professional long-distance moving services from Dubai to Abu Dhabi, Sharjah and across the UAE."
        body="WeMoveStuff handles long-distance moves from Dubai to other emirates and regions across the UAE. We manage packing, transport and setup at your new location."
        primaryCTA={{ label: "Get Long-Distance Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "UAE-Wide Coverage",
          "Packing Available",
          "Furniture Assembly",
          "Secure Transport",
          "Fully Managed",
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
                  Get Your Long-Distance Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your long-distance move and we&apos;ll provide a clear, no-obligation quote.
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
              headline="Long-distance moving made simple"
              subheadline="Professional moving support for relocations from Dubai across the UAE."
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
                  What&apos;s included in our long-distance moving service
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
                  { label: "UAE", sublabel: "Wide coverage" },
                  { label: "Secure", sublabel: "Protected transport" },
                  { label: "5★", sublabel: "Customer satisfaction" },
                  { label: "100%", sublabel: "Fully managed moves" },
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
              headline="How long-distance moving works"
              subheadline="A structured four-step process for UAE-wide relocations."
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
              headline="Long-distance movers from Dubai"
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
              headline="Long-distance moving reviews"
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
            <SectionHeader id="faq-heading" headline="Long-Distance Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      <CTASection
        headline="Moving to another emirate?"
        body="Get a free quote from WeMoveStuff for your long-distance move from Dubai."
        primaryCTA={{ label: "Get Long-Distance Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
