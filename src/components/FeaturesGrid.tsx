"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, FileBadge, Rocket, Brain, Zap, Globe } from "lucide-react";

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

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="glass-panel rounded-2xl p-8 transition-all duration-300 group cursor-default"
            >
              <div className="group-hover:-translate-y-2 transition-transform duration-300">
                {feature.icon}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-display">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
