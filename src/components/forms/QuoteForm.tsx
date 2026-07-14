"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { quoteFormSchema, type QuoteFormValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const SELECT_CLASS =
  "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const ADDITIONAL_SERVICES = [
  { value: "Packing", label: "Packing" },
  { value: "Unpacking", label: "Unpacking" },
  { value: "Furniture Dismantling & Reassembly", label: "Furniture Dismantling & Reassembly" },
  { value: "TV Removal & Reinstallation", label: "TV Removal & Reinstallation" },
  { value: "Storage Support", label: "Storage Support" },
  { value: "Other", label: "Other" },
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { additionalServices: [] },
  });

  function toggleService(value: string) {
    const updated = selectedServices.includes(value)
      ? selectedServices.filter((s) => s !== value)
      : [...selectedServices, value];
    setSelectedServices(updated);
    setValue("additionalServices", updated);
  }

  async function onSubmit(data: QuoteFormValues) {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log("Full quote request:", data);
      setStatus("success");
      reset();
      setSelectedServices([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <CheckCircle2 className="size-16 text-success" />
        <div>
          <h3 className="text-xl font-bold text-navy mb-2">Quote Request Sent</h3>
          <p className="text-muted-foreground max-w-md">
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      {/* Fieldset 1 — Contact Information */}
      <fieldset className="flex flex-col gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Contact Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-name">Full Name <span className="text-error">*</span></Label>
            <Input id="qf-name" placeholder="Your full name" {...register("name")}
              className={cn(errors.name && "border-error")} />
            {errors.name && <p className="text-xs text-error" role="alert">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-phone">Phone Number <span className="text-error">*</span></Label>
            <Input id="qf-phone" type="tel" placeholder="+971 XX XXX XXXX" {...register("phone")}
              className={cn(errors.phone && "border-error")} />
            {errors.phone && <p className="text-xs text-error" role="alert">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-email">Email Address <span className="text-error">*</span></Label>
            <Input id="qf-email" type="email" placeholder="your@email.com" {...register("email")}
              className={cn(errors.email && "border-error")} />
            {errors.email && <p className="text-xs text-error" role="alert">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-preferred-contact">Preferred Contact Method</Label>
            <select id="qf-preferred-contact" {...register("preferredContact")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Call">Call</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Fieldset 2 — Move Details */}
      <fieldset className="flex flex-col gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Move Details
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-move-type">Move Type <span className="text-error">*</span></Label>
            <select id="qf-move-type" {...register("moveType")}
              className={cn(SELECT_CLASS, errors.moveType && "border-error")}>
              <option value="">Select move type</option>
              <option value="Apartment Moving">Apartment Moving</option>
              <option value="Villa Moving">Villa Moving</option>
              <option value="Commercial Moving">Commercial Moving</option>
              <option value="Packing & Unpacking">Packing &amp; Unpacking</option>
              <option value="Furniture Dismantling & Assembly">Furniture Dismantling &amp; Assembly</option>
              <option value="TV Removal & Reinstallation">TV Removal &amp; Reinstallation</option>
            </select>
            {errors.moveType && <p className="text-xs text-error" role="alert">{errors.moveType.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-property-size">Property Size</Label>
            <select id="qf-property-size" {...register("propertySize")}
              className={SELECT_CLASS}>
              <option value="">Select size</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
              <option value="3 Bedrooms">3 Bedrooms</option>
              <option value="4 Bedrooms">4 Bedrooms</option>
              <option value="5+ Bedrooms">5+ Bedrooms</option>
              <option value="Studio / Small Office">Studio / Small Office</option>
              <option value="Small Office">Small Office</option>
              <option value="Large Office">Large Office</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-from">Current Location <span className="text-error">*</span></Label>
            <Input id="qf-from" placeholder="e.g. Dubai Marina" {...register("currentLocation")}
              className={cn(errors.currentLocation && "border-error")} />
            {errors.currentLocation && <p className="text-xs text-error" role="alert">{errors.currentLocation.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-to">Destination <span className="text-error">*</span></Label>
            <Input id="qf-to" placeholder="e.g. Jumeirah Village Circle" {...register("destinationLocation")}
              className={cn(errors.destinationLocation && "border-error")} />
            {errors.destinationLocation && <p className="text-xs text-error" role="alert">{errors.destinationLocation.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-date">Preferred Moving Date</Label>
            <Input id="qf-date" type="date" {...register("movingDate")} className="text-sm" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-time-slot">Preferred Time Slot</Label>
            <select id="qf-time-slot" {...register("preferredTimeSlot")}
              className={SELECT_CLASS}>
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

      {/* Fieldset 3 — Access & Building Details */}
      <fieldset className="flex flex-col gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Access &amp; Building Details
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-current-floor">Current property floor</Label>
            <select id="qf-current-floor" {...register("currentFloor")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Ground floor">Ground floor</option>
              <option value="1st–5th floor">1st–5th floor</option>
              <option value="6th–15th floor">6th–15th floor</option>
              <option value="16th+ floor">16th+ floor</option>
              <option value="House / Villa / No floors">House / Villa / No floors</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-new-floor">New property floor</Label>
            <select id="qf-new-floor" {...register("newFloor")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Ground floor">Ground floor</option>
              <option value="1st–5th floor">1st–5th floor</option>
              <option value="6th–15th floor">6th–15th floor</option>
              <option value="16th+ floor">16th+ floor</option>
              <option value="House / Villa / No floors">House / Villa / No floors</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-lift-current">Lift available at current property?</Label>
            <select id="qf-lift-current" {...register("liftAvailableCurrent")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-lift-new">Lift available at new property?</Label>
            <select id="qf-lift-new" {...register("liftAvailableNew")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-parking">Parking / loading access?</Label>
            <select id="qf-parking" {...register("parkingAccess")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="qf-permit">Building move permit required?</Label>
            <select id="qf-permit" {...register("buildingPermit")}
              className={SELECT_CLASS}>
              <option value=""></option>
              <option value="Yes — already arranged">Yes — already arranged</option>
              <option value="Yes — not yet arranged">Yes — not yet arranged</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Fieldset 4 — Move Size */}
      <fieldset className="flex flex-col gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Move Size
        </legend>
        <div className="flex flex-col gap-1.5 max-w-xs">
          <Label htmlFor="qf-boxes">Approximate number of boxes</Label>
          <select id="qf-boxes" {...register("approxBoxes")}
            className={SELECT_CLASS}>
            <option value=""></option>
            <option value="Not sure">Not sure</option>
            <option value="1–10 boxes">1–10 boxes</option>
            <option value="11–25 boxes">11–25 boxes</option>
            <option value="26–50 boxes">26–50 boxes</option>
            <option value="50+ boxes">50+ boxes</option>
          </select>
        </div>
      </fieldset>

      {/* Fieldset 5 — Add-on Services */}
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Add-on Services
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ADDITIONAL_SERVICES.map((svc) => (
            <label
              key={svc.value}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <Checkbox
                checked={selectedServices.includes(svc.value)}
                onCheckedChange={() => toggleService(svc.value)}
                className="rounded-md"
              />
              <span className="text-sm text-dark-text group-hover:text-navy transition-colors">
                {svc.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Fieldset 6 — Additional Details */}
      <fieldset className="flex flex-col gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Additional Details
        </legend>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="qf-notes">Anything else that would help us understand your move</Label>
          <Textarea
            id="qf-notes"
            placeholder="Any additional details about your move..."
            rows={4}
            {...register("notes")}
          />
        </div>
      </fieldset>

      {status === "error" && (
        <p className="text-xs text-error bg-error/5 border border-error/20 rounded-lg px-3 py-2" role="alert">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <><Loader2 className="size-4 animate-spin" /> Sending…</>
        ) : (
          <>Submit Quote Request <ArrowRight className="size-4" /></>
        )}
      </Button>
    </form>
  );
}
