import type { Metadata } from "next";
import Link from "next/link";
import { Package, Wrench, MapPin, Home, CheckCircle2, Shield } from "lucide-react";

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
  title: "Movers in Palm Jumeirah | Villa & Apartment Moving | WeMoveStuff",
  description: "Professional movers in Palm Jumeirah for villa and apartment relocations. WeMoveStuff handles careful packing, furniture dismantling, transport and setup for Palm Jumeirah moves.",
  path: "/locations/palm-jumeirah-movers",
});

const SERVICES = [
  { title: "Villa Moving", description: "Full villa relocation with careful packing, transport and setup.", href: "/services/villa-moving" },
  { title: "Apartment Moving", description: "Apartment moves handled end to end with packing and setup.", href: "/services/apartment-moving" },
  { title: "Packing Services", description: "Professional packing using quality materials to protect every item.", href: "/services/packing-services" },
  { title: "Furniture Assembly", description: "Furniture dismantling before the move and reassembly at your new home.", href: "/services/furniture-assembly" },
  { title: "Commercial Moving", description: "Office and commercial relocations with organised planning.", href: "/services/commercial-moving" },
  { title: "TV Installation", description: "TV removal, transport and wall reinstallation at your new property.", href: "/services/tv-installation" },
];

const PROCESS_STEPS = [
  { title: "Request a Quote", description: "Tell us your move details and we'll respond quickly with a tailored quote." },
  { title: "We Plan Your Move", description: "We review your requirements, coordinate community access, parking and scheduling." },
  { title: "We Pack, Move & Set Up", description: "Our team handles packing, transport, reassembly and setup at your new Palm Jumeirah property." },
];

const FEATURES = [
  { icon: CheckCircle2, title: "End-to-end moving support", description: "We manage every stage of the move from initial planning through to final setup." },
  { icon: Package, title: "Professional packing", description: "Quality packing materials and experienced hands to protect your belongings." },
  { icon: Wrench, title: "Furniture dismantling and reassembly", description: "Full furniture dismantle before the move and reassembly at your new property." },
  { icon: Home, title: "Villa and apartment capability", description: "Experienced with all property types on Palm Jumeirah, from frond villas to trunk apartments." },
  { icon: Shield, title: "Careful handling of large items", description: "Large furniture and valuable items are handled with care throughout every move." },
  { icon: MapPin, title: "Community access coordination", description: "We plan around Palm Jumeirah community entry requirements and gate access." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "Do you move villas in Palm Jumeirah?", answer: "Yes. We handle villa moves across Palm Jumeirah, including careful packing, furniture dismantling, transport and reassembly. Villa moves are planned in detail to account for larger furniture and multi-room logistics." },
  { question: "Do you move apartments in Palm Jumeirah?", answer: "Yes. We handle apartment moves in Palm Jumeirah apartment buildings, including packing, lift access coordination, transport and setup." },
  { question: "How do you handle large furniture for Palm Jumeirah villa moves?", answer: "We dismantle large furniture before the move and reassemble it at your new Palm Jumeirah property. Our team brings all tools and handles every item with care." },
  { question: "Do you coordinate gated community access for Palm Jumeirah moves?", answer: "Yes. We plan around community access requirements and coordinate with relevant parties as part of the Palm Jumeirah move planning process." },
];

const RELATED_SERVICES = [
  { title: "Villa Moving", description: "Full villa relocation services across Dubai.", href: "/services/villa-moving" },
  { title: "Packing Services", description: "Professional packing and unpacking to protect your belongings.", href: "/services/packing-services" },
  { title: "Furniture Assembly", description: "Furniture dismantling before the move and reassembly at your new home.", href: "/services/furniture-assembly" },
];

export default function PalmJumeirahMoversPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Palm Jumeirah Movers", url: "/locations/palm-jumeirah-movers" }])} />
      <StructuredData data={serviceSchema({ name: "Movers in Palm Jumeirah", description: "Professional movers in Palm Jumeirah for villa and apartment relocations including careful packing, furniture dismantling, transport and setup.", url: "/locations/palm-jumeirah-movers", serviceType: "MovingService" })} />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Movers in Palm Jumeirah"
        subheadline="Professional villa and apartment moving services across Palm Jumeirah, including careful packing, furniture handling, transport and full setup at your new property."
        body="Palm Jumeirah is home to a mix of villas, apartments and waterfront properties. WeMoveStuff provides professional moving support for Palm Jumeirah residents, with careful handling of large items, packing, transport and reassembly."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={["Palm Jumeirah Coverage", "Villa & Apartment Moves", "Careful Handling", "Packing Available"]}
        variant="centered"
      />

      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-navy transition-colors">Home</Link></li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li><span className="font-medium text-navy" aria-current="page">Palm Jumeirah Movers</span></li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2 id="intro-heading" className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance">
                Moving in Palm Jumeirah
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Palm Jumeirah is one of Dubai&apos;s most prestigious residential areas, featuring a mix of villas, apartments and waterfront properties across the Palm&apos;s fronds and trunk. Moves in Palm Jumeirah often involve larger properties, more furniture and more complex logistics.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                WeMoveStuff provides professional moving support for Palm Jumeirah residents, handling careful packing, furniture dismantling, transport and reassembly. We plan every Palm Jumeirah move to account for property access, parking, gated community entry and scheduling.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="services-heading" headline="Moving Services in Palm Jumeirah" subheadline="A full range of moving services for villas and apartments across Palm Jumeirah." /></FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (<StaggerItem key={s.title}><ServiceCard title={s.title} description={s.description} href={s.href} className="h-full" /></StaggerItem>))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="process-heading" headline="How your Palm Jumeirah move works" subheadline="A straightforward three-step process from first contact to move completion." /></FadeUp>
          <FadeUp delay={0.1}><ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Get a Quote", href: "/quote" }} /></FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="why-heading" headline="Why choose WeMoveStuff in Palm Jumeirah" subheadline="Professional moving support built around the specific requirements of Palm Jumeirah residents." /></FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (<StaggerItem key={f.title}><FeatureCard icon={f.icon} title={f.title} description={f.description} className="h-full" /></StaggerItem>))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp><SectionHeader id="faq-heading" headline="Palm Jumeirah Moving FAQ" /></FadeUp>
          <FadeUp delay={0.08}><FAQAccordion items={FAQ_ITEMS} /></FadeUp>
        </div>
      </section>

      <CTASection
        headline="Ready to move in Palm Jumeirah?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Palm Jumeirah property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
