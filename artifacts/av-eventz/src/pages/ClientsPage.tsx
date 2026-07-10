import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import TrustedBy from '@/components/TrustedBy';
import { motion, type Variants } from 'framer-motion';
import { SITE } from '@/config/constants';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function ClientsPage() {
  return (
    <Layout>
      <SEO title="Our Clients | AV Eventz" description="India's leading companies trust AV Eventz for their corporate event management." />
      <PageHero
        title="Our Clients"
        subtitle="India's leading companies trust AV Eventz."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Clients', href: '/clients' }]}
      />
      
      <div className="py-20 bg-[#111]">
        <TrustedBy />
      </div>

      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <div className="w-8 h-px bg-primary mb-4" />
            <h2 className="font-serif text-4xl">Industries We Serve</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['IT & Technology', 'BFSI', 'FMCG', 'Media', 'Healthcare', 'Government', 'Real Estate', 'Automotive', 'Education'].map((industry, i) => (
              <motion.div 
                key={industry}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-primary/20 p-6 flex items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="font-sans text-sm uppercase tracking-widest text-foreground/80">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-[#111] text-center border-t border-primary/10">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Join Our Roster</h2>
          <p className="text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">Discover the difference of working with a premier event partner.</p>
          <a href="/contact" className="inline-block border border-primary text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
