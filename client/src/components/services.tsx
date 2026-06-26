import {
  Globe2,
  Sparkles,
  TrendingUp,
  Clapperboard,
  Users,
  Megaphone,
  Crown,
  Package,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe2,
    title: "Website Creation",
    description:
      "Custom-coded, conversion-engineered websites that reflect the caliber of your brand and load like a luxury suite.",
    deliverables: ["Bespoke design", "Performance-tuned build", "Conversion architecture"],
    code: "01",
  },
  {
    icon: Crown,
    title: "Brand Elevation",
    description:
      "We refine how your brand looks, sounds, and feels online — so every touchpoint reads like the category leader.",
    deliverables: ["Visual identity", "Voice & messaging", "Digital presence audit"],
    code: "02",
  },
  {
    icon: TrendingUp,
    title: "Sales & Traffic Growth",
    description:
      "Funnels, paid acquisition, and conversion systems that compound traffic into revenue, not just impressions.",
    deliverables: ["Paid media strategy", "Funnel engineering", "Analytics & attribution"],
    code: "03",
  },
  {
    icon: Clapperboard,
    title: "AI Video Sales Letters",
    description:
      "Long-form VSLs produced with AI workflows — scripted to convert, edited for retention, deployed at scale.",
    deliverables: ["AI-assisted scripting", "Voice & avatar production", "Conversion-tested edits"],
    code: "04",
  },
  {
    icon: Users,
    title: "UGC Production",
    description:
      "A roster of creators producing native, scroll-stopping content built for ads, organic, and everything between.",
    deliverables: ["Creator sourcing", "Briefing & direction", "Ad-ready deliverables"],
    code: "05",
  },
  {
    icon: Sparkles,
    title: "Community Management",
    description:
      "We run the rooms where your audience lives — replies, retention, and rituals that build a real community.",
    deliverables: ["Daily moderation", "Engagement frameworks", "Loyalty programs"],
    code: "06",
  },
  {
    icon: Megaphone,
    title: "Brand Exposure",
    description:
      "Press, partnerships, podcasts, and placements that put your brand in the rooms it deserves to be in.",
    deliverables: ["PR & placements", "Strategic partnerships", "Influencer alignment"],
    code: "07",
  },
  {
    icon: Package,
    title: "Digital Products",
    description:
      "We design and ship digital products — tools, templates, and systems — that simplify daily rituals and elevate the lifestyles of those who use them.",
    deliverables: ["Product design & build", "Lifestyle-led UX", "Launch & distribution"],
    code: "08",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-40 border-t border-border/40"
      data-testid="section-services"
    >
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              05 / The Arsenal
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            Eight protocols.
            <br />
            <span className="gold-text italic">One unified system.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Inside the 90-Day Protocol, your engagement is composed from these
            eight disciplines — selected and sequenced around the specific
            outcome you're scaling toward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-background p-8 md:p-10 hover-elevate transition-colors reveal"
                data-testid={`card-service-${s.code}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-mono">
                    /{s.code}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 text-xs text-foreground/70 tracking-wide"
                    >
                      <span className="h-px w-4 bg-gold/60" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* Empty filler to keep grid clean if needed */}
          <div className="hidden lg:block bg-background p-8 md:p-10 reveal">
            <div className="h-full flex flex-col justify-between">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-mono">
                Custom Protocol
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                  Need something specific?
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-bright transition-colors"
                  data-testid="link-custom-protocol"
                >
                  Build a Custom Plan →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
