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
            Orient Equipment &amp; Services
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light drop-shadow-md">
            India's only integrated Authorised Sales, Service &amp; Calibration provider — since 1992.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
