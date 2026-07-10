import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import PageHero from './PageHero';
import SEO from '@/components/SEO';
import { SITE } from '@/config/constants';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface Step { step: string; title: string; desc: string; }
interface FAQ { q: string; a: string; }
interface GalleryImg { src: string; alt: string; }
interface RelatedService { title: string; href: string; }

interface ServiceTemplateProps {
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  overview: string;
  benefits: string[];
  process: Step[];
  gallery: GalleryImg[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
  testimonial?: { quote: string; name: string; title: string; };
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ServiceTemplate(props: ServiceTemplateProps) {
  const { seoTitle, seoDescription, heroTitle, heroSubtitle, heroImage, overview, benefits, process, gallery, faqs, relatedServices, testimonial } = props;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: heroTitle, href: '#' }]}
        bgImage={heroImage}
      />

      {/* Overview */}
      <section className="bg-[#111] py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-8 h-px bg-primary mb-6" />
            <h2 className="font-serif text-4xl text-foreground mb-6">Overview</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">{overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <div className="w-8 h-px bg-primary mb-4" />
            <h2 className="font-serif text-4xl text-foreground">Why Choose Us For This</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-primary/20 p-6 hover:border-primary/50 transition-colors">
                <div className="font-serif text-xl text-primary mb-2">0{i + 1}</div>
                <p className="font-sans text-foreground/80 text-sm leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="bg-[#111] py-20">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
              <div className="w-8 h-px bg-primary mb-4" />
              <h2 className="font-serif text-4xl text-foreground">Gallery</h2>
            </motion.div>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {gallery.map((img, i) => (
                <div key={i} className="break-inside-avoid overflow-hidden group">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <div className="w-8 h-px bg-primary mb-4" />
            <h2 className="font-serif text-4xl text-foreground">How We Work</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
              {process.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="md:pl-20 relative">
                  <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 border border-primary/50 items-center justify-center">
                    <span className="font-serif text-primary text-sm">{p.step}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">{p.title}</h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-2xl">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="bg-[#111] py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
            <div className="font-serif text-8xl text-primary/30 leading-none mb-4">"</div>
            <blockquote className="font-serif italic text-2xl text-foreground/90 mb-8">{testimonial.quote}</blockquote>
            <div className="w-8 h-px bg-primary mx-auto mb-4" />
            <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground">{testimonial.name} — {testimonial.title}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-[#0d0d0d] py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
              <div className="w-8 h-px bg-primary mb-4" />
              <h2 className="font-serif text-4xl text-foreground">Frequently Asked</h2>
            </motion.div>
            <div className="space-y-px">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-primary/15">
                  <button
                    className="w-full text-left px-6 py-5 font-sans text-foreground/90 flex items-center justify-between hover:text-primary transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="pr-8">{faq.q}</span>
                    <span className="text-primary flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-[#111] py-20">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
              <div className="w-8 h-px bg-primary mb-4" />
              <h2 className="font-serif text-4xl text-foreground">Related Services</h2>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              {relatedServices.map((s, i) => (
                <Link key={i} href={s.href} className="border border-primary/30 px-6 py-3 font-sans text-sm uppercase tracking-wider text-foreground/70 hover:border-primary hover:text-primary transition-all">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 border-t border-primary/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Ready to Begin?</h2>
          <p className="font-sans text-muted-foreground mb-10 max-w-xl mx-auto">Tell us about your event and we'll put together a custom plan.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="border border-primary bg-background text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
              Get a Quote
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-green-500/50 text-green-400 px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-green-500/10 transition-colors">
              <FaWhatsapp size={16} /> WhatsApp
            </a>
            <a href={SITE.phoneHref} className="flex items-center gap-2 text-foreground/60 px-8 py-4 font-sans text-sm uppercase tracking-widest hover:text-primary transition-colors">
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
