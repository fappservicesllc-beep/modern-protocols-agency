import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { DashboardMock } from "./dashboard-mock";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg noise pt-32 pb-20"
      data-testid="section-hero"
    >
      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <span className="live-dot" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold font-mono">
                For Founders Scaling Past $50K/mo
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-7 animate-fade-up opacity-0"
              style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
              data-testid="text-hero-headline"
            >
              The growth protocol
              <br />
              <span className="gold-text italic">elite operators</span>
              <br />
              run on.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-9 leading-relaxed animate-fade-up opacity-0"
              style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
              data-testid="text-hero-sub"
            >
              We engineer the websites, brand systems, and AI-driven content
              engines that move category leaders from{" "}
              <span className="text-foreground">six to seven figures</span> — and
              past it. By invitation, for a select roster.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "650ms", animationFillMode: "forwards" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_10px_30px_-10px_rgba(201,169,97,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(201,169,97,0.7)] hover:-translate-y-0.5"
                data-testid="button-hero-primary"
              >
                <Calendar className="h-4 w-4" />
                Book 30-Min Strategy Session
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-foreground border border-gold/30 hover:border-gold/70 hover:bg-gold/5 transition-all rounded-sm font-medium"
                data-testid="button-hero-secondary"
              >
                Request Free Growth Audit
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Bar */}
            <div
              className="w-full max-w-xl animate-fade-up opacity-0"
              style={{ animationDelay: "850ms", animationFillMode: "forwards" }}
              data-testid="trust-bar"
            >
              <div className="glass-tile rounded-sm px-5 py-4">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground/90 italic leading-relaxed mb-2">
                      "They didn't sell us a website. They rebuilt how prospects
                      perceive our brand. The inbound speaks for itself."
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                      <span className="text-gold/80">— Erwin P., Founder</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>No-commitment</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>30 min</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>NDA-friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — dashboard mock */}
          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
          >
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
