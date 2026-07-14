import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Building2,
  Home,
  Briefcase,
  Package,
  Wrench,
  Tv,
  Check,
  Users,
  MapPin,
  Zap,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { localBusinessSchema, organizationSchema, faqPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import AreaPills from "@/components/shared/AreaPills";
import CTASection from "@/components/shared/CTASection";
import QuickQuoteForm from "@/components/shared/QuickQuoteForm";
import Image from "next/image";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in Dubai | Apartment, Villa & Office Moving | WeMoveStuff",
  description: "Professional movers in Dubai for apartments, villas and offices. WeMoveStuff handles packing, furniture dismantling, transport, reassembly and setup across Dubai.",
  path: "/",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Package,
    title: "End-to-End Moving",
    description: "We manage everything from packing to setup so you don't have to lift a finger.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Professional movers who understand Dubai relocations, buildings, and logistics.",
  },
  {
    icon: Building2,
    title: "Apartment Specialists",
    description: "Moves for studios, one-beds, and large apartments across Dubai.",
  },
  {
    icon: Home,
    title: "Villa Relocations",
    description: "Complete villa moving support with careful handling of large items.",
  },
  {
    icon: Briefcase,
    title: "Commercial Moving",
    description: "Office and business relocations across Dubai with minimal disruption.",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description: "Easy contact through WhatsApp, phone and email. We respond fast.",
  },
];

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Studio to large apartment moves handled end to end.",
    href: "/services/apartment-moving",
    image: "/images/apartment-moving/apartment-moving-cover.jpg",
  },
  {
    title: "Villa Moving",
    description: "Full-service villa relocations with packing and furniture setup.",
    href: "/services/villa-moving",
    image: "/images/villa-moving/villa-moving-cover.jpg",
  },
  {
    title: "Commercial Moving",
    description: "Office and commercial relocations with organised planning.",
    href: "/services/commercial-moving",
    image: "/images/commercial-moving/commercial-moving-cover.jpg",
  },
  {
    title: "Packing Services",
    description: "Professional packing with quality materials to protect your belongings.",
    href: "/services/packing-services",
    image: "/images/packing-services/packing-services-cover.jpg",
  },
  {
    title: "Furniture Assembly",
    description: "Expert disassembly and reassembly of all furniture types.",
    href: "/services/furniture-assembly",
    image: "/images/furniture-assembly/furniture-assembly-cover.jpg",
  },
  {
    title: "TV Installation",
    description: "Safe TV dismounting, transport and wall installation at your new location.",
    href: "/services/tv-installation",
    image: "/images/tv-installation/tv-installation-cover.jpg",
  },
];

const PROCESS_STEPS = [
  { title: "Request A Quote", description: "Tell us your move details and we'll get back quickly." },
  { title: "Plan The Move", description: "We assess what you need and build a clear plan." },
  { title: "Packing & Preparation", description: "Our team packs carefully using quality materials." },
  { title: "Transport", description: "Safe and secure transport to your new location." },
  { title: "Setup & Completion", description: "We unpack, assemble and set up your new space." },
];

const WHY_CHOOSE_FEATURES = [
  {
    icon: Zap,
    title: "Fast Quotations",
    description: "We respond to quote requests quickly so you can plan your move without delays. Most quotes are returned within the hour.",
  },
  {
    icon: Users,
    title: "Professional Moving Team",
    description: "Experienced movers who handle every item carefully, from packing through to final placement in your new home.",
  },
  {
    icon: Package,
    title: "Full Packing Available",
    description: "Professional packing using quality materials for every room — fragile items, clothing, electronics, furniture and more.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "We dismantle and reassemble all furniture types so everything is ready in your new property on the same day.",
  },
  {
    icon: Tv,
    title: "TV Installation",
    description: "Safe removal, transport and wall installation of your TV at the new property, any wall type, any size.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Moving services across all major Dubai communities — from Dubai Marina and Downtown to Dubai Hills, Arabian Ranches and JVC.",
  },
];

