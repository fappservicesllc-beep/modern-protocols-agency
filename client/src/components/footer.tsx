import { useState, type FormEvent } from "react";
import { apiRequest } from "@/lib/queryClient";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    try {
      await apiRequest("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
      setEmail("");
      setStatus("saved");
    } catch { setStatus("error"); }
  }

  return (
    <footer
      className="relative pt-20 pb-12 border-t border-border/60 bg-card/30"
      data-testid="footer"
    >
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="The Modern Protocols"
                className="h-12 w-12 object-contain"
              />
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.35em] text-gold uppercase">
                  The Modern
                </div>
                <div className="text-sm tracking-[0.3em] text-foreground uppercase font-medium">
                  Protocols
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              A digital growth studio building the systems modern brands use to
              compound their advantage.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-sm border border-border hover:border-gold/60 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-sm border border-border hover:border-gold/60 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-sm border border-border hover:border-gold/60 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-mono mb-6">
              Navigate
            </div>
            <ul className="space-y-3">
              {["Services", "Process", "Work", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    data-testid={`link-footer-${l.toLowerCase()}`}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-mono mb-6">
              Services
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Website Creation</li>
              <li>Brand Elevation</li>
              <li>Sales & Traffic Growth</li>
              <li>AI Video Sales Letters</li>
              <li>UGC Production</li>
              <li>Community Management</li>
              <li>Brand Exposure</li>
            </ul>
          </div>
        </div>

        <form onSubmit={subscribe} className="mb-12 max-w-lg" aria-label="Newsletter signup">
          <label htmlFor="newsletter-email" className="block text-[10px] tracking-[0.3em] uppercase text-gold font-mono mb-4">The Modern Protocols newsletter</label>
          <div className="flex gap-3">
            <input id="newsletter-email" type="email" name="email" autoComplete="email" required maxLength={320} value={email} onChange={event => { setEmail(event.target.value); setStatus("idle"); }} placeholder="Your email address" className="min-w-0 flex-1 bg-input/60 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold" />
            <button type="submit" disabled={status === "saving"} className="border border-gold/60 text-gold rounded-sm px-5 py-3 text-sm hover:bg-gold/10 focus-visible:outline focus-visible:outline-gold disabled:opacity-60">{status === "saving" ? "Subscribing…" : "Subscribe"}</button>
          </div>
          <p role="status" className="mt-3 text-sm text-muted-foreground">{status === "saved" ? "You’re subscribed. Thank you." : status === "error" ? "Could not subscribe. Please try again." : "Receive news and insights by email."}</p>
        </form>

        <div className="gold-hairline h-px w-full mb-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div className="font-mono tracking-wider">
            © {new Date().getFullYear()} The Modern Protocols. All rights reserved.
          </div>
          <div className="font-mono tracking-[0.3em] uppercase text-gold/70">
            Unlock · Build · Scale
          </div>
        </div>
      </div>
    </footer>
  );
}
