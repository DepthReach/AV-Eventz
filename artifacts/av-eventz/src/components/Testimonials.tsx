import { motion, type Variants } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with AV Eventz was the first time in my career I didn't dread the event day. Everything was managed — I just showed up and watched it unfold.",
      name: "Priya Mehta",
      title: "Marketing Head",
      align: "left"
    },
    {
      quote: "Three events in two years. Every single one delivered better than promised. I've stopped looking for alternatives.",
      name: "Rajiv Arora",
      title: "Operations Head",
      align: "right"
    },
    {
      quote: "They understood our brand without us over-explaining. The result felt unmistakably ours. That kind of instinct is rare.",
      name: "Sunita Kapoor",
      title: "Corporate Communications",
      align: "left"
    }
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="bg-[#111] py-32 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-32">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col ${t.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
            >
              <div 
                className={`absolute top-[-80px] font-serif text-[200px] text-primary/10 select-none leading-none ${t.align === 'right' ? 'right-0' : 'left-0'}`}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="font-serif italic text-2xl md:text-[28px] text-foreground max-w-3xl leading-relaxed relative z-10 mb-8">
                {t.quote}
              </p>
              <div className={`flex items-center gap-4 ${t.align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-8 h-[1px] bg-primary"></div>
                <div className="font-sans text-[13px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> <span className="opacity-50 mx-2">|</span> {t.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
