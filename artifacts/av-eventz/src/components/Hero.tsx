import { useEffect, useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import heroBg from '@assets/AV_Images/Hero/IMG-20260709-WA0057.jpg';

function CountUp({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns scale-100"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[rgba(17,17,17,0.88)] to-[rgba(17,17,17,0.45)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row h-full items-center justify-between pt-20">
        
        {/* Left Column (55%) */}
        <div className="w-full md:w-[55%] flex flex-col justify-center h-full">
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.span variants={itemVariants} className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-8 border border-primary/30 px-4 py-1.5 rounded-full">
              Corporate Event Management — India
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="font-serif text-[52px] md:text-[96px] leading-[1.0] text-foreground mb-8">
              Every Event Has<br />One Chance To<br />Make An <br />
              <span className="italic font-light opacity-90">Impression.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="font-sans text-[18px] text-foreground/80 max-w-[480px] mb-12 leading-relaxed font-light">
              We engineer premium corporate experiences for India's leading brands. No second takes, just flawless execution.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mb-16">
              <a href="#contact" className="group border border-primary bg-background text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors duration-300">
                Start Planning
              </a>
              <a href="#portfolio" className="group relative font-sans text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                View Our Work
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-primary/60" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column (45%) */}
        <div className="hidden md:flex w-[45%] justify-end relative">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="backdrop-blur-xl bg-[#111]/60 border border-primary/30 p-10 shadow-[inset_0_0_20px_rgba(201,168,76,0.05)] w-full max-w-[440px]"
          >
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <div>
                <div className="font-serif text-5xl text-primary mb-2"><CountUp end={500} suffix="+" /></div>
                <div className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">Events Executed</div>
              </div>
              <div>
                <div className="font-serif text-5xl text-primary mb-2"><CountUp end={150} suffix="+" /></div>
                <div className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">Corporate Clients</div>
              </div>
              <div>
                <div className="font-serif text-5xl text-primary mb-2"><CountUp end={20} suffix="+" /></div>
                <div className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">Cities PAN India</div>
              </div>
              <div>
                <div className="font-serif text-5xl text-primary mb-2"><CountUp end={98} suffix="%" /></div>
                <div className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
