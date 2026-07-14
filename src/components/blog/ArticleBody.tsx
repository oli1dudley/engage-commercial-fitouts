import type { ContentBlock } from "@/types/blog";
import { slugifyHeading } from "@/lib/blog";
import InlineCTA from "./InlineCTA";
import { cn } from "@/lib/utils";
import { CheckSquare, Info, AlertTriangle, Lightbulb } from "lucide-react";

interface ArticleBodyProps {
  blocks: ContentBlock[];
  className?: string;
}

const CALLOUT_STYLES = {
  tip: {
    bg: "bg-brand/5 border-brand/20",
    iconBg: "bg-brand/10",
    icon: Lightbulb,
    iconColor: "text-brand",
  },
  warning: {
    bg: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
  },
  info: {
    bg: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    icon: Info,
    iconColor: "text-blue-600",
  },
};

function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-base leading-relaxed text-dark-text">
          {block.text}
        </p>
      );

    case "h2": {
      const id = slugifyHeading(block.text);
      return (
        <h2
          key={index}
          id={id}
          className="text-xl md:text-2xl font-extrabold text-navy tracking-tight scroll-mt-24"
        >
          {block.text}
        </h2>
      );
    }

    case "h3": {
      const id = slugifyHeading(block.text);
      return (
        <h3
          key={index}
          id={id}
          className="text-lg font-bold text-navy scroll-mt-24"
        >
          {block.text}
        </h3>
      );
    }

    case "ul":
      return (
        <ul key={index} className="flex flex-col gap-1.5 pl-0 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-dark-text leading-relaxed">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol key={index} className="flex flex-col gap-1.5 pl-0 list-none counter-reset-item">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-dark-text leading-relaxed">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "checklist":
      return (
        <div key={index} className="rounded-[14px] bg-[#F7F9FC] border border-light-grey/60 p-5 flex flex-col gap-3">
          {block.title && (
            <p className="text-sm font-semibold text-navy flex items-center gap-2">
              <CheckSquare className="size-4 text-brand" />
              {block.title}
            </p>
          )}
          <ul className="flex flex-col gap-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-dark-text leading-relaxed">
                <svg className="size-4 mt-0.5 shrink-0 text-brand" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "callout": {
      const style = CALLOUT_STYLES[block.variant];
      const Icon = style.icon;
      return (
        <aside
          key={index}
          className={cn("rounded-[14px] border p-5 flex gap-4", style.bg)}
          role="note"
        >
          <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-[10px]", style.iconBg)}>
            <Icon className={cn("size-5", style.iconColor)} aria-hidden />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            {block.title && (
              <p className="text-sm font-semibold text-navy">{block.title}</p>
            )}
            <p className="text-sm leading-relaxed text-dark-text">{block.text}</p>
          </div>
        </aside>
      );
    }

    case "cta":
      return <InlineCTA key={index} />;

    case "image":
      return (
        <figure key={index} className="overflow-hidden rounded-[14px]">
          <div className="aspect-video bg-[#F7F9FC] flex items-center justify-center rounded-[14px]">
            <svg className="size-12 text-navy/20" fill="none" viewBox="0 0 24 24" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 16l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">{block.caption}</figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

export default function ArticleBody({ blocks, className }: ArticleBodyProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
