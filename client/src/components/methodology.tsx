import { Telescope, Hammer, Rocket } from "lucide-react";

const phases = [
  {
    n: "01",
    days: "Days 1–30",
    label: "Diagnose",
    icon: Telescope,
    title: "The Audit & Architecture",
    body: "We embed with you, audit the entire stack — brand, site, funnels, content, data — and architect the 90-day protocol. You leave week one with a roadmap, not a guess.",
    deliverables: [
      "Full growth audit (brand · funnel · ops)",
      "Competitive & positioning teardown",
      "90-day protocol roadmap & KPIs",
    ],
  },
  {
    n: "02",
    days: "Days 31–60",
    label: "Build",
    icon: Hammer,
    title: "The Build & Launch",
    body: "We design and ship the assets — website, brand system, content engine, AI workflows. Built once, owned forever. Everything connects to one source of truth.",
    deliverables: [
      "Website + brand system shipped",
      "AI content engine deployed",
      "Funnel & analytics instrumented",
    ],
  },
  {
    n: "03",
    days: "Days 61–90",
    label: "Compound",
    icon: Rocket,
    title: "The Scale & Handoff",
    body: "We turn the system on, optimize against live data, and hand you the operator playbook. The protocol keeps producing whether we're in the room or not.",
    deliverables: [
      "Weekly optimization sprints",
      "Operator playbook & SOPs",
      "Compounding KPI dashboard",
    ],
  },
];

export function Methodology() {
  return (
    <section
      id="methodology"
      className="relative py-28 md:py-36 grain"
      data-testid="section-methodology"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.04),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              03 / The Methodology
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            data-testid="text-method-headline"
          >
            The <span className="gold-text italic">90-Day Protocol</span>.<br />
            Three phases. One outcome.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every engagement runs on the same disciplined framework. Same
            sequence, same rigor — bespoke execution. This is how we move you
            from plateau to compounding growth in a quarter.
          </p>
        </div>

        {/* Phase cards */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[88px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.n}
                  className={`reveal reveal-delay-${i + 1} premium-card glass-tile rounded-sm p-8 lg:p-9`}
                  data-testid={`phase-card-${p.n}`}
                >
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                      <div className="relative w-16 h-16 rounded-sm bg-gradient-to-br from-gold/25 via-gold/10 to-transparent border border-gold/30 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-gold" />
                      </div>
                    </div>
                    <span className="font-display text-5xl text-gold/20 leading-none">
                      {p.n}
                    </span>
                  </div>

                  {/* Days label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold">
                      {p.days}
                    </span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-muted-foreground">
                      {p.label}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {p.body}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-5 border-t border-gold/10">
                    <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-muted-foreground mb-3">
                      Deliverables
                    </div>
                    <ul className="space-y-2">
                      {p.deliverables.map((d, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <span className="inline-block w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 text-center reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_10px_30px_-10px_rgba(201,169,97,0.5)] hover:-translate-y-0.5"
            data-testid="button-methodology-cta"
          >
            Book 30-Min Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}
