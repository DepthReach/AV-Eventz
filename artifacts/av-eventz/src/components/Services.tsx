import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import srv1 from '@assets/AV_Images/Services/IMG-20260709-WA0061.jpg';
import srv2 from '@assets/AV_Images/Services/IMG-20260709-WA0062.jpg';
import srv3 from '@assets/AV_Images/Services/IMG-20260709-WA0035.jpg';
import srv4 from '@assets/AV_Images/Services/IMG-20260709-WA0027.jpg';
import srv5 from '@assets/AV_Images/Services/IMG-20260709-WA0017.jpg';
import srv6 from '@assets/AV_Images/Services/IMG-20260709-WA0013.jpg';

const mainServices = [
  {
    title: "Corporate Events",
    desc: "End-to-end management for town halls, leadership offsites, and corporate retreats. We ensure your corporate messaging is delivered in an environment that inspires.",
    img: srv1,
    align: "left"
  },
  {
    title: "Conferences & Exhibitions",
    desc: "Large-scale logistics, venue management, registration desks, and immersive exhibition stall designs that drive engagement and networking.",
    img: srv2,
    align: "right"
  },
  {
    title: "Product Launches",
    desc: "Theatrical reveals, brand activations, and press-worthy moments designed to put your new product in the spotlight it deserves.",
    img: srv3,
    align: "left"
  },
  {
    title: "Award Nights & Galas",
    desc: "Glamorous red-carpet setups, stage design, trophies, and flawless show-running to celebrate your industry's best in style.",
    img: srv4,
    align: "right"
  },
  {
    title: "Artist Management",
    desc: "Curated entertainment from motivational speakers to A-list celebrities and bands, handling all riders and technical requirements.",
    img: srv5,
    align: "left"
  },
  {
    title: "Technical Production",
    desc: "State-of-the-art sound, lighting, LED walls, and AV setups managed by technical experts who leave nothing to chance.",
    img: srv6,
    align: "right"
  }
];

const smallServices = [
  "Wedding Planning", "Fabrication", "Venue Management", 
  "Sound & Lighting", "Registration Desk", "Hospitality"
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif">What We Do Best</h2>
        </div>

        <div className="space-y-32">
          {mainServices.map((srv, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-12 items-center ${srv.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <motion.div 
                className="w-full md:w-1/2 relative overflow-hidden group"
                initial={{ opacity: 0, x: srv.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-card">
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none transition-all duration-500 group-hover:m-6 group-hover:border-primary/50"></div>
              </motion.div>

              <motion.div 
                className="w-full md:w-1/2 flex flex-col justify-center"
                initial={{ opacity: 0, x: srv.align === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary font-mono text-sm mb-4">0{index + 1} //</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">{srv.title}</h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8 max-w-lg">
                  {srv.desc}
                </p>
                <a href="#contact" className="inline-flex items-center text-primary font-medium group hover:text-foreground transition-colors w-fit">
                  <span className="mr-2 uppercase text-sm tracking-wider">Discuss Requirements</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Small Services Grid */}
        <div className="mt-32 pt-16 border-t border-border">
          <h3 className="text-center font-serif text-2xl text-muted-foreground mb-12">Also specializing in</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {smallServices.map((service, idx) => (
              <motion.div 
                key={idx}
                className="px-4 py-6 bg-card/30 border border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="text-sm uppercase tracking-wider">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
