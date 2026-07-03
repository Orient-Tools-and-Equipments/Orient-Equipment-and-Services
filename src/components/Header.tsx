"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Activities', href: '#' },
    { name: 'Manufacturing', href: '#' },
    { name: 'Authorised Brands', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold tracking-tighter text-white uppercase">
          Orient
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 backdrop-blur-md bg-white/5 px-8 py-3 rounded-full border border-white/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <button className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </motion.header>
  );
}
