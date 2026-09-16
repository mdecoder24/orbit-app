"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Evaluation", href: "#evaluation" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className={`fixed w-full z-50 transition-all duration-300 px-4 ${isScrolled ? "top-2" : "top-6"}`}>
        <div className="max-w-6xl mx-auto px-6 glass-panel rounded-full shadow-[0_4px_30px_rgba(0,102,255,0.15)] transition-all duration-300">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-white font-bold text-xl tracking-tight">
                Knowvation <span className="text-blue-500 glow-text-blue">Learnings</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-semibold text-sm transition-all glow-border-blue ml-4">
                Register Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-8 mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-2xl text-gray-300 hover:text-white hover:glow-text-blue transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                className="bg-blue-600 w-full max-w-xs mt-8 py-3 rounded-md text-white font-bold text-lg glow-border-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
