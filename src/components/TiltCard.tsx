"use client";

import React from "react";
import { motion } from "framer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";

export default function TiltCard({ children, className = "", tiltAmount = 15 }: { children: React.ReactNode, className?: string, tiltAmount?: number }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(tiltAmount);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* We add a subtle translateZ to the children to make them pop out of the card */}
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
