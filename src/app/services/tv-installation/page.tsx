import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  MapPin,
  AlertTriangle,
  Check,
  Wrench,
  Home,
  Package,
  Ruler,
  Layers,
  Cable,
  Tv,
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
import TVInstallationForm from "@/components/forms/TVInstallationForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "TV Mounting Dubai | TV Installation Dubai | WeMoveStuff",
  description:
    "Professional TV mounting and installation services in Dubai. WeMoveStuff provides TV removal, transport protection and TV reinstallation support for homes and offices.",
  path: "/services/tv-installation",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "TV Installation" },
];

const WHY_FEATURES = [
  {
    icon: Shield,
    title: "Safe Handling",
    description:
      "Large screens are fragile and expensive. Proper removal, wrapping and reinstallation keeps them protected from first touch to final placement.",
  },
  {
    icon: MapPin,
    title: "Correct Placement",
    description:
      "Wall mounting a TV at the right height and angle for your room takes more thought than it looks. We get it right the first time.",
  },
  {
    icon: AlertTriangle,
    title: "Less Risk",
    description:
      "DIY TV mounting risks cracked screens, falling brackets and wall damage. Professional installation removes that risk entirely.",
  },
];

const TV_SERVICES_INCLUDED = [
  "TV Removal",
  "TV Wall Mounting",
  "TV Reinstallation",
  "TV Relocation",
  "Home Screen Installation",
  "Office Screen Installation",
  "Media Unit Relocation",
  "TV Transport Preparation",
  "Wall Bracket Support",
  "Screen Positioning",
  "Multiple TV Setup",
  "Post-Move Installation Support",
];

const TV_SERVICE_CARDS = [
  {
    title: "TV Wall Mounting",
    description: "Secure wall mounting at the correct height and angle for your room and viewing position.",
    href: "/quote",
    image: "/images/tv-installation/tv-wall-mounting.jpg",
  },
  {
    title: "TV Removal Before Moving",
    description: "Safe removal from the wall, wrapped and protected ready for transport.",
    href: "/quote",
    image: "/images/tv-installation/tv-removal-service.jpg",
  },
  {
    title: "TV Reinstallation",
    description: "TV mounted back on the wall at your new property, positioned and secured correctly.",
    href: "/quote",
    image: "/images/tv-installation/tv-reinstallation.jpg",
  },
  {
    title: "Office Screen Installation",
    description: "Meeting room displays, reception screens and office monitors installed and positioned.",
    href: "/quote",
    image: "/images/tv-installation/office-screen-installation.jpg",
  },
  {
    title: "TV Relocation Support",
    description: "TV relocated within the same property or moved to a new location as part of a wider service.",
    href: "/quote",
    image: "/images/tv-installation/tv-relocation-service.jpg",
  },
  {
    title: "Multiple Screen Setup",
    description: "Multiple TVs or monitors mounted and set up across a home or commercial space.",
    href: "/quote",
    image: "/images/tv-installation/multiple-screen-installation.jpg",
  },
];

const PROCESS_STEPS = [
  { title: "Tell Us About The Screen", description: "Share the TV size, type and what needs to be done — removal, mounting or relocation." },
  { title: "Review Requirements", description: "We confirm the wall type, bracket requirements and any access considerations." },
  { title: "Remove Or Prepare TV", description: "The TV is safely removed from the wall or prepared for transport with appropriate protection." },
  { title: "Install Or Reinstall", description: "The TV is mounted securely on the wall at the correct position and height." },
  { title: "Final Positioning & Check", description: "We check the mount is secure, the position is correct and everything is ready to use." },
];

const FULL_MOVE_LINKS = [
  {
    title: "Apartment Moves",
    description: "TV removal and reinstallation included alongside your apartment move.",
    href: "/services/apartment-moving",
    image: "/images/apartment-moving/apartment-hero.jpg",
  },
  {
    title: "Villa Moves",
    description: "Multiple TVs handled carefully across your villa relocation.",
    href: "/services/villa-moving",
    image: "/images/villa-moving/villa-hero.jpg",
  },
  {
    title: "Commercial Relocations",
    description: "Office screens and meeting room displays set up at your new premises.",
    href: "/services/commercial-moving",
    image: "/images/commercial-moving/commercial-hero.jpg",
  },
];

