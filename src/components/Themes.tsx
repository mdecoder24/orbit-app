"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Landmark, GraduationCap, Lightbulb } from "lucide-react";

const themes = [
  {
    title: "Agentic AI & Social Impact Solutions",
    description: "Build autonomous AI agents that solve real-world problems, from climate change monitoring to equitable healthcare distribution.",
    icon: Bot,
  },
  {
    title: "Financial Inclusion & Open Banking",
    description: "Develop seamless fintech solutions and digital currencies that bridge the gap for unbanked populations globally.",
    icon: Landmark,
  },
  {
    title: "Next-Gen EdTech & Accessible Learning",
    description: "Create accessible, immersive learning environments using AI tutors and mixed reality for students everywhere.",
    icon: GraduationCap,
  },
  {
    title: "Open Innovation",
    description: "Design open-source protocols, collaborative networks, and interconnected frameworks that drive humanity forward.",
    icon: Lightbulb,
  },
];

export default function Themes() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">
            Buildathon <span className="text-cyan-400 text-glow">Themes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a track and build something that matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl glass-panel transition-all duration-300 flex flex-col p-8"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-900/50 transition-colors duration-300">
                <theme.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-sm">
                {theme.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {theme.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/btn">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
