"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MapPin, Compass, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  toursCount: number;
  startingPrice: string;
  description: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
    rating: 4.9,
    toursCount: 18,
    startingPrice: "$1,850",
    description: "Overwater luxury bungalows set on turquoise lagoons.",
  },
  {
    id: "2",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    rating: 4.8,
    toursCount: 32,
    startingPrice: "$920",
    description: "Lush forest temples, volcanic ridges, and surf beaches.",
  },
  {
    id: "3",
    name: "Dubai",
    country: "U.A.E",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
    rating: 4.7,
    toursCount: 22,
    startingPrice: "$1,490",
    description: "Futuristic skyscrapers, desert safaris, and luxury shopping.",
  },
  {
    id: "4",
    name: "Zermatt",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    rating: 4.9,
    toursCount: 15,
    startingPrice: "$2,100",
    description: "Iconic alpine peaks, ski chalets, and mountain rail valleys.",
  },
  {
    id: "5",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
    rating: 4.8,
    toursCount: 28,
    startingPrice: "$1,150",
    description: "Art history, iconic architecture, café culture, and romance.",
  },
  {
    id: "6",
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
    rating: 4.9,
    toursCount: 24,
    startingPrice: "$1,380",
    description: "Cherry blossom shrines, bamboo groves, and ancient tea ceremonies.",
  },
];

// Custom counter subcomponent
function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-sans font-extrabold text-3xl md:text-5xl text-dark-navy">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3"
          >
            Trending Getaways
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4"
          >
            Popular Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Explore our curated top-tier travel spots chosen by our destination curators for unique aesthetics, premium stays, and rich culture.
          </motion.p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative h-96 group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100/50 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority={idx < 3}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent" />

              {/* Price Tag (Top-right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-dark-navy font-bold text-xs py-1.5 px-3.5 rounded-full shadow-sm flex items-center gap-1">
                <span className="text-[10px] text-slate-500 font-medium">Starts</span>
                <span>{dest.startingPrice}</span>
              </div>

              {/* Reviews rating badge (Top-left) */}
              <div className="absolute top-4 left-4 bg-dark-navy/40 backdrop-blur-sm text-white font-bold text-xs py-1.5 px-3.5 rounded-full flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                <span>{dest.rating}</span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
                <span className="text-[10px] tracking-widest text-primary font-bold uppercase mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {dest.country}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">{dest.name}</h3>
                
                {/* Expandable details on hover */}
                <p className="text-xs text-white/80 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100 group-hover:mb-3">
                  {dest.description}
                </p>

                <div className="flex justify-between items-center text-xs border-t border-white/10 pt-3 text-slate-300">
                  <span className="flex items-center gap-1"><Compass className="w-3.5 h-3.5" /> {dest.toursCount} Tours Listed</span>
                  <span className="text-primary font-bold group-hover:underline">Explore Packages &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Counters Bar */}
        <div className="border-t border-slate-100 pt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div className="flex items-baseline justify-center gap-0.5">
              <AnimatedCounter value={15000} suffix="+" />
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" /> Happy Travelers
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div className="flex items-baseline justify-center gap-0.5">
              <AnimatedCounter value={250} suffix="+" />
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-primary" /> Luxury Resorts
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div className="flex items-baseline justify-center gap-0.5">
              <AnimatedCounter value={1200} suffix="+" />
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Trips Completed
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div className="flex items-baseline justify-center gap-0.5">
              <AnimatedCounter value={98} suffix="%" />
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <Star className="w-4 h-4 text-primary" /> Satisfaction Rate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
