"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { commercialQuoteSchema, type CommercialQuoteValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const SELECT_CLASS =
  "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

interface CommercialQuoteFormProps {
  headline?: string;
  className?: string;
}

export default function CommercialQuoteForm({
  headline = "Get Your Commercial Moving Quote",
  className,
}: CommercialQuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommercialQuoteValues>({
    resolver: zodResolver(commercialQuoteSchema),
  });

  async function onSubmit(data: CommercialQuoteValues) {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 800));
      console.log("Commercial quote request:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 p-8 rounded-[16px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-light-grey/60 text-center",
          className
        )}
      >
        <CheckCircle2 className="size-12 text-success" />
        <div>
          <p className="text-base font-semibold text-navy mb-1">Quote Request Received</p>
          <p className="text-sm text-muted-foreground">
            Thank you. Your request has been received. Our team will review the details and contact you as soon as possible.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-brand hover:underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-[16px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-light-grey/60 p-6 md:p-8",
        className
      )}
    >
      {headline && (
        <h2 className="text-lg font-bold text-navy mb-5">{headline}</h2>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

        {/* Fieldset 1 — Contact */}
        <fieldset className="flex flex-col gap-4">
          <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Contact Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-company">Company Name <span className="text-error">*</span></Label>
              <Input
                id="cq-company"
                placeholder="Your company"
                {...register("companyName")}
                className={cn(errors.companyName && "border-error")}
              />
              {errors.companyName && (
                <p className="text-xs text-error" role="alert">{errors.companyName.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-contact">Contact Name <span className="text-error">*</span></Label>
              <Input
                id="cq-contact"
                placeholder="Your name"
                {...register("contactName")}
                className={cn(errors.contactName && "border-error")}
              />
              {errors.contactName && (
                <p className="text-xs text-error" role="alert">{errors.contactName.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-job-title">Job Title / Role</Label>
              <Input
                id="cq-job-title"
                placeholder="e.g. Office Manager"
                {...register("jobTitle")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-phone">Phone Number <span className="text-error">*</span></Label>
              <Input
                id="cq-phone"
                type="tel"
                placeholder="+971 XX XXX XXXX"
                {...register("phone")}
                className={cn(errors.phone && "border-error")}
              />
              {errors.phone && (
                <p className="text-xs text-error" role="alert">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cq-email">Email Address</Label>
            <Input
              id="cq-email"
              type="email"
              placeholder="your@company.com"
              {...register("email")}
              className={cn(errors.email && "border-error")}
            />
            {errors.email && (
              <p className="text-xs text-error" role="alert">{errors.email.message}</p>
            )}
          </div>
        </fieldset>

        {/* Fieldset 2 — Move Details */}
        <fieldset className="flex flex-col gap-4">
          <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Move Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-from">Current Business Location <span className="text-error">*</span></Label>
              <Input
                id="cq-from"
                placeholder="e.g. Business Bay"
                {...register("currentLocation")}
                className={cn(errors.currentLocation && "border-error")}
              />
              {errors.currentLocation && (
                <p className="text-xs text-error" role="alert">{errors.currentLocation.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-to">New Business Location <span className="text-error">*</span></Label>
              <Input
                id="cq-to"
                placeholder="e.g. DIFC"
                {...register("newLocation")}
                className={cn(errors.newLocation && "border-error")}
              />
              {errors.newLocation && (
                <p className="text-xs text-error" role="alert">{errors.newLocation.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-business-type">Type of Business <span className="text-error">*</span></Label>
              <select
                id="cq-business-type"
                {...register("businessType")}
                className={cn(SELECT_CLASS, errors.businessType && "border-error")}
              >
                <option value="">Select business type</option>
                <option value="Retail">Retail</option>
                <option value="Office">Office</option>
                <option value="Restaurant/Hospitality">Restaurant/Hospitality</option>
                <option value="Warehouse/Industrial">Warehouse/Industrial</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
              {errors.businessType && (
                <p className="text-xs text-error" role="alert">{errors.businessType.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-staff">Approximate staff / workstations</Label>
              <select id="cq-staff" {...register("staffCount")} className={SELECT_CLASS}>
                <option value=""></option>
                <option value="Not sure">Not sure</option>
                <option value="1–10">1–10</option>
                <option value="11–25">11–25</option>
                <option value="26–50">26–50</option>
                <option value="51–100">51–100</option>
                <option value="100+">100+</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-date">Preferred Moving Date</Label>
              <Input id="cq-date" type="date" {...register("movingDate")} className="text-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-time-slot">Preferred Time Slot</Label>
              <select id="cq-time-slot" {...register("preferredTimeSlot")} className={SELECT_CLASS}>
                <option value=""></option>
                <option value="Early morning (7am–9am)">Early morning (7am–9am)</option>
                <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
                <option value="Afternoon (12pm–3pm)">Afternoon (12pm–3pm)</option>
                <option value="Evening (3pm–6pm)">Evening (3pm–6pm)</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Fieldset 3 — Moving Logistics */}
        <fieldset className="flex flex-col gap-4">
          <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Moving Logistics
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-out-of-hours">Weekend or out-of-hours moving preferred?</Label>
              <select id="cq-out-of-hours" {...register("outOfHoursPreferred")} className={SELECT_CLASS}>
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cq-includes-it">Does the move include IT or specialist equipment?</Label>
              <select id="cq-includes-it" {...register("includesIT")} className={SELECT_CLASS}>
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
              <p className="text-xs text-muted-foreground mt-1 ml-0.5">
                We can help move office furniture, equipment and general business items. Specialist IT disconnection or reconnection requirements can be discussed during planning.
              </p>
            </div>
          </div>
        </fieldset>

        {/* Fieldset 4 — Additional Details */}
        <fieldset className="flex flex-col gap-4">
          <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Additional Details
          </legend>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cq-details">Additional Information</Label>
            <Textarea
              id="cq-details"
              placeholder="Tell us anything else about your business move..."
              rows={4}
              {...register("additionalDetails")}
            />
          </div>
        </fieldset>

        {status === "error" && (
          <p
            className="text-xs text-error bg-error/5 border border-error/20 rounded-lg px-3 py-2"
            role="alert"
          >
            Something went wrong. Please try again or WhatsApp us directly.
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          className="w-full mt-1"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Submit Commercial Enquiry
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
