"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { packingQuoteSchema, type PackingQuoteValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const PROPERTY_TYPES = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Office" },
  { value: "commercial", label: "Commercial Unit" },
];

const PACKING_SERVICES = [
  { value: "full-packing", label: "Full Packing" },
  { value: "fragile-items", label: "Fragile Items" },
  { value: "unpacking", label: "Unpacking Required" },
];

interface PackingQuoteFormProps {
  headline?: string;
  className?: string;
}

export default function PackingQuoteForm({
  headline = "Get Your Packing Quote",
  className,
}: PackingQuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PackingQuoteValues>({
    resolver: zodResolver(packingQuoteSchema),
    defaultValues: { services: [] },
  });

  async function onSubmit(data: PackingQuoteValues) {
    setStatus("loading");
    try {
      // TODO: wire to /api/quote endpoint
      await new Promise((r) => setTimeout(r, 800));
      console.log("Packing quote request:", data);
      setStatus("success");
      reset({ services: [] });
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
            Thank you. Our team will be in touch shortly with your packing service quote.
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

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pq-name">
            Full Name <span className="text-error">*</span>
          </Label>
          <Input
            id="pq-name"
            placeholder="Your name"
            {...register("name")}
            className={cn(errors.name && "border-error")}
          />
          {errors.name && (
            <p className="text-xs text-error" role="alert">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pq-phone">
            Phone Number <span className="text-error">*</span>
          </Label>
          <Input
            id="pq-phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            {...register("phone")}
            className={cn(errors.phone && "border-error")}
          />
          {errors.phone && (
            <p className="text-xs text-error" role="alert">{errors.phone.message}</p>
          )}
        </div>

        {/* Property Type + Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="pq-property">
              Property Type <span className="text-error">*</span>
            </Label>
            <select
              id="pq-property"
              {...register("propertyType")}
              className={cn(
                "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                errors.propertyType && "border-error"
              )}
            >
              <option value="">Select type</option>
              {PROPERTY_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <p className="text-xs text-error" role="alert">{errors.propertyType.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="pq-area">
              Area <span className="text-error">*</span>
            </Label>
            <Input
              id="pq-area"
              placeholder="e.g. Dubai Marina"
              {...register("area")}
              className={cn(errors.area && "border-error")}
            />
            {errors.area && (
              <p className="text-xs text-error" role="alert">{errors.area.message}</p>
            )}
          </div>
        </div>

        {/* Packing Services Checkboxes */}
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-medium text-dark-text mb-1">Services Required</legend>
          {PACKING_SERVICES.map((service) => (
            <label
              key={service.value}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                value={service.value}
                {...register("services")}
                className="size-4 rounded border-input accent-brand cursor-pointer"
              />
              <span className="text-sm text-dark-text group-hover:text-brand transition-colors">
                {service.label}
              </span>
            </label>
          ))}
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
              Get My Quote
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
