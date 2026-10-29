import { Check, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const fits: TranslationKey[] = [
  "who.fit.1",
  "who.fit.2",
  "who.fit.3",
  "who.fit.4",
];

const notFits: TranslationKey[] = [
  "who.notfit.1",
  "who.notfit.2",
  "who.notfit.3",
  "who.notfit.4",
];

export function WhoItsFor() {
  const { t } = useI18n();
  return (
    <section
      id="who-its-for"
      className="relative py-28 md:py-36 grain"
      data-testid="section-who-its-for"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.04),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              {t("who.label")}
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            data-testid="text-who-headline"
          >
            {t("who.headline.pre")}
            <span className="gold-text italic">{t("who.headline.emphasis")}</span>
            {t("who.headline.post")}
          </h2>
        </div>

        {/* Two-column fit/not-fit */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Fit */}
          <div className="reveal premium-card glass-tile rounded-sm p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 border border-gold/30">
                <Check className="h-4 w-4 text-gold" />
              </span>
              <span className="text-[11px] tracking-[0.4em] uppercase font-mono text-gold">
                {t("who.fit.label")}
              </span>
            </div>
            <ul className="space-y-4">
              {fits.map((k, i) => (
                <li
                  key={k}
                  className="flex items-start gap-3 text-foreground/90"
                  data-testid={`fit-item-${i}`}
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="reveal reveal-delay-2 premium-card rounded-sm p-8 lg:p-10 border border-border/60 bg-card/40">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted border border-border">
                <X className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-[11px] tracking-[0.4em] uppercase font-mono text-muted-foreground">
                {t("who.notfit.label")}
              </span>
            </div>
            <ul className="space-y-4">
              {notFits.map((k, i) => (
                <li
                  key={k}
                  className="flex items-start gap-3 text-muted-foreground"
                  data-testid={`notfit-item-${i}`}
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/40 mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
