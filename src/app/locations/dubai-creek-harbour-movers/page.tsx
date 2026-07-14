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
  title: "Movers in Dubai Creek Harbour | Apartment Moving | WeMoveStuff",
  description:
    "Professional apartment movers in Dubai Creek Harbour. WeMoveStuff handles packing, lift access, transport and setup for apartment moves across Dubai Creek Harbour.",
  path: "/locations/dubai-creek-harbour-movers",
});

const SERVICES = [
  { title: "Apartment Moving", description: "Full apartment relocation with packing, transport and setup.", href: "/services/apartment-moving" },
  { title: "Villa Moving", description: "Professional villa moves with careful handling and reassembly.", href: "/services/villa-moving" },
  { title: "Commercial Moving", description: "Office and business relocations with minimal disruption.", href: "/services/commercial-moving" },
  { title: "Packing Services", description: "Full packing and unpacking using quality materials.", href: "/services/packing-services" },
  { title: "Furniture Assembly", description: "Furniture dismantling and reassembly by experienced movers.", href: "/services/furniture-assembly" },
  { title: "TV Installation", description: "TV removal, transport and wall reinstallation at your new home.", href: "/services/tv-installation" },
];

const PROCESS_STEPS = [
  { title: "Request a Quote", description: "Tell us your move details and we'll respond quickly with a tailored quote." },
  { title: "We Plan Your Move", description: "We review your requirements, coordinate access, timing and logistics." },
  { title: "We Pack, Move & Set Up", description: "Our team handles packing, transport, reassembly and setup at your new property." },
];

const FEATURES = [
  { icon: CheckCircle2, title: "End-to-end moving support", description: "We manage every stage of the move from initial planning through to final setup." },
  { icon: Package, title: "Professional packing", description: "Quality packing materials and experienced hands to protect your belongings." },
  { icon: Wrench, title: "Furniture dismantling and reassembly", description: "Full furniture dismantle before the move and reassembly at your new property." },
  { icon: Building2, title: "High-rise apartment expertise", description: "We coordinate building access, lift bookings and parking for apartment moves across Dubai Creek Harbour towers." },
  { icon: MapPin, title: "Dubai-wide coverage", description: "Moving services across all major communities and areas in Dubai." },
  { icon: Clock, title: "Reliable scheduling", description: "Moves planned to your timeline with clear communication throughout." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "Do you move apartments in Dubai Creek Harbour?", answer: "Yes. We handle apartment moves across Dubai Creek Harbour towers, including packing, furniture handling, transport and setup." },
  { question: "How do you handle building access in Dubai Creek Harbour?", answer: "We coordinate with building management for lift access, move permits and parking as part of the planning process for every Dubai Creek Harbour move." },
  { question: "Do you offer packing services in Dubai Creek Harbour?", answer: "Yes. Full packing and unpacking services are available. We bring all packing materials and protect every item for transport." },
  { question: "How do I get a moving quote for Dubai Creek Harbour?", answer: "Submit a quote request through our website or contact us directly. We'll review your move details and respond quickly with a tailored quote." },
];

export default function DubaiCreekHarbourMoversPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Dubai Creek Harbour Movers", url: "/locations/dubai-creek-harbour-movers" }])} />
      <StructuredData data={serviceSchema({ name: "Movers in Dubai Creek Harbour", description: "Professional apartment moving services across Dubai Creek Harbour.", url: "/locations/dubai-creek-harbour-movers", serviceType: "MovingService" })} />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Movers in Dubai Creek Harbour"
        subheadline="Professional apartment moving services across Dubai Creek Harbour, including packing, lift access, transport and setup at your new home."
        body="Dubai Creek Harbour is a new waterfront development in Dubai. WeMoveStuff provides professional apartment moving support across Dubai Creek Harbour."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={["Creek Harbour Coverage", "Apartment Specialists", "Packing Available", "Building Access Coordination"]}
        variant="centered"
      />

      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-navy transition-colors">Home</Link></li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li><span className="font-medium text-navy" aria-current="page">Dubai Creek Harbour Movers</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Single-column intro - NO IMAGE */}
      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2 id="intro-heading" className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance">
                Moving in Dubai Creek Harbour
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">Dubai Creek Harbour is a new waterfront mixed-use development on the banks of the Dubai Creek. The development features high-rise apartment towers with views of the creek and the Dubai skyline, attracting a growing number of residents.</p>
              <p className="text-base text-muted-foreground leading-relaxed">WeMoveStuff provides apartment moving support across Dubai Creek Harbour, coordinating building access, lift availability and parking as part of the move planning. We handle packing, transport and setup from start to finish.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="services-heading" headline="Moving Services in Dubai Creek Harbour" subheadline="A full range of moving services for apartments across Dubai Creek Harbour." /></FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard title={service.title} description={service.description} href={service.href} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="process-heading" headline="How your Dubai Creek Harbour move works" subheadline="A straightforward three-step process from first contact to move completion." /></FadeUp>
          <FadeUp delay={0.1}><ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Get a Quote", href: "/quote" }} /></FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="why-heading" headline="Why choose WeMoveStuff in Dubai Creek Harbour" subheadline="Professional moving support for Dubai Creek Harbour apartment residents." /></FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp><SectionHeader id="faq-heading" headline="Dubai Creek Harbour Moving FAQ" /></FadeUp>
          <FadeUp delay={0.08}><FAQAccordion items={FAQ_ITEMS} /></FadeUp>
        </div>
      </section>

      <CTASection
        headline="Ready to move in Dubai Creek Harbour?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Dubai Creek Harbour property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
