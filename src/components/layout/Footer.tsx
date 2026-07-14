import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Shield, Users, Star } from "lucide-react";
import { siteConfig, whatsappUrl, phoneHref } from "@/lib/seo.config";

const serviceLinks = [
  { label: "Apartment Moving", href: "/services/apartment-moving" },
  { label: "Villa Moving", href: "/services/villa-moving" },
  { label: "Office Movers", href: "/services/office-movers" },
  { label: "Commercial Moving", href: "/services/commercial-moving" },
  { label: "Furniture Movers", href: "/services/furniture-assembly" },
  { label: "Storage Solutions", href: "/services/storage-services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const locationLinks = [
  { label: "Dubai Marina Movers", href: "/locations/dubai-marina-movers" },
  { label: "Downtown Dubai Movers", href: "/locations/downtown-dubai-movers" },
  { label: "Business Bay Movers", href: "/locations/business-bay-movers" },
  { label: "JVC Movers", href: "/locations/jvc-movers" },
  { label: "JLT Movers", href: "/locations/jlt-movers" },
  { label: "All Areas in Dubai →", href: "/locations" },
];

const TRUST_ITEMS = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Users, label: "Trained Professionals" },
  { icon: Star, label: "5 Star Rated Service" },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      {/* WhatsApp green separator — full-width, edge to edge */}
      <div className="h-[2px] w-full bg-whatsapp" aria-hidden />

      {/* Footer body — darker premium navy gradient */}
      <div
        className="text-white"
        style={{
          background:
            "linear-gradient(160deg, #000D2E 0%, #001245 40%, #000920 100%)",
        }}
      >
        {/* ── Main columns ────────────────────────────────────────────── */}
        <div className="max-container container-padding pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* Column 1 — Brand */}
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/wemovestuff-logo-transparent.png"
                  alt="WeMoveStuff"
                  width={1535}
                  height={1024}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-white/65 text-sm leading-relaxed max-w-[220px]">
                Professional moving and relocation services across Dubai.
                Fast. Careful. Reliable.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white text-sm font-semibold px-4 py-2.5 rounded-[12px] hover:bg-whatsapp-hover transition-colors w-fit"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Column 2 — Services */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Quick Links */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Locations */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 mb-5">
                Locations
              </h3>
              <ul className="space-y-3">
                {locationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors ${
                        link.href === "/locations"
                          ? "text-whatsapp hover:text-white font-medium"
                          : "text-white/65 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 — Contact */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 mb-5">
                Contact
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href={phoneHref}
                    className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <Phone className="size-4 mt-0.5 shrink-0 text-brand" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <Mail className="size-4 mt-0.5 shrink-0 text-brand" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-white/65">
                    <MapPin className="size-4 mt-0.5 shrink-0 text-brand" />
                    Dubai, UAE
                  </div>
                </li>
                <li className="text-sm text-white/45 pl-7">
                  Mon – Sun, 7:00am – 8:00pm
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Trust bar ───────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.08]">
          <div className="max-container container-padding py-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 lg:gap-16">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/55"
                >
                  <Icon className="size-4 text-brand shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Copyright ───────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.05]">
          <div className="max-container container-padding py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} WeMoveStuff. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-xs text-white/25 hover:text-white/50 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
