import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 border-t border-border/40 bg-card/30"
      data-testid="section-about"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 grid-bg rounded-sm opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="The Modern Protocols"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div className="absolute -inset-2 border border-gold/20 rounded-sm" />
              <div className="absolute -inset-6 border border-gold/10 rounded-sm" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
                {t("about.label")}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-8">
              {t("about.headline.line1")}
              <br />
              <span className="gold-text italic">{t("about.headline.emphasis")}</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p className="text-foreground/90 font-display italic text-xl md:text-2xl pt-4 border-l-2 border-gold/60 pl-6">
                {t("about.quote")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/60">
              <div>
                <div className="font-display text-3xl gold-text mb-1">2021</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
                  {t("about.stat1.label")}
                </div>
              </div>
              <div>
                <div className="font-display text-3xl gold-text mb-1">14</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
                  {t("about.stat2.label")}
                </div>
              </div>
              <div>
                <div className="font-display text-3xl gold-text mb-1">3</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
                  {t("about.stat3.label")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
