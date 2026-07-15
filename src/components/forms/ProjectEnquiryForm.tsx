"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { projectEnquirySchema, type ProjectEnquiryValues } from "@/types/forms";
import {
  CLIENT_TYPES,
  PROJECT_TYPES,
  PROPERTY_CONDITIONS,
  BUDGET_RANGES,
} from "@/lib/site.config";
import { cn } from "@/lib/utils";

const CONTACT_METHODS = ["Email", "Phone"] as const;

const selectClass =
  "flex h-11 w-full min-w-0 rounded-[2px] border border-input bg-ink px-3 text-sm text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

// File-upload limits — enforced client-side; the form endpoint must re-validate.
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_COUNT = 5;
const ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,.dwg";

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 min-w-0">
      <Label htmlFor={htmlFor} className="text-cream/90">
        {label}
        {required && <span className="text-gold-bright ml-0.5" aria-hidden> *</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-error" role="alert" id={`${htmlFor}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function ProjectEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectEnquiryValues>({
    resolver: zodResolver(projectEnquirySchema),
  });

  async function onSubmit(data: ProjectEnquiryValues) {
    // Honeypot: silently drop automated submissions
    if (data.website) return;

    setStatus("loading");
    try {
      // TODO(launch): wire to the form-handling endpoint. The destination
      // email must come from environment configuration
      // (CONTACT_FORM_DESTINATION — see .env.example), not from code.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      reset();
      setFileName(null);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center rounded-[6px] bg-ink-panel border border-gold/30 px-6">
        <CheckCircle2 className="size-12 text-gold-bright" aria-hidden />
        <div>
          <p className="text-lg font-semibold text-cream mb-1.5">Project details received</p>
          <p className="text-sm text-stone max-w-sm">
            Thank you. The Engage team will review the information provided and
            contact you to arrange the appropriate next step.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-gold-bright hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-[2px]"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
      {/* ── Contact details ─────────────────────────────────────────── */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-4">Contact Details</legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full name" htmlFor="pe-name" required error={errors.fullName?.message}>
            <Input
              id="pe-name"
              aria-required
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "pe-name-error" : undefined}
              {...register("fullName")}
              className={cn(errors.fullName && "border-error")}
            />
          </Field>
          <Field label="Company name" htmlFor="pe-company">
            <Input id="pe-company" autoComplete="organization" {...register("companyName")} />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Email address" htmlFor="pe-email" required error={errors.email?.message}>
            <Input
              id="pe-email"
              aria-required
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "pe-email-error" : undefined}
              {...register("email")}
              className={cn(errors.email && "border-error")}
            />
          </Field>
          <Field label="Phone number" htmlFor="pe-phone" required error={errors.phone?.message}>
            <Input
              id="pe-phone"
              aria-required
              type="tel"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "pe-phone-error" : undefined}
              {...register("phone")}
              className={cn(errors.phone && "border-error")}
            />
          </Field>
        </div>

        <Field label="Preferred contact method" htmlFor="pe-contact-method">
          <select id="pe-contact-method" {...register("preferredContact")} className={selectClass}>
            <option value="">No preference</option>
            {CONTACT_METHODS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </Field>
      </fieldset>

      {/* ── Project classification ──────────────────────────────────── */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-4">About the Project</legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="I am a" htmlFor="pe-client-type" required error={errors.clientType?.message}>
            <select
              id="pe-client-type"
              aria-required
              aria-invalid={!!errors.clientType}
              aria-describedby={errors.clientType ? "pe-client-type-error" : undefined}
              {...register("clientType")}
              className={cn(selectClass, errors.clientType && "border-error")}
            >
              <option value="">Select client type</option>
              {CLIENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Project type" htmlFor="pe-project-type" required error={errors.projectType?.message}>
            <select
              id="pe-project-type"
              aria-required
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? "pe-project-type-error" : undefined}
              {...register("projectType")}
              className={cn(selectClass, errors.projectType && "border-error")}
            >
              <option value="">Select project type</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Property location" htmlFor="pe-location" required error={errors.propertyLocation?.message}>
            <Input
              id="pe-location"
              aria-required
              placeholder="e.g. Business Bay, Dubai"
              aria-invalid={!!errors.propertyLocation}
              aria-describedby={errors.propertyLocation ? "pe-location-error" : undefined}
              {...register("propertyLocation")}
              className={cn(errors.propertyLocation && "border-error")}
            />
          </Field>
          <Field label="Approximate size" htmlFor="pe-size">
            <Input id="pe-size" placeholder="e.g. 5,000 sq ft" {...register("approximateSize")} />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Current property condition" htmlFor="pe-condition">
            <select id="pe-condition" {...register("propertyCondition")} className={selectClass}>
              <option value="">Select condition</option>
              {PROPERTY_CONDITIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Intended commercial outcome" htmlFor="pe-outcome">
            <Input
              id="pe-outcome"
              placeholder="e.g. prepare for leasing, occupation"
              {...register("intendedOutcome")}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Target completion date" htmlFor="pe-completion">
            <Input id="pe-completion" type="date" {...register("targetCompletion")} />
          </Field>
          {BUDGET_RANGES.length > 0 ? (
            <Field label="Indicative budget range" htmlFor="pe-budget">
              <select id="pe-budget" {...register("budget")} className={selectClass}>
                <option value="">Select budget range</option>
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
          ) : (
            <Field label="Indicative budget" htmlFor="pe-budget">
              <Input id="pe-budget" placeholder="If already established" {...register("budget")} />
            </Field>
          )}
        </div>

        <Field label="Project message" htmlFor="pe-message" required error={errors.message?.message}>
          <Textarea
            id="pe-message"
              aria-required
            rows={5}
            placeholder="Tell us about the property, its condition and what you would like to achieve."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "pe-message-error" : undefined}
            {...register("message")}
            className={cn(errors.message && "border-error")}
          />
        </Field>

        {/* File upload — plans, photographs or briefs */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <Label htmlFor="pe-files" className="text-cream/90">
            Plans, photographs or briefs
          </Label>
          <label
            htmlFor="pe-files"
            className={cn(
              "flex items-center gap-3 rounded-[2px] border border-dashed bg-ink px-4 py-3.5 text-sm text-stone cursor-pointer hover:border-gold/50 transition-colors focus-within:ring-2 focus-within:ring-gold/60",
              fileError ? "border-error" : "border-input"
            )}
          >
            <Paperclip className="size-4 text-gold-bright shrink-0" aria-hidden />
            <span className="truncate">
              {fileName ?? "Attach files (optional)"}
            </span>
            <input
              id="pe-files"
              type="file"
              multiple
              accept={ACCEPTED_FILE_TYPES}
              aria-describedby={fileError ? "pe-files-error" : "pe-files-hint"}
              className="sr-only"
              onChange={(e) => {
                const files = e.target.files;
                setFileError(null);
                if (!files || files.length === 0) {
                  setFileName(null);
                  return;
                }
                if (files.length > MAX_FILE_COUNT) {
                  setFileError(`Please attach no more than ${MAX_FILE_COUNT} files.`);
                  e.target.value = "";
                  setFileName(null);
                  return;
                }
                const tooLarge = [...files].find((f) => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);
                if (tooLarge) {
                  setFileError(`"${tooLarge.name}" is larger than ${MAX_FILE_SIZE_MB} MB. Please attach smaller files.`);
                  e.target.value = "";
                  setFileName(null);
                  return;
                }
                setFileName(
                  files.length === 1 ? files[0].name : `${files.length} files selected`
                );
              }}
            />
          </label>
          {fileError ? (
            <p className="text-xs text-error" role="alert" id="pe-files-error">
              {fileError}
            </p>
          ) : (
            <p className="text-xs text-cream/40" id="pe-files-hint">
              PDF, Word, images or DWG — up to {MAX_FILE_COUNT} files, {MAX_FILE_SIZE_MB} MB each.
            </p>
          )}
        </div>
      </fieldset>

      {/* Honeypot — hidden from real users, catches automated submissions */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="pe-website">Leave this field empty</label>
        <input id="pe-website" type="text" tabIndex={-1} autoComplete="off" className="w-px" {...register("website")} />
      </div>

      {/* ── Privacy acknowledgement ─────────────────────────────────── */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-3">
          <input
            id="pe-privacy"
              aria-required
            type="checkbox"
            aria-invalid={!!errors.privacyAccepted}
            aria-describedby={errors.privacyAccepted ? "pe-privacy-error" : undefined}
            {...register("privacyAccepted")}
            className="mt-0.5 size-4 shrink-0 accent-[#B79A62] cursor-pointer"
          />
          <label htmlFor="pe-privacy" className="text-sm text-stone leading-relaxed cursor-pointer">
            I have read and accept the{" "}
            <Link href="/privacy-policy" className="text-gold-bright hover:underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and consent to Engage contacting me about this enquiry.
            <span className="text-gold-bright ml-0.5" aria-hidden> *</span>
          </label>
        </div>
        {errors.privacyAccepted && (
          <p className="text-xs text-error" role="alert" id="pe-privacy-error">
            {errors.privacyAccepted.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          className="text-sm text-error bg-error/10 border border-error/30 rounded-[2px] px-4 py-3"
          role="alert"
        >
          Something went wrong while submitting your enquiry. Please try again,
          or use the contact details in the footer.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Submitting…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden /> Submit Project Details
          </>
        )}
      </Button>
    </form>
  );
}
