import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { DashboardMock } from "./dashboard-mock";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg noise pt-32 pb-20"
      data-testid="section-hero"
    >
      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <span className="live-dot" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold font-mono">
                {t("hero.eyebrow")}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-7 animate-fade-up opacity-0"
              style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
              data-testid="text-hero-headline"
            >
              {t("hero.headline.line1")}
              <br />
              <span className="gold-text italic">{t("hero.headline.emphasis")}</span>
              {t("hero.headline.line3") && (
                <>
                  <br />
                  {t("hero.headline.line3")}
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-9 leading-relaxed animate-fade-up opacity-0"
              style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
              data-testid="text-hero-sub"
            >
              {t("hero.sub.pre")}
              <span className="text-foreground">{t("hero.sub.emphasis")}</span>
              {t("hero.sub.post")}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "650ms", animationFillMode: "forwards" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_10px_30px_-10px_rgba(201,169,97,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(201,169,97,0.7)] hover:-translate-y-0.5"
                data-testid="button-hero-primary"
              >
                <Calendar className="h-4 w-4" />
                {t("hero.cta.primary")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-foreground border border-gold/30 hover:border-gold/70 hover:bg-gold/5 transition-all rounded-sm font-medium"
                data-testid="button-hero-secondary"
              >
                {t("hero.cta.secondary")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Social Proof pill */}
            <a
              href="#newsletter"
              className="group inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 max-w-xl mb-8 pl-4 pr-3 py-2.5 rounded-full bg-background/60 backdrop-blur-md border border-gold/30 hover:border-gold/60 hover:bg-gold/[0.06] transition-all shadow-[0_8px_24px_-14px_rgba(201,169,97,0.5)] animate-fade-up opacity-0"
              style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
              data-testid="badge-social-proof"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground leading-none">
                {t("hero.social.text")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gold font-medium leading-none whitespace-nowrap">
                {t("hero.social.cta")}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            {/* Trust Bar */}
            <div
              className="w-full max-w-xl animate-fade-up opacity-0"
              style={{ animationDelay: "850ms", animationFillMode: "forwards" }}
              data-testid="trust-bar"
            >
              <div className="glass-tile rounded-sm px-5 py-4">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground/90 italic leading-relaxed mb-2">
                      {t("hero.trust.quote")}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                      <span className="text-gold/80">{t("hero.trust.author")}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{t("hero.trust.tag1")}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{t("hero.trust.tag2")}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{t("hero.trust.tag3")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — dashboard mock */}
          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
          >
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
