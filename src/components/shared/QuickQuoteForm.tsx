"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { quickQuoteSchema, type QuickQuoteValues } from "@/types/forms";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface QuickQuoteFormProps {
  headline?: string;
  moveTypeOptions?: SelectOption[];
  className?: string;
}

const DEFAULT_MOVE_TYPES: SelectOption[] = [
  { value: "apartment", label: "Apartment Move" },
  { value: "villa", label: "Villa Move" },
  { value: "commercial", label: "Commercial Move" },
];

export default function QuickQuoteForm({
  headline = "Get Your Free Moving Quote",
  moveTypeOptions = DEFAULT_MOVE_TYPES,
  className,
}: QuickQuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickQuoteValues>({
    resolver: zodResolver(quickQuoteSchema),
  });

  async function onSubmit(data: QuickQuoteValues) {
    setStatus("loading");
    try {
      // TODO: wire to /api/quote endpoint
      await new Promise((r) => setTimeout(r, 800));
      console.log("Quote request:", data);
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
            Thank you. Our team will contact you shortly.
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
          <Label htmlFor="qq-name" className="text-sm font-medium text-dark-text">
            Full Name <span className="text-error">*</span>
          </Label>
          <Input
            id="qq-name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name")}
            className={cn(errors.name && "border-error focus-visible:ring-error/30")}
          />
          {errors.name && (
            <p className="text-xs text-error" role="alert">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="qq-phone" className="text-sm font-medium text-dark-text">
            Phone Number <span className="text-error">*</span>
          </Label>
          <Input
            id="qq-phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            aria-invalid={!!errors.phone}
            {...register("phone")}
            className={cn(errors.phone && "border-error focus-visible:ring-error/30")}
          />
          {errors.phone && (
            <p className="text-xs text-error" role="alert">{errors.phone.message}</p>
          )}
        </div>

        {/* Move Type */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="qq-type" className="text-sm font-medium text-dark-text">
            Move Type <span className="text-error">*</span>
          </Label>
          <select
            id="qq-type"
            aria-invalid={!!errors.moveType}
            {...register("moveType")}
            className={cn(
              "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              errors.moveType && "border-error focus-visible:ring-error/30"
            )}
          >
            <option value="">Select move type</option>
            {moveTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.moveType && (
            <p className="text-xs text-error" role="alert">{errors.moveType.message}</p>
          )}
        </div>

        {/* Moving Date */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="qq-date" className="text-sm font-medium text-dark-text">
            Preferred Moving Date
          </Label>
          <Input
            id="qq-date"
            type="date"
            {...register("movingDate")}
            className="text-sm"
          />
        </div>

        {status === "error" && (
          <p className="text-xs text-error bg-error/5 border border-error/20 rounded-lg px-3 py-2" role="alert">
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
