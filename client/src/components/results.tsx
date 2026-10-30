/**
 * Results — case-study layout: [Context] → [Outcome %] → [Testimonial].
 * Numbers are placeholders flagged with the indicator dot. Real metrics
 * land here once the client confirms them.
 */
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

type Study = {
  brand: string;
  person: string;
  href: string;
  metric: string;
  categoryKey: TranslationKey;
  contextKey: TranslationKey;
  metricLabelKey: TranslationKey;
  subKey: TranslationKey;
  quoteKey: TranslationKey;
  roleKey: TranslationKey;
};

const studies: Study[] = [
  {
    brand: "Erwin Pérez Media",
    person: "Erwin Pérez",
    href: "https://www.erwinperezmedia.com",
    metric: "3.4×",
    categoryKey: "results.1.category",
    contextKey: "results.1.context",
    metricLabelKey: "results.1.metricLabel",
    subKey: "results.1.sub",
    quoteKey: "results.1.quote",
    roleKey: "results.1.role",
  },
  {
    brand: "The Little Seamstress",
    person: "The Little Seamstress",
    href: "https://www.thelittleseamstress.com",
    metric: "+218%",
    categoryKey: "results.2.category",
    contextKey: "results.2.context",
    metricLabelKey: "results.2.metricLabel",
    subKey: "results.2.sub",
    quoteKey: "results.2.quote",
    roleKey: "results.2.role",
  },
  {
    brand: "Sexo Sentido",
    person: "Sexo Sentido",
    href: "https://sexosentido.us",
    metric: "+412%",
    categoryKey: "results.3.category",
    contextKey: "results.3.context",
    metricLabelKey: "results.3.metricLabel",
    subKey: "results.3.sub",
    quoteKey: "results.3.quote",
    roleKey: "results.3.role",
  },
];

export function Results() {
  const { t } = useI18n();
  return (
    <section
      id="results"
      className="relative py-28 md:py-36 bg-black/30 grain border-y border-gold/10"
      data-testid="section-results"
    >
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              {t("results.label")}
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            data-testid="text-results-headline"
          >
            {t("results.headline.pre")}
            <span className="gold-text italic">{t("results.headline.emphasis")}</span>
            {t("results.headline.post")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {t("results.intro")}
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-6 lg:space-y-8">
          {studies.map((s, i) => (
            <a
              key={s.brand}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} premium-card glass-tile rounded-sm p-8 lg:p-10 grid lg:grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-12 items-center group cursor-pointer block`}
              data-testid={`case-study-${i}`}
            >
              {/* Context */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold">
                    {t("results.case")} · 0{i + 1}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-muted-foreground">
                    {t(s.categoryKey)}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-3 tracking-tight">
                  {s.brand}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {t(s.contextKey)}
                </p>
              </div>

              {/* Metric */}
              <div className="lg:border-x lg:border-gold/15 lg:px-10 py-2 text-center lg:text-left">
                <div className="font-display text-5xl lg:text-6xl gold-text leading-none mb-2">
                  {s.metric}
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-foreground mb-1">
                  {t(s.metricLabelKey)}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                  {t(s.subKey)}
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <p className="text-foreground/90 italic leading-relaxed mb-4 text-base lg:text-lg">
                  "{t(s.quoteKey)}"
                </p>
                <div className="flex items-baseline gap-3 text-[10px] tracking-[0.3em] uppercase font-mono">
                  <span className="text-gold">— {s.person}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-muted-foreground">{t(s.roleKey)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground/60 mt-10 text-center reveal">
          {t("results.footnote")}
        </p>
      </div>
    </section>
  );
}
