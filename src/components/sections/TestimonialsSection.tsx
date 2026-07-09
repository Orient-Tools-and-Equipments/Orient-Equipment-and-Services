"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "David Chen",
    role: "Plant Manager",
    company: "Apex Manufacturing",
    industry: "Manufacturing",
    rating: 5,
    review: "Orient entirely transformed our procurement process. The quality of tools combined with their prompt maintenance service means we never have to worry about production delays."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Lead Engineer",
    company: "Horizon Aerospace",
    industry: "Aerospace",
    rating: 5,
    review: "In aerospace, precision isn't optional. Orient's ISO-certified calibration services give us the absolute certainty we need before any component leaves our facility."
  },
  {
    id: 3,
    name: "Marcus Rossi",
    role: "Operations Director",
    company: "Veloce Auto Works",
    industry: "Automotive",
    rating: 5,
    review: "We shifted our entire pneumatic fleet to Chicago Pneumatic through Orient. The difference in torque consistency and tool lifespan has been night and day for our assembly line."
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Chief Procurement Officer",
    company: "Global Heavy Industries",
    industry: "Manufacturing",
    rating: 4,
    review: "Having a single trusted distributor for all our major brands has significantly cut down our administrative overhead. Their support team is highly responsive."
  },
  {
    id: 5,
    name: "James Thorne",
    role: "Quality Assurance Lead",
    company: "Stellar Dynamics",
    industry: "Aerospace",
    rating: 5,
    review: "We rely on them not just for tools, but for their deep technical expertise. When we faced a complex torque requirement, their specialists found the exact solution."
  }
];

const INDUSTRIES = ["All", "Manufacturing", "Aerospace", "Automotive"];

function StarRating({ rating, active }: { rating: number, active: boolean }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
        >
          <Star 
            size={18} 
            className={`${i < rating ? 'fill-blue-500 text-blue-500 shadow-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'text-gray-600'}`} 
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [isPaused, setIsPaused] = useState(false);
  
  const filteredTestimonials = activeIndustry === "All" 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.industry === activeIndustry);

  // For the infinite carousel to work smoothly, we duplicate the filtered array
  const displayItems = [...filteredTestimonials, ...filteredTestimonials, ...filteredTestimonials];

  return (
    <section className="w-full py-32 pre-footer-bg text-white relative overflow-hidden border-t border-white/10">
      
      {/* Fade into solid black footer */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none z-20" />

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Don't just take our word for it. Hear from the leaders who rely on us.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map(industry => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Carousel Track Container */}
      <div 
        className="relative w-full py-8 mt-10 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Vignette Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          className={`flex gap-6 w-max ${isPaused ? '[animation-play-state:paused]' : ''}`}
          style={{ animation: 'testimonialScroll 40s linear infinite' }}
        >
          {displayItems.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`} 
              className="group relative w-[350px] md:w-[450px] flex-shrink-0"
            >
              {/* Subtle animated border glow on hover */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
              
              <div className="relative h-full glass-card border border-white/10 group-hover:border-transparent rounded-3xl p-8 flex flex-col justify-between transition-colors">
                
                <Quote size={40} className="text-white/5 absolute top-6 right-6 rotate-180" />
                
                <div>
                  <StarRating rating={testimonial.rating} active={true} />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light relative z-10">
                    "{testimonial.review}"
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center font-bold text-gray-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} <span className="mx-1">•</span> <span className="text-blue-400/80">{testimonial.company}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes testimonialScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } /* Since we duplicated array 3 times */
        }
      `}} />
    </section>
  );
}
