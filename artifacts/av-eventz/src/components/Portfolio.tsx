import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Importing 18 portfolio images
import p1 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0040.jpg';
import p2 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0039.jpg';
import p3 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0038.jpg';
import p4 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0037.jpg';
import p5 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0033.jpg';
import p6 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0026.jpg';
import p7 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0025.jpg';
import p8 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0024.jpg';
import p9 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0023.jpg';
import p10 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0022.jpg';
import p11 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0019.jpg';
import p12 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0018.jpg';
import p13 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0016.jpg';
import p14 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0015.jpg';
import p15 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0009.jpg';
import p16 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0008.jpg';
import p17 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0007.jpg';
import p18 from '@assets/AV_Images/Portfolio/IMG-20260709-WA0005.jpg';

const categories = ["All", "Corporate", "Conference", "Exhibition", "Award Night"];

const portfolioData = [
  { id: 1, img: p1, category: "Corporate", title: "Annual Leadership Meet" },
  { id: 2, img: p2, category: "Conference", title: "Tech Summit 2024" },
  { id: 3, img: p3, category: "Award Night", title: "Excellence Awards" },
  { id: 4, img: p4, category: "Corporate", title: "Town Hall" },
  { id: 5, img: p5, category: "Exhibition", title: "Auto Expo Stall" },
  { id: 6, img: p6, category: "Conference", title: "Medical Symposium" },
  { id: 7, img: p7, category: "Corporate", title: "Product Launch" },
  { id: 8, img: p8, category: "Award Night", title: "Gala Dinner" },
  { id: 9, img: p9, category: "Exhibition", title: "Industry Trade Show" },
  { id: 10, img: p10, category: "Conference", title: "Finance Conclave" },
  { id: 11, img: p11, category: "Corporate", title: "Brand Activation" },
  { id: 12, img: p12, category: "Award Night", title: "Rewards & Recognition" },
  { id: 13, img: p13, category: "Exhibition", title: "Real Estate Expo" },
  { id: 14, img: p14, category: "Corporate", title: "Team Offsite" },
  { id: 15, img: p15, category: "Conference", title: "Global Summit" },
  { id: 16, img: p16, category: "Award Night", title: "Star Awards" },
  { id: 17, img: p17, category: "Exhibition", title: "Tech Exhibition" },
  { id: 18, img: p18, category: "Corporate", title: "Dealer Meet" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredData = filter === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Building Memories</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-wider transition-colors pb-1 border-b-2 ${
                  filter === cat ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group cursor-pointer overflow-hidden break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-primary text-xs uppercase tracking-widest mb-2">{item.category}</span>
                  <h4 className="text-xl font-serif">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button aria-label="Close lightbox" className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors">
              <X size={32} />
            </button>
            
            <button 
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-4"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <img 
              src={filteredData[currentIndex].img} 
              alt={filteredData[currentIndex].title}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-4"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center" onClick={(e) => e.stopPropagation()}>
              <h4 className="text-xl font-serif text-foreground">{filteredData[currentIndex].title}</h4>
              <p className="text-primary text-sm uppercase tracking-widest mt-1">{filteredData[currentIndex].category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
