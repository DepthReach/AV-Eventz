import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#111]/85 backdrop-blur-lg border-b border-primary/20 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex-1">
            <a href="#" aria-label="AV Eventz Home" className="font-serif text-primary text-[28px] tracking-[0.1em]">
              AV Eventz
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-sans text-[13px] uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-end gap-4 flex-1">
            <a
              href="tel:+919466227355"
              className="text-[12px] uppercase tracking-wider border border-primary text-primary px-5 py-2 hover:bg-primary hover:text-black transition-colors btn-magnetic"
              aria-label="Call AV Eventz"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/919466227355"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform btn-magnetic"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[60] bg-[#111] flex flex-col justify-center items-center"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              className="absolute top-6 right-6 text-primary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="w-10 h-10" aria-hidden="true" />
            </button>
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-4xl text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-12 flex gap-6">
              <a href="tel:+919466227355" aria-label="Call AV Eventz" className="border border-primary text-primary px-6 py-3 uppercase tracking-widest text-sm hover:bg-primary hover:text-black transition-colors">
                Call Us
              </a>
              <a
                href="https://wa.me/919466227355"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white"
              >
                <FaWhatsapp className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
