/**
 * Structured configuration for approved imagery.
 *
 * Every major image position (page heroes, content splits, future
 * case-study cards) accepts this shape. While no approved image is
 * supplied, components fall back to the page-specific architectural
 * visual — never to stock photography or invented project imagery.
 */
export interface ApprovedImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** CSS object-position value, e.g. "center 30%" */
  focal?: string;
  /** Optional visible caption below the image */
  caption?: string;
  /** Mark conceptual/illustrative imagery so it is never read as completed work */
  illustrative?: boolean;
  /** Priority-load above-the-fold hero imagery */
  priority?: boolean;
}
