"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Wrench, ScanLine } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";

const PILLARS = [
  {
    id: "sales",
    title: "Sales",
    icon: ShoppingCart,
    description: "Authorized product sourcing across all major global industrial brands. Every product is genuine, certified, and backed by our 30+ years of expertise.",
    stat: "10,000+ Products",
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: "service",
    title: "Service",
    icon: Wrench,
    description: "Expert repair, maintenance, and technical support by certified technicians — covering Electric Tools, Pneumatic Tools, Hydraulic Equipment, and more.",
    stat: "30+ Years Experience",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: "calibration",
    title: "Calibration",
    icon: ScanLine,
    description: "NABL Accredited precision calibration lab operating under IS/IEC 17025:2017. Traceable, accurate, and compliance-ready for the most demanding industries.",
    stat: "NABL Accredited",
    color: "from-emerald-500 to-teal-400"
  }
];

export default function SolutionsSection() {
  const [activeId, setActiveId] = useState<string>("service"); // Default middle pillar active
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax for the closing tagline
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={sectionRef} className="w-full py-32 heritage-bg text-white relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The Only Complete Industrial Solution <br className="hidden md:block"/> Under One Roof
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Sales. Service. Calibration. No other company brings all three together — we do.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-4 w-full relative">
          
          {/* Continuous Glowing Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block z-0" />
          
          {PILLARS.map((pillar) => {
            const isActive = activeId === pillar.id;
            const Icon = pillar.icon;

            return (
              <motion.div
                layout
                key={pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                className={`relative cursor-pointer overflow-hidden rounded-3xl border transition-colors duration-500 flex flex-col justify-end p-8 md:p-12 z-10 glass-card ${
                  isActive ? 'border-white/30 bg-white/10' : 'border-white/5'
                }`}
                style={{
                  flex: isActive ? 3 : 1,
                  boxShadow: isActive ? "0 25px 50px -12px rgba(0,0,0,0.5)" : "none"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* Active Gradient Overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${pillar.color}`}
                    />
                  )}
                </AnimatePresence>

                {/* Connecting Line Glow (Active State) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="active-glow-line"
                      className={`absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r ${pillar.color} -translate-y-1/2 hidden md:block blur-sm`}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-20 flex flex-col h-full">
                  
                  {/* Icon */}
                  <motion.div 
                    layout="position"
                    className={`mb-auto p-4 rounded-full w-max backdrop-blur-md border ${
                      isActive ? 'bg-white/10 border-white/20' : 'bg-black/50 border-white/5'
                    }`}
                  >
                    <Icon size={isActive ? 32 : 24} className={isActive ? 'text-white' : 'text-gray-500'} />
                  </motion.div>

                  {/* Content */}
                  <motion.div layout="position" className="mt-8">
                    <h3 className={`font-bold transition-all duration-300 ${isActive ? 'text-4xl mb-4' : 'text-2xl text-gray-400 rotate-0 md:-rotate-90 md:origin-left md:translate-y-10 whitespace-nowrap'}`}>
                      {pillar.title}
                    </h3>
                    
                    <AnimatePresence mode="popLayout">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-sm">
                            {pillar.description}
                          </p>
                          <div className="inline-block px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-sm font-semibold tracking-wide uppercase">
                            {pillar.stat}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Closing Tagline */}
      <motion.div 
        style={{ y, opacity }}
        className="text-center mt-32 relative z-10"
      >
        <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 pb-2">
          One company. One call. Every solution.
        </h3>
      </motion.div>

    </section>
  );
}
