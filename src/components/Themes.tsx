"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const themes = [
  {
    title: "Agentic AI & Social Impact Solutions",
    description: "Build autonomous AI agents that solve real-world problems, from climate change monitoring to equitable healthcare distribution.",
    image: "/themes/theme_agentic_ai.jpg",
  },
  {
    title: "Financial Inclusion & Open Banking",
    description: "Develop seamless fintech solutions and digital currencies that bridge the gap for unbanked populations globally.",
    image: "/themes/theme_financial_inclusion.jpg",
  },
  {
    title: "Next-Gen EdTech & Accessible Learning",
    description: "Create accessible, immersive learning environments using AI tutors and mixed reality for students everywhere.",
    image: "/themes/theme_edtech.jpg",
  },
  {
    title: "Open Innovation",
    description: "Design open-source protocols, collaborative networks, and interconnected frameworks that drive humanity forward.",
    image: "/themes/theme_open_innovation.jpg",
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
            Buildathon <span className="text-blue-500">Themes</span>
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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1e]/60 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-70" />
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative z-20 p-8 -mt-16">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md">
                  {theme.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
