"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 0,
    title: "Overwater Hammock Bliss",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600",
  },
  {
    id: 1,
    title: "Infinite Desert Dunes",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600",
  },
  {
    id: 2,
    title: "Yasaka Pagoda Evening Walk",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600",
  },
  {
    id: 3,
    title: "Lush Tegallalang Rice Terrace",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600",
  },
  {
    id: 4,
    title: "Sunset Dhoni Sailing",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600",
  },
  {
    id: 5,
    title: "Bernina Express Alpine Pass",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
  },
  {
    id: 6,
    title: "Eiffel Tower View Café",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600",
  },
  {
    id: 7,
    title: "Safari King Lion Patrol",
    location: "Serengeti, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600",
  },
];

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevPhoto = () => {
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Travel Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            SkyRoute Travel Gallery
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Real snapshots captured by our luxury travelers. Get inspired by the views and curate your own photo journal.
          </p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg group cursor-pointer border border-slate-100/50"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-widest text-primary font-bold uppercase mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {item.location}
                </span>
                <h3 className="text-lg font-bold font-serif text-white">{item.title}</h3>
                
                {/* Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {photoIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center">
            {/* Background closer */}
            <div className="absolute inset-0" onClick={closeLightbox} />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              key={photoIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full px-4 flex flex-col items-center gap-4 z-10"
            >
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
                <Image
                  src={GALLERY_ITEMS[photoIndex].image}
                  alt={GALLERY_ITEMS[photoIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Photo Description Bar */}
              <div className="text-center text-white mt-2">
                <h4 className="font-bold text-lg font-serif">{GALLERY_ITEMS[photoIndex].title}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> {GALLERY_ITEMS[photoIndex].location}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
