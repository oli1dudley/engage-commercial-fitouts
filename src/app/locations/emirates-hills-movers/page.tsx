import type { Metadata } from "next";
import Link from "next/link";
import {
  Package,
  Wrench,
  MapPin,
  Building2,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import AreaPills from "@/components/shared/AreaPills";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in Emirates Hills Dubai | Villa Moving | WeMoveStuff",
  description:
    "Professional villa movers in Emirates Hills Dubai. WeMoveStuff provides specialist handling for large villa moves including packing, furniture assembly and full setup.",
  path: "/locations/emirates-hills-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Full apartment relocation with packing, transport and setup.",
    href: "/services/apartment-moving",
  },
  {
    title: "Villa Moving",
    description: "Professional villa moves with careful handling and reassembly.",
    href: "/services/villa-moving",
  },
  {
    title: "Commercial Moving",
    description: "Office and business relocations with minimal disruption.",
    href: "/services/commercial-moving",
  },
  {
    title: "Packing Services",
    description: "Full packing and unpacking using quality materials.",
    href: "/services/packing-services",
  },
  {
    title: "Furniture Assembly",
    description: "Furniture dismantling and reassembly by experienced movers.",
    href: "/services/furniture-assembly",
  },
  {
    title: "TV Installation",
    description: "TV removal, transport and wall reinstallation at your new home.",
    href: "/services/tv-installation",
  },
];

const PROCESS_STEPS = [
  {
    title: "Request a Quote",
    description: "Tell us your move details and we'll respond quickly with a tailored quote.",
  },
  {
    title: "We Plan Your Move",
    description: "We review your requirements, coordinate access, timing and logistics for your villa move.",
  },
  {
    title: "We Pack, Move & Set Up",
    description: "Our team handles packing, transport, reassembly and placement at your new property.",
  },
];

const FEATURES = [
  {
    icon: CheckCircle2,
    title: "End-to-end moving support",
    description: "We manage every stage of the move from initial planning through to final setup.",
  },
  {
    icon: Package,
    title: "Professional packing",
    description: "Quality packing materials and experienced hands to protect valuable and fragile items.",
  },
  {
    icon: Wrench,
    title: "Furniture dismantling and reassembly",
    description: "Full furniture dismantle before the move and reassembly at your new villa.",
  },
  {
    icon: Building2,
    title: "Large villa capability",
    description: "We handle large villa moves with multiple bedrooms, extensive furnishings and outdoor items.",
  },
  {
    icon: MapPin,
    title: "Dubai-wide coverage",
    description: "Moving services across all major communities and areas in Dubai.",
  },
  {
    icon: Clock,
    title: "Careful, considered approach",
    description: "Premium handling for high-value furnishings and items requiring special care.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you handle large villa moves in Emirates Hills?",
    answer:
      "Yes. WeMoveStuff is experienced in large villa relocations across Emirates Hills. We plan each move carefully, accounting for access routes, vehicle requirements and the volume of items involved.",
  },
  {
    question: "Can you pack and handle high-value items during an Emirates Hills move?",
    answer:
      "Yes. Our packing service uses quality materials appropriate for the items being moved. We take particular care with fragile, high-value and bespoke furniture to ensure everything arrives in the same condition it left.",
  },
  {
    question: "How long does a villa move in Emirates Hills typically take?",
    answer:
      "This depends on the size of the villa, volume of items and whether packing is included. Larger Emirates Hills villa moves may be planned over multiple days. We discuss timelines with you during the quote process.",
  },
  {
    question: "How do I get a quote for an Emirates Hills villa move?",
    answer:
      "Submit a quote request through our website or contact us directly. We'll review your move details and provide a tailored quote based on your villa size, item volume and requirements.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function EmiratesHillsMoversPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: "Emirates Hills Movers", url: "/locations/emirates-hills-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in Emirates Hills",
          description:
            "Premium villa relocation services in Emirates Hills with specialist handling for large villas and high-value furnishings.",
          url: "/locations/emirates-hills-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Movers in Emirates Hills"
        subheadline="Premium villa relocation services in Emirates Hills — specialist handling for large villas and high-value furnishings."
        body="Emirates Hills is one of Dubai's most prestigious villa communities. WeMoveStuff provides specialist villa moving services for Emirates Hills with careful planning and expert handling."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Emirates Hills Coverage",
          "Villa Specialists",
          "Premium Handling",
          "Packing Available",
        ]}
        variant="centered"
      />

      {/* ── Section 2: Breadcrumbs ───────────────────────────────────── */}
      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-navy transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li>
                <Link href="/locations" className="text-muted-foreground hover:text-navy transition-colors">
                  Locations
                </Link>
              </li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li>
                <span className="font-medium text-navy" aria-current="page">
                  Emirates Hills Movers
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── Section 3: Intro ─────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2
                id="intro-heading"
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Moving in Emirates Hills
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Emirates Hills is one of Dubai&apos;s most exclusive residential communities, featuring large villas with extensive furnishings, art collections and bespoke furniture. Moving in Emirates Hills requires specialist handling, careful packing of high-value items and detailed planning around villa access, parking for multiple vehicles and coordination of large furniture pieces.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                WeMoveStuff provides premium villa moving services in Emirates Hills. We treat every item with the care it deserves — from furniture dismantling and wrapping through to transport, placement and reassembly at your destination.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 4: Services ──────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Moving Services in Emirates Hills"
              subheadline="Specialist villa moving services for Emirates Hills residents."
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: How It Works ──────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your Emirates Hills move works"
              subheadline="A carefully planned process from first contact to move completion."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Get a Quote", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Why WeMoveStuff ───────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-heading"
              headline="Why choose WeMoveStuff in Emirates Hills"
              subheadline="Specialist villa moving with premium care for Emirates Hills residents."
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

      {/* ── Section 7: FAQ ───────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Emirates Hills Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 8: Area Pills ────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Other areas we cover in Dubai"
              subheadline="WeMoveStuff provides moving services across all major Dubai communities."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in Emirates Hills?"
        body="Get a quote from WeMoveStuff and let our team handle your Emirates Hills villa move with the care and precision it deserves."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
