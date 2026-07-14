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
  title: "Movers in Town Square Dubai | Apartment & Villa Moving | WeMoveStuff",
  description:
    "Professional movers in Town Square Dubai. WeMoveStuff handles apartment and villa relocations across Town Square with packing, furniture assembly, transport and full setup.",
  path: "/locations/town-square-movers",
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
  { icon: Building2, title: "Apartments and townhouses in Town Square", description: "We handle all property types across Town Square, from studio apartments to family townhouses." },
  { icon: MapPin, title: "Dubai-wide coverage", description: "Moving services across all major communities and areas in Dubai." },
  { icon: Clock, title: "Reliable scheduling", description: "Moves planned to your timeline with clear communication throughout." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "Do you move apartments and townhouses in Town Square?", answer: "Yes. We handle all property types across Town Square Dubai — apartments, studios and townhouses. Each move is planned to suit your requirements." },
  { question: "Do you offer packing services in Town Square?", answer: "Yes. Full packing and unpacking services are available for Town Square moves. We supply all materials and protect every item during transport." },
  { question: "Can you dismantle and reassemble furniture in Town Square?", answer: "Yes. Furniture dismantling and reassembly is included as part of the full moving service for Town Square moves." },
  { question: "How do I get a moving quote for Town Square?", answer: "Submit a quote request through our website or contact us directly. We'll review your move details and respond quickly with a tailored quote for your Town Square move." },
];

export default function TownSquareMoversPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Town Square Movers", url: "/locations/town-square-movers" }])} />
      <StructuredData data={serviceSchema({ name: "Movers in Town Square Dubai", description: "Professional apartment and villa moving services across Town Square Dubai.", url: "/locations/town-square-movers", serviceType: "MovingService" })} />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Movers in Town Square Dubai"
        subheadline="Professional apartment and villa moving services across Town Square Dubai, including packing, furniture dismantling, transport and setup."
        body="Town Square is a large residential development in Dubai with a wide range of apartments and townhouses. WeMoveStuff provides full moving support for Town Square residents."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={["Town Square Coverage", "Apartments & Townhouses", "Packing Available", "Furniture Assembly"]}
        variant="centered"
      />

      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-navy transition-colors">Home</Link></li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li><span className="font-medium text-navy" aria-current="page">Town Square Movers</span></li>
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
                Moving in Town Square Dubai
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">Town Square Dubai is a large residential community developed by Nshama, featuring a mix of apartments, townhouses and affordable family homes. The community has grown quickly and is a popular choice for residents looking for value within Dubai.</p>
              <p className="text-base text-muted-foreground leading-relaxed">WeMoveStuff provides full moving support for Town Square residents across all property types. We handle packing, furniture dismantling, transport and reassembly so your move runs smoothly from start to finish.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="services-heading" headline="Moving Services in Town Square" subheadline="A full range of moving services for apartments and townhouses across Town Square Dubai." /></FadeUp>
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
          <FadeUp><SectionHeader id="process-heading" headline="How your Town Square move works" subheadline="A straightforward three-step process from first contact to move completion." /></FadeUp>
          <FadeUp delay={0.1}><ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Get a Quote", href: "/quote" }} /></FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="why-heading" headline="Why choose WeMoveStuff in Town Square" subheadline="Professional moving support for all property types across Town Square Dubai." /></FadeUp>
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
          <FadeUp><SectionHeader id="faq-heading" headline="Town Square Moving FAQ" /></FadeUp>
          <FadeUp delay={0.08}><FAQAccordion items={FAQ_ITEMS} /></FadeUp>
        </div>
      </section>

      <CTASection
        headline="Ready to move in Town Square?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Town Square property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
