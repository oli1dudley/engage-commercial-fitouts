import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { siteConfig, FOOTER_GROUPS, CTA, phoneHref } from "@/lib/site.config";

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-ink border-t border-line">
      {/* Gold hairline */}
      <div className="h-px w-full bg-gold/40" aria-hidden />

      {/* ── Main columns ────────────────────────────────────────────── */}
      <div className="max-container container-padding pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-6 sm:col-span-2">
            <Link href="/" className="inline-block w-fit" aria-label="Engage Commercial Fitouts — home">
              <Logo size="lg" />
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed max-w-[300px]">
              {siteConfig.footerDescription}
            </p>
            <Button render={<Link href={CTA.primary.href} />} variant="outline" size="md" className="w-fit">
              {CTA.primary.label}
            </Button>
          </div>

          {/* Link groups: Solutions / Services / Company / Legal */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-bright/70 mb-5">
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact strip ───────────────────────────────────────────── */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-3">
          <div className="flex items-center gap-2.5 text-sm text-cream/60">
            <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
            {siteConfig.address.locality}, {siteConfig.address.countryName}
          </div>
          {siteConfig.phone && (
            <a href={phoneHref} className="flex items-center gap-2.5 text-sm text-cream/60 hover:text-cream transition-colors">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden />
              {siteConfig.phone}
            </a>
          )}
          {siteConfig.email && (
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-sm text-cream/60 hover:text-cream transition-colors">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden />
              {siteConfig.email}
            </a>
          )}
          {siteConfig.openingHours && (
            <div className="text-sm text-cream/40">{siteConfig.openingHours}</div>
          )}
        </div>
      </div>

      {/* ── Copyright ───────────────────────────────────────────────── */}
      <div className="border-t border-line">
        <div className="max-container container-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/35">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-cream/35 hover:text-cream/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-cream/35 hover:text-cream/70 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookie-policy" className="text-xs text-cream/35 hover:text-cream/70 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
