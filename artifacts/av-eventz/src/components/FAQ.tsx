import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much does a corporate event cost?",
      a: "Every event is different — scale, city, duration, and service mix all affect the number. Events start from ₹2 lakhs. We give you a tailored quote after a free 20-minute consultation."
    },
    {
      q: "Which cities do you operate in?",
      a: "We work in 20+ cities: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, and more. PAN India support for multi-city events."
    },
    {
      q: "Can you handle large-scale events?",
      a: "Yes. Our largest events have had 2,000+ attendees. Multi-city simultaneous execution is something we do regularly."
    },
    {
      q: "How far in advance should we book?",
      a: "4–6 weeks for mid-size events, 2–3 months for large conferences and multi-city formats."
    },
    {
      q: "Is end-to-end management included?",
      a: "Yes — consultation, concept, design, production, on-ground execution, and post-event reporting. All included."
    }
  ];

  return (
    <section className="bg-[#111] py-32 px-6 md:px-12 border-t border-primary/10">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-5/12">
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Common Questions</h2>
          <p className="font-sans text-muted-foreground text-lg max-w-sm">
            We've answered the ones we hear most often.
          </p>
        </div>

        <div className="md:w-7/12">
          <div className="divide-y divide-border">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6 border-white/10">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors pr-8">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
