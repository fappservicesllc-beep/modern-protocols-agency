import { AlertTriangle, TrendingDown, Clock, EyeOff } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const pains: { icon: typeof TrendingDown; titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { icon: TrendingDown, titleKey: "problem.1.title", bodyKey: "problem.1.body" },
  { icon: EyeOff, titleKey: "problem.2.title", bodyKey: "problem.2.body" },
  { icon: Clock, titleKey: "problem.3.title", bodyKey: "problem.3.body" },
  { icon: AlertTriangle, titleKey: "problem.4.title", bodyKey: "problem.4.body" },
];

export function Problem() {
  const { t } = useI18n();
  return (
    <section
      id="problem"
      className="relative py-28 md:py-36 bg-black/30 grain border-y border-gold/10"
      data-testid="section-problem"
    >
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              {t("problem.label")}
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            data-testid="text-problem-headline"
          >
            {t("problem.headline.line1.pre")}
            <span className="gold-text italic">{t("problem.headline.emphasis")}</span>
            {t("problem.headline.line1.post")}
            <br />
            {t("problem.headline.line2.pre")}
            <span className="text-foreground">{t("problem.headline.line2.word")}</span>
            {t("problem.headline.line2.post")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {t("problem.intro")}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.titleKey}
                className={`reveal reveal-delay-${i + 1} premium-card glass-tile rounded-sm p-7 lg:p-8`}
                data-testid={`pain-card-${i}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl mb-2.5 tracking-tight">
                      {t(p.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(p.bodyKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
