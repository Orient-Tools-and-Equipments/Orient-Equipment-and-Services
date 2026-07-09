"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="relative w-full pt-40 pb-20 px-8 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[120px] rounded-full z-0 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full text-center"
      >
        <div className="inline-block mb-4 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
          <span className="text-white font-semibold tracking-widest uppercase text-sm">
            {subtitle || "Orient Equipments"}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
          {title}
        </h1>
      </motion.div>
    </div>
  );
}
