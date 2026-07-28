"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Heart, ShieldCheck, Check, Plane, Users, Calendar, ArrowRight, X } from "lucide-react";
import Image from "next/image";

interface Package {
  id: string;
  title: string;
  category: "adventure" | "family" | "luxury" | "honeymoon" | "wildlife" | "beach";
  image: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  rating: number;
  reviews: number;
  price: number;
  includes: string[];
  description: string;
}

const PACKAGES: Package[] = [
  {
    id: "pkg-1",
    title: "Maldives Serenity Overwater Escape",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=600",
    duration: "7 Days, 6 Nights",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 124,
    price: 2499,
    includes: ["Overwater private pool villa", "Seaplane roundtrip transfers", "All-inclusive premium dine-around", "Sunset cruise with dolphins"],
    description: "The ultimate tropical indulgence. Drift off to sleep above clear lagoons and wake up with reef fish at your doorstep.",
  },
  {
    id: "pkg-2",
    title: "Swiss Alps Peaks & Valleys Trekking",
    category: "adventure",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
    duration: "10 Days, 9 Nights",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 82,
    price: 3200,
    includes: ["Luxury alpine chalet stays", "Swiss Travel Rail Pass", "Private IFMGA mountain guide", "Scenic helicopter tour"],
    description: "Conquer legendary mountain trails and relax in high-end spas. A perfect mix of high-altitude action and comfort.",
  },
  {
    id: "pkg-3",
    title: "Romantic Bali Temple & Spa Sanctuary",
    category: "honeymoon",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600",
    duration: "8 Days, 7 Nights",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 95,
    price: 1850,
    includes: ["Ubud jungle canopy villa", "Couples flower bath & massages", "Private dining under forest stars", "Custom temple blessings"],
    description: "Reconnect in a secluded green paradise. Let local spiritual guides take you through centuries of culture and romance.",
  },
  {
    id: "pkg-4",
    title: "Serengeti Savannah Wildlife Safari",
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600",
    duration: "9 Days, 8 Nights",
    difficulty: "Moderate",
    rating: 4.9,
    reviews: 64,
    price: 4500,
    includes: ["5-star safari glamping suite", "4x4 private game drives", "Dedicated senior naturalist guide", "Bush dinners with local tribes"],
    description: "Witness the Great Migration up close. Capture professional-grade shots of the Big Five with expert tracker guides.",
  },
  {
    id: "pkg-5",
    title: "Kyoto & Tokyo Family Cultural Odyssey",
    category: "family",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600",
    duration: "12 Days, 11 Nights",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 110,
    price: 2950,
    includes: ["Traditional ryokan & boutique hotels", "Shinkansen bullet train passes", "Private sushi masterclass", "Guided anime & history tours"],
    description: "Perfect for multiple generations. Discover ancient pagodas alongside cutting-edge neon arcades and theme parks.",
  },
  {
    id: "pkg-6",
    title: "Dubai Skyline & Yacht Voyage",
    category: "beach",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600",
    duration: "6 Days, 5 Nights",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 73,
    price: 2700,
    includes: ["Beachfront resort stay", "4-hour private yacht cruise", "Burj Khalifa VIP high lounge entry", "Premium desert dunes dinner"],
    description: "Live the high life. Sail along the marina skyscraper shoreline and enjoy VIP hospitality in the desert.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Packages" },
  { id: "luxury", label: "Luxury" },
  { id: "adventure", label: "Adventure" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "wildlife", label: "Wildlife" },
  { id: "family", label: "Family" },
  { id: "beach", label: "Beach" },
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  
  // Booking Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [numGuests, setNumGuests] = useState(2);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const filteredPackages = activeTab === "all" 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === activeTab);

  const handleBookNowClick = (pkg: Package) => {
    setSelectedPkg(pkg);
    setFormSubmitted(false);
    setFormSubmitting(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !travelDate) return;

    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 1800);
  };

  return (
    <section id="packages" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Hand-Crafted Journeys
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            Curated Tour Packages
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Choose a signature route tailored to your lifestyle. Every itinerary is fully adjustable and includes premium concierge services.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-sm font-bold px-6 py-2.5 rounded-full transition-all border ${
                activeTab === cat.id
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                  : "bg-white hover:bg-slate-50 border-slate-200 text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, idx) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100/50 flex flex-col group h-full"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-primary text-white font-bold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full shadow-sm">
                    {pkg.category}
                  </span>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-dark-navy/70 backdrop-blur-sm text-white font-bold text-xs py-1 px-3.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                      pkg.difficulty === "Easy" ? "bg-green-50 text-green-600" :
                      pkg.difficulty === "Moderate" ? "bg-amber-50 text-amber-600" : "bg-red-50 text-red-600"
                    }`}>
                      {pkg.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                      <span className="font-bold text-slate-800">{pkg.rating}</span>
                      <span>({pkg.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-dark-navy mb-3 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                    {pkg.description}
                  </p>

                  {/* Included bullets */}
                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {pkg.includes.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Row */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Price per person</span>
                      <span className="text-2xl font-extrabold text-dark-navy">
                        {pkg.price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handleBookNowClick(pkg)}
                      className="bg-primary hover:bg-primary/95 text-white text-xs font-bold px-5 py-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Booking Drawer Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm">
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setSelectedPkg(null)} />

            {/* Modal Body Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="relative w-full max-w-lg bg-white h-screen shadow-2xl flex flex-col overflow-y-auto z-10"
            >
              {/* Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-10">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Secure Tour Booking</span>
                  <h3 className="text-xl font-bold font-serif text-dark-navy mt-1">Book Your Escape</h3>
                </div>
                <button
                  onClick={() => setSelectedPkg(null)}
                  className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close booking drawer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="p-6 flex-1 space-y-6">
                
                {/* Package Quick Overview */}
                <div className="flex gap-4 p-4 bg-secondary/40 rounded-2xl border border-secondary">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={selectedPkg.image}
                      alt={selectedPkg.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-dark-navy leading-snug">{selectedPkg.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" /> {selectedPkg.duration}</p>
                    <p className="text-xs font-extrabold text-primary mt-2">
                      {selectedPkg.price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })} / person
                    </p>
                  </div>
                </div>

                {/* Submitting state screen or normal booking form */}
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 px-4 flex flex-col items-center justify-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-200">
                        <Check className="w-10 h-10 text-green-600 animate-bounce" />
                      </div>
                      <h4 className="text-2xl font-bold font-serif text-dark-navy">Booking Request Received!</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Thank you, <span className="font-bold text-slate-800">{fullName}</span>. We've received your request for <span className="font-semibold text-slate-800">{selectedPkg.title}</span>. 
                      </p>
                      <p className="text-xs text-slate-400 max-w-sm">
                        A personalized itinerary and invoice breakdown have been sent to <span className="font-medium text-slate-600">{email}</span>. A SkyRoute luxury concierge specialist will contact you in the next 12 hours.
                      </p>
                      
                      <button
                        onClick={() => setSelectedPkg(null)}
                        className="mt-6 w-full py-3.5 bg-primary hover:bg-primary/95 text-white font-bold text-sm rounded-full shadow-md"
                      >
                        Explore More Tours
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleBookingSubmit}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-slate-500">Full Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm focus:outline-none transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="johndoe@example.com"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm focus:outline-none transition-all"
                        />
                      </div>

                      {/* Travel Date */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-slate-500">Preferred Travel Date</label>
                        <input
                          type="date"
                          required
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm focus:outline-none transition-all cursor-pointer"
                        />
                      </div>

                      {/* Guests selection & total calculation */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase text-slate-500">Number of Guests</label>
                          <select
                            value={numGuests}
                            onChange={(e) => setNumGuests(Number(e.target.value))}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm focus:outline-none transition-all cursor-pointer"
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="6">5-6 People</option>
                            <option value="10">7-10 People</option>
                          </select>
                        </div>

                        {/* Calculated price details */}
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-center">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Estimated Total</span>
                          <span className="text-xl font-black text-dark-navy mt-0.5">
                            {(selectedPkg.price * numGuests).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      </div>

                      {/* Trust features */}
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-accent" />
                          <span>Flexible Free Cancellations</span>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-normal">
                          Cancel up to 14 days before departure for a full cash refund. Booking holds require 0 deposit today.
                        </p>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="w-full py-4 bg-primary hover:bg-primary/95 text-white font-bold text-sm rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] transition-all flex items-center justify-center mt-6"
                      >
                        {formSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <span className="flex items-center gap-1">Request Booking Details <ArrowRight className="w-4 h-4" /></span>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
