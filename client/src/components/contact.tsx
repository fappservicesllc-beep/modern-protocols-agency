import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/components/ui/toaster";
import { MessageSquare, MapPin, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { trackPixel } from "@/lib/pixel";
import type { TranslationKey } from "@/lib/translations";

const SERVICE_KEYS: TranslationKey[] = [
  "contact.service.1",
  "contact.service.2",
  "contact.service.3",
  "contact.service.4",
  "contact.service.5",
  "contact.service.6",
  "contact.service.7",
  "contact.service.8",
];

const BUDGET_KEYS: TranslationKey[] = [
  "contact.budget.1",
  "contact.budget.2",
  "contact.budget.3",
  "contact.budget.4",
  "contact.budget.5",
];

// Canonical values sent to the backend/DB (English) — labels come from t().
const SERVICE_VALUES = [
  "Website Creation",
  "Brand Elevation",
  "Sales & Traffic Growth",
  "AI Video Sales Letters",
  "UGC Production",
  "Community Management",
  "Brand Exposure",
  "Full Protocol (multiple)",
];

const BUDGET_VALUES = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $30k",
  "$30k – $75k",
  "$75k+",
];

export function Contact() {
  const { t } = useI18n();
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      brand: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;

  const mutation = useMutation({
    mutationFn: (data: InsertInquiry) =>
      apiRequest("/api/inquiries", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: (_res, variables) => {
      // Meta Pixel: strategy-session request => high-intent Lead + Contact
      trackPixel("Lead", {
        content_name: "Strategy Session Request",
        content_category: variables?.service || "Unspecified",
        source: "contact",
      });
      trackPixel("Contact", {
        content_name: "Strategy Session Request",
      });
      toast({
        title: t("contact.toast.success.title"),
        description: t("contact.toast.success.desc"),
        variant: "success",
      });
      reset();
    },
    onError: () => {
      toast({
        title: t("contact.toast.error.title"),
        description: t("contact.toast.error.desc"),
        variant: "error",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => mutation.mutate(data);

  const inputCls =
    "w-full bg-input/60 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 transition-colors";

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 border-t border-border/40"
      data-testid="section-contact"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: copy + info */}
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-mono">
                {t("contact.label")}
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
              {t("contact.headline.pre")}<span className="gold-text italic">{t("contact.headline.emphasis")}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              {t("contact.intro")}
            </p>

            {/* Mini trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 text-[10px] tracking-[0.25em] uppercase font-mono text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="live-dot" />
                <span className="text-gold/80">{t("contact.trust.accepting")}</span>
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span>{t("contact.trust.tag1")}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{t("contact.trust.tag2")}</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    {t("contact.info.email")}
                  </div>
                  <div className="text-foreground" data-testid="text-contact-method">
                    {t("contact.info.email.value")}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-xs">
                    {t("contact.info.email.note")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    {t("contact.info.locations")}
                  </div>
                  <div className="text-foreground">
                    {t("contact.info.locations.value")}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    {t("contact.info.response")}
                  </div>
                  <div className="text-foreground">{t("contact.info.response.value")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card/40 gold-border rounded-sm p-8 md:p-10"
              data-testid="form-inquiry"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder={t("contact.form.name.placeholder")}
                    className={cn(inputCls, errors.name && "border-destructive/60")}
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1.5">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={t("contact.form.email.placeholder")}
                    className={cn(inputCls, errors.email && "border-destructive/60")}
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                  {t("contact.form.brand")}
                </label>
                <input
                  {...register("brand")}
                  type="text"
                  placeholder={t("contact.form.brand.placeholder")}
                  className={cn(inputCls, errors.brand && "border-destructive/60")}
                  data-testid="input-brand"
                />
                {errors.brand && (
                  <p className="text-xs text-destructive mt-1.5">
                    {errors.brand.message}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                    {t("contact.form.service")}
                  </label>
                  <select
                    {...register("service")}
                    className={cn(inputCls, errors.service && "border-destructive/60")}
                    data-testid="select-service"
                  >
                    <option value="">{t("contact.form.service.placeholder")}</option>
                    {SERVICE_VALUES.map((val, idx) => (
                      <option key={val} value={val}>
                        {t(SERVICE_KEYS[idx])}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-destructive mt-1.5">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                    {t("contact.form.budget")}
                  </label>
                  <select
                    {...register("budget")}
                    className={cn(inputCls, errors.budget && "border-destructive/60")}
                    data-testid="select-budget"
                  >
                    <option value="">{t("contact.form.budget.placeholder")}</option>
                    {BUDGET_VALUES.map((val, idx) => (
                      <option key={val} value={val}>
                        {t(BUDGET_KEYS[idx])}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-xs text-destructive mt-1.5">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder={t("contact.form.message.placeholder")}
                  className={cn(inputCls, "resize-none", errors.message && "border-destructive/60")}
                  data-testid="textarea-message"
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || mutation.isPending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-sm font-medium"
                data-testid="button-submit-inquiry"
              >
                {mutation.isPending ? t("contact.form.sending") : t("contact.form.submit")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
