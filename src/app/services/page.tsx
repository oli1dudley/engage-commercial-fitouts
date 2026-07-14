import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Package,
  Wrench,
  Tv,
  Building2,
  Home,
  Briefcase,
  Check,
  Users,
  MapPin,
  Shield,
  Truck,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import FeatureCard from "@/components/shared/FeatureCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import AreaPills from "@/components/shared/AreaPills";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Moving Services in Dubai | WeMoveStuff",
  description: "WeMoveStuff provides apartment moving, villa moving, commercial relocation, packing, furniture assembly and TV installation services across Dubai.",
  path: "/services",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

const SERVICES = [
  {
    title: "Apartment Moving",
    description:
      "Professional apartment moving services for studios, one-bedroom, two-bedroom and larger apartments across Dubai.",
    href: "/services/apartment-moving",
    image: "/images/services/service-apartment-moving.jpg",
    schemaDescription: "Professional apartment moving services for studios and apartments across Dubai.",
  },
  {
    title: "Villa Moving",
    description:
      "Complete villa relocation services including packing, transport and setup.",
    href: "/services/villa-moving",
    image: "/images/services/service-villa-moving.jpg",
    schemaDescription: "Complete villa relocation services with packing, transport and setup across Dubai.",
  },
  {
    title: "Commercial Moving",
    description:
      "Office and commercial relocations with organised planning and minimal disruption.",
    href: "/services/commercial-moving",
    image: "/images/services/service-commercial-moving.jpg",
    schemaDescription: "Office and commercial relocation services with organised planning and minimal disruption in Dubai.",
  },
  {
    title: "Packing Services",
    description:
      "Professional packing services using organised packing methods and suitable materials.",
    href: "/services/packing-services",
    image: "/images/services/service-packing.jpg",
    schemaDescription: "Professional packing services using quality materials for residential and commercial moves in Dubai.",
  },
  {
    title: "Furniture Assembly",
    description:
      "Furniture dismantling, moving and reassembly support for homes and offices.",
    href: "/services/furniture-assembly",
    image: "/images/services/service-furniture-assembly.jpg",
    schemaDescription: "Furniture dismantling, moving and reassembly support for homes and offices in Dubai.",
  },
  {
    title: "TV Installation",
    description:
      "TV removal, transport support and reinstallation services.",
    href: "/services/tv-installation",
    image: "/images/services/service-tv-installation.jpg",
    schemaDescription: "TV removal, transport and reinstallation services in Dubai.",
  },
];

const FEATURES = [
  {
    icon: Package,
    title: "End-To-End Service",
    description: "We manage packing, transport, assembly and setup so you don't have to.",
  },
  {
    icon: Users,
    title: "Experienced Movers",
    description: "Professional movers with hands-on experience in Dubai relocations.",
  },
  {
    icon: Home,
    title: "Residential & Commercial",
    description: "We serve homes, apartments, villas and commercial spaces.",
  },
  {
    icon: Package,
    title: "Packing Available",
    description: "Full packing and unpacking services available on request.",
  },
  {
    icon: Wrench,
    title: "Furniture Setup Support",
    description: "We dismantle and reassemble furniture at your new location.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "We cover all major communities and areas across Dubai.",
  },
];

const RESIDENTIAL_BENEFITS = [
  {
    icon: Shield,
    title: "Fully Insured Moves",
    description: "Your belongings are protected throughout the moving process.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "High-quality packing materials for maximum protection.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Expert dismantling and reassembly of furniture.",
  },
  {
    icon: Building2,
    title: "Building Permit Support",
    description: "We assist with access permits and building requirements.",
  },
  {
    icon: Truck,
    title: "Secure Transportation",
    description: "Modern vehicles equipped for safe transport across Dubai.",
  },
  {
    icon: Home,
    title: "Apartment & Villa Experts",
    description: "Specialists in residential moves of all sizes.",
  },
];

const COMMERCIAL_BENEFITS = [
  "Office Relocations",
  "Retail Relocations",
  "Commercial Units",
  "Furniture Setup",
  "Packing Support",
];

const ADDITIONAL_SERVICES = [
  { title: "Office Movers", href: "/services/office-movers" },
  { title: "Local Movers", href: "/services/local-movers" },
  { title: "Same-Day Movers", href: "/services/same-day-movers" },
  { title: "Corporate Relocation", href: "/services/corporate-relocation" },
  { title: "Long-Distance Movers", href: "/services/long-distance-movers" },
  { title: "Storage Services", href: "/services/storage-services" },
  { title: "Piano Movers", href: "/services/piano-movers" },
  { title: "Fragile Item Moving", href: "/services/fragile-item-movers" },
  { title: "Furniture Disassembly", href: "/services/furniture-disassembly" },
];

const PROCESS_STEPS = [
  { title: "Request A Quote", description: "Tell us your move details and we'll respond quickly." },
  { title: "Plan Your Move", description: "We build a clear plan covering every stage." },
  { title: "Packing & Preparation", description: "Careful packing using quality materials." },
  { title: "Moving Day", description: "Efficient, safe transport to your new location." },
  { title: "Setup & Completion", description: "We unpack, assemble and set everything up." },
];

