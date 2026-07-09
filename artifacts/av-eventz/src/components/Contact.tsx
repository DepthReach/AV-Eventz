import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    type: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-[#111] border-t border-white/5 relative flex flex-col lg:flex-row min-h-screen">
      
      {/* Left Column (45%) */}
      <div className="w-full lg:w-[45%] p-12 md:p-24 flex flex-col justify-between border-r border-white/5 relative z-10 bg-[#0d0d0d]">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-8 block">
            Let's Talk
          </span>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-foreground mb-12">
            Start Your <br/>Event Journey
          </h2>
          
          <div className="space-y-8 font-sans text-[15px] text-muted-foreground mb-16">
            <div>
              <a href="tel:+919466227355" className="block hover:text-primary transition-colors text-xl text-foreground mb-1">+91 94662 27355</a>
              <a href="mailto:avevent@zoho.in" className="block hover:text-primary transition-colors">avevent@zoho.in</a>
            </div>
            <div>
              <p className="leading-relaxed">
                B-07/2, HUDA Market,<br/>
                Opp. Nehru College, Sector-16,<br/>
                Faridabad, Haryana
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="uppercase tracking-widest text-[11px] mb-2">Business Hours</p>
              <p>Monday – Saturday, 9:00 AM – 7:00 PM</p>
            </div>
          </div>

          <a 
            href="https://wa.me/919466227355" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-[#20b858] transition-colors rounded-sm"
          >
            <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>

        {/* Maps iframe */}
        <div className="mt-16 w-full aspect-[16/9] border border-primary/20 overflow-hidden rounded-sm relative opacity-80 hover:opacity-100 transition-opacity">
          <iframe 
            src="https://maps.google.com/maps?q=Sector+16+Faridabad+Haryana&output=embed" 
            className="absolute inset-0 w-full h-full border-0 grayscale invert"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay"></div>
        </div>
      </div>

      {/* Right Column (55%) */}
      <div className="w-full lg:w-[55%] p-12 md:p-24 bg-[#111] flex items-center justify-center">
        
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full border border-primary flex items-center justify-center mx-auto mb-8 text-primary">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-4xl text-foreground mb-4">Thank You</h3>
            <p className="font-sans text-muted-foreground">We'll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-[600px] space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="relative group">
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <select 
                  name="type"
                  defaultValue=""
                  required
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-[#111] text-muted-foreground">Event Type</option>
                  <option value="Conference" className="bg-[#111]">Conference</option>
                  <option value="Product Launch" className="bg-[#111]">Product Launch</option>
                  <option value="Annual Meet" className="bg-[#111]">Annual Meet</option>
                  <option value="Exhibition" className="bg-[#111]">Exhibition</option>
                  <option value="Award Night" className="bg-[#111]">Award Night</option>
                  <option value="Wedding" className="bg-[#111]">Wedding</option>
                  <option value="Other" className="bg-[#111]">Other</option>
                </select>
              </div>
              <div className="relative group">
                <select 
                  name="budget"
                  defaultValue=""
                  required
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-[#111] text-muted-foreground">Estimated Budget</option>
                  <option value="Below 5L" className="bg-[#111]">Below ₹5L</option>
                  <option value="5L-15L" className="bg-[#111]">₹5L – ₹15L</option>
                  <option value="15L-30L" className="bg-[#111]">₹15L – ₹30L</option>
                  <option value="30L+" className="bg-[#111]">₹30L+</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event..."
                rows={4}
                className="w-full bg-transparent border-b border-primary/30 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-black border border-primary text-primary h-14 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors duration-300 mt-4"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
