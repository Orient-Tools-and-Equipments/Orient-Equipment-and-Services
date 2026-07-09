"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContentCardProps {
  description: string;
  features?: string[];
}

export default function ContentCard({ description, features }: ContentCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="max-w-4xl mx-auto w-full p-8 md:p-12 glass-card border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)]"
    >
      <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-10">
        {description}
      </p>

      {features && features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/30 mb-2">
                <span className="text-white font-bold">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{feature}</h3>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
