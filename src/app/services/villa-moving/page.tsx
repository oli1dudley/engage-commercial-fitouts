import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Wrench,
  Tv,
  Users,
  Building2,
  ClipboardList,
  MapPin,
  Check,
  Home,
  Flower2,
  Shield,
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
import AreaPills from "@/components/shared/AreaPills";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import VillaQuoteForm from "@/components/forms/VillaQuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Villa Movers in Dubai | WeMoveStuff",
  description: "Professional villa movers in Dubai for all villa sizes. WeMoveStuff handles packing, large furniture dismantling, careful transport and full setup at your new villa.",
  path: "/services/villa-moving",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Villa Moving" },
];

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Full Move Management",
    description: "We handle planning, packing, transport and setup from start to finish.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "Protecting all furniture and household items using quality materials.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Complete dismantling and reassembly support included.",
  },
  {
    icon: Users,
    title: "Experienced Moving Team",
    description: "Villa relocation specialists with hands-on Dubai experience.",
  },
  {
    icon: ClipboardList,
    title: "Organised Process",
    description: "Structured planning from first contact through to final setup.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Serving villa communities and gated developments across Dubai.",
  },
];

const VILLA_TYPES = [
  {
    title: "2 Bedroom Villas",
    description: "Efficient, well-organised moves for two-bedroom villas and townhouses.",
    href: "/quote",
  },
  {
    title: "3 Bedroom Villas",
    description: "Comprehensive moving support for three-bedroom family villas.",
    href: "/quote",
  },
  {
    title: "4 Bedroom Villas",
    description: "Full-service relocations for larger four-bedroom villas across Dubai.",
    href: "/quote",
  },
  {
    title: "5 Bedroom Villas",
    description: "Planned, coordinated moves for large five-bedroom homes.",
    href: "/quote",
  },
  {
    title: "Luxury Villas",
    description: "Careful, professional moving services for premium and luxury residences.",
    href: "/quote",
  },
  {
    title: "Townhouses",
    description: "End-to-end relocation support for townhouses and terraced homes.",
    href: "/quote",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning",
  "Full Packing Service",
  "Fragile Item Protection",
  "Furniture Dismantling",
  "Loading & Transport",
  "Furniture Reassembly",
  "TV Removal & Reinstallation",
  "Unpacking Support Available",
];

const PROCESS_STEPS = [
  { title: "Get A Quote", description: "Tell us your villa size and move details." },
  { title: "Move Planning", description: "We build a structured plan covering every stage." },
  { title: "Packing & Preparation", description: "Professional packing of all items and furniture." },
  { title: "Moving Day", description: "Efficient, careful transport to your new villa." },
  { title: "Setup & Completion", description: "Furniture reassembly, placement and final setup." },
];

const VILLA_AREAS = [
  "Arabian Ranches",
  "Dubai Hills Estate",
  "Damac Hills",
  "Palm Jumeirah",
  "The Springs",
  "The Meadows",
  "The Lakes",
  "Jumeirah Islands",
  "Jumeirah Golf Estates",
  "Al Barari",
  "Mudon",
  "Tilal Al Ghaf",
];

const REVIEWS = [
  {
    name: "Ahmed S.",
    review: "The team managed our villa move professionally and efficiently. Nothing was left to chance.",
  },
  {
    name: "Rebecca H.",
    review: "Everything was packed carefully and set up perfectly in our new villa. Exceptional service.",
  },
  {
    name: "Mohammed A.",
    review: "Excellent planning, communication and attention to detail throughout the entire move.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does villa moving cost in Dubai?",
    answer:
      "Villa moving costs depend on the villa size, the volume of items, packing requirements, and distance between locations. We provide a free, no-obligation quote based on your specific requirements. Contact us for a tailored price.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes. We offer full packing services using quality materials including boxes, bubble wrap, furniture blankets and specialist packing for fragile items. You can choose full packing, partial packing, or we can pack fragile items only.",
  },
  {
    question: "Can you move large furniture?",
    answer:
      "Yes. We regularly move large sofas, beds, wardrobes, dining tables, shelving units and outdoor furniture. Our team is equipped with the right tools and vehicles to handle oversized and heavy items safely.",
  },
  {
    question: "How long does a villa move take?",
    answer:
      "Move duration depends on the size of the villa, packing requirements, and distance. A 3-bedroom villa typically takes a full day. Larger villas or those requiring full packing may take 1–2 days. We'll give you a clear time estimate when you book.",
  },
  {
    question: "Do you dismantle and reassemble furniture?",
    answer:
      "Yes. We dismantle wardrobes, beds, shelving, and other furniture before the move and fully reassemble everything at your new villa. Our team brings all the tools required for all types of furniture.",
  },
  {
    question: "Do you move luxury villas?",
    answer:
      "Yes. We provide careful, professional moving services for luxury and premium villas in Dubai. We take extra precautions with high-value items, artwork, and premium furniture to ensure safe and careful handling throughout the move.",
  },
  {
    question: "Can you move into gated communities?",
    answer:
      "Yes. We regularly work in gated communities across Dubai including Arabian Ranches, Dubai Hills Estate, The Springs, The Meadows and Damac Hills. We coordinate entry requirements and vehicle access permissions in advance so there are no delays on moving day.",
  },
  {
    question: "Can you move outdoor and garden items?",
    answer:
      "Yes. We can move garden furniture, BBQ equipment, outdoor seating, plant pots and other exterior items as part of a villa relocation. Let us know about any outdoor items when you request your quote so we can plan accordingly.",
  },
  {
    question: "Do you handle multi-day villa moves?",
    answer:
      "Yes. Large villas — particularly those over five bedrooms — often require more than a single day. We plan multi-day moves carefully, scheduling packing on day one and transport and setup on subsequent days. We'll give you a clear timeline when you book.",
  },
  {
    question: "What vehicles do you use for villa moves?",
    answer:
      "We use appropriately sized trucks and vans depending on the volume of the move. For large villas, we use larger vehicles and allocate additional team members. The vehicle type is confirmed during the quote stage based on your villa size and the volume of items.",
  },
];

const WHO_FOR_ITEMS = [
  {
    icon: Users,
    title: "Large Families",
    description: "Families with children moving to a larger villa or upsizing within the same community.",
  },
  {
    icon: Home,
    title: "Premium Residents",
    description: "Residents in high-value villas who need careful, professional handling of premium furniture and belongings.",
  },
  {
    icon: Building2,
    title: "Relocating Expats",
    description: "Expats moving between villa communities or relocating to a new area of Dubai entirely.",
  },
  {
    icon: Shield,
    title: "Downsizing Households",
    description: "Families or couples moving from a large villa to a smaller property, requiring careful planning to manage volume.",
  },
];

const OUTDOOR_ITEMS = [
  "Garden furniture sets",
  "Outdoor sofas and loungers",
  "BBQ grills and equipment",
  "Plant pots and planters",
  "Parasols and shade structures",
  "Children's outdoor play equipment",
  "Storage units and garden sheds",
  "Water features and ornamental items",
];

const LOCATION_AREAS = [
  { label: "Arabian Ranches", href: "/locations/arabian-ranches" },
  { label: "Dubai Hills", href: "/locations/dubai-hills" },
  { label: "Emirates Hills", href: "/locations/emirates-hills" },
  { label: "The Springs", href: "/locations/the-springs" },
  { label: "The Meadows", href: "/locations/the-meadows" },
  { label: "Damac Hills", href: "/locations/damac-hills" },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function VillaMovingPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Villa Moving", url: "/services/villa-moving" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Villa Moving Dubai",
          description:
            "Complete villa relocation services including packing, transport, furniture assembly and move management across Dubai.",
          url: "/services/villa-moving",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Professional Villa Movers In Dubai"
        subheadline="Complete villa relocation services with packing, transport, furniture assembly and setup support."
        body="Moving a villa requires planning, organisation and an experienced team. WeMoveStuff manages every stage of the process so you can move with confidence."
        primaryCTA={{ label: "Get Villa Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Villa Specialists",
          "Full Packing Service",
          "Furniture Assembly",
          "Large Home Relocations",
          "Dubai-Wide Service",
        ]}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/villa-moving/villa-hero.jpg",
          alt: "Professional villa movers loading furniture in Dubai.",
          priority: true,
        }}
        variant="split"
      />

      {/* ── Section 2: Quick Quote Form ──────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="quote-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Villa Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your villa and we&apos;ll provide a clear, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Fast response — usually within the hour",
                    "Transparent pricing, no hidden fees",
                    "Tailored to your villa size and requirements",
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
              <VillaQuoteForm headline="" />
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
              headline="Villa moving made easy"
              subheadline="Everything you need for a smooth, well-organised villa relocation in Dubai."
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

      {/* ── Section 4: Who This Service Is For ──────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="who-for-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="who-for-heading"
              headline="Who uses our villa moving service"
              subheadline="We move villas for a range of households and situations across Dubai's communities."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHO_FOR_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: Villa Types We Move ──────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="types-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="types-heading"
              headline="Villa relocations of every size"
              subheadline="From compact townhouses to large luxury villas, we have the team and equipment for every move."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VILLA_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <ServiceCard
                  title={type.title}
                  description={type.description}
                  href={type.href}
                  ctaLabel="Get a Quote"
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 6: What's Included ───────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="included-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our villa moving service
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Included services">
                  {INCLUDED_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/quote" />}
                  variant="primary"
                  size="lg"
                  className="self-start"
                >
                  Request My Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="flex flex-col gap-4 rounded-[16px] bg-white/10 border border-white/15 p-6">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wide">What&apos;s included</p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Full move planning and coordination",
                    "Professional packing using quality materials",
                    "Furniture dismantling and reassembly",
                    "Careful handling of fragile and valuable items",
                    "Loading, transport and delivery",
                    "Setup and placement at new property",
                    "TV removal and reinstallation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 7: Outdoor & Garden Items ────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="outdoor-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <div className="flex size-12 items-center justify-center rounded-[12px] bg-brand/10 self-start">
                  <Flower2 className="size-6 text-brand" aria-hidden />
                </div>
                <h2
                  id="outdoor-heading"
                  className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight text-balance"
                >
                  We move outdoor and garden items too
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Villa moves often involve gardens, terraces and outdoor living areas that apartment moves don&apos;t. We handle all exterior items as part of your villa relocation — just include them when you request your quote.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Outdoor items we move">
                  {OUTDOOR_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-dark-text">
                      <Check className="size-4 text-brand shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="flex flex-col gap-4 rounded-[20px] bg-white border border-light-grey/60 shadow-[0_8px_32px_rgba(0,31,91,0.08)] p-8">
                <p className="text-sm font-semibold text-brand uppercase tracking-wide">Planning note</p>
                <h3 className="text-lg font-bold text-navy leading-snug">
                  Tell us about outdoor items when you book
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Outdoor furniture, BBQs and large plant pots often require additional planning — particularly for heavy or awkward items. Mentioning these upfront means we bring the right team size and equipment on moving day.
                </p>
                <Button render={<Link href="/quote" />} variant="secondary" size="md" className="self-start mt-2">
                  Get My Villa Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 8: Our Process ────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your villa move works"
              subheadline="A structured five-step process designed around your move."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Book My Villa Move", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: Popular Villa Communities ─────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Villa moving across Dubai communities"
              subheadline="We serve all major villa communities and gated developments in Dubai."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills
              areas={VILLA_AREAS}
              cta={{ label: "Check Availability", href: "/contact" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Customer Reviews ─────────────────────────────── */}
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
              headline="Villa moving reviews"
              subheadline="What our customers say about moving with WeMoveStuff."
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

      {/* ── Section 11: FAQ ────────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Villa Moving FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 12: Villa Communities With Links ──────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="community-links-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="community-links-heading"
              headline="Villa movers by community"
              subheadline="We serve all major villa communities and gated developments in Dubai."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-label="Villa communities served">
              {LOCATION_AREAS.map((area) => (
                <li key={area.label}>
                  <Link
                    href={area.href}
                    className="flex items-center gap-2 rounded-[12px] bg-white border border-light-grey/60 px-4 py-3 text-sm font-medium text-dark-text hover:border-brand hover:text-brand transition-colors"
                  >
                    <MapPin className="size-3.5 text-brand shrink-0" aria-hidden />
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 13: Related Services ─────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="related-services-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="related-services-heading"
              headline="Related services"
              subheadline="Enhance your villa move with these additional services from WeMoveStuff."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Packing Services",
                description: "Full villa packing using double-walled boxes, bubble wrap, tissue paper and blanket wrapping for furniture. Partial packing also available.",
                href: "/services/packing-services",
                icon: Package,
              },
              {
                title: "Furniture Assembly",
                description: "Large villa furniture dismantled carefully and fully reassembled at your new property. Wardrobes, beds, dining tables and more.",
                href: "/services/furniture-assembly",
                icon: Wrench,
              },
              {
                title: "TV Installation",
                description: "Multiple TVs removed from walls, protected during transport and reinstalled in the correct position at your new villa.",
                href: "/services/tv-installation",
                icon: Tv,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col gap-4 rounded-[16px] bg-[#F7F9FC] border border-light-grey/60 p-6 hover:border-brand/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all h-full"
                >
                  <span className="flex size-10 items-center justify-center rounded-[10px] bg-brand/10">
                    <service.icon className="size-5 text-brand" aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-base font-bold text-navy group-hover:text-brand transition-colors">{service.title}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{service.description}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand mt-auto">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 14: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Ready for a stress-free villa move?"
        body="Get a personalised villa moving quote and let WeMoveStuff handle the planning, packing and relocation process."
        primaryCTA={{ label: "Get Villa Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/villa-moving/villa-moving-final-cta.jpg"
      />
    </>
  );
}
