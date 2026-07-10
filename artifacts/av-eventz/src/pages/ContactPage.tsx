import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import { motion, type Variants } from 'framer-motion';
import { SITE } from '@/config/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    eventType: '',
    budget: '',
    guests: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <SEO title="Contact Us — Get a Quote | AV Eventz" description="Tell us about your event and we'll be in touch within 24 hours." />
      <PageHero
        title="Let's Talk"
        subtitle="Tell us about your event and we'll be in touch within 24 hours."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]}
      />
      
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="lg:col-span-3">
              <div className="w-8 h-px bg-primary mb-6" />
              <h2 className="font-serif text-3xl mb-8">Send Us a Message</h2>
              
              {status === 'success' ? (
                <div className="bg-primary/10 border border-primary p-8 text-center">
                  <h3 className="font-serif text-2xl text-primary mb-2">Message Sent</h3>
                  <p className="font-sans text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Full Name *</label>
                      <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone *</label>
                      <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Email *</label>
                      <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Event Type</label>
                      <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                        <option value="">Select...</option>
                        <option value="Conference">Conference</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Exhibition">Exhibition</option>
                        <option value="Award Night">Award Night</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Number of Guests</label>
                      <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                        <option value="">Select...</option>
                        <option value="<50">&lt; 50</option>
                        <option value="50-200">50 - 200</option>
                        <option value="200-500">200 - 500</option>
                        <option value="500-1000">500 - 1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Event Date</label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-[#0d0d0d] border border-primary/20 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none" />
                  </div>
                  
                  {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>}

                  <button disabled={status === 'loading'} type="submit" className="bg-primary text-black px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors w-full md:w-auto disabled:opacity-50">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="lg:col-span-2 space-y-10">
              <div>
                <div className="w-8 h-px bg-primary mb-6" />
                <h2 className="font-serif text-3xl mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</h3>
                      <a href={SITE.phoneHref} className="font-sans text-foreground hover:text-primary transition-colors">{SITE.phone}</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</h3>
                      <a href={`mailto:${SITE.email}`} className="font-sans text-foreground hover:text-primary transition-colors">{SITE.email}</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">Address</h3>
                      <p className="font-sans text-foreground leading-relaxed">{SITE.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-primary/20 p-2">
                <iframe src={SITE.mapEmbed} width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" title="Office Location Map"></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
