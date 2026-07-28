"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp, MessageSquare, Send, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! Thank you for contacting SkyRoute Travels. How can we help you plan your dream vacation today?", isBot: true },
  ]);
  const [inputText, setInputText] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dismiss WhatsApp tooltip after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, showChat]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message! A travel advisor from SkyRoute Travels will connect with you via WhatsApp shortly to finalize your itinerary details.",
          isBot: true,
        },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
      {/* WhatsApp Chat Box */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-[400px] mb-2"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    SR
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-accent rounded-full border-2 border-[#075E54]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">SkyRoute Travels</h4>
                  <p className="text-xs text-white/80">Online • Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 bg-[#ECE5DD] overflow-y-auto space-y-3 flex flex-col">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm leading-relaxed ${
                    msg.isBot
                      ? "bg-white text-charcoal align-self-start rounded-tl-none self-start"
                      : "bg-[#DCF8C6] text-charcoal align-self-end rounded-tr-none self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Footer Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-50 border-t border-slate-100 flex gap-2 items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-white border border-slate-200 focus:border-[#075E54] focus:outline-none rounded-full py-2.5 px-4 text-sm"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-[#075E54] hover:bg-[#128C7E] active:scale-95 text-white flex items-center justify-center rounded-full transition-all shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons Row */}
      <div className="flex flex-col md:flex-row gap-3 items-end md:items-center">
        {/* WhatsApp Tooltip Promo */}
        <AnimatePresence>
          {showTooltip && !showChat && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => {
                setShowChat(true);
                setShowTooltip(false);
              }}
              className="bg-white text-charcoal border border-slate-100 shadow-xl px-4 py-2.5 rounded-2xl text-xs md:text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center gap-2 hover:bg-slate-50 select-none order-first md:-order-none"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Questions? Chat with our experts!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Toggle Button */}
        <button
          onClick={() => {
            setShowChat(!showChat);
            setShowTooltip(false);
          }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </button>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-white text-charcoal hover:text-primary hover:bg-secondary rounded-full flex items-center justify-center shadow-lg border border-slate-100 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
