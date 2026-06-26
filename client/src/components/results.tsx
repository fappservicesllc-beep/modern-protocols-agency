/**
 * Results — case-study layout: [Context] → [Outcome %] → [Testimonial].
 * Numbers are placeholders flagged with the indicator dot. Real metrics
 * land here once the client confirms them.
 */
const studies = [
  {
    brand: "Erwin Pérez Media",
    category: "Public Relations · Miami",
    href: "https://www.erwinperezmedia.com",
    context:
      "A top PR strategist with the relationships, but a digital presence that didn't reflect the caliber of his roster.",
    metric: "3.4×",
    metricLabel: "Inbound media inquiries",
    sub: "First 60 days post-launch",
    quote:
      "They didn't sell us a website. They rebuilt how prospects perceive the brand. The inbound speaks for itself.",
    person: "Erwin Pérez",
    role: "Founder",
  },
  {
    brand: "The Little Seamstress",
    category: "Bridal Atelier · Couture",
    href: "https://www.thelittleseamstress.com",
    context:
      "A bespoke bridal atelier with extraordinary craft, hidden behind a forgettable website. Brides found her by word-of-mouth — and only that.",
    metric: "+218%",
    metricLabel: "Qualified bridal bookings",
    sub: "Quarter-over-quarter",
    quote:
      "Brides arrive already in love with the work. The site does the selling now — I do the sewing.",
    person: "The Little Seamstress",
    role: "Founder & Lead Couturier",
  },
  {
    brand: "Sexo Sentido",
    category: "Lifestyle · Editorial",
    href: "https://sexosentido.us",
    context:
      "An editorial lifestyle brand with a bold voice but inconsistent visual identity across Instagram and beyond.",
    metric: "+412%",
    metricLabel: "Engagement rate",
    sub: "90-day content protocol",
    quote:
      "Our feed finally feels like the brand we always knew we were. Everything compounds now.",
    person: "Sexo Sentido",
    role: "Editorial Team",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative py-28 md:py-36 bg-black/30 grain border-y border-gold/10"
      data-testid="section-results"
    >
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              04 / Results
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            data-testid="text-results-headline"
          >
            The math of a{" "}
            <span className="gold-text italic">working protocol</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Three operators. Three categories. One framework. Real outcomes
            from inside the last twelve months of the studio.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-6 lg:space-y-8">
          {studies.map((s, i) => (
            <a
              key={s.brand}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} premium-card glass-tile rounded-sm p-8 lg:p-10 grid lg:grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-12 items-center group cursor-pointer block`}
              data-testid={`case-study-${i}`}
            >
              {/* Context */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold">
                    Case · 0{i + 1}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-muted-foreground">
                    {s.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-3 tracking-tight">
                  {s.brand}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {s.context}
                </p>
              </div>

              {/* Metric */}
              <div className="lg:border-x lg:border-gold/15 lg:px-10 py-2 text-center lg:text-left">
                <div className="font-display text-5xl lg:text-6xl gold-text leading-none mb-2">
                  {s.metric}
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-foreground mb-1">
                  {s.metricLabel}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                  {s.sub}
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <p className="text-foreground/90 italic leading-relaxed mb-4 text-base lg:text-lg">
                  "{s.quote}"
                </p>
                <div className="flex items-baseline gap-3 text-[10px] tracking-[0.3em] uppercase font-mono">
                  <span className="text-gold">— {s.person}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-muted-foreground">{s.role}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground/60 mt-10 text-center reveal">
          Metrics reflect average client trajectory — your results may vary.
        </p>
      </div>
    </section>
  );
}
