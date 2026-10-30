import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const faqs: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: "faq.1.q", aKey: "faq.1.a" },
  { qKey: "faq.2.q", aKey: "faq.2.a" },
  { qKey: "faq.3.q", aKey: "faq.3.a" },
  { qKey: "faq.4.q", aKey: "faq.4.a" },
];

function Item({
  q,
  a,
  i,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  i: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="reveal premium-card glass-tile rounded-sm overflow-hidden"
      data-testid={`faq-item-${i}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-6 lg:p-7 flex items-start justify-between gap-6 group"
        data-testid={`faq-toggle-${i}`}
        aria-expanded={open}
      >
        <span className="font-display text-lg lg:text-xl tracking-tight leading-snug pr-4">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all group-hover:bg-gold/10 group-hover:border-gold/60">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 lg:px-7 pb-7 pt-1">
            <div className="h-px w-full bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mb-5" />
            <p className="text-muted-foreground leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 grain"
      data-testid="section-faq"
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              {t("faq.label")}
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight"
            data-testid="text-faq-headline"
          >
            {t("faq.headline.pre")}<span className="gold-text italic">{t("faq.headline.emphasis")}</span>{t("faq.headline.post")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <Item
              key={i}
              i={i}
              q={t(f.qKey)}
              a={t(f.aKey)}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center reveal">
          <p className="text-muted-foreground mb-5">
            {t("faq.followup")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_10px_30px_-10px_rgba(201,169,97,0.5)] hover:-translate-y-0.5"
            data-testid="button-faq-cta"
          >
            {t("faq.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
