import CenteredHero from '../components/CenteredHero';
import MissionAbout from '../components/MissionAbout';
import CenteredCta from '../components/CenteredCta';
import LinksFooter from '../components/LinksFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <CenteredHero />
      </section>
      <section id="about" className="scroll-mt-16">
        <MissionAbout />
      </section>
      <section id="cta" className="scroll-mt-16">
        <CenteredCta />
      </section>
      <section id="footer" className="scroll-mt-16">
        <LinksFooter />
      </section>
    </main>
  );
}