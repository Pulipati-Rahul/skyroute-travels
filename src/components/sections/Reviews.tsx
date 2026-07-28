"use client";

import { useState, useEffect, useCallback } from "react";
import { motion as motionFramer, AnimatePresence as AnimatePresenceFramer } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  route: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    id: 0,
    name: "Sarah & David Jenkins",
    role: "Honeymooners",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
    rating: 5,
    route: "Maldives Overwater Sanctuary",
    comment: "SkyRoute Travels custom-built our dream honeymoon in the Maldives. From the moment we landed in Malé, we felt like royalty. The private yacht transfer and candlelight lagoon dining were absolutely flawless. 10/10 concierge experience!",
  },
  {
    id: 1,
    name: "Marcus Vance",
    role: "Adventure Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    route: "Swiss Alps Peaks & Zermatt Chalet",
    comment: "This was my second high-altitude trekking trip, and SkyRoute blew me away with their attention to detail. The private mountain guide they booked for us was extremely knowledgeable, and the alpine chalets were stunningly luxurious.",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Family Vacationer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    rating: 5,
    route: "Kyoto & Tokyo Family Culture",
    comment: "Traveling with three kids is usually stressful, but SkyRoute handled every bullet point perfectly. The bullet train tickets, private sushi classes, and custom anime guide made it the best family vacation we have ever had.",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextReview = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prevReview = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  // Autoplay slider every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextReview]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Guest Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            Travelers' Stories
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Discover what our guests say about their customized journeys. We pride ourselves on creating absolute perfection.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative min-h-[380px] md:min-h-[300px] bg-slate-50 border border-slate-100 rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm flex flex-col justify-between font-sans">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

          {/* Slider Container */}
          <div className="relative overflow-hidden flex-grow flex items-center justify-center">
            <AnimatePresenceFramer initial={false} custom={direction} mode="wait">
              <motionFramer.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full text-center md:text-left flex flex-col md:flex-row items-center gap-8"
              >
                {/* Avatar / Portrait */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                  <Image
                    src={REVIEWS[activeIndex].avatar}
                    alt={REVIEWS[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Comment Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg italic text-charcoal leading-relaxed font-sans">
                    "{REVIEWS[activeIndex].comment}"
                  </p>

                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-dark-navy">{REVIEWS[activeIndex].name}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-slate-500 mt-1">
                      <span className="font-semibold text-primary">{REVIEWS[activeIndex].role}</span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-150">{REVIEWS[activeIndex].route}</span>
                    </div>
                  </div>
                </div>
              </motionFramer.div>
            </AnimatePresenceFramer>
          </div>

          {/* Navigation Arrows & Dot Indicators */}
          <div className="flex items-center justify-between mt-8 border-t border-slate-200/60 pt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === idx ? "w-6 bg-primary" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5">
              <button
                onClick={prevReview}
                className="w-10 h-10 bg-white hover:bg-secondary border border-slate-200 text-charcoal hover:text-primary flex items-center justify-center rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 bg-white hover:bg-secondary border border-slate-200 text-charcoal hover:text-primary flex items-center justify-center rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
