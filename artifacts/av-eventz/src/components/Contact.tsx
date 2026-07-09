import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">Let's Plan Your Next Event</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Call Us</h4>
                  <a href="tel:+919466227355" className="text-xl font-serif hover:text-primary transition-colors">+91 9466227355</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Email Us</h4>
                  <a href="mailto:avevent@zoho.in" className="text-xl font-serif hover:text-primary transition-colors">avevent@zoho.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Visit Us</h4>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    B-07/2, HUDA Market,<br />
                    Opp. Nehru College, Sector-16,<br />
                    Faridabad, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Business Hours</h4>
                  <p className="text-lg font-light text-foreground/80">Mon–Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 border border-border p-1 bg-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.300642732007!2d77.3182181!3d28.4068305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71a0670001%3A0x6b6c2c62c03b1!2sSector%2016%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card/50 border border-border p-8 md:p-12">
              <h3 className="text-2xl font-serif mb-8 text-primary border-b border-border pb-4">Request a Consultation</h3>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h4 className="text-xl font-serif">Message Sent Successfully</h4>
                  <p className="text-sm font-light">Thank you for reaching out. Our event specialists will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                      <input required type="text" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                      <input required type="tel" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                      <input required type="email" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Company</label>
                      <input type="text" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Event Type</label>
                      <select required defaultValue="" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                        <option value="" disabled>Select an option</option>
                        <option value="Conference">Conference</option>
                        <option value="Product Launch">Product Launch</option>
                        <option value="Annual Meet">Annual Meet</option>
                        <option value="Exhibition">Exhibition</option>
                        <option value="Award Night">Award Night</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Estimated Budget</label>
                      <select required defaultValue="" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                        <option value="" disabled>Select a range</option>
                        <option value="Below ₹5L">Below ₹5L</option>
                        <option value="₹5L–₹15L">₹5L – ₹15L</option>
                        <option value="₹15L–₹30L">₹15L – ₹30L</option>
                        <option value="₹30L+">₹30L+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Message / Requirements</label>
                    <textarea required rows={4} className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your event..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors p-4 uppercase tracking-wider font-medium text-sm mt-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/919466227355" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </section>
  );
}
