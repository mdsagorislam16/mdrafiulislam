import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <div>
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>
      <section id="portfolio" className="scroll-mt-24">
        <PortfolioSection />
      </section>
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
    </div>
  );
}
