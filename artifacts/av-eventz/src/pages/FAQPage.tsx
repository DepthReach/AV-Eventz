import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const faqs = [
  { q: "What types of events do you manage?", a: "We specialize in corporate events, conferences, exhibitions, product launches, award ceremonies, and annual meets." },
  { q: "Which cities do you operate in?", a: "We are headquartered in Faridabad, Delhi NCR, but we execute events across India, covering over 20+ major cities." },
  { q: "How early should we start planning our event?", a: "For large conferences and exhibitions, we recommend starting 3-6 months in advance. For smaller corporate gatherings, 4-6 weeks is usually sufficient." },
  { q: "Do you provide all AV equipment?", a: "Yes, we own and maintain state-of-the-art AV equipment, including LED walls, sound systems, and lighting rigs." },
  { q: "Can you handle custom stall fabrication?", a: "Absolutely. Our in-house production team designs and fabricates custom exhibition stalls and stage setups to your exact specifications." },
  { q: "Do you provide décor services?", a: "Yes — complete venue transformation including floral arrangements, thematic décor, fabric draping, custom installations, and lighting." },
  { q: "Can you handle outdoor events?", a: "Yes. We have extensive experience with outdoor conferences, exhibitions, brand activations, and ceremonies with full weather contingency planning." },
  { q: "Do you manage celebrity or artist bookings?", a: "Yes — artist management is one of our core services. We source, book, and manage performers, speakers, and emcees." },
  { q: "Is audio-visual equipment rental included?", a: "It can be included as a complete package or quoted separately depending on your requirements." },
  { q: "Do you offer photography and videography?", a: "Yes — we provide professional event photography, videography, drone coverage, live streaming, and post-production editing." }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEO title="Frequently Asked Questions | AV Eventz" description="Answers to common questions about our corporate event management services." />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with us."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq' }]}
      />
      
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-px">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-primary/15 bg-[#0d0d0d]">
                <button
                  className="w-full text-left px-6 py-5 font-sans text-foreground/90 flex items-center justify-between hover:text-primary transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-8">{faq.q}</span>
                  <span className="text-primary flex-shrink-0 text-xl font-light">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 font-sans text-sm text-muted-foreground leading-relaxed bg-[#0d0d0d]">{faq.a}</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
