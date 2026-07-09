import { Instagram, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-primary tracking-wider font-bold mb-2">
              AV Eventz
            </h2>
            <p className="text-muted-foreground text-sm font-light mb-8 max-w-sm">
              Creating Experiences. Building Memories. Delivering Excellence. A premium corporate event management company serving India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Client Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-serif text-xl mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Corporate Events</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Conferences</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Product Launches</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Award Nights</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} AV Eventz — A Brand of AV Enterprise. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-card border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors absolute -top-5 right-0 md:relative md:top-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
