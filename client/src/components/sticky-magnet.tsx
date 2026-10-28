import { useEffect, useState } from "react";
import { Zap, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/**
 * Floating lead magnet, bottom-right. Appears after the user scrolls past the
 * hero, hides itself while the newsletter section is on screen (no point
 * pointing at something already visible), and can be dismissed for the session.
 */
export function StickyMagnet() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("magnet-dismissed") === "1") setDismissed(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      const target = document.getElementById("newsletter");
      let overlapping = false;
      if (target) {
        const r = target.getBoundingClientRect();
        overlapping = r.top < window.innerHeight * 0.9 && r.bottom > 0;
      }
      setVisible(past && !overlapping);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem("magnet-dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 transition-all duration-500",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none",
      )}
      data-testid="sticky-magnet"
    >
      <div className="relative group">
        {/* gold glow */}
        <div
          className="absolute -inset-3 rounded-full bg-gold/25 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        <a
          href="#newsletter"
          className="relative flex items-center gap-3 rounded-full bg-gold hover:bg-gold-bright text-primary-foreground pl-3.5 pr-4 sm:pr-5 py-3 shadow-[0_16px_40px_-14px_rgba(201,169,97,0.85)] transition-all hover:-translate-y-0.5"
          data-testid="button-magnet"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/15 flex-shrink-0">
            <Zap className="h-4 w-4" fill="currentColor" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase leading-tight max-w-[9rem]">
            {t("magnet.text")}
          </span>
        </a>

        <button
          onClick={dismiss}
          aria-label={t("magnet.close")}
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background border border-gold/40 text-muted-foreground hover:text-gold hover:border-gold/80 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          data-testid="button-magnet-dismiss"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
