import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/components/ui/toaster";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Website Creation",
  "Brand Elevation",
  "Sales & Traffic Growth",
  "AI Video Sales Letters",
  "UGC Production",
  "Community Management",
  "Brand Exposure",
  "Full Protocol (multiple)",
];

const BUDGETS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $30k",
  "$30k – $75k",
  "$75k+",
];

export function Contact() {
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
    onSuccess: () => {
      toast({
        title: "Inquiry received.",
        description: "We'll respond within one business day.",
        variant: "success",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong.",
        description: "Please try again or email us directly.",
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
                Contact
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
              Book your <span className="gold-text italic">strategy session.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Tell us where you're at and what you're trying to unlock. If
              you're a fit, we'll send a calendar link within one business
              day. If you're not, we'll tell you that too — and point you
              somewhere better.
            </p>

            {/* Mini trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 text-[10px] tracking-[0.25em] uppercase font-mono text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="live-dot" />
                <span className="text-gold/80">Accepting Q3/Q4</span>
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span>No-commitment</span>
              <span className="text-muted-foreground/40">·</span>
              <span>NDA-friendly</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:hello@themodernprotocols.com"
                    className="text-foreground hover:text-gold transition-colors"
                    data-testid="link-email"
                  >
                    hello@themodernprotocols.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    Locations
                  </div>
                  <div className="text-foreground">
                    Remote — Europe, USA, LATAM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    Response Time
                  </div>
                  <div className="text-foreground">Within 1 business day</div>
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
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Jane Doe"
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
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@brand.com"
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
                  Brand / Company
                </label>
                <input
                  {...register("brand")}
                  type="text"
                  placeholder="The name of your brand"
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
                    Service Interest
                  </label>
                  <select
                    {...register("service")}
                    className={cn(inputCls, errors.service && "border-destructive/60")}
                    data-testid="select-service"
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
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
                    Budget
                  </label>
                  <select
                    {...register("budget")}
                    className={cn(inputCls, errors.budget && "border-destructive/60")}
                    data-testid="select-budget"
                  >
                    <option value="">Select a range…</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
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
                  What would you like to unlock?
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us about your brand, goals, and timeline…"
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
                {mutation.isPending ? "Sending…" : "Submit Inquiry"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
