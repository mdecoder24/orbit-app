"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BeautifulBackground() {
  return (
    <div className="fixed inset-0 z-[-2] w-full h-full bg-[#050505] overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/40 blur-[120px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/30 blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-[10%] left-[20%] w-[70vw] h-[50vw] rounded-full bg-emerald-600/20 blur-[140px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-pink-600/20 blur-[100px] mix-blend-screen"
      />

      {/* Grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Noise overlay to give a premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
