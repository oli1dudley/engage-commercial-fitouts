"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apartmentQuoteSchema, type ApartmentQuoteValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const APARTMENT_SIZES = [
  { value: "studio", label: "Studio" },
  { value: "1bed", label: "1 Bedroom" },
  { value: "2bed", label: "2 Bedroom" },
  { value: "3bed", label: "3 Bedroom" },
  { value: "4plus", label: "4+ Bedroom" },
];

interface ApartmentQuoteFormProps {
  headline?: string;
  className?: string;
}

export default function ApartmentQuoteForm({
  headline = "Get Your Apartment Moving Quote",
  className,
}: ApartmentQuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApartmentQuoteValues>({
    resolver: zodResolver(apartmentQuoteSchema),
    defaultValues: { moveType: "apartment" },
  });

  async function onSubmit(data: ApartmentQuoteValues) {
    setStatus("loading");
    try {
      // TODO: wire to /api/quote endpoint
      await new Promise((r) => setTimeout(r, 800));
      console.log("Apartment quote request:", data);
      setStatus("success");
      reset({ moveType: "apartment" });
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
            Thank you. Our team will be in touch shortly with your apartment moving quote.
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
        {/* Hidden move type */}
        <input type="hidden" {...register("moveType")} value="apartment" />

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="aq-name">
            Full Name <span className="text-error">*</span>
          </Label>
          <Input
            id="aq-name"
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
          <Label htmlFor="aq-phone">
            Phone Number <span className="text-error">*</span>
          </Label>
          <Input
            id="aq-phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            {...register("phone")}
            className={cn(errors.phone && "border-error")}
          />
          {errors.phone && (
            <p className="text-xs text-error" role="alert">{errors.phone.message}</p>
          )}
        </div>

        {/* Current Area + Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="aq-from">
              Current Area <span className="text-error">*</span>
            </Label>
            <Input
              id="aq-from"
              placeholder="e.g. Dubai Marina"
              {...register("currentArea")}
              className={cn(errors.currentArea && "border-error")}
            />
            {errors.currentArea && (
              <p className="text-xs text-error" role="alert">{errors.currentArea.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="aq-to">
              Destination Area <span className="text-error">*</span>
            </Label>
            <Input
              id="aq-to"
              placeholder="e.g. Business Bay"
              {...register("destinationArea")}
              className={cn(errors.destinationArea && "border-error")}
            />
            {errors.destinationArea && (
              <p className="text-xs text-error" role="alert">{errors.destinationArea.message}</p>
            )}
          </div>
        </div>

        {/* Apartment Size */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="aq-size">
            Apartment Size <span className="text-error">*</span>
          </Label>
          <select
            id="aq-size"
            {...register("apartmentSize")}
            className={cn(
              "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              errors.apartmentSize && "border-error"
            )}
          >
            <option value="">Select apartment size</option>
            {APARTMENT_SIZES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.apartmentSize && (
            <p className="text-xs text-error" role="alert">{errors.apartmentSize.message}</p>
          )}
        </div>

        {/* Moving Date (optional) */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="aq-date">Preferred Moving Date</Label>
          <Input id="aq-date" type="date" {...register("movingDate")} className="text-sm" />
        </div>

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