const REVIEWS = [
  {
    name: "Mohammed A.",
    review: "The team handled our apartment move professionally from start to finish.",
  },
  {
    name: "Laura M.",
    review: "Our office relocation was organised and completed with minimal disruption.",
  },
  {
    name: "Saeed K.",
    review: "Excellent communication and careful handling of furniture.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which moving services do you offer?",
    answer:
      "We offer apartment moving, villa moving, commercial relocation, packing services, furniture assembly and TV installation across Dubai.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes. We offer full packing and unpacking services using professional materials. You can choose full packing, partial packing, or we can pack fragile items only.",
  },
  {
    question: "Can furniture assembly be included?",
    answer:
      "Yes. Our team can dismantle furniture before the move and reassemble it at your new location. We bring all the tools required.",
  },
  {
    question: "Do you move offices?",
    answer:
      "Yes. We provide office and commercial relocations across Dubai. We can arrange weekend moves to minimise disruption to your business.",
  },
  {
    question: "Do you serve all areas of Dubai?",
    answer:
      "Yes. We cover all major communities and areas across Dubai including Dubai Marina, Downtown, Business Bay, JLT, JVC, Dubai Hills, Arabian Ranches, Palm Jumeirah and more.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }])} />
      {SERVICES.map((s) => (
        <StructuredData
          key={s.href}
          data={serviceSchema({ name: s.title, description: s.schemaDescription, url: s.href })}
        />
      ))}

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Moving Services Across Dubai"
        subheadline="Professional moving, packing and relocation services for apartments, villas, offices and commercial spaces."
        body="Whether you're moving home, relocating a business or simply need help packing and setting up furniture, WeMoveStuff provides complete relocation support across Dubai."
        primaryCTA={{ label: "Get Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/services/services-hero.jpg",
          alt: "Professional moving services team in Dubai.",
          priority: true,
        }}
        variant="split"
      />

      {/* ── Section 2: Services Grid ─────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="services-grid-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader id="services-grid-heading" headline="Our Services" />
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
        </div>
      </section>

      {/* ── Section 3: Why Choose WeMoveStuff ──────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Why choose WeMoveStuff?"
              subheadline="Reliable, professional movers with experience across every type of Dubai relocation."
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

      {/* ── Section 4: Residential Moving Services ───────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="residential-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left column ~40% */}
            <FadeUp className="lg:col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2
                  id="residential-heading"
                  className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight text-balance"
                >
                  Residential Moving Services
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  From studio apartments to large villas, our experienced team handles every stage of your move with care, efficiency and professional planning across Dubai.
                </p>
              </div>

              <ul className="flex flex-col gap-3.5" aria-label="Residential moving trust points">
                {[
                  "Trusted by families, professionals and property managers",
                  "Safe, secure and stress-free moving experience",
                  "Tailored solutions for apartments and villas of all sizes",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-medium text-dark-text">
                    <Check className="size-4 text-brand shrink-0 mt-0.5" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>

              <Button render={<Link href="/services/apartment-moving" />} variant="secondary" size="md" className="self-start">
                View Residential Services
                <ArrowRight className="size-4" />
              </Button>
            </FadeUp>

            {/* Right column ~60% — benefit cards grid */}
            <StaggerGrid className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RESIDENTIAL_BENEFITS.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="group flex flex-col gap-4 rounded-[16px] bg-white border border-[#E5EBF5] shadow-[0_2px_12px_rgba(0,31,91,0.06)] p-5 h-full transition-all duration-300 ease-out hover:shadow-[0_10px_32px_rgba(0,31,91,0.13)] hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                      <benefit.icon className="size-5 text-brand" strokeWidth={1.5} aria-hidden />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[15px] font-extrabold text-navy leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

          </div>
        </div>
      </section>

      {/* ── Section 5: Commercial Moving Services ────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="commercial-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="commercial-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Commercial relocation services
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Businesses require efficient and organised moves that minimise downtime.
                </p>
                <ul className="flex flex-col gap-3" aria-label="Commercial moving benefits">
                  {COMMERCIAL_BENEFITS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/services/commercial-moving" />}
                  variant="primary"
                  size="lg"
                  className="self-start"
                >
                  View Commercial Services
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="aspect-video rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/services/service-commercial-relocation.jpg"
                  alt="Commercial moving Dubai"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 6: Additional Services ───────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="additional-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="additional-heading"
              headline="More moving services"
              subheadline="Specialist and support services for every stage of your relocation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDITIONAL_SERVICES.map((service) => (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-3 rounded-[14px] bg-white border border-light-grey/60 px-5 py-4 text-sm font-semibold text-navy shadow-[0_2px_8px_rgba(0,31,91,0.06)] hover:shadow-[0_8px_24px_rgba(0,31,91,0.12)] hover:-translate-y-0.5 transition-all duration-250"
                >
                  {service.title}
                  <ArrowRight className="size-4 text-brand shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/quote" />} variant="primary" size="lg">
              Get A Complete Quote
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 7: How It Works ───────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your move works"
              subheadline="A clear, organised process from your first call to your final setup."
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

      {/* ── Section 8: Service Areas ──────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Moving services across Dubai"
              subheadline="We cover all major communities and areas across the city."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills cta={{ label: "Check Availability", href: "/contact" }} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: Customer Reviews ───────────────────────────────── */}
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
              headline="Trusted by customers across Dubai"
              subheadline="Real feedback from people who've moved with WeMoveStuff."
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

      {/* ── Section 10: FAQ Preview ───────────────────────────────────── */}
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
              View Full FAQ
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 11: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Ready to plan your move?"
        body="Tell us what type of move you're planning and our team will provide a clear, no-obligation quote."
        primaryCTA={{ label: "Get Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/services/services-final-cta.jpg"
      />
    </>
  );
}
