import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { LangToggle } from "./lang-toggle";
import type { TranslationKey } from "@/lib/translations";

const LINKS: { href: string; key: TranslationKey; testId: string }[] = [
  { href: "#methodology", key: "nav.method", testId: "method" },
  { href: "#services", key: "nav.services", testId: "services" },
  { href: "#results", key: "nav.results", testId: "results" },
  { href: "#faq", key: "nav.faq", testId: "faq" },
  { href: "#contact", key: "nav.contact", testId: "contact" },
];

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-[var(--announce-h,44px)] inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent",
      )}
      data-testid="nav-header"
    >
      <div className="container flex items-center justify-between h-20">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          data-testid="link-home"
        >
          <img
            src="/logo.png"
            alt="The Modern Protocols"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight hidden sm:block">
            <div className="text-[10px] tracking-[0.35em] text-gold uppercase">
              The Modern
            </div>
            <div className="text-sm tracking-[0.3em] text-foreground uppercase font-medium">
              Protocols
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors rounded hover-elevate"
              data-testid={`link-${l.testId}`}
            >
              {t(l.key)}
            </a>
          ))}
          <a
            href="#newsletter"
            className="group relative flex items-center gap-2 px-4 py-2 text-sm tracking-wide text-gold/90 hover:text-gold transition-colors rounded hover-elevate"
            data-testid="link-weekly"
          >
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            {t("nav.weekly")}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_8px_20px_-10px_rgba(201,169,97,0.5)] hover:-translate-y-0.5"
            data-testid="button-book-call-nav"
          >
            {t("nav.cta")}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangToggle />
          <button
            className="p-2 text-foreground hover-elevate rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          data-testid="mobile-menu"
        >
          <div className="container py-6 flex flex-col gap-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wider text-muted-foreground hover:text-gold border-b border-border/40"
                data-testid={`link-mobile-${l.testId}`}
              >
                {t(l.key)}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              className="py-3 flex items-center gap-2 text-sm tracking-wider text-gold border-b border-border/40"
              data-testid="link-mobile-weekly"
            >
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              {t("nav.weekly")}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center px-5 py-3 text-xs tracking-[0.2em] uppercase text-primary-foreground bg-gold rounded-sm font-medium"
              data-testid="button-book-call-mobile"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
