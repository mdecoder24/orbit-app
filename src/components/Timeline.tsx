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
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            Sprint Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            10-Day <span className="text-blue-500 glow-text-blue">Execution</span> Plan
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
              className="w-full bg-[#0a0f1e]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-gray-400 font-mono text-sm uppercase tracking-wider md:min-w-[80px]">{event.date}</span>
                  <div className="hidden md:block w-px h-8 bg-white/10 group-hover:bg-blue-500/30 transition-colors"></div>
                  <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-blue-300 transition-colors">{event.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <span className={`text-xs font-bold px-3 py-1 rounded-full 
                  ${event.tag === 'START' ? 'bg-green-900/50 text-green-400 border border-green-800' :
                    event.tag === 'PLAN' ? 'bg-blue-900/50 text-blue-400 border border-blue-800' :
                      event.tag === 'MENTOR' ? 'bg-purple-900/50 text-purple-400 border border-purple-800' :
                        event.tag === 'BUILD' ? 'bg-orange-900/50 text-orange-400 border border-orange-800' :
                          event.tag === 'AI' ? 'bg-pink-900/50 text-pink-400 border border-pink-800' :
                            event.tag === 'DEPLOY' ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-800' :
                              event.tag === 'SUBMIT' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-800' :
                                'bg-red-900/50 text-red-400 border border-red-800' // DEMO
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
