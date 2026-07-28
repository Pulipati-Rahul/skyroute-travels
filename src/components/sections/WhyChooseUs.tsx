"use client";

import { motion } from "framer-motion";
import { Compass, ShieldCheck, HeartHandshake, PhoneCall, Globe2, Sparkles } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "Trusted Local Guides",
    description: "Our handpicked private guides are certifiably trained, locals, and fluent linguists ready to introduce you to hidden highlights.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Bespoke Customization",
    description: "Every hotel selection, route, and excursion can be customized to match your exact pace, diet, and luxury interests.",
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-primary" />,
    title: "24/7 Dedicated Support",
    description: "Enjoy full peace of mind. A custom travel concierge is reachable via WhatsApp at any hour, from takeoff to landing.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Safe & Premium Travel",
    description: "We work exclusively with vetted 5-star resort partners, luxury aircraft operators, and comprehensive travel coverage.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-primary" />,
    title: "Worldwide Coverage",
    description: "From the tropical reefs of the Maldives to the high-latitude peaks of Switzerland, we coordinate tours on 7 continents.",
  },
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: "Best Value Match",
    description: "Leveraging direct, exclusive agency rates with luxury hotel networks to guarantee competitive values without compromise.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/50 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Why SkyRoute Travels
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            Our Commitment to Quality
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We don't just book tickets. We build life-defining travel experiences centered on absolute comfort, authenticity, and care.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-slate-50 hover:bg-secondary/20 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all duration-300 group flex flex-col items-start"
            >
              {/* Icon container */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
              </div>

              {/* Text info */}
              <h3 className="text-xl font-bold font-serif text-dark-navy mb-3">
                {feat.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
