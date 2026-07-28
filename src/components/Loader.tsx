"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small delay for visual completion
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-navy select-none"
        >
          {/* Decorative Background Blur */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

          {/* Logo Animation */}
          <div className="relative flex flex-col items-center text-center">
            {/* Animated Plane Graphic */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <svg
                className="w-10 h-10 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.9-.2-1.8.3-2 1.2-.2.9.3 1.8 1.2 2l8 1.8-3.5 3.5-4.1-.7c-.5-.1-1 .1-1.3.5l-.2.2c-.3.3-.3.8-.1 1.1l2.4 2.4c.3.3.8.3 1.1-.1l.2-.2c.4-.3.6-.8.5-1.3l-.7-4.1 3.5-3.5 1.8 8c.2.9 1.1 1.4 2 1.2.9-.2 1.4-1.1 1.2-2z" />
              </svg>
            </motion.div>

            {/* Brand Name Text */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white mb-2"
            >
              SkyRoute<span className="text-primary"> Travels</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm font-sans tracking-[0.2em] uppercase text-secondary/80 mb-8"
            >
              Crafting Luxury Journeys
            </motion.p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
