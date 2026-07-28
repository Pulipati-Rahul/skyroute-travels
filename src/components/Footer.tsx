"use client";

import { useState } from "react";
import { Plane, Mail, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG Icons because recent lucide-react deprecated brand icons
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email address is required.");
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-dark-navy text-white/80 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 -right-24 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white shadow-md shadow-primary/20">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                SkyRoute<span className="text-primary font-extrabold">Travels</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Empowering global travelers to explore the world's most spectacular destinations with bespoke, hand-crafted luxury tour packages, local guides, and 24/7 dedicated support.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links - Destinations */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Popular Destinations</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#destinations" onClick={(e) => handleLinkClick(e, "#destinations")} className="text-slate-400 hover:text-primary transition-colors">
                  Maldives Luxury Overwater Bungalows
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={(e) => handleLinkClick(e, "#destinations")} className="text-slate-400 hover:text-primary transition-colors">
                  Bali Forest Temples & Resorts
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={(e) => handleLinkClick(e, "#destinations")} className="text-slate-400 hover:text-primary transition-colors">
                  Dubai Sky-High City Escapes
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={(e) => handleLinkClick(e, "#destinations")} className="text-slate-400 hover:text-primary transition-colors">
                  Switzerland Mountain Rail & Valleys
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={(e) => handleLinkClick(e, "#destinations")} className="text-slate-400 hover:text-primary transition-colors">
                  Kyoto Cherry Blossom Culturals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links - Packages */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Tour Categories</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#packages" onClick={(e) => handleLinkClick(e, "#packages")} className="text-slate-400 hover:text-primary transition-colors">
                  Luxury Honeymoon Getaways
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleLinkClick(e, "#packages")} className="text-slate-400 hover:text-primary transition-colors">
                  High-Altitude Mountain Adventures
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleLinkClick(e, "#packages")} className="text-slate-400 hover:text-primary transition-colors">
                  Family-Oriented Explorer Packages
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleLinkClick(e, "#packages")} className="text-slate-400 hover:text-primary transition-colors">
                  Pristine Beach & Yacht Retreats
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleLinkClick(e, "#packages")} className="text-slate-400 hover:text-primary transition-colors">
                  African Wildlife Photo Safaris
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Stay Inspired</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to receive luxury travel checklists, flight deals, and destination guides directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <div className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 text-white rounded-full py-3 pl-12 pr-12 text-sm border border-white/10 focus:border-primary focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 p-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-all focus:outline-none"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {subscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-accent flex items-center gap-1 mt-1 font-semibold"
                    >
                      <Check className="w-3 h-3" /> Thank you for subscribing!
                    </motion.p>
                  )}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-400 mt-1 font-semibold"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} SkyRoute Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
