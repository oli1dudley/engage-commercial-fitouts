import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";

interface InlineCTAProps {
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function InlineCTA({
  headline = "Ready to plan your move?",
  body = "Get a free, personalised quote from the WeMoveStuff team. Fast response — usually within a few hours.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/quote",
}: InlineCTAProps) {
  return (
    <aside
      className="my-8 rounded-[16px] bg-navy text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8"
      aria-label="Get a quote"
    >
      <div className="flex flex-col gap-1.5 flex-1">
        <p className="text-base md:text-lg font-bold leading-snug">{headline}</p>
        <p className="text-sm text-white/75 leading-relaxed">{body}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <Button render={<Link href={primaryHref} />} variant="primary" size="sm">
          {primaryLabel}
          <ArrowRight className="size-4" />
        </Button>
        <Button
          render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
          variant="whatsapp"
          size="sm"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </Button>
      </div>
    </aside>
  );
}
