"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  { day: "Day 1", title: "Kickoff", date: "Oct 1", tag: "START" },
  { day: "Day 2", title: "Ideation + Architecture", date: "Oct 2", tag: "PLAN" },
  { day: "Day 3", title: "Mentor Checkpoint 1", date: "Oct 3", tag: "MENTOR" },
  { day: "Day 4", title: "Core Development", date: "Oct 4", tag: "BUILD" },
  { day: "Day 5", title: "Build Phase Day 2", date: "Oct 5", tag: "BUILD" },
  { day: "Day 6", title: "AI Integration", date: "Oct 6", tag: "AI" },
  { day: "Day 7", title: "Mentor Checkpoint 2", date: "Oct 7", tag: "MENTOR" },
  { day: "Day 8", title: "Testing + Deployment", date: "Oct 8", tag: "DEPLOY" },
  { day: "Day 9", title: "Final Submission", date: "Oct 9", tag: "SUBMIT" },
  { day: "Day 10", title: "Grand Demo Day", date: "Oct 10", tag: "DEMO" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            Sprint Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            10-Day <span className="text-blue-500 glow-text-blue">Execution</span> Plan
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] timeline-line md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Dot */}
                  <div className="absolute left-[13px] md:left-1/2 w-4 h-4 rounded-full bg-black border-[3px] border-blue-500 md:-translate-x-1/2 z-10 glow-border-blue transform translate-y-6 md:translate-y-0"></div>

                  {/* Card Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <div className="bg-[#0f1219] border border-blue-900/30 rounded-xl p-6 hover:glow-border-blue transition-all duration-300 relative group">
                      
                      {/* Triangle Pointer for Desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0f1219] border-t border-r border-blue-900/30 rotate-45 ${isEven ? '-right-[7px]' : '-left-[7px] border-l border-b border-t-0 border-r-0'}`}></div>

                      <div className="glass-panel p-6 rounded-xl transition-all duration-300 w-full group cursor-default">
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full 
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
                          <span className="text-gray-500 text-xs font-mono">{event.date}</span>
                        </div>
                        <h4 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors font-display">{event.day} — {event.title}</h4>
                      </div>
                      {/* Dropdown indicator */}
                      <div className={`mt-4 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-blue-500 opacity-50 group-hover:opacity-100 transition-opacity ${isEven ? 'md:ml-auto' : ''}`}></div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
