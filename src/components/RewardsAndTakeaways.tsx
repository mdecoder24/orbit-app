"use client";

import React from "react";
import { motion } from "framer-motion";
import { Medal, Check, ScrollText, Rocket, Brain, Laptop, Trophy, FileBadge, Zap, Globe } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const features = [
  {
    icon: <Trophy className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />,
    title: "Win ₹1,00,000",
    description: "Cash prize and rewards worth one lakh for the winner.",
  },
  {
    icon: <FileBadge className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />,
    title: "Certificate",
    description: "All participants receive an official completion certificate from Knowvation Learnings.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-300 mb-6 group-hover:scale-110 transition-transform" />,
    title: "Real Project",
    description: "Walk away with a deployed AI product you built yourself — hands-on, portfolio-ready.",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />,
    title: "Expert Mentorship",
    description: "Two structured 1:1 mentor sessions plus async support throughout the sprint.",
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />,
    title: "Solo Sprint",
    description: "No teams. Every builder works independently — your idea, your code, your win.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-300 mb-6 group-hover:scale-110 transition-transform" />,
    title: "Online Event",
    description: "Fully remote. Participate from anywhere in the world, no goodies, no travel required.",
  }
];

export default function RewardsAndTakeaways() {
  return (
    <section id="rewards" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            WHAT YOU GET
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Rewards & <span className="text-gradient-blue">Takeaways</span>
          </h2>
        </div>

        {/* Top Half: Prizes */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
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
              transition={{ delay: 0.1 }}
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

        {/* Bottom Half: Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <TiltCard key={index} tiltAmount={10} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group h-full flex flex-col"
              >
                <div className="group-hover:-translate-y-2 transition-transform duration-300">
                  {feature.icon}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-display">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
