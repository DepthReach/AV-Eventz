import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-primary/20 pt-20 pb-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h2 className="font-serif text-primary text-2xl mb-4">AV Eventz</h2>
          <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
            Creating Experiences. Building Memories. Delivering Excellence.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm uppercase tracking-widest text-foreground mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary text-[14px] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm uppercase tracking-widest text-foreground mb-6">Services</h3>
          <ul className="space-y-3">
            {['Corporate Events', 'Conferences', 'Product Launches', 'Award Nights', 'AV & Technical'].map((item) => (
              <li key={item} className="text-muted-foreground text-[14px]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm uppercase tracking-widest text-foreground mb-6">Contact</h3>
          <ul className="space-y-3 text-[14px] text-muted-foreground mb-6">
            <li><a href="tel:+919466227355" className="hover:text-primary transition-colors">+91 94662 27355</a></li>
            <li><a href="mailto:avevent@zoho.in" className="hover:text-primary transition-colors">avevent@zoho.in</a></li>
            <li className="leading-relaxed">B-07/2, HUDA Market,<br/>Opp. Nehru College, Sector-16,<br/>Faridabad, Haryana</li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center border-t border-white/5 pt-8">
        <p className="text-[12px] text-muted-foreground font-sans">
          © {new Date().getFullYear()} AV Eventz — A Brand of AV Enterprise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
