"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: 1992,
    title: "Foundation",
    description:
      "Orient Equipment & Services was established in Coimbatore with a vision to deliver world-class industrial tool sales and service.",
    featured: true,
  },
  {
    year: 2000,
    title: "Workshop Expansion",
    description:
      "Grew into a full-service workshop with dedicated departments for Electric Tools, Pneumatic Tools, Measuring Instruments, and more.",
  },
  {
    year: 2010,
    title: "NABL Accreditation",
    description:
      "Achieved NABL Accreditation under IS/IEC 17025:2017, establishing a certified precision calibration laboratory.",
  },
  {
    year: 2015,
    title: "Authorized Distributorship",
    description:
      "Became the Authorized Main Distributor for Chicago Pneumatic and expanded our portfolio of global industrial brands.",
  },
  {
    year: 2026,
    title: "1500+ Customers Strong",
    description:
      "Serving 1500+ customers across Aerospace, Defence, Automobile, Railways, Power Plants, and more — with 30+ years of excellence.",
  },
];

const featured = milestones.find((m) => m.featured)!;
const rest = milestones.filter((m) => !m.featured);

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

function MilestoneCard({
  milestone,
  index,
  className = "",
}: {
  milestone: (typeof milestones)[number];
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-colors duration-500 hover:border-white/25 hover:bg-white/10 ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-blue-400/10"
      >
        {milestone.year}
      </span>

      <div className="relative">
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm font-semibold tracking-wider text-blue-300">
          {milestone.year}
        </span>
        <h3 className="mb-3 text-2xl font-semibold text-white">{milestone.title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function LegacySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full py-32 heritage-bg text-white overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Our Heritage
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
            Built on a Legacy of Trust
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Three decades of industrial excellence — from a single workshop vision to
            India&apos;s most complete authorised sales, service, and calibration provider.
          </p>
        </motion.div>

        {/* Bento grid — replaces the vertical timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          <MilestoneCard
            milestone={featured}
            index={0}
            className="md:row-span-2 lg:col-span-1 flex flex-col justify-center min-h-[320px] border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-white/5"
          />

          {rest.map((milestone, i) => (
            <MilestoneCard key={milestone.year} milestone={milestone} index={i + 1} />
          ))}
        </div>

        {/* Closing stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "30+", label: "Years" },
            { value: "1500+", label: "Customers" },
            { value: "100+", label: "Facilities" },
            { value: "NABL", label: "Accredited" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
