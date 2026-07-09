import { motion } from 'framer-motion';
import aboutImg1 from '@assets/AV_Images/About/IMG-20260709-WA0108.jpg';
import aboutImg2 from '@assets/AV_Images/About/IMG-20260709-WA0110.jpg';

export default function About() {
  const cards = [
    {
      title: "Mission",
      text: "To deliver flawless corporate events that reflect the ambition and identity of every brand we serve."
    },
    {
      title: "Vision",
      text: "To become India's most trusted name in corporate event management by 2030."
    },
    {
      title: "Values",
      text: "Precision. Integrity. Creativity. Accountability."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          
          {/* Left Text */}
          <motion.div 
            className="w-full md:w-[60%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              We started AV Eventz with a simple belief — that every event should feel like it was made exactly for the people in the room.
            </h2>
            <div className="text-muted-foreground text-lg font-light leading-relaxed space-y-6">
              <p>
                Over the years, we've had the privilege of working with some of India's finest companies, turning ordinary corporate gatherings into moments people actually remember.
              </p>
              <p>
                From a last-minute product launch in Mumbai to a three-day annual conference in Delhi, we've handled it all — quietly, professionally, without drama.
              </p>
              <p className="text-foreground font-medium italic pt-4">
                What we do isn't just logistics. It's listening carefully, planning obsessively, and delivering without excuses.
              </p>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div 
            className="w-full md:w-[40%] relative min-h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-0 right-0 w-4/5 h-[400px] z-10">
              <img src={aboutImg1} alt="Corporate Event Setup" className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute bottom-0 left-0 w-3/4 h-[300px] z-20 border-8 border-background">
              <img src={aboutImg2} alt="Event Management Team" className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/20 -z-10"></div>
          </motion.div>

        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={card.title}
              className="bg-card/50 backdrop-blur-sm border-t-2 border-t-primary border-l border-r border-b border-border p-10 hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-serif text-primary mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
