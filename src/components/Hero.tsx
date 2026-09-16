"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Globe from "./Globe";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: October 1, 2026
    const targetDate = new Date("October 1, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Sleek Globe Background */}
      <Globe />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-16">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">Registrations Open</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]"
        >
          AI <span className="text-gradient-blue font-display">Buildathon</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl font-light leading-relaxed"
        >
          A 10-day solo sprint where individuals build real AI products from idea to deployed MVP. 
          <br className="hidden md:block" /> Mentored. Evaluated. Rewarded.
        </motion.p>
        
        {/* Dates */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-bold text-gray-300 tracking-[0.2em] uppercase mb-12"
        >
          October 1 - October 10, 2026
        </motion.p>

        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center mb-16 w-full max-w-lg"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.2em] mb-4 uppercase">Registration closes in</p>
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full glass-panel py-4 px-4 sm:py-6 sm:px-8 rounded-2xl">
            {timeBlocks.map((block, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center min-w-[40px] sm:min-w-[60px]">
                  <span className="text-3xl md:text-5xl font-light text-white mb-1 font-mono">
                    {block.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-widest">{block.label}</span>
                </div>
                {index < timeBlocks.length - 1 && (
                  <div className="text-xl text-gray-600 font-light mb-5">:</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-colors flex items-center justify-center gap-2"
          >
            Register as Individual (₹999/-) &rarr;
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/50 text-white rounded-full font-bold transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
