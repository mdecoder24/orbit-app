import React from "react";

export default function StatsBar() {
  const stats = [
    { value: "₹1L+", label: "PRIZE POOL" },
    { value: "10", label: "DAY SPRINT" },
    { value: "100%", label: "ONLINE" },
  ];

  return (
    <div className="relative z-10 w-full border-y border-white/10 glass-panel py-12 shadow-[0_0_50px_rgba(6,182,212,0.05)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center my-4 md:my-0 group cursor-default">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-display group-hover:text-cyan-400 group-hover:text-glow transition-all duration-300">
              {stat.value}
            </h3>
            <p className="text-cyan-500 font-bold tracking-widest text-sm uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
