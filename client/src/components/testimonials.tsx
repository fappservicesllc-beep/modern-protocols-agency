import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "They translated my work into a digital presence that finally matches the caliber of the brands and people I represent. The inquiries speak for themselves.",
    author: "Erwin Pérez",
    role: "Founder, Erwin Pérez Media",
  },
  {
    quote:
      "My atelier finally has a home online as refined as the gowns inside it. Brides arrive already in love with the craft — bookings haven't slowed since.",
    author: "The Little Seamstress",
    role: "Bridal Atelier, Couture",
  },
  {
    quote:
      "They understood the tone we needed on Instagram before we could even articulate it. Every post feels intentional, intimate, and unmistakably ours.",
    author: "Sexo Sentido",
    role: "Lifestyle · Editorial",
  },
];

export function Testimonials() {
  return (
    <section
      className="relative py-32 md:py-40 border-t border-border/40"
      data-testid="section-testimonials"
    >
      <div className="container">
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] tracking-[0.5em] uppercase text-gold font-mono">
              In Their Words
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
            What founders <span className="gold-text italic">say.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/40">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-background p-10 md:p-12 flex flex-col justify-between reveal"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="h-8 w-8 text-gold/60 mb-6" />
              <blockquote className="font-display text-xl md:text-2xl leading-snug text-foreground/95 mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <div className="text-sm font-medium text-foreground">
                  {t.author}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
