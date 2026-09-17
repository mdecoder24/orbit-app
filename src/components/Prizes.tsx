"use client";

import React from "react";
import { motion } from "framer-motion";
import { Medal, Check, ScrollText, Rocket, Brain, Laptop } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function Prizes() {
  return (
    <section id="prizes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            WHAT YOU WIN
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Prizes & <span className="text-gradient-blue">Rewards</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Winner Card */}
          <TiltCard tiltAmount={10} className="flex-1 lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 flex flex-col items-center transition-all duration-300 relative group h-full cursor-default"
            >
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Medal className="w-10 h-10 text-blue-400" />
              </div>
              
              <h3 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2">
                WINNER
              </h3>
              <div className="text-5xl font-bold text-white mb-2">₹1,00,000</div>
              <p className="text-gray-400 text-sm mb-10">Cash prize + exclusive rewards</p>

              <div className="w-full space-y-4">
                {[
                  "Cash prize worth ₹1 lakh",
                  "Trophy + digital award",
                  "Featured on Knowvation platform",
                  "Media spotlight"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </TiltCard>

          {/* Participant Card */}
          <TiltCard tiltAmount={5} className="flex-[2]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full flex flex-col justify-between group glass-panel rounded-2xl p-8 transition-all duration-300 cursor-default"
            >
              <p className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3">
                EVERY PARTICIPANT RECEIVES
              </p>
              <h3 className="text-3xl font-bold text-white mb-10">
                No one walks away empty-handed
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto">
                <div>
                  <div className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                    <ScrollText className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Completion Certificate</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Official digital certificate from Knowvation Learnings for completing the 10-day sprint.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Deployed AI Project</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A real, live AI product you built from scratch — ready for your portfolio and resume.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Expert Mentorship</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Two structured 1:1 mentor sessions plus ongoing async guidance throughout the sprint.
                  </p>
                </div>
              </div>

              <div className="mt-6 glass-panel rounded-xl p-6 flex items-center gap-4 text-center justify-center md:text-left transition-all duration-300 bg-white/5 border-none">
                <Laptop className="w-8 h-8 text-blue-500 hidden md:block flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Fully online event.</strong> No physical goodies or shipping. All rewards are digital and cash-based.
                </p>
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