const COMMERCIAL_CHECKLIST = [
  "Meeting Room Screens",
  "Office Displays",
  "Reception Screens",
  "Presentation Screens",
  "Display Relocation Support",
];

const WHY_CHOOSE_ITEMS = [
  "Safe Handling",
  "Residential & Commercial",
  "Moving Specialists",
  "Flexible Scheduling",
  "Clear Pricing",
  "WhatsApp Communication",
];

const REVIEWS = [
  {
    name: "Ahmed R.",
    review: "The team removed and reinstalled our TV during our apartment move. Everything was handled carefully with no damage.",
  },
  {
    name: "Sarah M.",
    review: "Very professional service and excellent communication from start to finish.",
  },
  {
    name: "James T.",
    review: "They installed multiple office screens after our relocation and everything worked perfectly. Would use again.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you mount TVs on walls?",
    answer:
      "Yes. We provide professional TV wall mounting services across Dubai for both residential and commercial properties. We handle all screen sizes and wall types, and ensure the mount is secure, at the correct height and properly positioned for the room.",
  },
  {
    question: "Can you remove a wall-mounted TV?",
    answer:
      "Yes. We safely remove TVs from wall mounts, protecting the screen during removal, wrapping it appropriately for transport or storage, and patching or making good the wall where needed. This service is often booked as part of a move.",
  },
  {
    question: "Can you reinstall my TV after moving?",
    answer:
      "Yes. TV reinstallation is one of our most commonly booked services. Once you've moved to your new property, we'll mount your TV on the wall in the right position, at the correct height and angle, and ensure everything is secure.",
  },
  {
    question: "Do you install office screens?",
    answer:
      "Yes. We install office screens, meeting room displays, reception monitors and presentation screens for commercial clients. This can be booked as a standalone service or as part of a commercial office relocation.",
  },
  {
    question: "Can I send photos before getting a quote?",
    answer:
      "Yes. Sending photos of the TV, the current mounting position and the new location is very helpful. You can send images via WhatsApp and we'll give you an accurate quote based on what's required.",
  },
  {
    question: "Do you provide brackets?",
    answer:
      "We primarily work with client-supplied brackets, which allows you to choose the exact bracket type for your TV and wall. If you need help selecting a suitable bracket, we can advise on what to purchase. Let us know when requesting your quote.",
  },
  {
    question: "Can you install multiple TVs?",
    answer:
      "Yes. We regularly install multiple screens across a property in a single visit — common for villa moves, commercial relocations and office setups. Just let us know how many TVs need installing and their locations when you request your quote.",
  },
  {
    question: "Can you mount a TV on any wall type?",
    answer:
      "We install on all wall types common in Dubai — concrete (the most common), gypsum/drywall partitions and brick. Concrete walls require masonry drill bits and appropriate rawl plugs and are the most secure mounting surface. Gypsum partitions require toggle bolts or stud-finding to locate a solid fixing point. We assess the wall at the property and use the correct approach for each surface type.",
  },
  {
    question: "Do you manage cables after installation?",
    answer:
      "Yes. Cable management is included as part of our TV installation service. Cables are routed neatly behind the TV, tidied along the wall surface or trunked where possible, depending on the wall type and the customer's preference. Let us know your preference when booking.",
  },
  {
    question: "What size TVs do you install?",
    answer:
      "We install all screen sizes from small 32-inch screens through to large 100-inch-plus panels. Larger screens require heavier-duty brackets and more robust wall fixings, which we confirm during the quote stage. There is no screen size too large for our team to handle.",
  },
];

