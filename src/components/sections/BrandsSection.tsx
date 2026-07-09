"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const BRANDS = [
  { name: "Bosch", category: "Power Tools" },
  { name: "Makita", category: "Power Tools" },
  { name: "DeWalt", category: "Power Tools" },
  { name: "Milwaukee", category: "Power Tools" },
  { name: "Festool", category: "Power Tools" },
  { name: "Ingersoll Rand", category: "Pneumatic" },
  { name: "Atlas Copco", category: "Pneumatic" },
  { name: "Snap-on", category: "Accessories" },
  { name: "Stanley", category: "Accessories" },
  { name: "Hilti", category: "Power Tools" },
  { name: "IRWIN", category: "Accessories" },
  { name: "Apex", category: "Accessories" }
];

const FILTERS = ["All", "Power Tools", "Pneumatic", "Accessories"];

function HeroBrandCard() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  
  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 15);
    y.set(yPct * -15);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative w-full max-w-3xl mx-auto rounded-3xl cursor-pointer group"
    >
      {/* Background animated glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 animate-pulse" />
      
      {/* Card Content */}
      <div className="relative h-full w-full glass-card rounded-3xl border border-white/20 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
        
        {/* Spotlight sweep effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

        <div className="z-10 text-center md:text-left flex-1" style={{ transform: "translateZ(50px)" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6">
            <BadgeCheck size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">Authorized Main Distributor</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Chicago Pneumatic</h3>
          <p className="text-gray-400 text-lg">
            Delivering high-performance compressors, tools, and equipment for the most demanding industrial applications.
          </p>
        </div>
        
        <div className="z-10 w-64 md:w-80 flex items-center justify-center" style={{ transform: "translateZ(75px)" }}>
           <img 
             src="/Chicago Pneumatics.jpeg" 
             alt="Chicago Pneumatic" 
             className="w-full h-auto object-contain"
           />
        </div>
      </div>
    </motion.div>
  );
}

export default function BrandsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBrands = activeFilter === "All" 
    ? BRANDS 
    : BRANDS.filter(b => b.category === activeFilter);

  // We duplicate the array to create a seamless infinite loop
  const marqueeBrands = [...filteredBrands, ...filteredBrands, ...filteredBrands];

  return (
    <section className="w-full py-32 heritage-bg text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Every Major Brand. <span className="text-gray-500">One Trusted Source.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            From everyday power tools to precision industrial equipment — sourced, sold, and serviced by us.
          </p>
        </div>

        {/* Flagship Brand */}
        <div className="mb-32">
          <HeroBrandCard />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8 py-10 border-y border-white/5">
        
        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex whitespace-nowrap animate-marquee group">
          {marqueeBrands.map((brand, idx) => (
            <div 
              key={`brand-${idx}`} 
              className="mx-8 flex items-center justify-center min-w-[200px] h-24 rounded-xl bg-white/5 border border-white/10 px-8 grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer"
            >
              <span className="text-xl font-bold text-gray-300 group-hover:text-white">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
