import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  LayoutGrid,
  Clock,
  Package,
  Star,
  Wrench,
  Check,
  DollarSign,
  Users,
  Box,
  Layers,
  Home,
  UtensilsCrossed,
  Shirt,
  BookOpen,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema, faqPageSchema, localBusinessSchema } from "@/lib/schema";
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
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import PackingQuoteForm from "@/components/forms/PackingQuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Packing Services in Dubai | WeMoveStuff",
  description: "Professional packing services in Dubai for apartments, villas and offices. WeMoveStuff supplies materials, protects fragile items and packs everything for a safe move.",
  path: "/services/packing-services",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packing Services" },
];

const WHY_PACK_FEATURES = [
  {
    icon: Shield,
    title: "Protection",
    description: "Every item is wrapped and protected before loading, reducing the risk of damage during transport.",
  },
  {
    icon: LayoutGrid,
    title: "Organisation",
    description: "Boxes are labelled and packed systematically so unpacking at the other end is fast and easy.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "Avoid spending days packing yourself — our team works efficiently so your move stays on schedule.",
  },
];

const WHAT_WE_PACK = [
  "Kitchen items",
  "Glassware",
  "Fragile belongings",
  "Electronics",
  "Clothing",
  "Books",
  "Decorative items",
  "Artwork",
  "Office supplies",
  "Documents",
  "Furniture protection",
  "General household items",
];

const PACKING_SERVICES = [
  {
    title: "Full Home Packing",
    description: "Complete packing of every room in apartments and villas. All materials included.",
    href: "/quote",
    image: "/images/packing-services/full-home-packing.jpg",
  },
  {
    title: "Villa Packing",
    description: "Comprehensive packing for large villas including furniture protection.",
    href: "/quote",
    image: "/images/packing-services/villa-packing.jpg",
  },
  {
    title: "Apartment Packing",
    description: "Organised apartment packing for studios through to large units.",
    href: "/quote",
    image: "/images/packing-services/apartment-packing.jpg",
  },
  {
    title: "Office Packing",
    description: "Professional packing of workstations, equipment and office contents.",
    href: "/quote",
    image: "/images/packing-services/office-packing.jpg",
  },
];

const PROCESS_STEPS = [
  { title: "Understand Your Requirements", description: "We discuss what needs packing and any special items." },
  { title: "Prepare Materials", description: "Boxes, wrap, tape and protective materials are prepared." },
  { title: "Pack & Label", description: "Everything is packed carefully and labelled by room." },
  { title: "Protect Fragile Items", description: "Glassware, artwork and electronics get extra protection." },
  { title: "Ready For Transport", description: "All boxes are sealed, stacked and ready to load." },
];

const FRAGILE_ITEMS = [
  "Glassware",
  "Mirrors",
  "Artwork",
  "Electronics",
  "Decorative items",
  "Collectibles",
];

const UNPACKING_BENEFITS = [
  "Faster setup in your new home",
  "Less post-move clutter to manage",
  "Items placed and organised systematically",
];

const WHY_CHOOSE_ITEMS = [
  "Professional packing materials",
  "Experienced packers",
  "Faster moving day",
  "Better organisation",
  "Residential & commercial expertise",
  "Clear pricing",
];