const WALL_TYPES = [
  {
    icon: Layers,
    title: "Concrete Walls",
    description: "The most common wall type in Dubai apartments and villas. Concrete provides the most secure mounting surface. We use hammer drill bits, masonry fixings and appropriate rawl plugs to achieve a secure mount for any screen size.",
  },
  {
    icon: Shield,
    title: "Gypsum / Drywall Partitions",
    description: "Common internal partition walls in newer Dubai apartments and offices. Gypsum walls require either toggle bolt anchors or locating the metal studs within the partition. We use stud finders and appropriate toggle fixings to ensure a safe and secure mount.",
  },
  {
    icon: AlertTriangle,
    title: "Brick Walls",
    description: "Less common in Dubai but found in older buildings and some villa properties. Brick requires masonry drill bits and appropriate fixings, similar to concrete. Mortar joints are avoided — fixings always go into the brick itself.",
  },
];

const WHAT_INCLUDED_BREAKDOWN = [
  "TV safely removed from current wall mount",
  "Screen wrapped in protective foam or TV blanket",
  "Wall at new location assessed for type and strength",
  "Correct drill bits and fixings used for wall type",
  "Bracket positioned at correct height and level",
  "TV mounted, level checked and tilt/swivel adjusted",
  "Cables routed and managed neatly behind or beside TV",
  "Final viewing angle confirmed with customer",
];

