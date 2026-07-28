"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Users, Compass, Building, Plane, Search } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("tours");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [duration, setDuration] = useState("7");
  const [searching, setSearching] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    
    // Simulate finding results and scrolling to packages
    setTimeout(() => {
      setSearching(false);
      const packagesSection = document.querySelector("#packages");
      if (packagesSection) {
        const headerOffset = 80;
        const elementPosition = packagesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 1200);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-dark-navy pt-28 pb-16 lg:py-0"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -z-10 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000')] bg-cover bg-center select-none"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/60 via-dark-navy/40 to-white" />
      </motion.div>

      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,166,255,0.08),transparent_50%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center mt-4 lg:mt-12">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="mb-8 lg:mb-10 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] text-white bg-primary/25 border border-primary/30 rounded-full uppercase backdrop-blur-sm"
          >
            ✈️ Premium Travel Agency
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-md"
          >
            Discover Your Next <span className="text-gradient">Adventure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs sm:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-sm max-w-2xl mx-auto"
          >
            Hand-crafted luxury itineraries, premium accommodations, and private local guides designed for the discerning traveler.
          </motion.p>
        </motion.div>

        {/* Glass Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-4xl glass-effect p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-white/20"
        >
          {/* Tabs Selector */}
          <div className="grid grid-cols-3 gap-1 md:flex md:gap-2 mb-5 border-b border-charcoal/10 pb-4">
            <button
              onClick={() => setActiveTab("tours")}
              className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2 px-1 sm:px-4 rounded-xl sm:rounded-full transition-all ${
                activeTab === "tours"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-slate-600 hover:bg-slate-100/50"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Tours</span>
            </button>
            <button
              onClick={() => setActiveTab("hotels")}
              className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2 px-1 sm:px-4 rounded-xl sm:rounded-full transition-all ${
                activeTab === "hotels"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-slate-600 hover:bg-slate-100/50"
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Stays</span>
            </button>
            <button
              onClick={() => setActiveTab("flights")}
              className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2 px-1 sm:px-4 rounded-xl sm:rounded-full transition-all ${
                activeTab === "flights"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-slate-600 hover:bg-slate-100/50"
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Flights</span>
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-3 md:gap-4 items-end text-left">
            {/* Input 1: Destination */}
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Destination</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full h-11 bg-white/80 hover:bg-white focus:bg-white border border-slate-200 focus:border-primary text-xs md:text-sm font-semibold rounded-xl px-3 focus:outline-none transition-all cursor-pointer"
                required
              >
                <option value="">Where to?</option>
                <option value="maldives">Maldives Resort Getaway</option>
                <option value="bali">Bali Forest Sanctuary</option>
                <option value="dubai">Dubai Desert & City Escape</option>
                <option value="switzerland">Swiss Alps Mountain Tour</option>
                <option value="paris">Paris Historical Romantic</option>
                <option value="japan">Kyoto & Tokyo Cultural</option>
              </select>
            </div>

            {/* Input 2: Date */}
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>Departure</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full h-11 bg-white/80 hover:bg-white focus:bg-white border border-slate-200 focus:border-primary text-xs md:text-sm font-semibold rounded-xl px-3 focus:outline-none transition-all cursor-pointer"
                required
              />
            </div>

            {/* Input 3: Duration */}
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>Duration</span>
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full h-11 bg-white/80 hover:bg-white focus:bg-white border border-slate-200 focus:border-primary text-xs md:text-sm font-semibold rounded-xl px-3 focus:outline-none transition-all cursor-pointer"
              >
                <option value="5">5-7 Days</option>
                <option value="10">8-10 Days</option>
                <option value="14">11-14 Days</option>
                <option value="21">15+ Days</option>
              </select>
            </div>

            {/* Input 4: Guests */}
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>Guests</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full h-11 bg-white/80 hover:bg-white focus:bg-white border border-slate-200 focus:border-primary text-xs md:text-sm font-semibold rounded-xl px-3 focus:outline-none transition-all cursor-pointer"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="4">3-4 Guests</option>
                <option value="8">5+ Guests</option>
              </select>
            </div>

            {/* Search Button (Span 1 on Desktop, Full Width on Mobile) */}
            <div className="lg:col-span-1 mt-2 lg:mt-0">
              <button
                type="submit"
                disabled={searching}
                className="w-full bg-primary hover:bg-primary/95 text-white h-11 rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 font-bold text-xs md:text-sm shrink-0 cursor-pointer"
              >
                {searching ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span className="lg:hidden xl:inline">Search</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator Arrow (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-charcoal z-10 hidden lg:flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => {
          const destSection = document.querySelector("#destinations");
          destSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Scroll Down</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
