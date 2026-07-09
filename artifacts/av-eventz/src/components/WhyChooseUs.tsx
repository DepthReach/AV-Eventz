import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const points = [
    { title: "One Point Contact", desc: "A dedicated event manager from brief to wrap-up." },
    { title: "Creative Concepts", desc: "Ideas that start fresh every time, not recycled templates." },
    { title: "Professional Execution", desc: "Our team handles the chaos so you don't have to." },
    { title: "Vendor Network", desc: "200+ vetted vendors for any requirement, any city." },
    { title: "Transparent Pricing", desc: "No hidden charges. Ever." },
    { title: "PAN India Support", desc: "Operations in 20+ cities across India." }
  ];

  return (
    <section className="py-24 bg-card/30 relative border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">The AV Advantage</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Partner With Us?</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                In an industry where everyone promises the moon, we focus on delivering exactly what we agreed on — flawlessly.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="relative border-l border-primary/30 pl-8 md:pl-12 py-4 space-y-16">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Bullet */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  </div>
                  
                  <h3 className="text-2xl font-serif mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-lg font-light">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