const REVIEWS = [
  {
    name: "Ahmed R.",
    location: "Dubai Marina",
    review: "The move was organised, professional and smooth. The team handled our furniture carefully and had everything set up the same day.",
  },
  {
    name: "Sarah T.",
    location: "JVC",
    review: "Clear communication from start to finish. They packed everything neatly and the reassembly at our new place was done properly.",
  },
  {
    name: "Omar H.",
    location: "Business Bay",
    review: "Everything arrived safely and was set up correctly. Made our office relocation very straightforward with minimal disruption.",
  },
  {
    name: "Fatima A.",
    location: "Arabian Ranches",
    review: "Great service for our villa move. The team was careful with our furniture and the whole process was much less stressful than we expected.",
  },
  {
    name: "James L.",
    location: "JLT",
    review: "Very efficient. They coordinated the lift booking with our building and the move was done well within the time we had.",
  },
  {
    name: "Rania K.",
    location: "Downtown Dubai",
    review: "Professional team and good communication throughout. They handled the building permit and access arrangements as part of the service.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much do movers cost in Dubai?",
    answer:
      "Moving costs in Dubai depend on the size of your home, the distance, and the services required. We provide a free, no-obligation quote tailored to your specific move.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes. Our team provides full packing services using quality materials to protect your belongings. We can pack everything or just the fragile items — your choice.",
  },
  {
    question: "Can you dismantle and reassemble furniture?",
    answer:
      "Yes. Our team handles full furniture disassembly before the move and reassembly at your new location. We bring all necessary tools.",
  },
  {
    question: "Do you provide commercial moving services?",
    answer:
      "Yes. We handle office and commercial relocations across Dubai, including weekend moves to minimise business disruption.",
  },
  {
    question: "How early should I book?",
    answer:
      "We recommend booking at least 2–3 days in advance for smaller moves and 1 week ahead for larger villa or commercial relocations. Contact us and we'll advise.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={organizationSchema()} />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Fast, Reliable Movers in Dubai"
        subheadline="Professional apartment, villa and office moving services across Dubai, including packing, furniture dismantling, transport, reassembly and careful placement."
        body="Whether you're moving a studio apartment, a large villa or an office, WeMoveStuff handles the planning, packing, transport and setup so you can focus on settling in."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Apartment Moving",
          "Villa Moving",
          "Commercial Moving",
          "Packing Services",
          "Furniture Assembly",
          "Dubai-Wide Coverage",
        ]}
        image={{
          src: "/images/home/moving-home.jpg",
          alt: "Professional movers packing and wrapping furniture in a Dubai apartment.",
          priority: true,
        }}
        variant="split"
      />

      {/* ── Trust Bar ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-light-grey/60" aria-label="Service highlights">
        <div className="max-container container-padding py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: MapPin, text: "Dubai-wide service" },
              { icon: Package, text: "Packing available" },
              { icon: Wrench, text: "Furniture dismantling & reassembly" },
              { icon: Users, text: "Careful, professional movers" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-navy">
                <Icon className="size-4 text-brand shrink-0" aria-hidden />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 2: Quick Quote Form ──────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="quote-form-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-form-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Free Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your move and we&apos;ll get back to you with a tailored, transparent quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote promise">
                  {[
                    "Fast response — usually within the hour",
                    "Transparent pricing, no hidden fees",
                    "Tailored to your move size and services",
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
              <QuickQuoteForm headline="" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Choose WeMoveStuff ──────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Why choose WeMoveStuff?"
              subheadline="From studio apartments to large commercial offices, we handle every move with the same care and attention."
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

      {/* ── Section 4: Services Overview ────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Moving services built around your needs"
              subheadline="Choose from our full range of professional moving services across Dubai."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/services" />} variant="secondary" size="lg">
              View All Services
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: How Your Move Works ──────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your move works"
              subheadline="A simple, organised process from first contact to final setup."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Start My Move", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Why Dubai Residents Choose WeMoveStuff ───────── */}
      <section className="bg-white section-padding" aria-labelledby="why-dubai-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-dubai-heading"
              headline="Why Dubai Residents Choose WeMoveStuff"
              subheadline="Professional moving services built around your timeline, your property and your needs."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_FEATURES.map((feature) => (
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

      {/* ── Section 7: Residential Moving ───────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="residential-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="residential-heading"
              headline="Apartment & Villa Moving Services"
              subheadline="Residential moving specialists for all property types across Dubai."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Apartment Moving Card */}
            <StaggerItem className="h-full">
              <Link
                href="/services/apartment-moving"
                className="group flex flex-col gap-7 rounded-[20px] bg-white border border-[#E5EBF5] shadow-[0_4px_24px_rgba(0,31,91,0.08)] p-8 md:p-10 h-full transition-all duration-300 ease-out hover:shadow-[0_16px_48px_rgba(0,31,91,0.15)] hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                  <Building2 className="size-7 text-brand" strokeWidth={1.5} aria-hidden />
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[22px] md:text-[26px] font-extrabold text-navy leading-tight tracking-tight">
                    Apartment Moving
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Moving support for apartments, studios and high-rise buildings across Dubai.
                  </p>
                </div>

                <div className="border-t border-[#E5EBF5]" aria-hidden />

                <ul className="flex flex-col gap-3.5" aria-label="Apartment moving features">
                  {[
                    "Studios to Penthouses",
                    "Building Approvals Handled",
                    "Professional Packing & Unpacking",
                    "Quick & Reliable Service",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-dark-text">
                      <Check className="size-4 text-success shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-brand font-semibold text-sm mt-auto transition-all duration-200 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="size-4" aria-hidden />
                </div>
              </Link>
            </StaggerItem>

            {/* Villa Moving Card */}
            <StaggerItem className="h-full">
              <Link
                href="/services/villa-moving"
                className="group flex flex-col gap-7 rounded-[20px] bg-white border border-[#E5EBF5] shadow-[0_4px_24px_rgba(0,31,91,0.08)] p-8 md:p-10 h-full transition-all duration-300 ease-out hover:shadow-[0_16px_48px_rgba(0,31,91,0.15)] hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                  <Home className="size-7 text-brand" strokeWidth={1.5} aria-hidden />
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[22px] md:text-[26px] font-extrabold text-navy leading-tight tracking-tight">
                    Villa Moving
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Complete villa relocation services with packing, transport and setup.
                  </p>
                </div>

                <div className="border-t border-[#E5EBF5]" aria-hidden />

                <ul className="flex flex-col gap-3.5" aria-label="Villa moving features">
                  {[
                    "Full Household Relocations",
                    "Furniture Dismantling & Assembly",
                    "Premium Packing Materials",
                    "End-to-End Moving Service",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-dark-text">
                      <Check className="size-4 text-success shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-brand font-semibold text-sm mt-auto transition-all duration-200 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="size-4" aria-hidden />
                </div>
              </Link>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 7: Commercial Moving ────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="commercial-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="commercial-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Office &amp; commercial relocation services
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  WeMoveStuff helps businesses relocate offices, workspaces and commercial units with organised planning and minimal disruption.
                </p>
                <ul className="flex flex-col gap-3" aria-label="Commercial moving benefits">
                  {[
                    "Office Relocations",
                    "Weekend Moves Available",
                    "Furniture Setup",
                    "Packing & Labelling",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Button render={<Link href="/services/commercial-moving" />} variant="primary" size="lg">
                    Commercial Moving
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                    variant="whatsapp"
                    size="lg"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/homepage/commercial-moving-home.jpg"
                  alt="Office relocation in progress — wrapped chairs and packed boxes in a Dubai office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 8: Areas We Serve ───────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Moving services across Dubai"
              subheadline="We cover all major areas and communities across the city."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <AreaPills cta={{ label: "Check Availability", href: "/contact" }} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: Customer Reviews ─────────────────────────────── */}
      <section
        className="relative bg-navy section-padding overflow-hidden"
        aria-labelledby="reviews-heading"
      >
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
              headline="Trusted by Dubai residents and businesses"
              subheadline="Real feedback from customers who've moved with WeMoveStuff."
              light
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((review) => (
              <StaggerItem key={review.name}>
                <ReviewCard
                  name={review.name}
                  location={review.location}
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

      {/* ── Section 10: FAQ Preview ──────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Frequently Asked Questions" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/faq" />} variant="secondary" size="md">
              View All FAQs
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── For Property Professionals ─────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="b2b-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="rounded-[20px] bg-white border border-[#E5EBF5] shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-xs font-semibold text-brand uppercase tracking-wider">For Property Professionals</p>
                <h2 id="b2b-heading" className="text-xl md:text-2xl font-extrabold text-navy leading-tight tracking-tight">
                  Working with property managers, agencies and relocation firms
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  WeMoveStuff works with property managers, real estate agencies, relocation companies and developers who need reliable moving support for clients, tenants and residents across Dubai.
                </p>
              </div>
              <div className="shrink-0">
                <Button render={<Link href="/partnerships" />} variant="secondary" size="md">
                  Explore Partnerships
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 11: Final CTA ────────────────────────────────────── */}
      <CTASection
        headline="Ready to move without the stress?"
        body="Tell us where you're moving, what needs to be moved and which services you need. We'll help plan the rest."
        primaryCTA={{ label: "Get Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/homepage/homepage-final-cta.jpg"
      />
    </>
  );
}
