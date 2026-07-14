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
  variant?: "default" | "bordered";
  className?: string;
}

export default function FAQAccordion({
  items,
  variant = "default",
  className,
}: FAQAccordionProps) {
  return (
    <Accordion
      className={cn("w-full space-y-3", className)}
      aria-label="Frequently asked questions"
    >
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={String(i)}
          className={cn(
            "rounded-[12px] overflow-hidden",
            variant === "bordered"
              ? "border border-light-grey"
              : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-light-grey/60"
          )}
        >
          <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-navy hover:text-brand hover:bg-light-bg/50 hover:no-underline transition-colors gap-3 focus-visible:ring-brand focus-visible:ring-inset rounded-[12px]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
