import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
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
import CustomCursor from './CustomCursor';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      
      {/* Scroll Progress */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-serif text-4xl md:text-6xl tracking-widest uppercase"
            >
              AV Eventz
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <main className="pb-14 md:pb-0">
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
      <div className="pb-14 md:pb-0">
        <Footer />
      </div>

      {/* Mobile sticky CTA — hidden on md+ */}
      <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
        <a href="tel:+919466227355" className="flex-1 flex items-center justify-center gap-2 py-4 text-foreground hover:text-primary transition-colors" aria-label="Call Us">
          <Phone size={18} />
          <span className="font-sans text-sm uppercase tracking-wider">Call Us</span>
        </a>
        <div className="w-[1px] bg-border" />
        <a href="https://wa.me/919466227355" target="_blank" rel="noopener noreferrer"
           className="flex-1 flex items-center justify-center gap-2 py-4 text-green-400 hover:text-green-300 transition-colors" aria-label="WhatsApp">
          <FaWhatsapp size={18} />
          <span className="font-sans text-sm uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
