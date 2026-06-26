import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhoItsFor } from "@/components/who-its-for";
import { Problem } from "@/components/problem";
import { Methodology } from "@/components/methodology";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { Work } from "@/components/work";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useReveal } from "@/hooks/use-reveal";

export default function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <WhoItsFor />
        <Problem />
        <Methodology />
        <Services />
        <Results />
        <Work />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
