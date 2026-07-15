import { z } from "zod";

// ─── Project Enquiry Form (/contact) ───────────────────────────────────────
export const projectEnquirySchema = z
  .object({
    // Step 1 — Your details
    fullName: z.string().min(2, "Please enter your full name"),
    companyName: z.string().optional(),
    email: z
      .string()
      .email("Please enter a valid email address")
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .regex(/^[\d\s+()-]{9,}$/, "Please enter a valid phone number")
      .optional()
      .or(z.literal("")),
    preferredContact: z.string().optional(),

    // Step 2 — Your project
    clientType: z.string().min(1, "Please select the option that best describes you"),
    projectType: z.string().min(1, "Please select a project type"),
    propertyLocation: z.string().min(2, "Please enter the property location"),
    propertyCondition: z.string().optional(),
    message: z.string().min(10, "Please tell us briefly about the project"),

    // Optional additional information
    approximateSize: z.string().optional(),
    intendedOutcome: z.string().optional(),
    targetCompletion: z.string().optional(),
    budget: z.string().optional(),

    // Consent
    privacyAccepted: z.literal(true, {
      message: "Please confirm you have read the privacy policy",
    }),

    // Honeypot — must stay empty; filled values indicate an automated submission
    website: z.string().max(0).optional(),
  })
  // At least one usable contact channel is required — not necessarily both.
  .refine((data) => Boolean(data.email) || Boolean(data.phone), {
    message: "Please provide an email address or a phone number",
    path: ["email"],
  });

export type ProjectEnquiryValues = z.infer<typeof projectEnquirySchema>;
