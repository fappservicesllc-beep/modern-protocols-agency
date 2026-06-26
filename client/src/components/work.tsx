import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    client: "Erwin Pérez Media",
    category: "Public Relations · Miami",
    headline:
      "Positioned a top PR strategist and El Nuevo Herald journalist as the bridge between brands and Miami's leading media.",
    metric: "Miami → LATAM",
    duration: "Ongoing",
    href: "https://www.erwinperezmedia.com",
    color: "from-amber-900/30 to-amber-700/10",
    image: "/erwin-perez.png",
  },
  {
    client: "The Little Seamstress",
    category: "Bridal Atelier · Couture",
    headline:
      "Crafted a refined digital home for a bespoke bridal atelier — showcasing the artistry behind every custom gown and alteration.",
    metric: "Bookings ↑",
    duration: "Ongoing",
    href: "https://www.thelittleseamstress.com",
    color: "from-stone-800/40 to-amber-900/10",
    image: "/work/little-seamstress.png",
  },
  {
    client: "Sexo Sentido",
    category: "Lifestyle · Editorial",
    headline:
      "Instagram image direction and social strategy shaping an intimate, modern voice that resonates.",
    metric: "Engagement ↑",
    duration: "Ongoing",
    href: "https://sexosentido.us",
    image: "/sexo-sentido.jpg",
    color: "from-rose-950/40 to-amber-900/10",
  },
  {
    placeholder: true,
    client: "YOUR BRAND HERE",
    category: "New Partnership",
    headline:
      "We're looking for the next game-changer. If you're ready to scale your digital presence and dominate your niche, this spot is reserved for you.",
    metric: "1 Spot Left",
    duration: "Q3/Q4 Intake",
    href: "#contact",
    color: "from-amber-950/30 to-background",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative py-32 md:py-40 border-t border-border/40"
      data-testid="section-work"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 reveal gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
                Selected Roster
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Brands we've <span className="gold-text italic">unlocked.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-bright transition-colors inline-flex items-center gap-2"
            data-testid="link-discuss-yours"
          >
            Discuss yours <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CASES.map((c, i) => (
            <article
              key={c.client}
              onClick={() => {
                if (c.placeholder) {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                } else if (c.href) {
                  window.open(c.href, "_blank", "noopener,noreferrer");
                }
              }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer reveal ${
                c.placeholder
                  ? "bg-background placeholder-card"
                  : "gold-border bg-card/50 hover-elevate"
              }`}
              data-testid={`card-work-${i}`}
            >
              {/* Placeholder-specific layers */}
              {c.placeholder && (
                <>
                  {/* Dashed gold border */}
                  <div className="absolute inset-2 border border-dashed border-gold/40 rounded-sm pointer-events-none group-hover:border-gold/70 transition-colors duration-500" />
                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold pointer-events-none" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold pointer-events-none" />
                  {/* Pulsing aura */}
                  <div className="absolute inset-0 placeholder-aura pointer-events-none" />
                  {/* Scanline shimmer */}
                  <div className="absolute inset-0 placeholder-shimmer pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                </>
              )}
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-80`}
              />
              {/* Portrait image (if present) */}
              {c.image && (
                <>
                  <div
                    className={`absolute bg-center bg-no-repeat opacity-90 group-hover:opacity-100 transition-opacity duration-700 ${
                      c.imageContain
                        ? "right-4 md:right-8 top-1/2 -translate-y-1/2 w-2/5 md:w-1/3 h-1/2 bg-contain"
                        : "inset-y-0 right-0 w-3/5 md:w-1/2 bg-cover"
                    }`}
                    style={{
                      backgroundImage: `url(${c.image})`,
                      backgroundPosition: c.imageContain ? "center" : "center top",
                    }}
                    data-testid={`img-work-${i}`}
                  />
                  {/* Fade from card color on left to transparent on right, keeps headline legible */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
                  {/* Bottom fade so the metrics row stays readable */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/95 to-transparent" />
                </>
              )}
              {/* Grid texture */}
              <div className="absolute inset-0 grid-bg opacity-50" />
              {/* Glow */}
              <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-colors duration-700" />

              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {c.placeholder && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                        </span>
                      )}
                      <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 font-mono">
                        {c.category}
                      </div>
                    </div>
                    <h3
                      className={
                        c.placeholder
                          ? "font-display text-3xl md:text-4xl tracking-[0.08em] uppercase gold-text"
                          : "font-display text-3xl md:text-4xl tracking-tight"
                      }
                    >
                      {c.client}
                    </h3>
                  </div>
                  <div
                    className={
                      c.placeholder
                        ? "w-10 h-10 rounded-full border border-dashed border-gold/60 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all"
                        : "w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all"
                    }
                  >
                    <ArrowUpRight className="h-4 w-4 text-gold group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <div>
                  <p
                    className={
                      c.placeholder
                        ? "text-foreground/70 text-sm md:text-base leading-snug mb-6 max-w-md"
                        : "text-foreground/90 text-base md:text-lg leading-snug mb-6 max-w-md"
                    }
                  >
                    {c.headline}
                  </p>
                  <div
                    className={`flex items-center gap-6 pt-6 ${
                      c.placeholder
                        ? "border-t border-dashed border-gold/30"
                        : "border-t border-gold/20"
                    }`}
                  >
                    <div>
                      <div
                        className={
                          c.placeholder
                            ? "font-mono text-xs tracking-[0.3em] uppercase gold-text leading-none"
                            : "font-display text-2xl gold-text leading-none"
                        }
                      >
                        {c.metric}
                      </div>
                      {!c.placeholder && (
                        <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono mt-1">
                          Outcome
                        </div>
                      )}
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <div
                        className={
                          c.placeholder
                            ? "font-mono text-xs tracking-[0.3em] uppercase text-foreground leading-none"
                            : "font-display text-2xl text-foreground leading-none"
                        }
                      >
                        {c.duration}
                      </div>
                      {!c.placeholder && (
                        <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono mt-1">
                          Engagement
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
