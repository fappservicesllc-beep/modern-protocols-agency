import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

type T = { quoteKey: TranslationKey; authorKey: TranslationKey; roleKey: TranslationKey };

const TESTIMONIALS: T[] = [
  { quoteKey: "testimonials.1.quote", authorKey: "testimonials.1.author", roleKey: "testimonials.1.role" },
  { quoteKey: "testimonials.2.quote", authorKey: "testimonials.2.author", roleKey: "testimonials.2.role" },
  { quoteKey: "testimonials.3.quote", authorKey: "testimonials.3.author", roleKey: "testimonials.3.role" },
];

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section
      className="relative py-32 md:py-40 border-t border-border/40"
      data-testid="section-testimonials"
    >
      <div className="container">
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              {t("testimonials.label")}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
            {t("testimonials.headline.pre")}<span className="gold-text italic">{t("testimonials.headline.emphasis")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/40">
          {TESTIMONIALS.map((tm, i) => (
            <figure
              key={i}
              className="bg-background p-10 md:p-12 flex flex-col justify-between reveal"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="h-8 w-8 text-gold/60 mb-6" />
              <blockquote className="font-display text-xl md:text-2xl leading-snug text-foreground/95 mb-8">
                "{t(tm.quoteKey)}"
              </blockquote>
              <figcaption>
                <div className="text-sm font-medium text-foreground">
                  {t(tm.authorKey)}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide mt-1">
                  {t(tm.roleKey)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
