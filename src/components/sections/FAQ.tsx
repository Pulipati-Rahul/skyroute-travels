"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Are flights included in the listed package prices?",
    answer: "Our package prices are listed as land-only arrangements (premium boutique hotel stays, private airport transfers, domestic rail or local flights, custom excursions, and private guides) to give you flexibility. However, our dedicated flight desk can secure first, business, or premium economy flights from your departure city at highly competitive agency rates.",
  },
  {
    question: "Can I customize an existing package or build a custom route?",
    answer: "Absolutely. Personalized luxury is our specialty. Every single itinerary on our website can be customized. You can adjust the duration, upgrade to premium suites (e.g. overwater villas), select specific excursions, or build a bespoke itinerary from scratch. Simply fill out our Inquiry Form or text us on WhatsApp.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "We offer flexible terms. Most of our land packages allow for free cancellation and a 100% cash refund up to 14 days before your scheduled departure date. Special private yacht charters or high-end villa rentals may carry distinct non-refundable deposits, which will be explicitly detailed in your booking summary before booking.",
  },
  {
    question: "Do you offer travel insurance and wellness coverage?",
    answer: "Yes, we highly recommend comprehensive coverage. We partner with top-tier international travel insurance providers to offer policies covering trip cancellations, emergency medical care, luggage protection, and flight delays. Our concierge team can help you select the best tier during booking.",
  },
  {
    question: "How do you select your local guides and accommodations?",
    answer: "Quality is our highest priority. We vet each luxury resort, boutique hotel, and private chalet ourselves based on location, safety, aesthetics, and service. Our local guides are certifiably licensed experts, fluent in English, and deeply connected to their local culture and heritage, ensuring authentic journeys.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Quick answers about bookings, customizing itineraries, cancellation terms, and general travel arrangements with SkyRoute Travels.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-primary bg-secondary/10 shadow-sm"
                    : "border-slate-200 hover:border-slate-350 bg-white"
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-dark-navy focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-primary" : "text-slate-400"}`} />
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isOpen ? "border-primary/20 bg-primary/10 text-primary" : "border-slate-200 text-slate-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Drawer Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-slate-500 leading-relaxed pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
