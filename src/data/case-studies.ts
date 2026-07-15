/**
 * Case-study data structure for the Projects page.
 *
 * No genuine Engage case studies exist yet, so this array is intentionally
 * empty and the Projects page presents capability categories instead.
 * When real projects complete, add them here and the page architecture is
 * ready to display them — do not add fabricated projects.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  clientCategory: string;
  location: string;
  propertyType: string;
  startingCondition: string;
  approximateSize: string;
  objective: string;
  scope: string[];
  designApproach: string;
  technicalWorks: string;
  furnitureScope: string;
  deliveryProgramme: string;
  challenges: string;
  result: string;
  images: { src: string; alt: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [];
