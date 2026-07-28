"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, User, HelpCircle, FileText } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Maldives");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            Contact Our Concierge
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Ready to design your private itinerary? Send us your travel ideas and a dedicated concierge specialist will build your customized proposal.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Details & Map (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Quick Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Headquarters</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    100 Plaza Centrique, Suite 500<br />
                    New York, NY 10019, USA
                  </p>
                </div>
              </div>

              {/* Direct Line */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Concierge Desk</h4>
                  <a href="tel:+18005550199" className="text-xs text-slate-500 hover:text-primary mt-1 block">
                    +1 (800) 555-0199 (Toll-Free)
                  </a>
                  <p className="text-[10px] text-slate-400 mt-0.5">Mon - Sun: 24 Hours Operating</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Electronic Inquiry</h4>
                  <a href="mailto:concierge@skyroutetravels.com" className="text-xs text-slate-500 hover:text-primary mt-1 block font-semibold">
                    concierge@skyroutetravels.com
                  </a>
                </div>
              </div>
            </div>

            {/* Gray-Scaled Modern Google Maps iframe Mockup */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm h-64 border border-slate-200">
              <iframe
                title="SkyRoute Headquarters Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2536854124976!2d-73.97883908459378!3d40.75889497932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb6587%3A0xf6fec208cfd0c9f1!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale opacity-90 contrast-[1.05]"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2: Inquiry Form (7/12 cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center font-sans">
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 px-4 flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-200 mb-2">
                    <CheckCircle2 className="w-9 h-9 text-green-600 animate-bounce" />
                  </div>
                  <h4 className="text-2xl font-bold font-serif text-dark-navy">Inquiry Received Successfully!</h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                    A SkyRoute Travels luxury concierge director has been assigned to your travel request and will contact you via email or phone within the next <span className="font-bold text-slate-800">2 hours</span>.
                  </p>
                  <p className="text-xs text-slate-400">
                    We have sent a copy of your initial itinerary details to the email you provided. Your custom journey starts now!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-primary hover:bg-primary/95 text-white font-bold text-xs rounded-full shadow-md"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-2xl font-bold font-serif text-dark-navy mb-6">Plan Your Dream Trip</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary" /> Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name"
                        className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-primary rounded-xl py-3 px-4 text-xs md:text-sm focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary" /> Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-primary rounded-xl py-3 px-4 text-xs md:text-sm focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-primary" /> Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-primary rounded-xl py-3 px-4 text-xs md:text-sm focus:outline-none transition-all"
                      />
                    </div>

                    {/* Destination Interest */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-primary" /> Destination of Interest
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-primary rounded-xl py-3 px-4 text-xs md:text-sm focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Maldives">Maldives Resort Getaway</option>
                        <option value="Bali">Bali Forest Sanctuary</option>
                        <option value="Dubai">Dubai Sky-High City Escape</option>
                        <option value="Switzerland">Swiss Alps Mountain Tour</option>
                        <option value="Paris">Paris Historical Romantic</option>
                        <option value="Japan">Kyoto & Tokyo Cultural</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Tell us about your dream trip
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your travel dates, preferred hotels, number of guests, diet preferences, or desired excursions..."
                      className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-primary rounded-xl py-3.5 px-4 text-xs md:text-sm focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-primary hover:bg-primary/95 text-white font-bold text-sm rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span className="flex items-center gap-1.5">Send Request to Concierge <Send className="w-4 h-4" /></span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
