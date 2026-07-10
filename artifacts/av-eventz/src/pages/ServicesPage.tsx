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

const servicesList = [
  { title: 'Corporate Events', slug: 'corporate-events', desc: 'Annual conferences, town halls, leadership offsites, and corporate gatherings at any scale.' },
  { title: 'Conferences', slug: 'conferences', desc: 'Multi-day conference design, speaker management, AV production, and attendee experience.' },
  { title: 'Product Launches', slug: 'product-launches', desc: 'Launch experiences that create buzz and make your product unforgettable.' },
  { title: 'Exhibitions', slug: 'exhibitions', desc: 'Trade show stalls, exhibition stands, and complete booth fabrication.' },
  { title: 'Dealer Meets', slug: 'dealer-meets', desc: 'Energising dealer and distributor meets that align teams and drive performance.' },
  { title: 'Annual Meets', slug: 'annual-meets', desc: 'Year-end celebrations and annual gatherings that your team looks forward to.' },
  { title: 'Road Shows', slug: 'road-shows', desc: 'Multi-city road show logistics, venue coordination, and brand consistency.' },
  { title: 'Brand Promotions', slug: 'brand-promotions', desc: 'On-ground brand activation campaigns that create lasting impressions.' },
  { title: 'Award Nights', slug: 'award-nights', desc: 'Prestigious award ceremonies and gala nights with drama and precision.' },
  { title: 'MICE', slug: 'mice', desc: 'Meetings, incentives, conferences, and exhibitions — complete MICE solutions.' },
  { title: 'Weddings', slug: 'weddings', desc: 'Luxury wedding planning with flawless execution and timeless elegance.' },
  { title: 'Birthdays', slug: 'birthdays', desc: 'Premium birthday celebrations, milestone parties, and private events.' },
  { title: 'Artist Management', slug: 'artist-management', desc: 'Talent sourcing, booking, and management for performers, speakers, and emcees.' },
  { title: 'Photography & Videography', slug: 'photography-videography', desc: 'Professional event photography, videography, live streaming, and post-production.' },
  { title: 'Stage Production', slug: 'stage-production', desc: 'Full stage design, rigging, scenic elements, and structural production.' },
  { title: 'LED Walls', slug: 'led-walls', desc: 'Large-format LED screen rental, installation, and content display solutions.' },
  { title: 'Sound & Light', slug: 'sound-light', desc: 'Pro-grade sound systems, automated lighting rigs, and technical crew.' },
  { title: 'Venue Decoration', slug: 'venue-decoration', desc: 'Complete venue transformation — floral, fabric, lighting, and thematic décor.' }
];

export default function ServicesPage() {
  return (
    <Layout>
      <SEO title="Event Management Services | AV Eventz" description="From boardroom to ballroom — discover our full suite of corporate event management services." />
      <PageHero
        title="Our Services"
        subtitle="From boardroom to ballroom — every format, every scale."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }]}
      />
      
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="group flex flex-col border border-primary/10 bg-[#0d0d0d] p-8 hover:border-primary/40 transition-colors relative">
                <div className="font-serif text-3xl text-primary/30 mb-6 group-hover:text-primary/60 transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{service.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed flex-grow mb-8">{service.desc}</p>
                <Link href={`/services/${service.slug}`} className="font-sans text-xs uppercase tracking-widest text-primary hover:text-white transition-colors mt-auto inline-flex items-center">
                  Learn More <span className="ml-2">→</span>
                </Link>
                <Link href={`/services/${service.slug}`} className="absolute inset-0" aria-label={`View ${service.title} details`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
