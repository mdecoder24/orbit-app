"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spotlight = spotlightRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Setup Canvas Size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Mouse Interaction
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Update Spotlight
      if (spotlight) {
        spotlight.style.background = `radial-gradient(circle 800px at ${e.clientX}px ${e.clientY}px, rgba(0, 150, 255, 0.12), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        if (!canvas) {
          this.x = 0; this.y = 0; this.size = 1; this.speedX = 0; this.speedY = 0;
          return;
        }
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0, 200, 255, 0.6)"; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Init Particles
    const init = () => {
      particles = [];
      const numberOfParticles = Math.min((canvas.width * canvas.height) / 15000, 150); // Cap at 150 for performance
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    init();

    // Animation Loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 150, 255, ${0.15 - distance / 120 * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distanceMouse < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 200, 255, ${0.3 - distanceMouse / 180 * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#020510]">
      {/* Dynamic Spotlight */}
      <div ref={spotlightRef} className="absolute inset-0 transition-opacity duration-300" />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      {/* Interactive Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
