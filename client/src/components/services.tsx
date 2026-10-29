import {
  Globe2,
  Sparkles,
  TrendingUp,
  Clapperboard,
  Users,
  Megaphone,
  Crown,
  Package,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

type Service = {
  icon: typeof Globe2;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  deliverables: TranslationKey[];
  code: string;
};

const SERVICES: Service[] = [
  { icon: Globe2, titleKey: "services.1.title", descKey: "services.1.description", deliverables: ["services.1.d1", "services.1.d2", "services.1.d3"], code: "01" },
  { icon: Crown, titleKey: "services.2.title", descKey: "services.2.description", deliverables: ["services.2.d1", "services.2.d2", "services.2.d3"], code: "02" },
  { icon: TrendingUp, titleKey: "services.3.title", descKey: "services.3.description", deliverables: ["services.3.d1", "services.3.d2", "services.3.d3"], code: "03" },
  { icon: Clapperboard, titleKey: "services.4.title", descKey: "services.4.description", deliverables: ["services.4.d1", "services.4.d2", "services.4.d3"], code: "04" },
  { icon: Users, titleKey: "services.5.title", descKey: "services.5.description", deliverables: ["services.5.d1", "services.5.d2", "services.5.d3"], code: "05" },
  { icon: Sparkles, titleKey: "services.6.title", descKey: "services.6.description", deliverables: ["services.6.d1", "services.6.d2", "services.6.d3"], code: "06" },
  { icon: Megaphone, titleKey: "services.7.title", descKey: "services.7.description", deliverables: ["services.7.d1", "services.7.d2", "services.7.d3"], code: "07" },
  { icon: Package, titleKey: "services.8.title", descKey: "services.8.description", deliverables: ["services.8.d1", "services.8.d2", "services.8.d3"], code: "08" },
];

export function Services() {
  const { t } = useI18n();
  return (
    <section
      id="services"
      className="relative py-32 md:py-40 border-t border-border/40"
      data-testid="section-services"
    >
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              {t("services.label")}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            {t("services.headline.line1")}
            <br />
            <span className="gold-text italic">{t("services.headline.line2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("services.intro")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.code}
                className="group relative bg-background p-8 md:p-10 hover-elevate transition-colors reveal"
                data-testid={`card-service-${s.code}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-mono">
                    /{s.code}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                  {t(s.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {t(s.descKey)}
                </p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 text-xs text-foreground/70 tracking-wide"
                    >
                      <span className="h-px w-4 bg-gold/60" />
                      {t(d)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* Empty filler to keep grid clean if needed */}
          <div className="hidden lg:block bg-background p-8 md:p-10 reveal">
            <div className="h-full flex flex-col justify-between">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-mono">
                {t("services.custom.label")}
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                  {t("services.custom.title")}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-bright transition-colors"
                  data-testid="link-custom-protocol"
                >
                  {t("services.custom.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
