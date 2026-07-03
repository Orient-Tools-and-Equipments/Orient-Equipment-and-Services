"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll (fades out at 10-15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: 30% scroll (fades in at 20%, peaks at 30%, fades out at 40-45%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  // Section 3: 60% scroll (fades in at 50%, peaks at 60%, stays/fades out at 80%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
      {/* Subtle global vignette to ensure edges are dark enough for text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] z-[-1]" />

      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Orient Equipments and Services
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light drop-shadow-md">
            Engineering excellence, crafted for the modern era.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left px-8 md:px-24"
      >
        <div className="max-w-2xl backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            I build digital experiences.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light drop-shadow-md">
            Interactive, performant, and premium design that scales.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right px-8 md:px-24"
      >
        <div className="max-w-2xl backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Bridging design and engineering.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light drop-shadow-md">
            Fusing aesthetics with robust technical foundations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
