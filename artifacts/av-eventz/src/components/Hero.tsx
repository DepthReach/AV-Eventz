import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroBg from '@assets/AV_Images/Hero/IMG-20260709-WA0057.jpg';

const Counter = ({ end, suffix = '', inView }: { end: number, suffix?: string, inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, inView]);

  return <span>{count}{suffix}</span>;
};

export default function Hero() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(201,168,76,0.15),_transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-3/5 mt-20 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="inline-block text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Corporate Event Management
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-[80px] leading-[1.1] font-serif mb-6 text-foreground">
            Every Event Has One Chance To <span className="italic font-light text-primary/90">Make An Impression.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            AV Eventz creates conferences, exhibitions, product launches, annual meets, award nights and unforgettable corporate experiences across India.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wider uppercase font-medium text-center">
              Get Free Consultation
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-transparent text-foreground hover:text-primary transition-all duration-300 text-sm tracking-wider uppercase font-medium text-center relative group">
              View Portfolio
              <span className="absolute bottom-3 left-8 right-8 h-[1px] bg-primary/30 group-hover:bg-primary transition-colors"></span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Stats Card */}
        <motion.div 
          className="hidden md:block w-full md:w-1/3 pt-12 md:pt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          ref={statsRef}
        >
          <div className="backdrop-blur-md bg-background/40 border border-primary/30 p-8 flex flex-col gap-8 shadow-2xl">
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-primary mb-1">
                <Counter end={500} suffix="+" inView={isStatsInView} />
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Events Delivered</span>
            </div>
            
            <div className="w-full h-[1px] bg-primary/20"></div>
            
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-primary mb-1">
                <Counter end={150} suffix="+" inView={isStatsInView} />
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Corporate Clients</span>
            </div>
            
            <div className="w-full h-[1px] bg-primary/20"></div>
            
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-primary mb-1">
                <Counter end={20} suffix="+" inView={isStatsInView} />
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Cities Covered</span>
            </div>
            
            <div className="w-full h-[1px] bg-primary/20"></div>
            
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-primary mb-1">
                <Counter end={98} suffix="%" inView={isStatsInView} />
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
