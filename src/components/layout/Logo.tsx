import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Overall size of the lock-up */
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Approved Engage Commercial Fitouts primary lock-up.
 *
 * The asset is the exact approved logo artwork (brand_assets/engage_logo.jpeg)
 * with its solid black field converted to transparency for use on the site's
 * Engage Black backgrounds — the mark itself is untouched and the aspect
 * ratio (1144×298) is preserved at every size.
 *
 * Brand rule: the full lock-up is never used below 180px wide; all sizes
 * here respect that minimum.
 */
export default function Logo({ size = "md", className }: LogoProps) {
  const width = { sm: 180, md: 200, lg: 236 }[size];

  return (
    <Image
      src="/images/logo/engage-logo.png"
      alt="Engage Commercial Fit Outs"
      width={1144}
      height={298}
      priority
      className={cn("h-auto", className)}
      style={{ width }}
      sizes={`${width}px`}
    />
  );
}