const REVIEWS = [
  {
    name: "Nadia K.",
    review: "The packing team were thorough and careful. Everything arrived without a scratch.",
  },
  {
    name: "Tom B.",
    review: "Having professionals pack saved us an entire weekend. Completely worth it.",
  },
  {
    name: "Hessa M.",
    review: "Fragile items were packed exceptionally well. The labelling made unpacking so much easier.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We supply all necessary packing materials including cardboard boxes in various sizes, bubble wrap, packing paper, furniture blankets and tape. All materials are included in our packing service quote.",
  },
  {
    question: "Can you pack an entire house?",
    answer:
      "Yes. We offer full home packing services for apartments, villas and houses of all sizes. Our team will pack every room systematically, label all boxes by room and contents, and have everything ready for moving day.",
  },
  {
    question: "Can you pack fragile items?",
    answer:
      "Yes. We specialise in packing fragile items including glassware, mirrors, artwork, electronics, decorative items and collectibles. We use appropriate protective materials for each item type to ensure everything travels safely.",
  },
  {
    question: "Can I book packing without moving services?",
    answer:
      "Yes. Our packing service can be booked as a standalone service, entirely separate from a move. We'll pack your belongings and you can arrange your own transport, or book our moving service separately.",
  },
  {
    question: "Do you provide unpacking?",
    answer:
      "Yes. We offer an optional unpacking service at your new property. Our team will unpack boxes, remove packaging materials and place items in the rooms you specify, saving you hours of post-move work.",
  },
  {
    question: "How much do packing services cost?",
    answer:
      "Packing service costs depend on the size of your property, the volume of items to be packed, and whether you need full packing, partial packing, or fragile-only packing. Contact us for a free, no-obligation packing quote tailored to your requirements.",
  },
  {
    question: "Do I need to provide my own boxes?",
    answer:
      "No. We supply everything — double-walled cardboard boxes in multiple sizes, bubble wrap, tissue paper, packing tape, furniture blankets and stretch film. You do not need to source any materials yourself.",
  },
  {
    question: "What is the difference between full packing and partial packing?",
    answer:
      "Full packing means our team packs everything in your home, from kitchen contents and clothing through to books, ornaments and furniture. Partial packing means you pack some rooms yourself and we handle the rest — commonly used for fragile items, kitchens or large furniture. We can also offer fragile-only packing if everything else is already boxed.",
  },
  {
    question: "How do you pack fragile items like glasses and crockery?",
    answer:
      "Glassware and crockery are individually wrapped in tissue paper and bubble wrap, then placed in specialist dish-pack boxes with additional cushioning. Glasses go stem-up in cell-divided boxes. Each box is clearly labelled as fragile so the team handles it accordingly during loading and transport.",
  },
  {
    question: "Can you pack clothes and wardrobe items?",
    answer:
      "Yes. We use wardrobe boxes — tall boxes with a hanging rail inside — for clothes on hangers so they travel without creasing. Folded clothing and bedding is packed neatly in appropriate-sized boxes.",
  },
];

const PACKING_MATERIALS = [
  {
    icon: Box,
    title: "Double-Walled Cardboard Boxes",
    description: "Heavy-duty boxes in multiple sizes — small for books and heavy items, large for lighter bulky items. Double-walled walls prevent crushing during transit.",
  },
  {
    icon: Shield,
    title: "Bubble Wrap",
    description: "Used for individual wrapping of fragile items — glassware, ornaments, electronics and anything that needs cushioned protection.",
  },
  {
    icon: Layers,
    title: "Tissue Paper & Packing Paper",
    description: "Acid-free tissue and packing paper for wrapping delicate surfaces, filling void space in boxes and preventing items from moving.",
  },
  {
    icon: Home,
    title: "Furniture Blankets",
    description: "Thick moving blankets that wrap furniture surfaces — protecting wood, glass panels, upholstery and painted surfaces from scratches during loading and transport.",
  },
  {
    icon: Shirt,
    title: "Wardrobe Boxes",
    description: "Tall hanging boxes with an internal rail so clothes travel on hangers and arrive without creasing. Essential for suits, dresses and delicate garments.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dish-Pack Boxes",
    description: "Reinforced boxes with internal cell dividers specifically designed for glassware, crockery and kitchen fragile items.",
  },
];

