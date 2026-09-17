"use client";

import React from "react";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            About The Event
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
            Build a working AI product in <br className="hidden md:block" />
            <span className="text-gradient-blue">10 days</span>
          </h2>
          
          <div className="mt-8 text-gray-300 space-y-6 text-lg leading-relaxed">
            <p>
              The Knowvation AI Buildathon is a solo, structured 10-day sprint designed for 
              individuals who want to go beyond tutorials and build something real. From kickoff to 
              demo day, you'll ship a fully deployed AI product — with mentors beside you every step.
            </p>
            <p>
              No teams. No shortcuts. Just you, your idea, and 10 days to make it real. The best 
              submission wins ₹1 lakh. Every participant walks away with a certificate, a deployable 
              project, and mentorship from industry practitioners.
            </p>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="flex-1 w-full max-w-md"
        >
          <TiltCard tiltAmount={10} className="w-full h-full p-1 rounded-3xl bg-gradient-to-br from-blue-600/30 via-cyan-500/10 to-black">
            <div className="glass-panel rounded-[22px] p-10 flex flex-col items-center text-center h-full border-none cursor-default group">
              <h3 className="text-7xl font-black text-white mb-4 font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">10</h3>
              <p className="text-gray-300 text-sm mb-12 leading-relaxed font-medium">
                Days.<br />
                Idea to deployed AI product.<br />
                Solo. Mentored. Real.
              </p>
              
              <div className="w-full border-t border-white/10 pt-8 flex justify-between px-2">
                <div className="text-center group/item hover:-translate-y-1 transition-transform cursor-pointer">
                  <p className="text-cyan-400 font-bold text-2xl mb-1">₹1L</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-bold group-hover/item:text-cyan-500 transition-colors">Prize</p>
                </div>
                <div className="text-center group/item hover:-translate-y-1 transition-transform cursor-pointer">
                  <p className="text-white font-bold text-2xl mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">2</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-bold group-hover/item:text-white transition-colors">Checkpoints</p>
                </div>
                <div className="text-center group/item hover:-translate-y-1 transition-transform cursor-pointer">
                  <p className="text-white font-bold text-2xl mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">100</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-bold group-hover/item:text-white transition-colors">Points</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
