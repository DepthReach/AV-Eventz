import { motion, type Variants } from 'framer-motion';
import imgTop from '@assets/AV_Images/About/IMG-20260709-WA0110.jpg';
import imgBottom from '@assets/AV_Images/About/IMG-20260709-WA0108.jpg';

export default function About() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const clipRevealTop: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] } }
  };

  const clipRevealBottom: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.1, delay: 0.25, ease: [0.77, 0, 0.175, 1] } }
  };

  return (
    <section id="about" className="bg-[#111] pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center justify-between border-t border-white/10 pt-6 mb-24">
          <div className="w-2/3 h-[1px]" />
          <div className="font-sans text-[12px] uppercase tracking-widest text-primary">02 — About</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
          <div className="w-full lg:w-[45vw] flex flex-col justify-center">
            <motion.h2 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif italic text-4xl md:text-[52px] leading-[1.1] text-foreground mb-10"
            >
              "We've managed events for 150+ companies. What we do isn't logistics — it's storytelling with a deadline."
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-sans text-[17px] text-muted-foreground leading-relaxed max-w-lg"
            >
              At AV Eventz, we understand that every corporate gathering is an extension of your brand's identity. From high-stakes leadership offsites to expansive multi-city product launches, our team replaces chaos with absolute precision. We don't just plan events; we architect experiences that leave an indelible mark on your audience.
            </motion.p>
          </div>

          <div className="w-full lg:w-[45vw] relative min-h-[600px] lg:min-h-[700px]">
            <motion.img 
              variants={clipRevealTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={imgTop} 
              alt="Corporate Event Setup with precise lighting and sound" 
              className="absolute top-0 right-0 w-[80%] h-[400px] object-cover border border-white/5 grayscale-[20%]"
              loading="lazy"
            />
            <motion.img 
              variants={clipRevealBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={imgBottom} 
              alt="Conference Audience engaging with the speaker" 
              className="absolute bottom-0 left-0 lg:-left-10 w-[70%] h-[350px] object-cover border border-white/5 grayscale-[20%] shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="flex-1 px-6 md:px-12 py-12 group hover:bg-white/5 transition-colors">
            <div className="font-serif text-5xl text-primary/30 mb-6 group-hover:text-primary transition-colors duration-500">01</div>
            <h3 className="font-serif text-2xl text-foreground mb-3">Mission</h3>
            <p className="font-sans text-sm text-muted-foreground">To deliver flawless events that reflect each brand's ambition.</p>
          </div>

          <div className="flex-1 px-6 md:px-12 py-12 group hover:bg-white/5 transition-colors">
            <div className="font-serif text-5xl text-primary/30 mb-6 group-hover:text-primary transition-colors duration-500">02</div>
            <h3 className="font-serif text-2xl text-foreground mb-3">Vision</h3>
            <p className="font-sans text-sm text-muted-foreground">India's most trusted corporate event partner by 2030.</p>
          </div>

          <div className="flex-1 px-6 md:px-12 py-12 group hover:bg-white/5 transition-colors">
            <div className="font-serif text-5xl text-primary/30 mb-6 group-hover:text-primary transition-colors duration-500">03</div>
            <h3 className="font-serif text-2xl text-foreground mb-3">Values</h3>
            <p className="font-sans text-sm text-muted-foreground">Precision. Integrity. Creativity.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
