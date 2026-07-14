import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Wrench,
  Tv,
  Building2,
  Shield,
  MapPin,
  Check,
  Users,
  AlertCircle,
  Clock,
  Layers,
  Home,
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
import ApartmentQuoteForm from "@/components/forms/ApartmentQuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Apartment Movers in Dubai | WeMoveStuff",
  description: "Professional apartment movers in Dubai for studios to large apartments. WeMoveStuff handles packing, furniture dismantling, lift access, transport and full setup.",
  path: "/services/apartment-moving",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Apartment Moving" },
];

const FEATURES = [
  {
    icon: Package,
    title: "Full-Service Moving",
    description: "We manage every stage of the move from packing to final setup.",
  },
  {
    icon: Package,
    title: "Packing Support",
    description: "Professional packing available using quality materials.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Furniture dismantling and reassembly included where required.",
  },
  {
    icon: Users,
    title: "Experienced Movers",
    description: "Apartment relocation specialists with Dubai experience.",
  },
  {
    icon: Building2,
    title: "Building Coordination",
    description: "We handle apartment access and building requirements on your behalf.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Moving services across all major areas and communities in Dubai.",
  },
];

const APARTMENT_TYPES = [
  {
    title: "Studio Apartments",
    description: "Efficient, organised moves for studio apartments across Dubai.",
    href: "/quote",
  },
  {
    title: "1 Bedroom Apartments",
    description: "Careful handling and transport for one-bedroom apartments.",
    href: "/quote",
  },
  {
    title: "2 Bedroom Apartments",
    description: "Full moving support for two-bedroom apartments and families.",
    href: "/quote",
  },
  {
    title: "3 Bedroom Apartments",
    description: "Comprehensive moves for larger three-bedroom residences.",
    href: "/quote",
  },
  {
    title: "Penthouse Apartments",
    description: "Specialist moving support for penthouse and premium apartments.",
    href: "/quote",
  },
  {
    title: "Serviced Apartments",
    description: "Flexible moving services for serviced and furnished apartments.",
    href: "/quote",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning",
  "Packing Services",
  "Furniture Dismantling",
  "Loading & Transport",
  "Furniture Reassembly",
  "TV Removal & Reinstallation Support",
  "Placement Of Furniture",
  "Unpacking Support Available",
];

const PROCESS_STEPS = [
  { title: "Get A Quote", description: "Tell us your apartment details and we'll respond quickly." },
  { title: "Plan The Move", description: "We agree a clear plan covering every stage." },
  { title: "Pack & Prepare", description: "Professional packing with quality materials." },
  { title: "Moving Day", description: "Efficient, safe transport to your new apartment." },
  { title: "Setup & Completion", description: "We reassemble, place furniture and complete setup." },
];

const AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JLT",
  "Palm Jumeirah",
  "Dubai Hills",
  "DIFC",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
  "The Greens",
];

const REVIEWS = [
  {
    name: "Ali H.",
    review: "The team packed, moved and assembled everything perfectly. Made a stressful day much easier.",
  },
  {
    name: "Sophie M.",
    review: "Excellent communication and a very smooth apartment move. Will definitely use again.",
  },
  {
    name: "Rashid K.",
    review: "Professional movers who made the process stress-free from start to finish.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does apartment moving cost in Dubai?",
    answer:
      "Apartment moving costs in Dubai depend on the size of your apartment, distance, floor level, and additional services such as packing or furniture assembly. We provide a free, no-obligation quote based on your specific requirements. Contact us to receive a tailored price.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We supply all necessary packing materials including boxes, bubble wrap, furniture blankets and tape. Full packing and partial packing services are available. You can also choose to pack yourself and we'll handle the move.",
  },
  {
    question: "Can you dismantle furniture?",
    answer:
      "Yes. Our team can dismantle wardrobes, beds, shelving units and other flat-pack or assembled furniture before the move, and reassemble everything at your new apartment. We carry all the tools required.",
  },
  {
    question: "How long does an apartment move take?",
    answer:
      "Move duration depends on apartment size, packing requirements, floor access and distance. A studio or one-bedroom apartment typically takes 2–4 hours. Larger apartments may take a full day. We'll give you a time estimate when you book.",
  },
  {
    question: "Do you move apartments in high-rise buildings?",
    answer:
      "Yes. We regularly move apartments in high-rise towers across Dubai. We coordinate building access, elevator bookings and timing requirements to ensure a smooth move.",
  },
  {
    question: "Can you reinstall TVs?",
    answer:
      "Yes. We provide TV removal, safe transport and wall reinstallation at your new apartment. Let us know when booking if TV installation support is required.",
  },
  {
    question: "Do you handle building move-in and move-out permits?",
    answer:
      "We work alongside you to coordinate the requirements buildings impose — including service lift booking windows, parking allocation for the truck, and the timing constraints many Dubai towers apply to move days. We'll advise on what you need to arrange with your building management and handle what we can on your behalf.",
  },
  {
    question: "What happens if the service lift isn't available?",
    answer:
      "Most Dubai apartment buildings have specific service lift booking windows, typically in the morning. We factor this into move scheduling. If a service lift slot is unavailable, we'll work with the building management to find an alternative time or discuss the best approach for your situation.",
  },
  {
    question: "Can you move large furniture through narrow doorways?",
    answer:
      "Yes. We assess doorway and lift dimensions as part of the planning process. Where large furniture cannot pass through intact, we dismantle it beforehand and reassemble at the new apartment. This is standard practice for wardrobes, bed frames and large sofas in Dubai high-rises.",
  },
];

