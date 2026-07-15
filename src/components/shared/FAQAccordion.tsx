"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion
      className={cn("w-full space-y-3", className)}
      aria-label="Frequently asked questions"
    >
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={String(i)}
          className="rounded-[6px] overflow-hidden bg-ink-panel border border-line data-open:border-gold/40 transition-colors"
        >
          <AccordionTrigger className="px-5 py-4 text-sm md:text-[15px] font-semibold text-cream text-left hover:text-gold-bright hover:no-underline transition-colors gap-3 focus-visible:ring-gold/60 focus-visible:ring-inset rounded-[6px]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-sm text-stone leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
