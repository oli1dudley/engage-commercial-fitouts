import { z } from "zod";

// ─── Quick Quote (inline, service pages + homepage) ───────────────────────
export const quickQuoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  moveType: z.string().min(1, "Please select a move type"),
  movingDate: z.string().optional(),
});

export type QuickQuoteValues = z.infer<typeof quickQuoteSchema>;

// ─── Full Quote Form (/quote) ─────────────────────────────────────────────
export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(9, "Please enter a valid phone number").regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  preferredContact: z.string().optional(),
  moveType: z.string().min(1, "Please select a move type"),
  propertySize: z.string().optional(),
  currentLocation: z.string().min(2, "Please enter your current location"),
  destinationLocation: z.string().min(2, "Please enter your destination"),
  movingDate: z.string().optional(),
  preferredTimeSlot: z.string().optional(),
  currentFloor: z.string().optional(),
  newFloor: z.string().optional(),
  liftAvailableCurrent: z.string().optional(),
  liftAvailableNew: z.string().optional(),
  parkingAccess: z.string().optional(),
  buildingPermit: z.string().optional(),
  approxBoxes: z.string().optional(),
  additionalServices: z.array(z.string()).optional(),
  notes: z.string().optional(),
});
export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

// ─── Contact Form (/contact) ──────────────────────────────────────────────
export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  enquiryType: z.string().optional(),
  message: z.string().min(10, "Please provide a brief message"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// ─── Newsletter ───────────────────────────────────────────────────────────
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

// ─── Apartment Quote (extra fields) ──────────────────────────────────────
export const apartmentQuoteSchema = quickQuoteSchema.extend({
  currentArea: z.string().min(1, "Please enter your current area"),
  destinationArea: z.string().min(1, "Please enter your destination area"),
  apartmentSize: z.string().min(1, "Please select apartment size"),
});

export type ApartmentQuoteValues = z.infer<typeof apartmentQuoteSchema>;

// ─── Villa Quote (extra fields) ───────────────────────────────────────────
export const villaQuoteSchema = quickQuoteSchema.extend({
  currentArea: z.string().min(1, "Please enter your current area"),
  destinationArea: z.string().min(1, "Please enter your destination area"),
  villaSize: z.string().min(1, "Please select villa size"),
});

export type VillaQuoteValues = z.infer<typeof villaQuoteSchema>;

// ─── Commercial Quote ─────────────────────────────────────────────────────
export const commercialQuoteSchema = z.object({
  companyName: z.string().min(2, "Please enter your company name"),
  contactName: z.string().min(2, "Please enter your name"),
  jobTitle: z.string().optional(),
  phone: z.string().min(9, "Please enter a valid phone number").regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  currentLocation: z.string().min(2, "Please enter your current location"),
  newLocation: z.string().min(2, "Please enter your new location"),
  businessType: z.string().min(1, "Please select a business type"),
  staffCount: z.string().optional(),
  movingDate: z.string().optional(),
  preferredTimeSlot: z.string().optional(),
  outOfHoursPreferred: z.string().optional(),
  includesIT: z.string().optional(),
  additionalDetails: z.string().optional(),
});
export type CommercialQuoteValues = z.infer<typeof commercialQuoteSchema>;

// ─── Packing Quote ────────────────────────────────────────────────────────
export const packingQuoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  area: z.string().min(2, "Please enter your area"),
  services: z.array(z.string()).optional(),
});

export type PackingQuoteValues = z.infer<typeof packingQuoteSchema>;

// ─── TV Installation Quote ────────────────────────────────────────────────
export const tvInstallationSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  serviceRequired: z.string().min(1, "Please select a service"),
  tvSize: z.string().min(1, "Please select a TV size"),
  options: z.array(z.string()).optional(),
});

export type TVInstallationValues = z.infer<typeof tvInstallationSchema>;

// ─── Furniture Assembly Quote ─────────────────────────────────────────────
export const furnitureQuoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  furnitureType: z.string().min(1, "Please select a furniture type"),
  services: z.array(z.string()).optional(),
});

export type FurnitureQuoteValues = z.infer<typeof furnitureQuoteSchema>;

// ─── Partnership Form ─────────────────────────────────────────────────────
export const partnershipSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  companyName: z.string().min(2, "Please enter your company name"),
  role: z.string().min(2, "Please enter your role or position"),
  phone: z.string().min(9, "Please enter a valid phone number").regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  businessType: z.string().min(1, "Please select a business type"),
  movingSupport: z.string().optional(),
  message: z.string().optional(),
});
export type PartnershipValues = z.infer<typeof partnershipSchema>;
