import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/seo.config";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-40 lg:bottom-8 lg:right-8 flex items-center justify-center size-14 rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2
      /* On mobile, shift up above the sticky CTA bar */
      mb-16 lg:mb-0"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-6 fill-white/20" />
    </a>
  );
}
