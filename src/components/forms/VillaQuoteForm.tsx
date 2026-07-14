"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { villaQuoteSchema, type VillaQuoteValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const VILLA_SIZES = [
  { value: "2bed", label: "2 Bedroom Villa" },
  { value: "3bed", label: "3 Bedroom Villa" },
  { value: "4bed", label: "4 Bedroom Villa" },
  { value: "5bed", label: "5 Bedroom Villa" },
  { value: "6plus", label: "6+ Bedroom Villa" },
];

interface VillaQuoteFormProps {
  headline?: string;
  className?: string;
}

export default function VillaQuoteForm({
  headline = "Get Your Villa Moving Quote",
  className,
}: VillaQuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VillaQuoteValues>({
    resolver: zodResolver(villaQuoteSchema),
    defaultValues: { moveType: "villa" },
  });

  async function onSubmit(data: VillaQuoteValues) {
    setStatus("loading");
    try {
      // TODO: wire to /api/quote endpoint
      await new Promise((r) => setTimeout(r, 800));
      console.log("Villa quote request:", data);
      setStatus("success");
      reset({ moveType: "villa" });
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
            Thank you. Our team will be in touch shortly with your villa moving quote.
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
        <input type="hidden" {...register("moveType")} value="villa" />

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="vq-name">
            Full Name <span className="text-error">*</span>
          </Label>
          <Input
            id="vq-name"
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
          <Label htmlFor="vq-phone">
            Phone Number <span className="text-error">*</span>
          </Label>
          <Input
            id="vq-phone"
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
            <Label htmlFor="vq-from">
              Current Area <span className="text-error">*</span>
            </Label>
            <Input
              id="vq-from"
              placeholder="e.g. Arabian Ranches"
              {...register("currentArea")}
              className={cn(errors.currentArea && "border-error")}
            />
            {errors.currentArea && (
              <p className="text-xs text-error" role="alert">{errors.currentArea.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="vq-to">
              Destination Area <span className="text-error">*</span>
            </Label>
            <Input
              id="vq-to"
              placeholder="e.g. Dubai Hills"
              {...register("destinationArea")}
              className={cn(errors.destinationArea && "border-error")}
            />
            {errors.destinationArea && (
              <p className="text-xs text-error" role="alert">{errors.destinationArea.message}</p>
            )}
          </div>
        </div>

        {/* Villa Size */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="vq-size">
            Villa Size <span className="text-error">*</span>
          </Label>
          <select
            id="vq-size"
            {...register("villaSize")}
            className={cn(
              "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              errors.villaSize && "border-error"
            )}
          >
            <option value="">Select villa size</option>
            {VILLA_SIZES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.villaSize && (
            <p className="text-xs text-error" role="alert">{errors.villaSize.message}</p>
          )}
        </div>

        {/* Moving Date (optional) */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="vq-date">Preferred Moving Date</Label>
          <Input id="vq-date" type="date" {...register("movingDate")} className="text-sm" />
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
