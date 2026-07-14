import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Package,
  Clock,
  MapPin,
  Wrench,
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
  title: "Storage Services in Dubai | Short & Long-Term | WeMoveStuff",
  description:
    "Secure storage services in Dubai for short and long-term needs. WeMoveStuff arranges safe, accessible storage for your belongings during or between moves.",
  path: "/services/storage-services",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Storage Services" },
];

const FEATURES = [
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Your belongings stored safely in professional storage facilities.",
  },
  {
    icon: Package,
    title: "Packing Assistance Available",
    description: "We can pack and prepare your items for storage as part of the service.",
  },
  {
    icon: Clock,
    title: "Flexible Storage Terms",
    description: "Short-term and long-term storage options available to suit your timeline.",
  },
  {
    icon: MapPin,
    title: "Dubai-Based Storage",
    description: "Storage solutions available across Dubai with accessible facilities.",
  },
  {
    icon: Wrench,
    title: "Collection & Delivery",
    description: "We collect items for storage and return them when you're ready.",
  },
  {
    icon: ClipboardList,
    title: "Inventory Management",
    description: "We help organise and catalogue your stored items for easy access.",
  },
];

const INCLUDED_ITEMS = [
  "Storage Consultation",
  "Packing Assistance Available",
  "Collection from Your Property",
  "Secure Storage Facility",
  "Inventory Tracking",
  "Flexible Term Options",
  "Delivery to New Property",
  "Short & Long-Term Available",
];

const PROCESS_STEPS = [
  {
    title: "Get A Quote",
    description: "Tell us your storage requirements and we'll recommend the right solution.",
  },
  {
    title: "We Collect Your Items",
    description: "We pack and collect your belongings from your property.",
  },
  {
    title: "Secure Storage",
    description: "Your items are stored safely in a professional storage facility.",
  },
  {
    title: "Delivery When Ready",
    description: "We deliver your belongings to your new property when you need them.",
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
    name: "Priya M.",
    review: "WeMoveStuff arranged storage for us between our moves. The whole process was easy and stress-free.",
  },
  {
    name: "Tom H.",
    review: "Fantastic storage solution. They collected everything, stored it safely and delivered when we needed.",
  },
  {
    name: "Nour K.",
    review: "Reliable storage service with great communication. Would definitely use again.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What storage options do you offer in Dubai?",
    answer:
      "We can arrange short-term and long-term storage solutions in Dubai to suit your timeline. Contact us to discuss your requirements and we'll recommend the most suitable option.",
  },
  {
    question: "Can you collect my items and put them into storage?",
    answer:
      "Yes. We can collect your belongings from your property, pack them if required, and transfer them to storage on your behalf.",
  },
  {
    question: "How long can I store my belongings?",
    answer:
      "We offer flexible storage terms, from a few weeks to several months. Let us know your timeline and we'll arrange accordingly.",
  },
  {
    question: "Can you deliver my stored items to my new property?",
    answer:
      "Yes. When you're ready, we'll deliver your items from storage to your new property and help with unpacking and setup.",
  },
  {
    question: "Is my furniture safe in storage?",
    answer:
      "Yes. All items are stored in professional facilities. We recommend wrapping and protecting furniture before storage, which we can assist with as part of the service.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function StorageServicesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Storage Services", url: "/services/storage-services" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Storage Services Dubai",
          description:
            "Secure storage services in Dubai for short and long-term needs. WeMoveStuff arranges safe, accessible storage for your belongings during or between moves.",
          url: "/services/storage-services",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero - centered variant */}
      <PageHero
        headline="Storage Services In Dubai"
        subheadline="Secure, accessible storage solutions for your belongings during or between moves in Dubai."
        body="WeMoveStuff helps arrange secure storage in Dubai for short and long-term needs. Whether you need storage for a few weeks between moves or a longer-term solution, we can help."
        primaryCTA={{ label: "Get Storage Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Short & Long-Term",
          "Secure Storage",
          "Packing Available",
          "Collection & Delivery",
          "Flexible Terms",
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
                  Get Your Storage Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your storage needs and we&apos;ll provide a clear, no-obligation quote.
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
              headline="Storage solutions made easy"
              subheadline="Flexible, secure storage for your belongings during or between moves."
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
                  What&apos;s included in our storage service
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
                  { label: "Flexible", sublabel: "Short & long-term" },
                  { label: "Secure", sublabel: "Safe storage facilities" },
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
              headline="How our storage service works"
              subheadline="A simple four-step process from collection to delivery."
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
              headline="Storage services across Dubai"
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
              headline="Storage service reviews"
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
            <SectionHeader id="faq-heading" headline="Storage Services FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Need storage in Dubai?"
        body="Get a quote from WeMoveStuff and let us arrange secure storage for your belongings."
        primaryCTA={{ label: "Get Storage Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
