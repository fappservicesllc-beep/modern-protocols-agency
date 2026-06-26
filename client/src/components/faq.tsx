import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How is the investment structured — and how do I know it's worth it?",
    a: "Engagements start at $15K for the 90-day protocol and scale based on scope. The math is simple: if a single new high-ticket client covers half the investment, the protocol pays for itself in the first 60 days. We don't take on a brand unless we see a clear path to 3–5× return inside twelve months — and we tell you on the strategy call whether you're a fit.",
  },
  {
    q: "What time commitment do you need from me?",
    a: "Plan on four focused hours per week — one 60-minute strategy call, two async reviews, and ~90 minutes of feedback windows. We're built to extend your team, not consume your calendar. Founders who try to give us less get less; founders who lean in for ninety days get the compounding outcome.",
  },
  {
    q: "Does this work for my niche / industry?",
    a: "The 90-Day Protocol is industry-agnostic by design — the framework is what compounds, the execution is bespoke. We've shipped it for PR, bridal couture, and editorial lifestyle brands in the last year alone. On the strategy call we'll be honest if your category isn't where we add the most leverage and refer you to someone who is.",
  },
  {
    q: "What kind of ROI should I expect — and how fast?",
    a: "Most clients see measurable lift inside 30 days (better positioning → better leads), meaningful revenue movement by day 60, and compounding by day 90. Average trajectory across the roster: 2–4× pipeline within two quarters. We're a growth investment, not a deliverables vendor — if you treat us like the latter, you'll get the latter's ROI.",
  },
];

function Item({
  q,
  a,
  i,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  i: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="reveal premium-card glass-tile rounded-sm overflow-hidden"
      data-testid={`faq-item-${i}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-6 lg:p-7 flex items-start justify-between gap-6 group"
        data-testid={`faq-toggle-${i}`}
        aria-expanded={open}
      >
        <span className="font-display text-lg lg:text-xl tracking-tight leading-snug pr-4">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all group-hover:bg-gold/10 group-hover:border-gold/60">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 lg:px-7 pb-7 pt-1">
            <div className="h-px w-full bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mb-5" />
            <p className="text-muted-foreground leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 grain"
      data-testid="section-faq"
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              06 / Common Questions
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight"
            data-testid="text-faq-headline"
          >
            What founders <span className="gold-text italic">actually ask</span>{" "}
            before signing.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <Item
              key={i}
              i={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center reveal">
          <p className="text-muted-foreground mb-5">
            Still have questions? The strategy call answers them all.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase text-primary-foreground bg-gold hover:bg-gold-bright transition-all rounded-sm font-medium shadow-[0_10px_30px_-10px_rgba(201,169,97,0.5)] hover:-translate-y-0.5"
            data-testid="button-faq-cta"
          >
            Book 30-Min Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}
