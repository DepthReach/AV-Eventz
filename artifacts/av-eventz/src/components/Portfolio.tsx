import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const portfolioItems = [
  { id: 1, img: p1,  cat: 'Corporate',   title: 'Annual Leadership Meet',   city: 'New Delhi' },
  { id: 2, img: p2,  cat: 'Conference',  title: 'Tech Summit 2024',         city: 'Bengaluru' },
  { id: 3, img: p3,  cat: 'Award Night', title: 'Excellence Awards',        city: 'Mumbai' },
  { id: 4, img: p4,  cat: 'Corporate',   title: 'Town Hall — 1200 Pax',     city: 'Faridabad' },
  { id: 5, img: p5,  cat: 'Exhibition',  title: 'Auto Expo Stall',          city: 'Gurugram' },
  { id: 6, img: p6,  cat: 'Conference',  title: 'Medical Symposium',        city: 'Hyderabad' },
  { id: 7, img: p7,  cat: 'Corporate',   title: 'Product Launch',           city: 'Pune' },
  { id: 8, img: p8,  cat: 'Award Night', title: 'Gala Dinner Night',        city: 'New Delhi' },
  { id: 9, img: p9,  cat: 'Exhibition',  title: 'Industry Trade Show',      city: 'Mumbai' },
  { id: 10, img: p10, cat: 'Conference', title: 'Finance Conclave',         city: 'Delhi NCR' },
  { id: 11, img: p11, cat: 'Corporate',  title: 'Brand Activation',         city: 'Noida' },
  { id: 12, img: p12, cat: 'Award Night', title: 'Rewards & Recognition',   city: 'Chennai' },
  { id: 13, img: p13, cat: 'Exhibition', title: 'Real Estate Expo',         city: 'Kolkata' },
  { id: 14, img: p14, cat: 'Corporate',  title: 'Team Strategy Offsite',    city: 'Jaipur' },
  { id: 15, img: p15, cat: 'Conference', title: 'Global Business Summit',   city: 'New Delhi' },
  { id: 16, img: p16, cat: 'Award Night', title: 'Star Awards Night',       city: 'Mumbai' },
  { id: 17, img: p17, cat: 'Exhibition', title: 'Tech Exhibition',          city: 'Bengaluru' },
  { id: 18, img: p18, cat: 'Corporate',  title: 'Dealer Meet 2024',         city: 'Faridabad' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number>(0);

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.cat === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrev();
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { 
    touchStartX.current = e.touches[0].clientX; 
  };
  
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta < 0 ? goNext() : goPrev();
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, filteredItems]);

  return (
    <section id="portfolio" className="bg-[#111] py-32 px-4 md:px-8 w-full min-h-screen">
      <div className="container mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-8">
        <h2 className="font-serif text-5xl md:text-[64px] text-foreground">Our Work</h2>
        <div className="flex flex-wrap gap-6" role="tablist" aria-label="Portfolio Filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`font-sans text-[12px] uppercase tracking-widest pb-1 border-b transition-colors ${
                activeFilter === cat 
                  ? 'text-primary border-primary' 
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-[#0d0d0d]"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View details of ${item.title}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              >
                <img 
                  src={item.img} 
                  alt={`${item.title} - ${item.cat} event in ${item.city}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-[0.85] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-background/80 [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0%_0_0_0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-primary text-xs uppercase tracking-widest mb-1">{item.cat}</span>
                  <h4 className="text-lg font-serif text-foreground mb-1">{item.title}</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{item.city}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10" onClick={closeLightbox} aria-label="Close Lightbox">
              <X className="w-10 h-10" />
            </button>

            <button className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors p-4 z-10" onClick={prevImage} aria-label="Previous Image">
              <ChevronLeft className="w-10 h-10" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={filteredItems[lightboxIndex].id}
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-full max-h-[80vh] object-contain relative z-0"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors p-4 z-10" onClick={nextImage} aria-label="Next Image">
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-6 left-0 w-full text-center text-white/70 font-sans text-sm tracking-widest uppercase">
              {filteredItems[lightboxIndex].cat} — {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
