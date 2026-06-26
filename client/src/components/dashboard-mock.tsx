/**
 * DashboardMock — animated SVG mockup of a growth analytics dashboard.
 * Sensitive data is blurred (handwave numbers). The piece exists to communicate
 * "we operate against real metrics" without inventing client KPIs.
 */
export function DashboardMock() {
  return (
    <div
      className="relative w-full max-w-[640px] mx-auto"
      data-testid="img-dashboard-mock"
    >
      {/* Outer glow */}
      <div className="absolute -inset-8 bg-gold/8 blur-3xl rounded-full pointer-events-none" />

      {/* Window chrome */}
      <div className="relative glass-tile rounded-md overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gold/15 bg-black/40">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gold/30" />
            <span className="w-2 h-2 rounded-full bg-gold/30" />
            <span className="w-2 h-2 rounded-full bg-gold/30" />
          </div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase font-mono text-muted-foreground">
            <span className="live-dot" />
            Protocols / Growth Overview
          </div>
          <span className="text-[9px] font-mono text-muted-foreground">Q4 · LIVE</span>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "MRR", value: "$•••K", delta: "+38%" },
              { label: "CAC", value: "$•••", delta: "-22%" },
              { label: "ROAS", value: "•.•x", delta: "+114%" },
            ].map((k) => (
              <div
                key={k.label}
                className="p-3 rounded-sm bg-black/40 border border-gold/10"
                data-testid={`kpi-${k.label.toLowerCase()}`}
              >
                <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-mono mb-1">
                  {k.label}
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-lg text-foreground blur-[2px] select-none">
                    {k.value}
                  </span>
                  <span className="text-[10px] font-mono text-gold ticker">{k.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Line chart */}
          <div className="p-3 rounded-sm bg-black/40 border border-gold/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
                Revenue · Trailing 90d
              </span>
              <span className="text-[9px] font-mono text-gold">↗ +218%</span>
            </div>
            <svg viewBox="0 0 320 80" className="w-full h-20" aria-hidden="true">
              <defs>
                <linearGradient id="line-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C9A961" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* baseline */}
              <line x1="0" y1="70" x2="320" y2="70" stroke="rgba(201,169,97,0.1)" />
              {/* fill */}
              <path
                d="M0,60 L40,55 L80,58 L120,48 L160,42 L200,32 L240,28 L280,18 L320,10 L320,80 L0,80 Z"
                fill="url(#line-fill)"
                opacity="0.7"
              />
              {/* line */}
              <path
                d="M0,60 L40,55 L80,58 L120,48 L160,42 L200,32 L240,28 L280,18 L320,10"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
                className="dash-line-path"
              />
              {/* end dot */}
              <circle cx="320" cy="10" r="3" fill="#D4AF37">
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* Bar chart row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-sm bg-black/40 border border-gold/10">
              <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-mono mb-2">
                Channel Mix
              </div>
              <div className="flex items-end gap-1.5 h-14">
                {[40, 70, 55, 90, 65, 80, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 dash-bar rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 120}ms`,
                      background:
                        "linear-gradient(180deg, #D4AF37 0%, #8A7838 100%)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-3 rounded-sm bg-black/40 border border-gold/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
                  Conversion
                </span>
                <span className="text-[9px] font-mono text-gold">•.••%</span>
              </div>
              <div className="relative h-14 flex items-center">
                <svg viewBox="0 0 100 100" className="w-14 h-14">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(201,169,97,0.15)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#D4AF37"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="251"
                    strokeDashoffset="80"
                    transform="rotate(-90 50 50)"
                    className="dash-line-path"
                  />
                </svg>
                <div className="ml-3 space-y-1">
                  <div className="text-[9px] font-mono text-muted-foreground">
                    Sessions
                  </div>
                  <div className="font-display text-sm blur-[2px] select-none">
                    ••,•••
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating annotation */}
      <div className="absolute -right-2 top-12 hidden md:block glass-tile rounded-sm px-3 py-2 shadow-xl">
        <div className="text-[9px] tracking-[0.25em] uppercase font-mono text-gold mb-0.5">
          90-Day Result
        </div>
        <div className="font-display text-base">+3.2× pipeline</div>
      </div>
    </div>
  );
}
