const STATS = [
  { value: "40+", label: "Brands Elevated" },
  { value: "$12M+", label: "Revenue Engineered" },
  { value: "200M+", label: "Impressions Generated" },
  { value: "98%", label: "Client Retention" },
];

export function Stats() {
  return (
    <section
      className="relative py-20 md:py-28 border-t border-border/40"
      data-testid="section-stats"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-background p-8 md:p-12 text-center reveal"
              data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="font-display text-5xl md:text-6xl gold-text mb-3 leading-none">
                {s.value}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
