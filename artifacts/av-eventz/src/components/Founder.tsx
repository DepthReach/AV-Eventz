import { motion, type Variants } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import ownerImg from '@assets/AV_Images/Owner/IMG-20260709-WA0111.jpg';

export default function Founder() {
  const textFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="bg-[#0f0f0f] relative w-full pt-32 pb-24 px-6 md:px-12 border-t border-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary border border-primary/30 px-4 py-1.5 rounded-full">
            The Person Behind It All
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Third: Portrait */}
          <div className="w-full lg:w-[30%] relative mt-0 lg:-mt-16 z-10">
            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-white/10 relative shadow-2xl">
              <img 
                src={ownerImg} 
                alt="Founder AV Eventz" 
                className="w-full h-full object-cover filter saturate-[0.85] hover:saturate-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Middle Third: Story */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <motion.h2 
              variants={textFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif italic text-5xl md:text-[64px] text-foreground mb-8 leading-[1.1]"
            >
              Meet The Founder
            </motion.h2>
            
            <motion.div 
              variants={textFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6 font-sans text-[16px] text-muted-foreground leading-relaxed font-light"
            >
              <p>
                Behind every polished event is a thousand small decisions. I started AV Eventz after spending years in the industry watching promising events fall apart — not from bad ideas, but from poor execution.
              </p>
              <p>
                We built the company around a simple promise: when you hand us your event, you stop worrying. That's it. No gaps in communication, no surprises on the day, no excuses after.
              </p>
              <p>
                Today we work with some of India's finest companies. And I'm still personally involved in every single brief.
              </p>
            </motion.div>
          </div>

          {/* Right Third: CTAs & Signature */}
          <div className="w-full lg:w-[25%] flex flex-col justify-end pb-8">
            <div className="space-y-4 mb-16">
              <a 
                href="https://wa.me/919466227355" 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-sans text-sm uppercase tracking-widest hover:bg-[#20b858] transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" /> WhatsApp Direct
              </a>
              <a 
                href="tel:+919466227355"
                className="w-full flex items-center justify-center border border-primary text-primary py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="font-serif italic text-[32px] text-foreground/80 mt-auto text-right md:text-left">
              — Founder, AV Eventz
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