const ROOM_BY_ROOM = [
  {
    room: "Kitchen",
    description: "The most time-consuming room in any home. Crockery and glassware individually wrapped in tissue and packed in dish-pack boxes. Pots and pans padded with blankets. Appliances packed in their original boxes where available, or wrapped and boxed.",
  },
  {
    room: "Bedrooms",
    description: "Clothing packed in wardrobe boxes on hangers or folded into regular boxes. Bedding bagged and boxed. Mattresses wrapped in mattress covers. Bedside items individually wrapped.",
  },
  {
    room: "Living Room",
    description: "Artwork and mirrors wrapped in bubble wrap and corner-protected, then boxed in mirror boxes. TV removed from wall and wrapped in TV covers or blankets. Ornaments individually wrapped and labelled fragile.",
  },
  {
    room: "Study & Office",
    description: "Books packed in small boxes due to weight. Documents kept together and labelled. Electronics bubble-wrapped and packed with padding. Cables labelled and bagged together.",
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
  "DIFC",
  "Al Barsha",
  "Arabian Ranches",
  "The Springs",
  "Mirdif",
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PackingServicesPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Packing Services", url: "/services/packing-services" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Packing Services Dubai",
          description:
            "Professional packing services for apartments, villas and offices in Dubai. Full packing, fragile item protection and unpacking support.",
          url: "/services/packing-services",
          serviceType: "PackingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />
      <StructuredData data={localBusinessSchema()} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Professional Packing Services Dubai"
        subheadline="Let our team handle the packing so your move is safer, faster and significantly less stressful."
        body="From apartments and villas to offices and commercial spaces, WeMoveStuff provides professional packing services using suitable materials and organised packing methods."
        primaryCTA={{ label: "Get Packing Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Professional Packing Materials",
          "Fragile Item Protection",
          "Residential & Commercial",
          "Full Packing Available",
          "Optional Unpacking",
        ]}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/packing-services/packing-hero-service.jpg",
          alt: "Professional packing service in Dubai.",
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
                  Get Your Packing Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us what needs packing and we&apos;ll get back to you with a clear, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Standalone or combined with your move",
                    "All packing materials included",
                    "Full, partial or fragile-only packing",
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
              <PackingQuoteForm headline="" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Professional Packing Matters ──────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-pack-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <div className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto">
              <h2
                id="why-pack-heading"
                className="text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Good packing protects everything
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Packing is often the most time-consuming and frustrating part of moving. Professional packing helps reduce damage, keeps items organised and makes unpacking easier later.
              </p>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {WHY_PACK_FEATURES.map((feature) => (
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

      {/* ── Section 4: What Packing Materials We Use ─────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="materials-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="materials-heading"
              headline="Packing materials we use"
              subheadline="Professional packing materials make the difference between items that arrive undamaged and items that don't."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PACKING_MATERIALS.map((material) => (
              <StaggerItem key={material.title}>
                <FeatureCard
                  icon={material.icon}
                  title={material.title}
                  description={material.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: Full Pack vs Partial Pack ─────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="pack-options-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="pack-options-heading"
              headline="Full packing or partial packing?"
              subheadline="We offer flexible packing options to suit your budget, timeline and preference."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Full Packing",
                tag: "Most popular",
                description: "Our team packs everything in your home from start to finish. Every room, every item. All materials are supplied. You don't touch a single box — just let us know where you want things and we'll handle the rest.",
                items: ["Every room packed by our team", "All materials supplied", "Boxes labelled by room", "Fragile items handled with specialist care"],
              },
              {
                title: "Partial Packing",
                tag: "Flexible",
                description: "You pack some rooms yourself and we handle specific areas or items. Commonly used for fragile items, the kitchen, or large furniture. A good option if you want to reduce cost but still protect the most important things.",
                items: ["You choose which rooms", "We focus on fragile items", "Kitchen packing available", "Flexible around your schedule"],
              },
              {
                title: "Fragile-Only Packing",
                tag: "Add-on",
                description: "You pack everything yourself but our team handles all fragile and high-value items — glassware, artwork, electronics, mirrors and ornaments. A cost-effective way to get professional protection where it matters most.",
                items: ["Glassware and crockery", "Artwork and mirrors", "Electronics", "Ornaments and collectibles"],
              },
            ].map((option) => (
              <StaggerItem key={option.title}>
                <div className="flex flex-col gap-4 rounded-[16px] bg-white border border-light-grey/60 p-6 h-full shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-navy">{option.title}</h3>
                    <span className="text-xs font-semibold text-brand bg-brand/10 rounded-full px-3 py-1 shrink-0">{option.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                  <ul className="flex flex-col gap-2 mt-auto pt-2">
                    {option.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-dark-text">
                        <Check className="size-3.5 text-brand shrink-0" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/quote" />} variant="primary" size="lg">
              Choose My Packing Option
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: What We Pack ───────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="what-we-pack-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="what-we-pack-heading"
              headline="Packing services for every type of item"
              subheadline="We pack household, commercial and specialist items with care."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
              aria-label="Items we pack"
            >
              {WHAT_WE_PACK.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-[12px] bg-[#F7F9FC] border border-light-grey/60 px-4 py-3 text-sm font-medium text-dark-text"
                >
                  <Check className="size-4 text-brand shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/quote" />} variant="primary" size="lg">
              Book Professional Packing
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 7: Room-by-Room Packing ──────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="room-by-room-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="room-by-room-heading"
              headline="How we pack each room"
              subheadline="Different rooms require different approaches. Here's how we handle each area of your home."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROOM_BY_ROOM.map((item) => (
              <StaggerItem key={item.room}>
                <div className="flex flex-col gap-3 rounded-[16px] bg-white border border-light-grey/60 p-6 h-full shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <h3 className="text-base font-bold text-navy">{item.room}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 8: Packing Services We Offer ─────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Packing services for every property type"
              subheadline="Whether it's a studio apartment or a large villa, we have the right packing solution."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKING_SERVICES.map((service) => (
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

      {/* ── Section 9: Our Packing Process ───────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How our packing service works"
              subheadline="A clear, systematic process that protects your items and saves you time."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Arrange Packing Service", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Fragile Item Packing ──────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="fragile-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="fragile-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Extra care for fragile belongings
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Fragile items get specialist packing attention. We use appropriate wrapping, cushioning and box protection for every item that needs it.
                </p>
                <ul className="grid grid-cols-2 gap-3" aria-label="Fragile items we pack">
                  {FRAGILE_ITEMS.map((item) => (
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
                  Protect My Items
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <ImagePlaceholder
                ratio="16:9"
                label="Fragile item packing Dubai"
                className="rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 11: Optional Unpacking ────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="unpacking-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp delay={0.12} className="order-2 lg:order-1">
              <ImagePlaceholder
                ratio="4:3"
                label="Unpacking service Dubai"
                className="rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,31,91,0.10)]"
              />
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <div className="flex flex-col gap-6">
                <h2
                  id="unpacking-heading"
                  className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight text-balance"
                >
                  Need help unpacking too?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our optional unpacking service means you arrive at your new home and walk into a space that&apos;s already organised — without the post-move chaos.
                </p>
                <ul className="flex flex-col gap-3" aria-label="Unpacking benefits">
                  {UNPACKING_BENEFITS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-dark-text">
                      <Check className="size-4 text-brand shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/quote" />}
                  variant="secondary"
                  size="md"
                  className="self-start"
                >
                  Add Unpacking To My Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 12: Why Choose WeMoveStuff ───────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Why customers choose our packing service"
              subheadline="Professional packing that saves time, protects belongings and makes moving day easier."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              aria-label="Why choose our packing service"
            >
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] bg-[#F7F9FC] border border-light-grey/60 px-5 py-4 text-sm font-semibold text-dark-text shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check className="size-4 text-brand" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 13: Areas Served ──────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Packing services across Dubai"
              subheadline="We provide professional packing across all major residential and commercial areas in Dubai."
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

      {/* ── Section 14: Customer Reviews ─────────────────────────────── */}
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
              headline="What customers say about our packing service"
              subheadline="Real feedback from customers who trusted us with their belongings."
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

      {/* ── Section 15: FAQ ───────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Packing Services FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 16: Related Services ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="related-services-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="related-services-heading"
              headline="Related services"
              subheadline="Combine packing with a full moving service for a completely managed relocation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Apartment Moving",
                description: "Full apartment relocation service with packing, transport, furniture dismantling and setup across Dubai.",
                href: "/services/apartment-moving",
                icon: Home,
              },
              {
                title: "Villa Moving",
                description: "Complete villa relocation including full packing, large furniture assembly and outdoor item moving.",
                href: "/services/villa-moving",
                icon: Box,
              },
              {
                title: "Furniture Assembly",
                description: "Wardrobes, beds and shelving dismantled before your move and fully reassembled at your new home.",
                href: "/services/furniture-assembly",
                icon: Wrench,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col gap-4 rounded-[16px] bg-white border border-light-grey/60 p-6 hover:border-brand/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all h-full"
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

      {/* ── Section 17: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Let us handle the packing"
        body="Save time, reduce stress and protect your belongings with professional packing services from WeMoveStuff."
        primaryCTA={{ label: "Get Packing Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/packing-services/packing-final-cta.jpg"
      />
    </>
  );
}
