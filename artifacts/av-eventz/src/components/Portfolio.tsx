import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", "Corporate", "Conference", "Exhibition", "Award Night"];

const images = [
  { id: 'p1', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0040.jpg', cat: 'Corporate' },
  { id: 'p2', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0039.jpg', cat: 'Conference' },
  { id: 'p3', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0038.jpg', cat: 'Award Night' },
  { id: 'p4', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0037.jpg', cat: 'Corporate' },
  { id: 'p5', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0033.jpg', cat: 'Exhibition' },
  { id: 'p6', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0026.jpg', cat: 'Conference' },
  { id: 'p7', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0025.jpg', cat: 'Corporate' },
  { id: 'p8', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0024.jpg', cat: 'Award Night' },
  { id: 'p9', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0023.jpg', cat: 'Exhibition' },
  { id: 'p10', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0022.jpg', cat: 'Conference' },
  { id: 'p11', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0019.jpg', cat: 'Corporate' },
  { id: 'p12', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0018.jpg', cat: 'Award Night' },
  { id: 'p13', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0016.jpg', cat: 'Exhibition' },
  { id: 'p14', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0015.jpg', cat: 'Corporate' },
  { id: 'p15', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0009.jpg', cat: 'Conference' },
  { id: 'p16', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0008.jpg', cat: 'Award Night' },
  { id: 'p17', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0007.jpg', cat: 'Exhibition' },
  { id: 'p18', src: '@assets/AV_Images/Portfolio/IMG-20260709-WA0005.jpg', cat: 'Corporate' }
];

// Helper to resolve Vite aliases manually if needed, but since we use dynamic imports it's fine.
// Vite will handle the @assets resolution statically if we import them directly, 
// so let's construct the actual imports.

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

const portfolioItems = [
  { id: 'p1', src: p1, cat: 'Corporate' },
  { id: 'p2', src: p2, cat: 'Conference' },
  { id: 'p3', src: p3, cat: 'Award Night' },
  { id: 'p4', src: p4, cat: 'Corporate' },
  { id: 'p5', src: p5, cat: 'Exhibition' },
  { id: 'p6', src: p6, cat: 'Conference' },
  { id: 'p7', src: p7, cat: 'Corporate' },
  { id: 'p8', src: p8, cat: 'Award Night' },
  { id: 'p9', src: p9, cat: 'Exhibition' },
  { id: 'p10', src: p10, cat: 'Conference' },
  { id: 'p11', src: p11, cat: 'Corporate' },
  { id: 'p12', src: p12, cat: 'Award Night' },
  { id: 'p13', src: p13, cat: 'Exhibition' },
  { id: 'p14', src: p14, cat: 'Corporate' },
  { id: 'p15', src: p15, cat: 'Conference' },
  { id: 'p16', src: p16, cat: 'Award Night' },
  { id: 'p17', src: p17, cat: 'Exhibition' },
  { id: 'p18', src: p18, cat: 'Corporate' }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="bg-[#111] py-32 px-4 md:px-8 w-full min-h-screen">
      <div className="container mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-8">
        <h2 className="font-serif text-5xl md:text-[64px] text-foreground">Our Work</h2>
        <div className="flex flex-wrap gap-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
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
              >
                <img 
                  src={item.src} 
                  alt={`${item.cat} event`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-[0.85] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary mb-2">
                    {item.cat}
                  </span>
                  <span className="font-serif text-2xl text-white">View Details</span>
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
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" onClick={closeLightbox}>
              <X className="w-10 h-10" />
            </button>

            <button className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors p-4" onClick={prevImage}>
              <ChevronLeft className="w-10 h-10" />
            </button>

            <img 
              src={filteredItems[lightboxIndex].src} 
              alt="Enlarged event view" 
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors p-4" onClick={nextImage}>
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
