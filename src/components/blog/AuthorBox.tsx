import type { BlogAuthor } from "@/types/blog";
import { cn } from "@/lib/utils";

interface AuthorBoxProps {
  author: BlogAuthor;
  className?: string;
}

export default function AuthorBox({ author, className }: AuthorBoxProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-[16px] bg-[#F7F9FC] border border-light-grey/60 p-5 md:p-6",
        className
      )}
    >
      {/* Avatar */}
      <div
        className="size-12 shrink-0 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-lg"
        aria-hidden
      >
        {author.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Written by
        </p>
        <p className="text-base font-bold text-navy">{author.name}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{author.bio}</p>
      </div>
    </div>
  );
}
