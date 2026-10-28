/**
 * Agent OS™ — conversion-focused product showcase.
 * Two-column split: product video mockup (left) + persuasive copy + gold CTA (right).
 * Pure black elevated backdrop so the gold accents pop, matching the
 * black & gold mockup aesthetic. Gold tokens (#C9A961 / #D4AF37) are
 * identical to the site's primary CTA gold, so the button matches exactly.
 */
import { useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { trackPixel } from "@/lib/pixel";
import { Check, ArrowRight, Volume2, VolumeX } from "lucide-react";

const CHECKS = ["realestate.check1", "realestate.check2", "realestate.check3"] as const;

export function RealEstate() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) void video.play().catch(() => {});
  };

  return (
    <section
      id="real-estate"
      className="relative py-28 md:py-36 overflow-hidden border-y border-gold/10"
      style={{ backgroundColor: "#0D0D0D" }}
      data-testid="section-real-estate"
    >
      {/* Ambient gold glow to make the mockup feel lit */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — product video mockup */}
          <div className="relative reveal" data-testid="image-real-estate-wrap">
            {/* Gold halo behind the mockup */}
            <div className="absolute inset-0 -m-6 rounded-sm bg-gradient-to-tr from-gold/15 via-transparent to-gold/10 blur-2xl pointer-events-none" />
            <div className="relative premium-card glass-tile rounded-sm p-3 md:p-4">
              <div className="relative overflow-hidden rounded-sm shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
                <video
                  ref={videoRef}
                  src="/agent-os-mockup.mp4"
                  className="w-full h-auto block"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={t("realestate.video.label")}
                  data-testid="video-agent-os"
                />

                {/* Sound toggle — video autoplays muted, visitor can opt in */}
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-3 right-3 h-9 w-9 rounded-full border border-gold/40 bg-background/70 backdrop-blur-md text-gold flex items-center justify-center transition-all hover-elevate active-elevate-2"
                  data-testid="button-toggle-video-sound"
                >
                  {muted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Product label under the video */}
              <div
                className="flex items-center justify-center gap-2.5 pt-3 pb-1 text-[10px] tracking-[0.28em] uppercase font-mono text-muted-foreground"
                data-testid="text-agent-os-video-label"
              >
                <span className="live-dot" />
                <span>{t("realestate.video.label")}</span>
              </div>
            </div>
          </div>

          {/* Right — copy + CTA */}
          <div className="reveal reveal-delay-1">
            {/* Gold tag */}
            <div
              className="inline-flex items-center gap-3 mb-7 px-4 py-2 rounded-sm border border-gold/40 bg-gold/5"
              data-testid="badge-real-estate-tag"
            >
              <span className="live-dot" />
              <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
                {t("realestate.tag")}
              </span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight mb-6"
              data-testid="text-real-estate-headline"
            >
              {t("realestate.headline.pre")}
              <span className="gold-text italic">
                {t("realestate.product")}
                <sup className="text-[0.42em] not-italic align-super ml-[2px] tracking-normal">
                  ™
                </sup>
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-9">
              {t("realestate.sub")}
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-10" data-testid="list-real-estate-features">
              {CHECKS.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-4"
                  data-testid={`item-${key}`}
                >
                  <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-sm bg-gold/15 border border-gold/40">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{t(key)}</span>
                </li>
              ))}
            </ul>

            {/* Gold CTA — matches the Book 30-Min Strategy button exactly */}
            <a
              href="https://realestate.themodernprotocols.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackPixel("ViewContent", {
                  content_name: "Agent OS",
                  content_type: "product",
                  content_category: "Real Estate",
                })
              }
              className="group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_10px_30px_-10px_rgba(201,169,97,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(201,169,97,0.7)] hover:-translate-y-0.5"
              data-testid="button-explore-real-estate"
            >
              {t("realestate.cta")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
