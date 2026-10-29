import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/components/ui/toaster";
import { ArrowRight, Check, Sparkles, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { trackPixel } from "@/lib/pixel";
import type { TranslationKey } from "@/lib/translations";

const STORAGE_KEY = "tmp.popup.seen";
const OPEN_DELAY_MS = 3500;

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

const BENEFIT_KEYS: TranslationKey[] = [
  "popup.benefit1",
  "popup.benefit2",
  "popup.benefit3",
];

export function NewsletterPopup() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Show once per visitor, shortly after landing.
  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const markSeen = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore — private mode / storage disabled
    }
  };

  const close = () => {
    markSeen();
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 220);
  };

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
      trackPixel("Lead", {
        content_name: "The Modern Protocols Weekly",
        content_category: variables?.businessType || "Unspecified",
        source: "popup",
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
      close();
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

  if (!open) return null;

  const inputCls =
    "w-full bg-input/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 transition-colors";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
        closing ? "animate-fade-out" : "animate-fade-in-fast",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-headline"
      data-testid="modal-newsletter-popup"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={close}
        aria-hidden="true"
        data-testid="overlay-newsletter-popup"
      />

      {/* Card */}
      <div
        ref={cardRef}
        className={cn(
          "relative w-full max-w-lg my-auto rounded-sm bg-[#0D0D0D] gold-border shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)] overflow-hidden",
          closing ? "" : "animate-modal-in",
        )}
      >
        {/* Ambient gold glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[260px] opacity-[0.22] blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse at top, #D4AF37 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label={t("popup.close")}
          className="absolute top-3.5 right-3.5 z-10 h-8 w-8 rounded-full border border-border/70 bg-background/60 text-muted-foreground hover:text-gold hover:border-gold/60 flex items-center justify-center transition-colors"
          data-testid="button-close-popup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-7 sm:p-9">
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/[0.06] mb-6">
            <Sparkles className="h-3 w-3 text-gold" />
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-gold font-mono"
              data-testid="text-popup-tag"
            >
              {t("popup.tag")}
            </span>
          </div>

          {/* Headline */}
          <h2
            id="popup-headline"
            className="font-display text-3xl sm:text-4xl tracking-tight leading-[1.08] mb-4"
            data-testid="text-popup-headline"
          >
            {t("popup.headline.pre")}
            <span className="gold-text italic">
              {t("popup.headline.emphasis")}
            </span>
          </h2>

          {/* Sub */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
            {t("popup.sub")}
          </p>

          {/* Benefits */}
          <ul className="space-y-2.5 mb-7" data-testid="list-popup-benefits">
            {BENEFIT_KEYS.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-sm bg-gold/15 border border-gold/40">
                  <Check className="h-3 w-3 text-gold" />
                </span>
                <span className="text-sm text-foreground/90 leading-relaxed">
                  {t(key)}
                </span>
              </li>
            ))}
          </ul>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-left"
            data-testid="form-newsletter-popup"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                  {t("newsletter.form.name")}
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  autoComplete="given-name"
                  placeholder={t("newsletter.form.name.placeholder")}
                  className={cn(
                    inputCls,
                    errors.firstName && "border-destructive/60",
                  )}
                  data-testid="input-popup-name"
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
                  className={cn(
                    inputCls,
                    errors.email && "border-destructive/60",
                  )}
                  data-testid="input-popup-email"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                {t("newsletter.form.business")}
              </label>
              <select
                {...register("businessType")}
                className={cn(
                  inputCls,
                  errors.businessType && "border-destructive/60",
                )}
                data-testid="select-popup-business"
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
              data-testid="button-popup-submit"
            >
              {mutation.isPending ? t("popup.sending") : t("popup.submit")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Footer note */}
          <div
            className="flex items-center justify-center gap-2.5 mt-5 text-[10px] tracking-[0.22em] uppercase font-mono text-muted-foreground"
            data-testid="text-popup-note"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-gold/70" />
            <span>{t("popup.note")}</span>
          </div>

          {/* Soft dismiss */}
          <button
            type="button"
            onClick={close}
            className="block mx-auto mt-4 text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            data-testid="button-popup-dismiss"
          >
            {t("popup.dismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
