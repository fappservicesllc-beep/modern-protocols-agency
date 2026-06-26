const STEPS = [
  {
    code: "I",
    title: "Discover",
    description:
      "We start with a discovery sprint — auditing your brand, market position, and existing assets to find the unlock points.",
  },
  {
    code: "II",
    title: "Architect",
    description:
      "Your custom protocol is designed: site architecture, content systems, channel strategy, and conversion paths.",
  },
  {
    code: "III",
    title: "Build",
    description:
      "Design, development, production. From websites to VSLs to community spaces — built with obsessive craft.",
  },
  {
    code: "IV",
    title: "Scale",
    description:
      "We optimize, expand, and compound. Traffic, sales, and community grow together as one connected system.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-32 md:py-40 border-t border-border/40 bg-card/30"
      data-testid="section-process"
    >
      <div className="container">
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-mono">
              The Protocol
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
            How we <span className="gold-text italic">work.</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {STEPS.map((step, i) => (
              <div
                key={step.code}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center reveal ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
                data-testid={`card-process-${step.code}`}
              >
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <div className="font-display text-7xl md:text-8xl gold-text mb-4 leading-none">
                    {step.code}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="aspect-square max-w-sm mx-auto relative">
                    <div className="absolute inset-0 border border-gold/20 rotate-45" />
                    <div className="absolute inset-8 border border-gold/30 rotate-45" />
                    <div className="absolute inset-16 border border-gold/50 rotate-45 flex items-center justify-center">
                      <span className="font-mono text-xs tracking-[0.3em] text-gold -rotate-45">
                        STEP {step.code}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
