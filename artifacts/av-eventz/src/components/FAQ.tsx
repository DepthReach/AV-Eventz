import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How much does a corporate event cost?",
    a: "Event costs depend on the scale, city, duration, and services required. We offer customized packages starting from ₹2 lakhs. Contact us for a free consultation and tailored quote."
  },
  {
    q: "Which cities do you serve?",
    a: "We operate in 20+ cities including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, and more. PAN India support available."
  },
  {
    q: "Can you manage large-scale events?",
    a: "Yes. We have managed events with 2,000+ attendees, multi-city simultaneous events, and multi-day conferences. Our vendor network scales with your requirements."
  },
  {
    q: "How early should we book?",
    a: "We recommend reaching out at least 4–6 weeks in advance for mid-size events and 2–3 months for large conferences and multi-city events."
  },
  {
    q: "Do you provide end-to-end event management?",
    a: "Absolutely. From initial consultation and creative concept to on-ground execution and post-event reporting — we manage everything."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl font-serif">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-colors duration-300 ${openIndex === index ? 'border-primary bg-card' : 'border-border bg-transparent'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggle(index)}
              >
                <span className="font-serif text-xl pr-8">{faq.q}</span>
                <span className="text-primary shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
