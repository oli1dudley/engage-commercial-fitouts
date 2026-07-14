"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { tvInstallationSchema, type TVInstallationValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const TV_SERVICES = [
  { value: "tv-mounting", label: "TV Mounting" },
  { value: "tv-removal", label: "TV Removal" },
  { value: "tv-reinstallation", label: "TV Reinstallation" },
  { value: "tv-relocation", label: "TV Relocation" },
  { value: "office-screen", label: "Office Screen Installation" },
];

const TV_SIZES = [
  { value: "under-40", label: 'Under 40"' },
  { value: "40-55", label: '40" – 55"' },
  { value: "55-75", label: '55" – 75"' },
  { value: "75-plus", label: '75"+' },
];

const EXTRA_OPTIONS = [
  { value: "wall-mount-available", label: "Wall Mount Already Available" },
  { value: "being-moved", label: "TV Being Moved To New Property" },
  { value: "multiple-screens", label: "Multiple Screens" },
];

interface TVInstallationFormProps {
  headline?: string;
  className?: string;
}

export default function TVInstallationForm({
  headline = "Get Your TV Installation Quote",
  className,
}: TVInstallationFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TVInstallationValues>({
    resolver: zodResolver(tvInstallationSchema),
    defaultValues: { options: [] },
  });

  async function onSubmit(data: TVInstallationValues) {
    setStatus("loading");
    try {
      // TODO: wire to /api/quote endpoint
      await new Promise((r) => setTimeout(r, 800));
      console.log("TV installation quote:", data);
      setStatus("success");
      reset({ options: [] });
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
            Thank you. Our team will be in touch shortly with your TV installation quote.
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

  const selectClass = (hasError: boolean) =>
    cn(
      "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      hasError && "border-error"
    );

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
          <Label htmlFor="tv-name">
            Full Name <span className="text-error">*</span>
          </Label>
          <Input
            id="tv-name"
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
          <Label htmlFor="tv-phone">
            Phone Number <span className="text-error">*</span>
          </Label>
          <Input
            id="tv-phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            {...register("phone")}
            className={cn(errors.phone && "border-error")}
          />
          {errors.phone && (
            <p className="text-xs text-error" role="alert">{errors.phone.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="tv-location">
            Location <span className="text-error">*</span>
          </Label>
          <Input
            id="tv-location"
            placeholder="e.g. Downtown Dubai"
            {...register("location")}
            className={cn(errors.location && "border-error")}
          />
          {errors.location && (
            <p className="text-xs text-error" role="alert">{errors.location.message}</p>
          )}
        </div>

        {/* Service + TV Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tv-service">
              Service Required <span className="text-error">*</span>
            </Label>
            <select
              id="tv-service"
              {...register("serviceRequired")}
              className={selectClass(!!errors.serviceRequired)}
            >
              <option value="">Select service</option>
              {TV_SERVICES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="text-xs text-error" role="alert">{errors.serviceRequired.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tv-size">
              TV Size <span className="text-error">*</span>
            </Label>
            <select
              id="tv-size"
              {...register("tvSize")}
              className={selectClass(!!errors.tvSize)}
            >
              <option value="">Select size</option>
              {TV_SIZES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.tvSize && (
              <p className="text-xs text-error" role="alert">{errors.tvSize.message}</p>
            )}
          </div>
        </div>

        {/* Extra Options */}
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-medium text-dark-text mb-1">Additional Details</legend>
          {EXTRA_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                value={opt.value}
                {...register("options")}
                className="size-4 rounded border-input accent-brand cursor-pointer"
              />
              <span className="text-sm text-dark-text group-hover:text-brand transition-colors">
                {opt.label}
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
