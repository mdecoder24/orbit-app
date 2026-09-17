"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#020617] overflow-hidden">
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Concentric Spinning Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-40 mix-blend-screen">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-dashed border-cyan-500/30" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border-[1px] border-dashed border-blue-500/20" 
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border-[1px] border-dashed border-indigo-500/10" 
        />
      </div>

      {/* Floating Glowing Orbs */}
      <motion.div 
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/15 rounded-full blur-[100px] mix-blend-screen"
      />
      
      <motion.div 
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-cyan-500/15 rounded-full blur-[120px] mix-blend-screen"
      />

    </div>
  );
}
