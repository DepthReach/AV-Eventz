import { motion, type Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        // Calculate progress based on scroll position relative to the section
        const progress = Math.min(1, Math.max(0, (windowHeight * 0.8 - rect.top) / (rect.height)));
        setLineWidth(progress * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your brand and objectives." },
    { num: "02", title: "Planning", desc: "Meticulous timelines and resource mapping." },
    { num: "03", title: "Design", desc: "Creating the visual and spatial experience." },
    { num: "04", title: "Production", desc: "Sourcing, fabrication, and technical setup." },
    { num: "05", title: "Execution", desc: "Flawless on-ground management." },
    { num: "06", title: "Celebration", desc: "Post-event analytics and wrap-up." }
  ];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section ref={sectionRef} className="bg-[#0d0d0d] py-32 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="font-serif text-5xl md:text-[64px] text-center text-foreground mb-24">How We Work</h2>
        
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden md:block absolute top-6 left-0 h-[1px] bg-white/10 w-full z-0">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out" 
              style={{ width: `${lineWidth}%` }}
            />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4"
          >
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-row md:flex-col items-center md:items-start text-left gap-6 md:gap-4 md:w-1/6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary bg-[#0d0d0d] flex items-center justify-center font-sans text-sm text-primary">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-2 md:mt-4">{step.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed md:max-w-[160px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
