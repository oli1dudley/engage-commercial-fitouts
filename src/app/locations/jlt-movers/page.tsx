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
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in JLT | Apartment & Office Moving | WeMoveStuff",
  description:
    "Professional movers in Jumeirah Lake Towers (JLT). WeMoveStuff handles apartment and office moves in JLT with packing, lift access, transport and setup.",
  path: "/locations/jlt-movers",
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
    description: "We review your requirements, coordinate building access, timing and logistics.",
  },
  {
    title: "We Pack, Move & Set Up",
    description: "Our team handles packing, transport, reassembly and setup at your new property.",
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
    description: "Quality packing materials and experienced hands to protect your belongings.",
  },
  {
    icon: Building2,
    title: "Lift and building access planning",
    description: "We coordinate service lift bookings and building access requirements for you.",
  },
  {
    icon: Wrench,
    title: "Apartment, villa and commercial capability",
    description: "We handle residential and office moves of all sizes in JLT.",
  },
  {
    icon: MapPin,
    title: "Dubai-wide coverage",
    description: "Moving services across all major communities and areas in Dubai.",
  },
  {
    icon: Clock,
    title: "Clear communication",
    description: "We keep you informed throughout the move with clear updates and scheduling.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you handle apartment moves in JLT towers?",
    answer:
      "Yes. We handle apartment moves across JLT, including packing, furniture dismantling, transport and setup. We also coordinate lift bookings and building access as part of the move.",
  },
  {
    question: "Can you move an office in JLT?",
    answer:
      "Yes. We provide office and commercial relocation support in JLT, including furniture handling, packing, transport and setup. Weekend moves are available to minimise disruption to your business.",
  },
  {
    question: "Do you need a permit to move in JLT?",
    answer:
      "Many JLT towers require a move permit and prior coordination with building management. We advise on building-specific requirements as part of the planning process.",
  },
  {
    question: "How do I get a quote for a move in JLT?",
    answer:
      "Submit your move details through our quote form or contact us directly. We'll respond quickly with a tailored quote for your JLT move.",
  },
];

const RELATED_SERVICES = [
  {
    title: "Apartment Moving",
    description: "Specialist apartment relocation services across Dubai.",
    href: "/services/apartment-moving",
  },
  {
    title: "Commercial Moving",
    description: "Office and commercial relocation services across Dubai.",
    href: "/services/commercial-moving",
  },
  {
    title: "Packing Services",
    description: "Professional packing and unpacking to protect your belongings.",
    href: "/services/packing-services",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function JltMoversPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "JLT Movers", url: "/locations/jlt-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in JLT",
          description:
            "Professional movers in Jumeirah Lake Towers (JLT) handling apartment and office moves with packing, lift access, transport and setup.",
          url: "/locations/jlt-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Movers in JLT"
        subheadline="Professional apartment and office moving services across Jumeirah Lake Towers, including packing, lift access, transport and setup."
        body="Jumeirah Lake Towers is a cluster of high-rise towers combining residential apartments and office spaces. WeMoveStuff provides moving support for both apartment residents and businesses relocating within or out of JLT."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "JLT Coverage",
          "Residential & Office Moves",
          "Lift Access Coordination",
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
                <span className="font-medium text-navy" aria-current="page">
                  JLT Movers
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
                Moving in JLT
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Jumeirah Lake Towers (JLT) is a high-density cluster of towers accommodating a large number of residents and businesses. The area is known for its mix of residential apartments and commercial office units, making it a common location for both home moves and office relocations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                WeMoveStuff handles apartment moves and office relocations across JLT towers. We coordinate lift access, building permits and parking arrangements, and manage packing, transport and setup from start to finish.
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
              headline="Moving Services in JLT"
              subheadline="Residential and office moving services for apartments and businesses across Jumeirah Lake Towers."
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
              headline="How your JLT move works"
              subheadline="A straightforward three-step process from first contact to move completion."
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
              headline="Why choose WeMoveStuff in JLT"
              subheadline="Professional moving support for residents and businesses across Jumeirah Lake Towers."
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
            <SectionHeader id="faq-heading" headline="JLT Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in JLT?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your JLT property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
