/**
 * Slim announcement bar pinned above the navigation.
 * Deep gold background, black text — the entire bar is clickable and
 * smooth-scrolls to the Real Estate Edition section (#real-estate).
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AnnouncementBar() {
  const { t } = useI18n();
  const ref = useRef<HTMLAnchorElement>(null);

  // Keep the nav offset (--announce-h) in sync with the real bar height,
  // so it stays correct when the text wraps on small screens.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () =>
      document.documentElement.style.setProperty(
        "--announce-h",
        `${el.offsetHeight}px`,
      );
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  const scrollToRealEstate = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("real-estate");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      ref={ref}
      href="#real-estate"
      onClick={scrollToRealEstate}
      className="group fixed top-0 inset-x-0 z-[60] flex items-center justify-center gap-x-2 gap-y-1 flex-wrap px-4 py-2.5 bg-gold hover:bg-gold-bright transition-colors text-[#0D0D0D]"
      data-testid="bar-announcement"
    >
      <span className="text-[10px] tracking-[0.35em] uppercase font-semibold bg-[#0D0D0D] text-gold px-2.5 py-1 rounded-sm">
        {t("announce.label")}
      </span>
      <span
        className="text-xs md:text-sm font-medium tracking-wide text-center"
        data-testid="text-announcement"
      >
        <span className="font-semibold">
          {t("announce.product")}
          <sup className="text-[0.6em] font-semibold align-super ml-[1px] tracking-normal">
            ™
          </sup>
        </span>{" "}
        {t("announce.text")}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold underline underline-offset-4 decoration-[#0D0D0D]/40 group-hover:decoration-[#0D0D0D]">
        {t("announce.cta")}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
