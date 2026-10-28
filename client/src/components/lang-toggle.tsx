import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, toggleLang } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
      className={
        compact
          ? "inline-flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.3em] uppercase font-mono text-muted-foreground hover:text-gold border border-border/60 hover:border-gold/50 rounded-sm transition-colors"
          : "inline-flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.3em] uppercase font-mono text-muted-foreground hover:text-gold border border-border/60 hover:border-gold/50 rounded-sm transition-colors"
      }
      data-testid="button-lang-toggle"
    >
      <Globe className="h-3.5 w-3.5" />
      <span className="flex items-baseline gap-1">
        <span
          className={
            lang === "en" ? "text-gold" : "text-muted-foreground/60"
          }
        >
          EN
        </span>
        <span className="text-muted-foreground/40">/</span>
        <span
          className={
            lang === "es" ? "text-gold" : "text-muted-foreground/60"
          }
        >
          ES
        </span>
      </span>
    </button>
  );
}
