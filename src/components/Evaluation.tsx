"use client";

import React from "react";
import { motion } from "framer-motion";

const criteria = [
  { label: "Problem & Relevance", points: 15, color: "bg-blue-500" },
  { label: "Innovation", points: 15, color: "bg-blue-400" },
  { label: "AI Implementation", points: 20, color: "bg-cyan-500" },
  { label: "Technical Execution", points: 20, color: "bg-cyan-400" },
  { label: "User Experience", points: 10, color: "bg-blue-600" },
  { label: "Impact / Scalability", points: 10, color: "bg-blue-300" },
  { label: "Presentation & Demo", points: 10, color: "bg-cyan-300" },
];

const schedule = [
  { time: "10:00", event: "Participant Check-in" },
  { time: "10:15", event: "Opening Ceremony" },
  { time: "10:30", event: "Finalist Briefing" },
  { time: "11:00", event: "Project Demos Begin" },
  { time: "13:00", event: "Break" },
  { time: "14:00", event: "Final Presentations (5 min + 3 min Q&A)" },
  { time: "16:00", event: "Jury Deliberation" },
  { time: "16:30", event: "Results Announced" },
  { time: "17:00", event: "Awards Ceremony" },
  { time: "17:30", event: "Closing" },
];

export default function Evaluation() {
  return (
    <section id="evaluation" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            JUDGING CRITERIA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            100-Point <span className="text-gradient-blue">Evaluation</span> Framework
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            AI Implementation and Technical Execution each carry 20 points — so a flashy AI demo cannot compensate for a weak product.
          </p>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4 mb-24">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 flex-shrink-0 flex flex-col items-start md:items-center group-hover:scale-110 transition-transform">
                <span className={`text-xl font-bold ${item.color.replace('bg-', 'text-')}`}>
                  {item.points}
                </span>
                <span className="text-[10px] text-gray-500 tracking-wider">pts</span>
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-medium text-sm">{item.label}</span>
                  <span className="text-gray-500 text-xs">{item.points}/100</span>
                </div>
                <div className="w-full bg-gray-900 rounded-full h-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.points}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className={`h-1.5 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Day Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-display">
            <span className="text-gradient-blue">Demo Day</span> — Oct 10 Run of Show
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-center gap-6 border-b border-gray-800 pb-4">
                <span className="text-blue-500 font-bold font-mono text-sm">{item.time}</span>
                <span className="text-gray-300 text-sm">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
