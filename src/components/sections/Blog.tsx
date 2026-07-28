"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    tag: "Destination Guide",
    title: "10 Hidden Gems in Kyoto: Beyond the Shrines",
    excerpt: "Kyoto's ancient beauty extends far beyond the crowded Gion district. Discover secluded moss forest temples, local tofu markets, and bamboo walks hidden from tourists.",
    date: "July 18, 2026",
    readTime: "6 Min Read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600",
  },
  {
    id: "blog-2",
    tag: "Travel Tips",
    title: "How to Pack Like a Pro for a 2-Week Luxury Cruise",
    excerpt: "Master the art of elegant resort-casual attire and formal dinners without overpacking. Our packing blueprints maximize your luggage capacity with style.",
    date: "June 25, 2026",
    readTime: "8 Min Read",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=600",
  },
  {
    id: "blog-3",
    tag: "Packing Checklist",
    title: "Tropical Maldives Checklist: Island Essentials",
    excerpt: "Prepare for your overwater villa escape with our vetted island checklist. From marine-safe sunscreens and underwater cams to linen capsule wardrobes.",
    date: "May 14, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600",
  },
  {
    id: "blog-4",
    tag: "Visa Information",
    title: "Visa entry guidelines for luxury destinations",
    excerpt: "Everything you need to know about e-visas, biometric pre-registrations, and passport validity requirements for hassle-free travel entries.",
    date: "April 02, 2026",
    readTime: "7 Min Read",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block mb-3">
            Travel Editorial
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            SkyRoute Travel Blog
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Stay informed with premium, curated travel literature written by our destination scouts, travel advisors, and gear guides.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 flex flex-col group h-full cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 25vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Post Tag */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-dark-navy font-bold text-[9px] tracking-wider uppercase py-1 px-3 rounded-full shadow-sm">
                  {post.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-serif text-dark-navy mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-primary transition-colors">
                  <span>Read Article</span>
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
