import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Phone } from 'lucide-react';
import founderImg from '@assets/AV_Images/Owner/IMG-20260709-WA0111.jpg';

export default function Founder() {
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] max-w-md mx-auto relative z-10">
              <img 
                src={founderImg} 
                alt="Founder of AV Eventz" 
                className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-border"
              />
            </div>
            {/* Background decorative block */}
            <div className="absolute top-8 -right-8 md:-right-8 lg:left-24 lg:right-auto bottom-8 w-full max-w-md bg-background border border-primary/20 -z-0"></div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Meet The Founder</h2>
            
            <div className="text-lg font-light leading-relaxed text-muted-foreground space-y-6 mb-10">
              <p>
                "Behind every successful event is years of experience, hundreds of early mornings, and the stubborn belief that good enough is never enough.
              </p>
              <p>
                I started AV Eventz because I saw a gap — companies needed partners who could think creatively AND execute without error. Today, I'm proud that we've built exactly that.
              </p>
              <p className="text-foreground italic font-serif text-xl">
                Every event we do still gets my personal attention, because your brand deserves nothing less."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/919466227355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white hover:bg-green-600 transition-colors text-sm tracking-wider uppercase font-medium"
              >
                <FaWhatsapp size={18} />
                WhatsApp Now
              </a>
              <a 
                href="tel:+919466227355"
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wider uppercase font-medium"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
