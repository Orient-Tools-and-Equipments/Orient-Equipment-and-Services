"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CASE_STUDIES = [
  {
    id: "cs-1",
    industry: "Aerospace & Defence",
    metricPrefix: "< ",
    metricNumber: 24,
    metricSuffix: "h",
    metricLabel: "Calibration Turnaround",
    challenge: "Aerospace components required traceable, ISO-compliant calibration with zero tolerance for delays in production schedules.",
    solution: "Deployed our NABL Accredited lab (IS/IEC 17025:2017) with priority scheduling and dedicated precision calibration pipelines.",
    result: "Achieved sub-24-hour calibration turnaround times, keeping production lines running without a single compliance failure."
  },
  {
    id: "cs-2",
    industry: "Automobile Industry",
    metricPrefix: "",
    metricNumber: 40,
    metricSuffix: "%",
    metricLabel: "Downtime Reduced",
    challenge: "Frequent assembly line halts due to pneumatic tool failures and inconsistent torque application across the production floor.",
    solution: "Supplied and calibrated a full fleet of Chicago Pneumatic industrial tools with integrated maintenance schedules and on-site service.",
    result: "Assembly line efficiency stabilized, reducing unplanned downtime by 40% in the first quarter of deployment."
  },
  {
    id: "cs-3",
    industry: "Railways & Transport",
    metricPrefix: "30+",
    metricNumber: 1500,
    metricSuffix: "+",
    metricLabel: "Customers Served",
    challenge: "Transport organizations needed a single reliable vendor for tools, service, and calibration across multiple depots.",
    solution: "Became the end-to-end authorised supplier — handling all tool procurement, scheduled servicing, and calibration under one roof.",
    result: "Now proudly serving 1500+ customers across Aerospace, Railways, Defence, Power Plants, Textile Mills, and more."
  }
];

export default function CaseStudiesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Staggered reveal and count up on scroll
  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade up cards
    const cards = sectionRef.current.querySelectorAll('.case-study-card');
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    // Count up metrics
    metricRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const targetNumber = CASE_STUDIES[index].metricNumber;
      const isDecimal = targetNumber % 1 !== 0;
      
      gsap.fromTo(ref,
        { innerText: 0 },
        {
          innerText: targetNumber,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: isDecimal ? 0.1 : 1 },
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
          },
          onUpdate: function() {
            if (isDecimal) {
              ref.innerText = Number(this.targets()[0].innerText).toFixed(1);
            }
          }
        }
      );
    });
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  return (
    <section ref={sectionRef} className="w-full py-32 heritage-bg text-white relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Proven in the Field
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Real projects, real industries, real results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, index) => (
            <motion.div
              layoutId={`card-container-${cs.id}`}
              key={cs.id}
              onClick={() => setSelectedId(cs.id)}
              className="case-study-card cursor-pointer group rounded-3xl glass-card border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors p-8 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <motion.span layoutId={`industry-${cs.id}`} className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full mb-6 uppercase tracking-wider">
                  {cs.industry}
                </motion.span>
                
                <div className="mb-8">
                  <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-semibold">Challenge</p>
                  <p className="text-white line-clamp-3">{cs.challenge}</p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-blue-500/50 transition-colors" />
                <p className="text-gray-400 text-sm mb-2">{cs.metricLabel}</p>
                <div className="text-5xl font-bold text-white flex items-baseline gap-1">
                  <span className="text-3xl text-blue-400">{cs.metricPrefix}</span>
                  <span ref={el => { metricRefs.current[index] = el; }}>0</span>
                  <span className="text-3xl text-blue-400">{cs.metricSuffix}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 md:p-8 pointer-events-none">
              {CASE_STUDIES.filter(cs => cs.id === selectedId).map(cs => (
                <motion.div
                  layoutId={`card-container-${cs.id}`}
                  key={cs.id}
                  className="w-full max-w-4xl glass-card border border-white/20 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col md:flex-row"
                >
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                  >
                    <X size={24} />
                  </button>

                  {/* Modal Content */}
                  <div className="p-8 md:p-16 flex-1">
                    <motion.span layoutId={`industry-${cs.id}`} className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full mb-8 uppercase tracking-wider">
                      {cs.industry}
                    </motion.span>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white">Challenge</h4>
                        <p className="text-gray-400 leading-relaxed">{cs.challenge}</p>
                      </div>
                      
                      <div className="w-12 h-1 bg-white/10 rounded-full" />
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white">Solution</h4>
                        <p className="text-gray-400 leading-relaxed">{cs.solution}</p>
                      </div>

                      <div className="w-12 h-1 bg-white/10 rounded-full" />
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white">Result</h4>
                        <p className="text-gray-200 leading-relaxed font-medium">{cs.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Modal Highlight Side */}
                  <div className="bg-gradient-to-br from-blue-900/20 to-black md:w-1/3 p-8 md:p-16 flex flex-col justify-center items-start md:items-center border-t md:border-t-0 md:border-l border-white/10">
                    <div className="text-left md:text-center">
                      <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">{cs.metricLabel}</p>
                      <div className="text-6xl md:text-7xl font-bold text-white flex items-baseline justify-start md:justify-center gap-1 mb-4">
                        <span className="text-4xl text-blue-400">{cs.metricPrefix}</span>
                        <span>{cs.metricNumber}</span>
                        <span className="text-4xl text-blue-400">{cs.metricSuffix}</span>
                      </div>
                      <div className="inline-flex items-center justify-center gap-2 mt-8 text-blue-400 text-sm font-semibold uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        Verified Impact
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
