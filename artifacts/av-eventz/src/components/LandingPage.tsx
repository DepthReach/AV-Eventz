import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      
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
