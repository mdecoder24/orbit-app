"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  { day: "Day 1", title: "Kickoff", date: "Oct 1", tag: "START" },
  { day: "Day 2", title: "Ideation + Architecture", date: "Oct 2", tag: "PLAN" },
  { day: "Day 3", title: "Mentor Checkpoint 1", date: "Oct 3", tag: "MENTOR" },
  { day: "Day 4", title: "Core Development (Day 1)", date: "Oct 4", tag: "BUILD" },
  { day: "Day 5", title: "Core Development (Day 2)", date: "Oct 5", tag: "BUILD" },
  { day: "Day 6", title: "Project Integration", date: "Oct 6", tag: "AI" },
  { day: "Day 7", title: "Mentor Checkpoint 2", date: "Oct 7", tag: "MENTOR" },
  { day: "Day 8", title: "Testing + Deployment", date: "Oct 8", tag: "DEPLOY" },
  { day: "Day 9", title: "Final Submission", date: "Oct 9", tag: "SUBMIT" },
  { day: "Day 10", title: "Grand Demo Day", date: "Oct 10", tag: "DEMO" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-bold tracking-[0.2em] text-xs mb-4 uppercase text-glow">
            Sprint Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            10-Day <span className="text-cyan-400 text-glow">Execution</span> Plan
          </h2>
        </div>

        <div className="flex flex-col space-y-4">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full glass-panel rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between border-white/10 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-gray-400 group-hover:text-cyan-300 font-mono text-sm uppercase tracking-wider md:min-w-[80px] transition-colors">{event.date}</span>
                  <div className="hidden md:block w-px h-8 bg-white/10 group-hover:bg-cyan-500/50 transition-colors"></div>
                  <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-cyan-400 transition-colors">{event.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border transition-all duration-300 
                  ${event.tag === 'START' ? 'bg-green-500/10 text-green-400 border-green-500/30 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]' :
                    event.tag === 'PLAN' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]' :
                      event.tag === 'MENTOR' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]' :
                        event.tag === 'BUILD' ? 'bg-orange-500/10 text-orange-400 border-orange-500/30 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.2)]' :
                          event.tag === 'AI' ? 'bg-pink-500/10 text-pink-400 border-pink-500/30 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.2)]' :
                            event.tag === 'DEPLOY' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]' :
                              event.tag === 'SUBMIT' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.2)]' :
                                'bg-red-500/10 text-red-400 border-red-500/30 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.2)]' // DEMO
                  }`}>
                  {event.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
