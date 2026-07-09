import Header from './Header';
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Process from './Process';
import Portfolio from './Portfolio';
import Founder from './Founder';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import { useCursor } from '@/hooks/use-cursor';

export default function LandingPage() {
  const { position, isHovering } = useCursor();

  return (
    <div className="w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Portfolio />
        <Founder />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
