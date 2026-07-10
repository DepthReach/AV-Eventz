import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import { motion, type Variants } from 'framer-motion';
import { SITE } from '@/config/constants';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const jobs = [
  { title: "Event Coordinator", dept: "Operations", type: "Full-Time", location: "Faridabad, Haryana", desc: "Manage event logistics, vendor coordination, and on-ground execution for corporate events." },
  { title: "Business Development Executive", dept: "Sales", type: "Full-Time", location: "Faridabad, Haryana", desc: "Identify and pitch to corporate clients, manage client relationships, and drive sales growth." },
  { title: "AV Technician", dept: "Technical", type: "Full-Time", location: "Faridabad, Haryana", desc: "Setup, operate, and troubleshoot audio-visual equipment including LED walls and sound systems." }
];

export default function CareersPage() {
  return (
    <Layout>
      <SEO title="Careers | AV Eventz" description="Join the team behind India's finest events." />
      <PageHero
        title="Careers at AV Eventz"
        subtitle="Join the team behind India's finest events."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }]}
      />
      
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-16 max-w-4xl">
            <div className="w-8 h-px bg-primary mb-6" />
            <h2 className="font-serif text-3xl mb-6">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-primary mb-2">High-Impact Work</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">Work on large-scale events for top tier corporate clients across India.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-primary mb-2">Growth Environment</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">Continuous learning opportunities in a fast-paced, dynamic industry.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-primary mb-2">Creative Freedom</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">We value innovative ideas and empower our team to bring them to life.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-primary mb-2">Strong Culture</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">A supportive team that works hard and celebrates successes together.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-8 h-px bg-primary mb-6" />
            <h2 className="font-serif text-3xl mb-8">Open Positions</h2>
            
            <div className="space-y-6">
              {jobs.map((job, i) => (
                <div key={i} className="border border-primary/20 bg-[#0d0d0d] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      <span>{job.dept}</span>
                      <span className="text-primary/50">|</span>
                      <span>{job.type}</span>
                      <span className="text-primary/50">|</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="font-sans text-sm text-foreground/80 max-w-2xl">{job.desc}</p>
                  </div>
                  <a href={`mailto:${SITE.email}?subject=Application for ${job.title}`} className="border border-primary text-primary px-6 py-3 font-sans text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-colors whitespace-nowrap self-start md:self-auto">
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 border border-primary/10 bg-[#0a0a0a] text-center">
              <p className="font-sans text-muted-foreground mb-4">Don't see a fit? We're always looking for talent.</p>
              <a href={`mailto:${SITE.email}`} className="text-primary font-sans text-sm uppercase tracking-widest hover:text-white transition-colors">Send your CV to {SITE.email}</a>
            </div>
          </motion.div>
          
        </div>
      </section>
    </Layout>
  );
}
