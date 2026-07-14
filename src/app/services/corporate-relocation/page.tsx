import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Package,
  Wrench,
  ClipboardList,
  MapPin,
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
  title: "Corporate Relocation Services in Dubai | WeMoveStuff",
  description:
    "Professional corporate relocation services in Dubai. WeMoveStuff supports businesses and their employees with full relocation management across Dubai.",
  path: "/services/corporate-relocation",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Corporate Relocation" },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Corporate Relocation Specialists",
    description: "Experienced with employee relocations for companies of all sizes.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "All employee belongings packed securely using quality materials.",
  },
  {
    icon: Wrench,
    title: "Furniture Dismantling & Assembly",
    description: "Furniture dismantled and reassembled at the new property as required.",
  },
  {
    icon: ClipboardList,
    title: "Full Move Management",
    description: "We coordinate every stage of the relocation so the employee doesn't have to.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Corporate relocation services across all major communities in Dubai.",
  },
  {
    icon: Clock,
    title: "Planned to Your Schedule",
    description: "Relocations coordinated around the employee's start date and business requirements.",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning & Coordination",
  "Professional Packing",
  "Furniture Dismantling",
  "Loading & Transport",
  "Furniture Reassembly",
  "Setup at New Property",
  "Unpacking Support",
  "Liaison with HR/Admin Teams",
];

const PROCESS_STEPS = [
  {
    title: "Initial Consultation",
    description: "We discuss your corporate requirements and employee relocation timeline.",
  },
  {
    title: "Move Planning",
    description: "A tailored plan is agreed covering every stage of the employee relocation.",
  },
  {
    title: "Moving Day",
    description: "Our team handles packing, transport and moving of all employee belongings.",
  },
  {
    title: "Setup & Handover",
    description: "Furniture reassembled and property set up, ready for the employee to move in.",
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
    name: "HR Team, Tech Co.",
    review:
      "WeMoveStuff handled our employee relocations professionally every time. A reliable partner for corporate moves.",
  },
  {
    name: "Linda W.",
    review: "Our company uses WeMoveStuff for all staff relocations in Dubai. Seamless service every time.",
  },
  {
    name: "Tariq F.",
    review: "Excellent corporate relocation service. The team handled everything and kept us informed throughout.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What corporate relocation services do you offer?",
    answer:
      "We provide full employee relocation management including packing, transport, furniture assembly and setup at the new property. We can liaise with HR teams and coordinate moves around business timelines.",
  },
  {
    question: "Can you manage multiple employee relocations at once?",
    answer:
      "Yes. We can coordinate multiple relocations for companies relocating several employees at the same time. Contact us to discuss your requirements.",
  },
  {
    question: "Do you provide relocation support for employees moving from overseas?",
    answer:
      "We focus on relocations within Dubai and the UAE. We can assist employees arriving in Dubai by helping them settle into their new property.",
  },
  {
    question: "How far in advance should we book corporate relocations?",
    answer:
      "We recommend booking at least 1–2 weeks in advance for individual employee relocations. For multiple relocations, additional lead time is advised.",
  },
  {
    question: "Can you provide a regular account for ongoing corporate relocations?",
    answer:
      "Yes. We work with businesses that have ongoing relocation requirements. Contact us to discuss setting up a corporate account.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function CorporateRelocationPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Corporate Relocation", url: "/services/corporate-relocation" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Corporate Relocation Dubai",
          description:
            "Professional corporate relocation services in Dubai. WeMoveStuff supports businesses and their employees with full relocation management across Dubai.",
          url: "/services/corporate-relocation",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero - centered variant */}
      <PageHero
        headline="Corporate Relocation Services In Dubai"
        subheadline="Full-service corporate relocation support for businesses and their employees across Dubai."
        body="WeMoveStuff provides corporate relocation services in Dubai for companies relocating employees. We manage every stage of the employee move, from packing and transport to setup at the new property."
        primaryCTA={{ label: "Get Corporate Relocation Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Corporate Specialists",
          "Employee Relocation",
          "Packing Available",
          "Furniture Assembly",
          "Fully Managed",
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
                  Get Your Corporate Relocation Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your corporate relocation needs and we&apos;ll provide a clear, no-obligation quote.
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
              headline="Corporate relocation made simple"
              subheadline="A professional, fully managed relocation service for your employees."
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
                  What&apos;s included in our corporate relocation service
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
                  { label: "Managed", sublabel: "End-to-end coordination" },
                  { label: "100%", sublabel: "Fully managed relocations" },
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
              headline="How corporate relocation works"
              subheadline="A structured four-step process for employee relocations in Dubai."
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
              headline="Corporate relocation across Dubai"
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
              headline="Corporate relocation reviews"
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
            <SectionHeader id="faq-heading" headline="Corporate Relocation FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Need to relocate employees in Dubai?"
        body="Get a quote from WeMoveStuff and let us manage the relocation process for your team."
        primaryCTA={{ label: "Get Corporate Relocation Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
