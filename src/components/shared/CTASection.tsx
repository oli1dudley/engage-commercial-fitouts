import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/lib/site.config";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface CTASectionProps {
  headline: string;
  body?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
}

export default function CTASection({
  headline,
  body,
  primaryCTA = { ...CTA.primary, variant: "primary" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-ink-raised border-y border-line grid-texture"
      aria-label="Call to action"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(183,154,98,0.12) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative max-container container-padding section-padding">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <span className="inline-block w-10 h-px bg-gold" aria-hidden />
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-cream leading-[1.12] tracking-tight text-balance">
            {headline}
          </h2>

          {body && (
            <p className="text-base md:text-lg text-stone leading-relaxed max-w-xl">
              {body}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">
            {primaryCTA && (
              <Button
                render={<Link href={primaryCTA.href} />}
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
                render={<Link href={secondaryCTA.href} />}
                variant={secondaryCTA.variant ?? "secondary"}
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
