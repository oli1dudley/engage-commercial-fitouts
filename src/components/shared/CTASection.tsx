import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp" | "navy";
  external?: boolean;
}

interface CTASectionProps {
  headline: string;
  body?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundImage?: string;
}

export default function CTASection({
  headline,
  body,
  primaryCTA = { label: "Get Free Quote", href: "/quote", variant: "primary" },
  secondaryCTA = {
    label: "WhatsApp Us",
    href: whatsappUrl,
    variant: "whatsapp",
    external: true,
  },
  backgroundImage,
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      aria-label="Call to action"
    >
      {/* Background image with overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden />
        </>
      )}

      {/* Decorative gradient if no image */}
      {!backgroundImage && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, #2490FF 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #001F5B 0%, transparent 60%)",
          }}
          aria-hidden
        />
      )}

      <div className="relative max-container container-padding section-padding">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance">
            {headline}
          </h2>

          {body && (
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
              {body}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {primaryCTA && (
              <Button
                render={
                  primaryCTA.external ? (
                    <a href={primaryCTA.href} target="_blank" rel="noopener noreferrer" />
                  ) : (
                    <Link href={primaryCTA.href} />
                  )
                }
                variant={primaryCTA.variant ?? "primary"}
                size="lg"
                className="w-full sm:w-auto"
              >
                {primaryCTA.label}
                <ArrowRight className="size-4" />
              </Button>
            )}
            {secondaryCTA && (
              <Button
                render={
                  secondaryCTA.external ? (
                    <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" />
                  ) : (
                    <Link href={secondaryCTA.href} />
                  )
                }
                variant={secondaryCTA.variant ?? "whatsapp"}
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="size-4" />
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
