"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRegistration } from "@/context/RegistrationContext";
import TiltCard from "@/components/TiltCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { openModal } = useRegistration();

  useEffect(() => {
    const target = new Date("October 1, 2026 00:00:00").getTime();
    const tick = () => {
      const d = target - Date.now();
      if (d < 0) return;
      setTimeLeft({
        days:    Math.floor(d / 86400000),
        hours:   Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000)  / 60000),
        seconds: Math.floor((d % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-8 overflow-hidden">
      
      {/* AI Glowing Core Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-50 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-[1px] border-dashed border-blue-500/50" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 md:inset-8 rounded-full border-[2px] border-dotted border-cyan-400/40" 
        />
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] md:blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <TiltCard tiltAmount={3} className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* Trust badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">
            Registrations Open
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 {...fadeUp(0.05)} className="font-display font-bold leading-[1.05] tracking-tighter mb-6 flex flex-col items-center">
          <span
            style={{
              fontSize: "clamp(4rem, 12vw, 7rem)",
              background: "linear-gradient(135deg, #00f0ff 0%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BUILDATHON
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p {...fadeUp(0.15)} className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          A <strong className="text-white font-semibold">10-day solo sprint</strong> where individuals build 
          autonomous AI agents and real products from idea to deployed MVP. <br className="hidden md:block" />
          <span className="text-blue-400 font-medium">Mentored. Evaluated. Rewarded.</span>
        </motion.p>

        {/* Countdown */}
        <motion.div {...fadeUp(0.2)} className="flex flex-col items-center mb-8 w-full">
          <p className="text-[10px] md:text-xs text-blue-400 font-bold tracking-[0.2em] uppercase mb-3">Systems go live in</p>
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 glass-panel px-4 sm:px-10 py-4 rounded-3xl sm:rounded-full shadow-[0_0_30px_rgba(0,102,255,0.15)] border-blue-500/20 w-full max-w-xl overflow-x-auto no-scrollbar">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-white font-mono leading-none">{timeLeft.days.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">Days</span>
            </div>
            <span className="text-xl md:text-3xl text-blue-500/50 -translate-y-2 md:-translate-y-2 font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-white font-mono leading-none">{timeLeft.hours.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">Hours</span>
            </div>
            <span className="text-xl md:text-3xl text-blue-500/50 -translate-y-2 md:-translate-y-2 font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-white font-mono leading-none">{timeLeft.minutes.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">Min</span>
            </div>
            <span className="text-xl md:text-3xl text-blue-500/50 -translate-y-2 md:-translate-y-2 font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-white font-mono leading-none">{timeLeft.seconds.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">Sec</span>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.25)} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
          <button 
            onClick={openModal}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_50px_rgba(0,102,255,0.6)] flex items-center gap-2 group"
          >
            <span>Register Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button className="px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white">
            Explore Themes
          </button>
        </motion.div>

      </TiltCard>
    </section>
  );
}
