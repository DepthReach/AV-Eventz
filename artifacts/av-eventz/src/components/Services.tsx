import { motion, type Variants } from 'framer-motion';

import img1 from '@assets/AV_Images/Services/IMG-20260709-WA0061.jpg';
import img2 from '@assets/AV_Images/Services/IMG-20260709-WA0062.jpg';
import img3 from '@assets/AV_Images/Services/IMG-20260709-WA0035.jpg';
import img4 from '@assets/AV_Images/Services/IMG-20260709-WA0027.jpg';
import img5 from '@assets/AV_Images/Services/IMG-20260709-WA0017.jpg';
import img6 from '@assets/AV_Images/Services/IMG-20260709-WA0013.jpg';

export default function Services() {
  const mainServices = [
    {
      img: img1,
      title: "Corporate Events & Annual Meets",
      text: "From intimate leadership offsites to 2,000-person annual conferences, we design events that reflect your company's culture and ambitions.",
      alignLeft: false
    },
    {
      img: img2,
      title: "Product Launches & Brand Activations",
      text: "We create launch experiences that get your product talked about — spatial storytelling, tech-forward setups, and audiences who remember what they felt.",
      alignLeft: true
    },
    {
      img: img3,
      title: "Conferences & Exhibitions",
      text: "Complex multi-day conferences, seminar series, trade shows — we manage the full chain from speaker logistics to stall fabrication.",
      alignLeft: false
    },
    {
      img: img4,
      title: "Award Ceremonies & Gala Nights",
      text: "Velvet, drama, and a flawless programme. We make your recognition events feel as prestigious as the people being honored.",
      alignLeft: true
    },
    {
      img: img5,
      title: "Audio Visual & Technical Production",
      text: "LED walls, pro-grade sound, automated lighting, and stage engineering — everything needed for events that feel technically immaculate.",
      alignLeft: false
    },
    {
      img: img6,
      title: "Artist Management & Entertainment",
      text: "Emcees, performers, motivational speakers, musical acts — we source and manage talent so your event has the energy it deserves.",
      alignLeft: true
    }
  ];

  const secondaryServices = [
    "Wedding Planning", "Dealer Meets", "Hospitality", 
    "Fabrication", "Venue Management", "Registration Desk", 
    "Lighting", "Sound", "AV & LED Walls"
  ];

  const imageReveal: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } }
  };

  const imageRevealLeft: Variants = {
    hidden: { clipPath: 'inset(0 0 0 100%)' },
    visible: { clipPath: 'inset(0 0 0 0%)', transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } }
  };

  const textReveal: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } }
  };
  const textItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="services" className="bg-[#111] overflow-hidden w-full">
      <div className="w-full">
        {mainServices.map((srv, idx) => (
          <div key={idx} className={`flex flex-col ${srv.alignLeft ? 'md:flex-row-reverse' : 'md:flex-row'} w-full min-h-[500px]`}>
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden group">
              <motion.div
                variants={srv.alignLeft ? imageRevealLeft : imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="w-full h-full"
              >
                <img 
                  src={srv.img} 
                  alt={srv.title} 
                  className="w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 transition-all duration-[3000ms] ease-out transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-[#0a0a0a]">
              <motion.div 
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-[480px] w-full"
              >
                <motion.div variants={textItem} className="font-serif text-2xl text-primary/50 mb-6">0{idx + 1}</motion.div>
                <motion.h3 variants={textItem} className="font-serif text-[40px] md:text-[48px] leading-[1.1] text-foreground mb-6">
                  {srv.title}
                </motion.h3>
                <motion.p variants={textItem} className="font-sans text-[16px] text-muted-foreground leading-relaxed mb-10">
                  {srv.text}
                </motion.p>
                <motion.a variants={textItem} href="#contact" aria-label="Request a Quote" className="inline-block font-sans text-sm uppercase tracking-widest text-primary relative group btn-magnetic">
                  Request a Quote
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary group-hover:w-0 transition-all duration-300" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-white/5">
          {secondaryServices.map((srv, idx) => (
            <div 
              key={idx} 
              className="border-r border-b border-white/5 p-8 flex items-center justify-center hover:bg-[#C9A84C]/5 transition-colors duration-300 cursor-default group"
            >
              <span className="font-sans text-sm uppercase tracking-widest text-primary/70 group-hover:text-primary transition-colors text-center">
                {srv}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
