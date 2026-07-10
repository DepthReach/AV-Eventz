import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import { motion, AnimatePresence } from 'framer-motion';

// Mock list of images using generic placeholders representing all extras since we can't easily dynamic import 74 files
const ALL_IMAGES = Array.from({ length: 30 }, (_, i) => {
  const categories = ['Corporate', 'Conference', 'Exhibition', 'Award Night', 'Technical', 'Behind the Scenes'];
  const category = categories[i % categories.length];
  const num = (i + 1).toString().padStart(4, '0');
  
  // Mix of different source folders
  let folder = 'Extras';
  if (i < 5) folder = 'Services';
  else if (i < 10) folder = 'Portfolio';
  
  return {
    id: i,
    src: `@assets/AV_Images/${folder}/IMG-20260709-WA${num}.jpg`, // Simplified for mock
    category
  };
});

// Since dynamic imports with Vite aliases inside a loop don't work reliably without specific patterns,
// let's use a smaller array of known images or generic placeholdes if needed, or assume the user wants a layout 
// that can be filled out with real imports later. Let's just create a functional masonry layout structure.

const CATEGORIES = ['All', 'Corporate', 'Conference', 'Exhibition', 'Award Night', 'Technical', 'Behind the Scenes'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  
  const filtered = filter === 'All' ? ALL_IMAGES : ALL_IMAGES.filter(img => img.category === filter);

  return (
    <Layout>
      <SEO title="Gallery | AV Eventz" description="View our complete gallery of corporate events, conferences, exhibitions and stage productions." />
      <PageHero
        title="Gallery"
        subtitle="A visual journey through our executed events."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Gallery', href: '/gallery' }]}
      />
      
      <section className="py-16 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border font-sans text-xs uppercase tracking-widest transition-colors ${
                  filter === cat ? 'border-primary bg-primary text-black' : 'border-primary/30 text-foreground/70 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filtered.map(img => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid overflow-hidden relative group"
                >
                  <div className="bg-muted/20 w-full aspect-[4/3] flex items-center justify-center">
                    <span className="text-muted-foreground/30 font-serif text-sm">Image {img.id} ({img.category})</span>
                  </div>
                  {/* Real image would be here:
                  <img src={img.src} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="font-sans text-xs uppercase tracking-widest text-primary">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
        </div>
      </section>
    </Layout>
  );
}
