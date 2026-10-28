import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/components/ui/toaster";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { trackPixel } from "@/lib/pixel";
import type { TranslationKey } from "@/lib/translations";

// Canonical values stored in the DB (English) — labels come from t().
const BUSINESS_VALUES = [
  "Real Estate",
  "Healthcare",
  "E-commerce",
  "Marketing",
  "Other",
];

const BUSINESS_KEYS: TranslationKey[] = [
  "newsletter.business.1",
  "newsletter.business.2",
  "newsletter.business.3",
  "newsletter.business.4",
  "newsletter.business.5",
];

export function Newsletter() {
  const { t } = useI18n();

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { firstName: "", email: "", businessType: "" },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const mutation = useMutation({
    mutationFn: (data: InsertSubscriber) =>
      apiRequest("/api/subscribers", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: (_res, variables) => {
      // Meta Pixel: newsletter opt-in => Lead + Subscribe
      trackPixel("Lead", {
        content_name: "The Modern Protocols Weekly",
        content_category: variables?.businessType || "Unspecified",
        source: "newsletter",
      });
      trackPixel("Subscribe", {
        content_name: "The Modern Protocols Weekly",
        currency: "USD",
        value: 0,
      });
      toast({
        title: t("newsletter.toast.success.title"),
        description: t("newsletter.toast.success.desc"),
        variant: "success",
      });
      reset();
    },
    onError: () => {
      toast({
        title: t("newsletter.toast.error.title"),
        description: t("newsletter.toast.error.desc"),
        variant: "error",
      });
    },
  });

  const onSubmit = (data: InsertSubscriber) => mutation.mutate(data);

  const inputCls =
    "w-full bg-input/50 border border-border rounded-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 transition-colors";

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden py-28 md:py-36 bg-[#0D0D0D] border-t border-b border-border/40"
      data-testid="section-newsletter"
    >
      {/* Hairline gold accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* Centered ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full opacity-[0.16] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #C9A961 0%, rgba(201,169,97,0.35) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[420px] h-[220px] opacity-[0.2] blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse at top, #D4AF37 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center reveal">
          {/* Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/[0.06] mb-8">
            <Mail className="h-3 w-3 text-gold" />
            <span
              className="text-[10px] tracking-[0.32em] uppercase text-gold font-mono"
              data-testid="text-newsletter-label"
            >
              {t("newsletter.label")}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            {t("newsletter.headline.pre")}
            <span className="gold-text italic">
              {t("newsletter.headline.emphasis")}
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            {t("newsletter.sub")}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-left bg-card/40 gold-border rounded-sm p-7 md:p-9 backdrop-blur-sm"
            data-testid="form-newsletter"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                  {t("newsletter.form.name")}
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  autoComplete="given-name"
                  placeholder={t("newsletter.form.name.placeholder")}
                  className={cn(inputCls, errors.firstName && "border-destructive/60")}
                  data-testid="input-newsletter-name"
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive mt-1.5">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                  {t("newsletter.form.email")}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  placeholder={t("newsletter.form.email.placeholder")}
                  className={cn(inputCls, errors.email && "border-destructive/60")}
                  data-testid="input-newsletter-email"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-7">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                {t("newsletter.form.business")}
              </label>
              <select
                {...register("businessType")}
                className={cn(inputCls, errors.businessType && "border-destructive/60")}
                data-testid="select-newsletter-business"
              >
                <option value="">
                  {t("newsletter.form.business.placeholder")}
                </option>
                {BUSINESS_VALUES.map((val, idx) => (
                  <option key={val} value={val}>
                    {t(BUSINESS_KEYS[idx])}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="text-xs text-destructive mt-1.5">
                  {errors.businessType.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground bg-gold hover:bg-gold-bright disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-sm shadow-[0_0_40px_-12px_rgba(201,169,97,0.65)]"
              data-testid="button-newsletter-submit"
            >
              {mutation.isPending
                ? t("newsletter.form.sending")
                : t("newsletter.form.submit")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Footer note */}
          <div
            className="flex items-center justify-center gap-2.5 mt-6 text-[10px] tracking-[0.22em] uppercase font-mono text-muted-foreground"
            data-testid="text-newsletter-note"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-gold/70" />
            <span>{t("newsletter.note")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
