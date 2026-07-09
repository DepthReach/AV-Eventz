import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    quote: "Working with AV Eventz transformed our annual conference. The attention to detail was extraordinary — every session ran on time, every vendor was briefed perfectly. I didn't have to worry about a single thing.",
    author: "Priya Mehta",
    title: "Marketing Head, Mitra Industries"
  },
  {
    quote: "We've used three event companies before AV Eventz. None of them came close. Their team handled our product launch across two cities simultaneously and delivered without a single hiccup.",
    author: "Rajiv Arora",
    title: "Regional Operations Head"
  },
  {
    quote: "I was skeptical when we first hired them. Now I won't touch another vendor. Three years, eleven events — every single one delivered better than promised.",
    author: "Sunita Kapoor",
    title: "HR Director, Corporate Communications"
  },
  {
    quote: "They understood our brand without us having to over-explain. The theme, the decor, the program flow — everything felt unmistakably ours. Rare quality in this industry.",
    author: "Ankit Sharma",
    title: "Marketing Lead, IDFC Bank"
  }
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true })
  ]);

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card/20 rounded-l-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif">What They Say</h2>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((test, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0">
                <div className="bg-card p-10 h-full border border-border hover:border-primary/50 transition-colors flex flex-col relative group">
                  <Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12 group-hover:text-primary/40 transition-colors" />
                  
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                    "{test.quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-serif text-lg text-foreground">{test.author}</h4>
                    <span className="text-xs text-primary uppercase tracking-wider">{test.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
