import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import MarqueeTicker from '@/components/ui/MarqueeTicker';
import WorkWall from '@/components/sections/WorkWall';
import SelectedProjects from '@/components/sections/SelectedProjects';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import HowIWork from '@/components/sections/HowIWork';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/sections/Footer';

const TICKER_ITEMS = [
  'Brand Identity',
  'Editorial Design',
  'Poster Art',
  'Visual Systems',
  'Social Content',
  'Packaging',
  'Typography',
  'Creative Direction',
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Ticker strip */}
      <div className="bg-charcoal py-4 overflow-hidden">
        <MarqueeTicker
          items={TICKER_ITEMS}
          speed={35}
          className="text-cream/60 text-xs tracking-[0.2em] uppercase font-medium"
        />
      </div>

      {/* Work Wall */}
      <WorkWall />

      {/* Ticker strip 2 */}
      <div className="bg-cream border-y border-light-border py-4 overflow-hidden">
        <MarqueeTicker
          items={['Design That Speaks', 'Art Direction', 'Visual Identity', 'Brand Strategy', 'Creative Excellence']}
          speed={40}
          className="text-mid-gray text-xs tracking-[0.2em] uppercase font-medium"
        />
      </div>

      {/* Selected Projects */}
      <SelectedProjects />

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* How I Work */}
      <HowIWork />

      {/* CTA */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </main>
  );
}
