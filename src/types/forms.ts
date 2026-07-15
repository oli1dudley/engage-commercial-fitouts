import { z } from "zod";

// ─── Project Enquiry Form (/contact) ───────────────────────────────────────
export const projectEnquirySchema = z.object({
  // Contact
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  preferredContact: z.string().optional(),

  // Classification
  clientType: z.string().min(1, "Please select the option that best describes you"),
  projectType: z.string().min(1, "Please select a project type"),

  // Project details
  propertyLocation: z.string().min(2, "Please enter the property location"),
  approximateSize: z.string().optional(),
  propertyCondition: z.string().optional(),
  intendedOutcome: z.string().optional(),
  targetCompletion: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please tell us briefly about the project"),

  // Consent
  privacyAccepted: z.literal(true, {
    message: "Please confirm you have read the privacy policy",
  }),

  // Honeypot — must stay empty; filled values indicate an automated submission
  website: z.string().max(0).optional(),
});

export type ProjectEnquiryValues = z.infer<typeof projectEnquirySchema>;
