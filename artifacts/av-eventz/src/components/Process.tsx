import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { name: "Discovery", desc: "Understanding your brand and objectives." },
    { name: "Planning", desc: "Crafting the blueprint and budgeting." },
    { name: "Design", desc: "Conceptualizing themes and creatives." },
    { name: "Production", desc: "Sourcing vendors and fabrication." },
    { name: "Execution", desc: "On-ground management and show running." },
    { name: "Celebration", desc: "Post-event reporting and wrap-up." }
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Our Methodology</span>
        <h2 className="text-4xl font-serif">How We Deliver Excellence</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-border z-0">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-background border border-primary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <span className="font-serif text-xl text-primary group-hover:text-background transition-colors">0{index + 1}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">{step.name}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
