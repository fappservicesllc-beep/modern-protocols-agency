import { AlertTriangle, TrendingDown, Clock, EyeOff } from "lucide-react";

const pains = [
  {
    icon: TrendingDown,
    title: "Revenue plateau",
    body: "You've hit a ceiling. The growth tactics that took you to $50K/mo are now the same tactics suffocating you at $80K.",
  },
  {
    icon: EyeOff,
    title: "Brand mismatch",
    body: "Your offer is premium. Your website looks freelance. Prospects judge you in 7 seconds — and they're judging the wrong thing.",
  },
  {
    icon: Clock,
    title: "Operator bottleneck",
    body: "You're still the system. Every content piece, every funnel tweak, every launch waits on you. That's not a business — that's a job.",
  },
  {
    icon: AlertTriangle,
    title: "Fragmented stack",
    body: "Five tools, three freelancers, two strategies, zero integration. Nothing compounds because nothing connects.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative py-28 md:py-36 bg-black/30 grain border-y border-gold/10"
      data-testid="section-problem"
    >
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              02 / The Problem
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            data-testid="text-problem-headline"
          >
            You don't need <span className="gold-text italic">more</span>.<br />
            You need a <span className="text-foreground">protocol</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Most growth pain isn't a marketing problem. It's a system problem
            dressed up as one. Here's what we see every week:
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`reveal reveal-delay-${i + 1} premium-card glass-tile rounded-sm p-7 lg:p-8`}
                data-testid={`pain-card-${i}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl mb-2.5 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