const WHO_FOR_ITEMS = [
  {
    icon: Users,
    title: "Expats Relocating",
    description: "New arrivals and departing expats who need a reliable team to handle the full move efficiently.",
  },
  {
    icon: Home,
    title: "Families Upsizing",
    description: "Growing families moving from a smaller to a larger apartment within the same or a different community.",
  },
  {
    icon: Building2,
    title: "Professionals Downsizing",
    description: "Professionals moving to a smaller unit who need compact but careful handling of quality furniture.",
  },
  {
    icon: Layers,
    title: "Tenants Changing Communities",
    description: "Residents moving between communities such as JVC to Dubai Marina or Business Bay to DIFC.",
  },
];

const CHALLENGES = [
  {
    icon: Clock,
    title: "Service Lift Booking Windows",
    description: "Most Dubai towers restrict moving to morning service lift slots only. We plan around these windows and advise you on what to book with building management.",
  },
  {
    icon: Building2,
    title: "Building Access & Permits",
    description: "Many buildings require a NOC, security deposit or move permit before allowing removals. We'll tell you exactly what's needed in advance so there are no surprises on move day.",
  },
  {
    icon: AlertCircle,
    title: "Parking for the Moving Truck",
    description: "Large vehicles need designated loading zones. We coordinate truck parking close to the service entrance so loading and unloading is as fast as possible.",
  },
  {
    icon: Wrench,
    title: "Dismantling in Tight Spaces",
    description: "Large wardrobes and bed frames often cannot be removed from an apartment in one piece. Our team dismantles them methodically in the room and reassembles everything at the new property.",
  },
];

