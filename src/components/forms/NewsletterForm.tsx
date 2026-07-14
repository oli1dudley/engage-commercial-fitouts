"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, type NewsletterValues } from "@/types/forms";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(data: NewsletterValues) {
    setStatus("loading");
    try {
      // TODO: wire to Mailchimp / ConvertKit / Brevo
      await new Promise((r) => setTimeout(r, 600));
      console.log("Newsletter:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-white">
        <CheckCircle2 className="size-5 text-success shrink-0" />
        You&apos;re subscribed. Moving tips coming your way.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Your email address"
          {...register("email")}
          aria-invalid={!!errors.email}
          className="h-11 rounded-[12px] bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/50"
        />
        {errors.email && (
          <p className="text-xs text-error mt-1" role="alert">{errors.email.message}</p>
        )}
      </div>
      <Button type="submit" variant="primary" size="md" disabled={status === "loading"} className="shrink-0">
        {status === "loading" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <ArrowRight className="size-4" />
        )}
      </Button>
    </form>
  );
}
