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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-4 overflow-hidden">
      


      <TiltCard tiltAmount={3} className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        


        {/* Main headline */}
        <motion.h1 {...fadeUp(0.05)} className="font-display font-black tracking-tight leading-[1.05] mb-4 flex flex-col items-center">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-400 drop-shadow-sm uppercase text-center"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            }}
          >
            AI Buildathon
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p {...fadeUp(0.15)} className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          A <strong className="text-white font-semibold">10-day solo sprint</strong> where individuals build autonomous AI agents and real products from idea to deployed MVP.
          <span className="text-blue-500 font-medium block mt-2">Mentored. Evaluated. Rewarded.</span>
        </motion.p>

        {/* Countdown */}
        <motion.div {...fadeUp(0.2)} className="flex flex-col items-center mb-6 w-full">
          <p className="text-[10px] md:text-[11px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-3">Systems go live in</p>
          <div className="flex items-start justify-center gap-4 sm:gap-8 bg-white/[0.03] px-6 sm:px-12 pt-5 pb-8 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-full max-w-xl backdrop-blur-2xl">
            
            <div className="flex flex-col items-center relative">
              <span className="text-4xl md:text-5xl font-bold text-white font-mono leading-none">{timeLeft.days.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase absolute -bottom-7">Days</span>
            </div>
            
            <span className="text-2xl md:text-4xl text-blue-600 font-bold leading-none mt-1">:</span>
            
            <div className="flex flex-col items-center relative">
              <span className="text-4xl md:text-5xl font-bold text-white font-mono leading-none">{timeLeft.hours.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase absolute -bottom-7">Hours</span>
            </div>
            
            <span className="text-2xl md:text-4xl text-blue-600 font-bold leading-none mt-1">:</span>
            
            <div className="flex flex-col items-center relative">
              <span className="text-4xl md:text-5xl font-bold text-white font-mono leading-none">{timeLeft.minutes.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase absolute -bottom-7">Min</span>
            </div>
            
            <span className="text-2xl md:text-4xl text-blue-600 font-bold leading-none mt-1">:</span>
            
            <div className="flex flex-col items-center relative">
              <span className="text-4xl md:text-5xl font-bold text-white font-mono leading-none">{timeLeft.seconds.toString().padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase absolute -bottom-7">Sec</span>
            </div>
            
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.25)} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
          <button 
            onClick={openModal}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] flex items-center gap-2 group"
          >
            <span>Register Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button className="px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 border border-white/5 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white">
            Explore Themes
          </button>
        </motion.div>

      </TiltCard>
    </section>
  );
}
