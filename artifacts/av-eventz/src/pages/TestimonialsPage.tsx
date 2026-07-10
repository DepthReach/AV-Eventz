import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const testimonials = [
  {
    quote: "AV Eventz delivered an outstanding conference for us. The precision in their execution and the quality of the technical setup was beyond our expectations.",
    name: "Rajesh Kumar",
    title: "Marketing Director"
  },
  {
    quote: "Their stage production and LED setups are top-notch. They handled our annual dealer meet flawlessly, managing everything from artist bookings to venue decoration.",
    name: "Sneha Gupta",
    title: "Brand Manager"
  },
  {
    quote: "A truly professional team. They took complete ownership of our product launch, allowing us to focus entirely on our guests and the product.",
    name: "Amit Sharma",
    title: "CEO"
  },
  {
    quote: "From brief to wrap-up, they managed everything without a single follow-up from us. That's rare.",
    name: "Ankit Shah",
    title: "CEO"
  },
  {
    quote: "The LED setup and sound at our product launch were better than any event we've attended as guests. Truly professional.",
    name: "Neha Verma",
    title: "Brand Manager"
  },
  {
    quote: "We've worked with 3 event companies before AV Eventz. We've never looked back.",
    name: "Rohit Sharma",
    title: "HR Head"
  }
];

export default function TestimonialsPage() {
  return (
    <Layout>
      <SEO title="Testimonials | AV Eventz" description="Read what our clients have to say about working with AV Eventz." />
      <PageHero
        title="What Our Clients Say"
        subtitle="Don't just take our word for it."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Testimonials', href: '/testimonials' }]}
      />
      
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0d0d0d] p-10 border border-primary/10 relative">
                <div className="font-serif text-8xl text-primary/10 leading-none absolute top-4 left-6">"</div>
                <blockquote className="font-serif italic text-xl text-foreground/90 mb-8 relative z-10">{t.quote}</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-primary" />
                  <div>
                    <div className="font-sans text-sm uppercase tracking-widest text-foreground">{t.name}</div>
                    <div className="font-sans text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0d0d] text-center border-t border-primary/10">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Ready to Experience the Same?</h2>
          <Link href="/contact" className="inline-block mt-6 border border-primary text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
