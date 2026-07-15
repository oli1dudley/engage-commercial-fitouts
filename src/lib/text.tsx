import type { ReactNode } from "react";

/**
 * Prevents display headlines breaking mid-word at hyphens
 * (e.g. "Commercial Fit-" / "Out Solutions"). Wraps hyphenated brand terms
 * in no-wrap spans so the pair always stays on one line.
 */
const NO_BREAK = /(Fit-Outs?|End-to-End|Shell-and-Core)/g;

export function unbreakable(text: string): ReactNode {
  const parts = text.split(NO_BREAK);
  if (parts.length === 1) return text;
  // split with a capture group places matched terms at odd indices
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );
}
