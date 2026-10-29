import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const NAV_LINKS: { href: string; key: TranslationKey; testId: string }[] = [
  { href: "#services", key: "footer.nav.services", testId: "services" },
  { href: "#methodology", key: "footer.nav.method", testId: "method" },
  { href: "#results", key: "footer.nav.results", testId: "results" },
  { href: "#faq", key: "footer.nav.faq", testId: "faq" },
  { href: "#contact", key: "footer.nav.contact", testId: "contact" },
];

const SERVICE_KEYS: TranslationKey[] = [
  "services.1.title",
  "services.2.title",
  "services.3.title",
  "services.4.title",
  "services.5.title",
  "services.6.title",
  "services.7.title",
];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer
      className="relative pt-20 pb-12 border-t border-border/60 bg-card/30"
      data-testid="footer"
    >
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="The Modern Protocols"
                className="h-12 w-12 object-contain"
              />
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.35em] text-gold uppercase">
                  The Modern
                </div>
                <div className="text-sm tracking-[0.3em] text-foreground uppercase font-medium">
                  Protocols
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-sm border border-border hover:border-gold/60 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-sm border border-border hover:border-gold/60 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-sm border border-border hover:border-gold/60 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-mono mb-6">
              Navigate
            </div>
            <ul className="space-y-3">
              {["Services", "Process", "Work", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    data-testid={`link-footer-${l.toLowerCase()}`}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-mono mb-6">
              Services
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Website Creation</li>
              <li>Brand Elevation</li>
              <li>Sales & Traffic Growth</li>
              <li>AI Video Sales Letters</li>
              <li>UGC Production</li>
              <li>Community Management</li>
              <li>Brand Exposure</li>
            </ul>
          </div>
        </div>

        <div className="gold-hairline h-px w-full mb-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div className="font-mono tracking-wider">
            © {new Date().getFullYear()} The Modern Protocols. All rights reserved.
          </div>
          <div className="font-mono tracking-[0.3em] uppercase text-gold/70">
            Unlock · Build · Scale
          </div>
        </div>
      </div>
    </footer>
  );
}
