import { motion, type Variants } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    { title: "One Point Contact", desc: "One dedicated person from brief to wrap-up." },
    { title: "Creative Concepts", desc: "Every event gets a fresh concept, never recycled." },
    { title: "Professional Execution", desc: "Our team handles the chaos so you never have to." },
    { title: "Vendor Network", desc: "200+ vetted vendors across India." },
    { title: "Transparent Pricing", desc: "What we quote is what you pay." },
    { title: "PAN India Operations", desc: "20+ cities, same standard everywhere." }
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="bg-[#0e0e0e] py-32 px-6 md:px-12 border-t border-primary/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-16 text-center">Why AV Eventz?</h2>
        
        <div className="flex flex-col border-t border-white/10">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-default transition-colors hover:bg-white/5"
            >
              <div className="font-serif text-3xl md:text-4xl text-primary/40 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 transform-origin-left w-16">
                0{idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{reason.title}</h3>
                <p className="font-sans text-[15px] text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
