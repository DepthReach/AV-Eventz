import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'wouter';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="text-2xl font-serif text-primary tracking-wider font-bold">
              AV Eventz
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919466227355"
              className="flex items-center space-x-2 text-sm font-medium px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919466227355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          <button
            aria-label="Open navigation menu"
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif text-primary tracking-wider font-bold">
                AV Eventz
              </span>
              <button
                aria-label="Close navigation menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-xl font-serif">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-foreground hover:text-primary transition-colors border-b border-border pb-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col space-y-4 pt-8 border-t border-border">
              <a
                href="tel:+919466227355"
                className="flex items-center justify-center space-x-2 text-lg font-medium p-4 border border-primary text-primary"
              >
                <Phone size={20} />
                <span>+91 9466227355</span>
              </a>
              <a
                href="https://wa.me/919466227355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-lg font-medium p-4 bg-green-500 text-white"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
