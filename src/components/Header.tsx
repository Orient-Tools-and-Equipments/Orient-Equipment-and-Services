"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/services/sales" },
  { label: "Manufacturing", href: "/services/manufacture" },
  { label: "Authorised Brands", href: "/brands" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-tight text-white uppercase">
            Orient<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 backdrop-blur-md bg-white/5 px-6 py-2.5 rounded-full border border-white/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/brochure"
              className="text-sm font-semibold text-gray-300 hover:text-white border border-white/20 px-5 py-2 rounded-full hover:border-white/50 transition-all duration-200"
            >
              E-Brochure
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              }
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-50 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link href="/brochure" className="text-center text-sm font-semibold border border-white/20 px-5 py-2.5 rounded-full text-gray-300">E-Brochure</Link>
                <Link href="/contact" className="text-center text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full">Request a Quote</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
