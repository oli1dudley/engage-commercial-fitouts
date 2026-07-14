import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { whatsappUrl, phoneHref } from "@/lib/seo.config";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-light-grey shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      aria-label="Quick contact options"
    >
      <div className="grid grid-cols-3 h-16">
        <a
          href={phoneHref}
          className="flex flex-col items-center justify-center gap-1 text-navy hover:bg-light-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
          aria-label="Call us"
        >
          <Phone className="size-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-whatsapp text-white hover:bg-whatsapp-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="size-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">WhatsApp</span>
        </a>

        <Link
          href="/quote"
          className="flex flex-col items-center justify-center gap-1 bg-brand text-white hover:bg-brand-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          aria-label="Get a free quote"
        >
          <FileText className="size-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