const LOCATION_AREAS = [
  { label: "Dubai Marina", href: "/locations/dubai-marina" },
  { label: "Downtown Dubai", href: "/locations/downtown-dubai" },
  { label: "Business Bay", href: "/locations/business-bay" },
  { label: "JVC", href: "/locations/jumeirah-village-circle" },
  { label: "JLT", href: "/locations/jumeirah-lake-towers" },
  { label: "Palm Jumeirah", href: "/locations/palm-jumeirah" },
  { label: "JVT", href: "/locations/jumeirah-village-triangle" },
  { label: "Dubai Hills", href: "/locations/dubai-hills" },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ApartmentMovingPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Apartment Moving", url: "/services/apartment-moving" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Apartment Moving Dubai",
          description:
            "Professional apartment moving services for studios, one-bedroom, two-bedroom and larger apartments across Dubai.",
          url: "/services/apartment-moving",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Professional Apartment Movers In Dubai"
        subheadline="Stress-free apartment moving services with packing, transport and setup support across Dubai."
        body="Whether you're moving from a studio apartment or a multi-bedroom residence, WeMoveStuff handles every stage of the move professionally and efficiently."
        primaryCTA={{ label: "Get Apartment Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Apartment Specialists",
          "Packing Available",
          "Furniture Assembly",
          "Dubai-Wide Service",
          "Fully Managed Moves",
        ]}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/apartment-moving/apartment-hero.jpg",
          alt: "Apartment movers carrying furniture in Dubai.",
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
                  Get Your Apartment Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your apartment and we&apos;ll provide a clear, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Fast response — usually within the hour",
                    "Transparent pricing, no hidden fees",
                    "Tailored to your apartment size and floor",
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
              <ApartmentQuoteForm headline="" />
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
              headline="Apartment moving made simple"
              subheadline="Everything you need for a smooth, stress-free apartment move in Dubai."
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
              headline="Who uses our apartment moving service"
              subheadline="We move apartments for a wide range of residents and situations across Dubai."
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

      {/* ── Section 5: Apartment Types We Move ──────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="types-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="types-heading"
              headline="We move apartments of all sizes"
              subheadline="From compact studios to large penthouses, our team is equipped for every apartment type."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APARTMENT_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <ServiceCard
                  title={type.title}
                  description={type.description}
                  href={type.href}
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
                  What&apos;s included in our apartment moving service
                </h2>
                <p className="text-base text-white/75 leading-relaxed">
                  Every apartment move is fully managed. We bring all the materials, tools and people required so you don&apos;t have to organise anything separately.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Included services">
                  {INCLUDED_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 rounded-[14px] bg-white/10 border border-white/15 p-5 text-sm text-white/75 leading-relaxed">
                  <p className="font-semibold text-white">What this means in practice:</p>
                  <ul className="flex flex-col gap-1.5 pl-1">
                    <li>— Double-walled boxes and bubble wrap for fragile items</li>
                    <li>— Blanket wrapping and stretch film for all furniture surfaces</li>
                    <li>— Full dismantling of wardrobes, beds and shelving</li>
                    <li>— TV removed from wall, wrapped and reinstalled at new property</li>
                    <li>— Furniture placed in each room exactly where you want it</li>
                  </ul>
                </div>
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

            {/* Decorative number stat block */}
            <FadeUp delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "6+", label: "Apartment types covered" },
                  { number: "15+", label: "Dubai areas served" },
                  { number: "5★", label: "Customer satisfaction" },
                  { number: "100%", label: "Fully managed moves" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 rounded-[16px] bg-white/10 border border-white/15 p-5"
                  >
                    <span className="text-[32px] font-extrabold text-white leading-none">{stat.number}</span>
                    <span className="text-sm text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 7: Common Challenges ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="challenges-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="challenges-heading"
              headline="Common challenges with apartment moves in Dubai"
              subheadline="Dubai high-rises come with specific moving logistics. Here's how we handle the most common ones."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CHALLENGES.map((item) => (
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

      {/* ── Section 8: Our Moving Process ───────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your apartment move works"
              subheadline="A clear five-step process from first contact to final setup."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Book My Move", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: Dubai Areas We Serve ─────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Apartment movers across Dubai"
              subheadline="We serve all major communities and residential areas in Dubai."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills
              areas={AREAS}
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
              headline="Apartment moving reviews"
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
            <SectionHeader id="faq-heading" headline="Apartment Moving FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 12: Areas With Links ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="location-links-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="location-links-heading"
              headline="Apartment movers by area"
              subheadline="We cover all major residential communities across Dubai. Find movers in your area."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3" aria-label="Dubai areas served">
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
              subheadline="Add these services to your apartment move for a fully managed relocation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Packing Services",
                description: "Professional packing using double-walled boxes, bubble wrap and furniture blankets. Full, partial or fragile-only packing available.",
                href: "/services/packing-services",
                icon: Package,
              },
              {
                title: "Furniture Assembly",
                description: "Wardrobes, beds, desks and shelving dismantled before the move and fully reassembled at your new apartment.",
                href: "/services/furniture-assembly",
                icon: Wrench,
              },
              {
                title: "TV Installation",
                description: "TV safely removed from the wall, protected during transit and reinstalled at the correct height and position at your new home.",
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
        headline="Ready for a stress-free apartment move?"
        body="Get a free quote from WeMoveStuff and let our team handle the planning, packing and moving process."
        primaryCTA={{ label: "Get Apartment Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/apartment-moving/apartment-moving-final-cta.jpg"
      />
    </>
  );
}
