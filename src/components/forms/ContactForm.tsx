"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/types/forms";
import { cn } from "@/lib/utils";

const ENQUIRY_TYPES = [
  { value: "apartment", label: "Apartment Move" },
  { value: "villa", label: "Villa Move" },
  { value: "commercial", label: "Commercial Move" },
  { value: "packing", label: "Packing Service" },
  { value: "furniture", label: "Furniture Assembly" },
  { value: "tv", label: "TV Installation" },
  { value: "general", label: "General Enquiry" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      // TODO: wire to /api/contact endpoint
      await new Promise((r) => setTimeout(r, 800));
      console.log("Contact form:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="size-12 text-success" />
        <div>
          <p className="text-base font-semibold text-navy mb-1">Message Sent</p>
          <p className="text-sm text-muted-foreground">
            Thank you. A member of our team will contact you shortly.
          </p>
        </div>
        <button onClick={() => setStatus("idle")} className="text-sm text-brand hover:underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="cf-name">Full Name <span className="text-error">*</span></Label>
          <Input id="cf-name" placeholder="Your name" {...register("name")}
            className={cn(errors.name && "border-error")} />
          {errors.name && <p className="text-xs text-error" role="alert">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="cf-phone">Phone <span className="text-error">*</span></Label>
          <Input id="cf-phone" type="tel" placeholder="+971 XX XXX XXXX" {...register("phone")}
            className={cn(errors.phone && "border-error")} />
          {errors.phone && <p className="text-xs text-error" role="alert">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="cf-email">Email Address</Label>
        <Input id="cf-email" type="email" placeholder="your@email.com" {...register("email")} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="cf-type">Enquiry Type</Label>
        <select id="cf-type" {...register("enquiryType")}
          className="flex h-10 w-full rounded-[12px] border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2">
          <option value="">Select enquiry type</option>
          {ENQUIRY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="cf-message">Message <span className="text-error">*</span></Label>
        <Textarea id="cf-message" placeholder="Tell us about your enquiry." rows={4}
          {...register("message")} className={cn(errors.message && "border-error")} />
        {errors.message && <p className="text-xs text-error" role="alert">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-xs text-error bg-error/5 border border-error/20 rounded-lg px-3 py-2" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <><Loader2 className="size-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="size-4" /> Send Message</>
        )}
      </Button>
    </form>
  );
}
