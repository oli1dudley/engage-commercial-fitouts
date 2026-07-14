"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { partnershipSchema, type PartnershipValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const SELECT_CLASS =
  "flex h-10 w-full rounded-[12px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export default function PartnershipForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnershipValues>({
    resolver: zodResolver(partnershipSchema),
  });

  async function onSubmit(data: PartnershipValues) {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 800));
      console.log("Partnership enquiry:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <CheckCircle2 className="size-16 text-success" />
        <div>
          <h3 className="text-xl font-bold text-navy mb-2">Enquiry Received</h3>
          <p className="text-muted-foreground max-w-md">
            Thank you for your enquiry. Our team will review your message and be in touch as soon as possible.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-brand hover:underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pf-name">Name <span className="text-error">*</span></Label>
          <Input
            id="pf-name"
            placeholder="Your full name"
            {...register("name")}
            className={cn(errors.name && "border-error")}
          />
          {errors.name && <p className="text-xs text-error" role="alert">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pf-company">Company Name <span className="text-error">*</span></Label>
          <Input
            id="pf-company"
            placeholder="Your company"
            {...register("companyName")}
            className={cn(errors.companyName && "border-error")}
          />
          {errors.companyName && <p className="text-xs text-error" role="alert">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pf-role">Role / Position <span className="text-error">*</span></Label>
          <Input
            id="pf-role"
            placeholder="e.g. Property Manager"
            {...register("role")}
            className={cn(errors.role && "border-error")}
          />
          {errors.role && <p className="text-xs text-error" role="alert">{errors.role.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pf-phone">Phone Number <span className="text-error">*</span></Label>
          <Input
            id="pf-phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            {...register("phone")}
            className={cn(errors.phone && "border-error")}
          />
          {errors.phone && <p className="text-xs text-error" role="alert">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pf-email">Email Address <span className="text-error">*</span></Label>
        <Input
          id="pf-email"
          type="email"
          placeholder="your@company.com"
          {...register("email")}
          className={cn(errors.email && "border-error")}
        />
        {errors.email && <p className="text-xs text-error" role="alert">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pf-business-type">Business Type <span className="text-error">*</span></Label>
          <select
            id="pf-business-type"
            {...register("businessType")}
            className={cn(SELECT_CLASS, errors.businessType && "border-error")}
          >
            <option value="">Select business type</option>
            <option value="Property management company">Property management company</option>
            <option value="Real estate agency">Real estate agency</option>
            <option value="Relocation company">Relocation company</option>
            <option value="Developer">Developer</option>
            <option value="Landlord / serviced apartment operator">Landlord / serviced apartment operator</option>
            <option value="Commercial property team">Commercial property team</option>
            <option value="Other">Other</option>
          </select>
          {errors.businessType && <p className="text-xs text-error" role="alert">{errors.businessType.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pf-moving-support">Expected moving support needed</Label>
          <select id="pf-moving-support" {...register("movingSupport")} className={SELECT_CLASS}>
            <option value=""></option>
            <option value="Apartment moving for tenants/clients">Apartment moving for tenants/clients</option>
            <option value="Villa moving for tenants/clients">Villa moving for tenants/clients</option>
            <option value="Commercial / office moves">Commercial / office moves</option>
            <option value="Move coordination and packing support">Move coordination and packing support</option>
            <option value="Multiple service types">Multiple service types</option>
            <option value="Not sure yet">Not sure yet</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pf-message">Message / Additional Information</Label>
        <Textarea
          id="pf-message"
          placeholder="Tell us about your business and how we might work together"
          rows={4}
          {...register("message")}
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-error bg-error/5 border border-error/20 rounded-lg px-3 py-2" role="alert">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <><Loader2 className="size-4 animate-spin" /> Sending…</>
        ) : (
          <>Send Partnership Enquiry <ArrowRight className="size-4" /></>
        )}
      </Button>
    </form>
  );
}
