"use client";

import { useState, useEffect } from "react";
import { Menu, X, Plane, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-dark-navy" : "text-white"
              }`}>
                SkyRoute<span className="text-primary font-extrabold">Travels</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors duration-200 ${
                    isScrolled ? "text-charcoal" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-200 px-4 py-2.5 rounded-full"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Quick Inquiry</span>
              </a>
              <a
                href="#packages"
                onClick={(e) => handleLinkClick(e, "#packages")}
                className="bg-primary hover:bg-primary-hover hover:scale-105 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? "text-dark-navy" : "text-white"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-dark-navy flex flex-col justify-center px-6 pt-24 pb-8"
          >
            {/* Background Blurs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center gap-6 overflow-y-auto max-h-[70vh] py-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-bold tracking-wide text-white/90 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto flex flex-col gap-4 w-full"
            >
              <a
                href="tel:+18005550199"
                className="flex items-center justify-center gap-2 py-3.5 rounded-full border border-white/20 text-white font-bold text-center hover:bg-white/5 transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call +1 (800) 555-0199</span>
              </a>
              <a
                href="#packages"
                onClick={(e) => handleLinkClick(e, "#packages")}
                className="py-3.5 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-center shadow-lg shadow-primary/20 transition-all"
              >
                Explore Tour Packages
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