const TV_SIZES = [
  "32\" — 43\" (small rooms, bedrooms, kitchens)",
  "50\" — 65\" (living rooms, master bedrooms)",
  "75\" — 85\" (large living spaces, open plan)",
  "86\" — 100\"+ (home cinema, feature walls)",
  "Commercial displays of any size",
  "Curved and OLED screens",
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
  "Arabian Ranches",
  "The Springs",
  "Damac Hills",
  "Al Barsha",
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function TVInstallationPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "TV Installation", url: "/services/tv-installation" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "TV Mounting & Installation Dubai",
          description:
            "Professional TV mounting and installation services in Dubai. TV removal, transport protection and reinstallation for homes and offices.",
          url: "/services/tv-installation",
          serviceType: "TVInstallationService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />
      <StructuredData data={localBusinessSchema()} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="TV Mounting & Installation Dubai"
        subheadline="Safe TV removal, transport support and professional reinstallation for homes and offices across Dubai."
        body="Whether you're moving home, relocating your office or simply need a TV mounted correctly, WeMoveStuff can help remove, protect and reinstall your screens safely."
        primaryCTA={{ label: "Get TV Installation Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Home & Office Screens",
          "TV Reinstallation",
          "Safe Handling",
          "Moving Support Available",
          "Dubai-Wide Service",
        ]}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/tv-installation/tv-installation-hero.jpg",
          alt: "TV mounting service in Dubai.",
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
                  Get Your TV Installation Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your TV and what you need done — we&apos;ll get back to you with a clear, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Standalone or part of a full move",
                    "All screen sizes and types",
                    "Residential and commercial",
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
              <TVInstallationForm headline="" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Professional TV Installation Matters ──────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <div className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto">
              <h2
                id="why-heading"
                className="text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Your TV deserves better than guesswork
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A misaligned mount, a dropped screen or a cracked panel is an expensive mistake. Professional TV installation takes the risk out of one of the most stressful parts of moving home or setting up a new office.
              </p>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {WHY_FEATURES.map((feature) => (
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

      {/* ── Section 4: Wall Types in Dubai ───────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="wall-types-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="wall-types-heading"
              headline="Wall types in Dubai — what you need to know"
              subheadline="Different wall types require different installation approaches. We assess the wall before starting and use the correct method for each surface."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {WALL_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <FeatureCard
                  icon={type.icon}
                  title={type.title}
                  description={type.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: What's Included ────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="included-breakdown-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-breakdown-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our TV installation service
                </h2>
                <p className="text-base text-white/75 leading-relaxed">
                  Every TV job — whether it&apos;s a straightforward wall mount or a full move-and-reinstall — follows the same careful process.
                </p>
                <ul className="flex flex-col gap-3" aria-label="What's included in TV installation">
                  {WHAT_INCLUDED_BREAKDOWN.map((item) => (
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
                  Book TV Installation
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="flex flex-col gap-4 rounded-[16px] bg-white/10 border border-white/15 p-6">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wide">TV sizes we install</p>
                <ul className="flex flex-col gap-2.5">
                  {TV_SIZES.map((size) => (
                    <li key={size} className="flex items-center gap-2.5 text-sm text-white/85">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {size}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/50 mt-2">
                  There is no screen size we cannot handle. Large screens above 75&quot; require additional team members and heavier-duty fixings — confirm this when booking.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 6: Services Included ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-list-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="services-list-heading"
              headline="TV services we provide"
              subheadline="From a single wall mount to a full commercial screen setup."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
              aria-label="TV services included"
            >
              {TV_SERVICES_INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-[12px] bg-white border border-light-grey/60 px-4 py-3 text-sm font-medium text-dark-text"
                >
                  <Check className="size-4 text-brand shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/quote" />} variant="primary" size="lg">
              Book TV Installation
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 7: TV Services We Offer ──────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="service-cards-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="service-cards-heading"
              headline="TV installation services for every situation"
              subheadline="Moving home, setting up an office or just need a TV mounted — we cover it all."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TV_SERVICE_CARDS.map((service) => (
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

      {/* ── Section 8: Our Process ────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How TV installation works"
              subheadline="A straightforward process from first contact to fully installed screen."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Arrange TV Installation", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: TV Installation During Moving ─────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="moving-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="moving-heading"
              headline="Moving house? Add TV installation to your move"
              subheadline="Book TV removal and reinstallation alongside your moving service for a fully managed, stress-free move."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FULL_MOVE_LINKS.map((service) => (
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
            <Button render={<Link href="/quote" />} variant="secondary" size="lg">
              Add TV Installation To My Move
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Office & Commercial Screen Installation ────────── */}
      <section className="bg-navy section-padding" aria-labelledby="commercial-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="commercial-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Office screens and meeting room displays
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Commercial screen installation requires precision and planning. We work around your schedule to get every display mounted, positioned and ready for use before your team moves in.
                </p>
                <ul className="flex flex-col gap-3" aria-label="Commercial screen services">
                  {COMMERCIAL_CHECKLIST.map((item) => (
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
                  Get Commercial Screen Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <ImagePlaceholder
                ratio="4:3"
                label="Office screen installation Dubai"
                className="rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 11: Areas Served ──────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="TV installation across Dubai"
              subheadline="We provide TV mounting and installation services across all major residential and commercial areas in Dubai."
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

      {/* ── Section 12: Why Choose WeMoveStuff ────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Why customers choose WeMoveStuff"
              subheadline="TVs handled carefully, mounted correctly and ready to use on day one."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              aria-label="Why choose WeMoveStuff for TV installation"
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

      {/* ── Section 13: Customer Reviews ─────────────────────────────── */}
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
              headline="TVs installed properly"
              subheadline="Feedback from customers who trusted us with their screens."
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

      {/* ── Section 14: FAQ ───────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="TV Installation FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 15: Related Services ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="related-services-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="related-services-heading"
              headline="Related services"
              subheadline="Combine TV installation with your move for a fully managed service."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Furniture Assembly",
                description: "TV units, media consoles and entertainment furniture dismantled, moved and reassembled at your new property alongside TV installation.",
                href: "/services/furniture-assembly",
                icon: Wrench,
              },
              {
                title: "Apartment Moving",
                description: "Full apartment relocation with TV removal, safe transport and wall reinstallation included as part of a fully managed move.",
                href: "/services/apartment-moving",
                icon: Home,
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

      {/* ── Section 16: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Need help with TV installation?"
        body="Send us your TV size, location and requirements and we'll provide a clear quote and installation plan."
        primaryCTA={{ label: "Get TV Installation Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/tv-installation/tv-installation-final-cta.jpg"
      />
    </>
  );
}
