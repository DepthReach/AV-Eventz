import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import Founder from '@/components/Founder';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { SITE } from '@/config/constants';
import bgImage from '@assets/AV_Images/About/IMG-20260709-WA0110.jpg';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About AV Eventz" description="The story behind India's most trusted corporate event partner. Over 500+ events managed across 20+ cities." />
      <PageHero
        title="About AV Eventz"
        subtitle="The story behind India's most trusted corporate event partner"
        bgImage={bgImage}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]}
      />
      
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="w-8 h-px bg-primary mb-6" />
              <h2 className="font-serif text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-sans text-lg">
                <p>AV Eventz is India's most trusted corporate event management partner, delivering end-to-end event solutions across 20+ cities. We specialize in conceptualizing and executing high-impact corporate events, from annual conferences to leadership offsites.</p>
                <p>Founded on the principles of precision and creativity, we have successfully managed over 500+ large-scale events for some of the biggest brands in the country. Our team of experienced professionals ensures every detail is meticulously planned and flawlessly executed.</p>
                <p>We believe that an event is not just a gathering, but a powerful communication tool. We work closely with our clients to understand their objectives and create immersive experiences that resonate with their audience and leave a lasting impression.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-6">
              <div className="border border-primary/20 p-8 text-center bg-[#0d0d0d]">
                <div className="font-serif text-4xl text-primary mb-2">500+</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-widest">Events Executed</div>
              </div>
              <div className="border border-primary/20 p-8 text-center bg-[#0d0d0d]">
                <div className="font-serif text-4xl text-primary mb-2">150+</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-widest">Happy Clients</div>
              </div>
              <div className="border border-primary/20 p-8 text-center bg-[#0d0d0d]">
                <div className="font-serif text-4xl text-primary mb-2">20+</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-widest">Cities Covered</div>
              </div>
              <div className="border border-primary/20 p-8 text-center bg-[#0d0d0d]">
                <div className="font-serif text-4xl text-primary mb-2">98%</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-widest">Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Founder />

      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-serif text-2xl mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground font-sans">To empower brands by creating impactful, meticulously crafted event experiences that communicate their core message, engage their audience, and drive their organizational objectives forward.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}>
              <h3 className="font-serif text-2xl mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground font-sans">To be the most reliable and innovative corporate event partner in India, known for transforming complex logistical challenges into seamless, unforgettable brand moments.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}>
              <h3 className="font-serif text-2xl mb-4 text-primary">Our Values</h3>
              <ul className="text-muted-foreground font-sans space-y-2">
                <li>• Excellence in Execution</li>
                <li>• Uncompromising Integrity</li>
                <li>• Creative Problem Solving</li>
                <li>• Client-First Approach</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111] text-center border-t border-primary/10">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Ready to work with us?</h2>
          <p className="text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">Let's build something extraordinary together. Contact us today to discuss your next event.</p>
          <Link href="/contact" className="inline-block border border-primary bg-background text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
            Work With Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
