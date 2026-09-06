"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type IntroProps = {
  onStart: () => void;
};

export default function Intro({ onStart }: IntroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // -------------------------------------------------------------
  // 1. POINTER PHYSICS & LIGHT TRACKING
  // -------------------------------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 45, damping: 25, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]);

  const lightX = useTransform(smoothX, [-0.5, 0.5], ["30%", "70%"]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], ["30%", "70%"]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  // -------------------------------------------------------------
  // 2. PARTICLES DUST CANVAS ENGINE (GOLD DUST)
  // -------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(Math.floor((width * height) / 10000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -Math.random() * 0.3 - 0.08,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 185, 106, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // -------------------------------------------------------------
  // 3. START STORY
  // -------------------------------------------------------------
  const handleStart = () => {
    setIsExiting(true);
    window.setTimeout(() => {
      onStart();
    }, 850);
  };

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 1.04 : 1,
        filter: isExiting ? "blur(14px)" : "blur(0px)",
      }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex min-h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0a0806] px-6 text-center select-none font-sans"
    >
      {/* Golden Dust Floating Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
      />

      {/* Dynamic Cursor Light Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(800px circle at ${lightX.get()} ${lightY.get()}, rgba(212, 160, 70, 0.18), transparent 65%)`,
        }}
      />

      {/* Warm Ambient Golden Central Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a046]/15 blur-[160px] z-0 animate-pulse" />

      {/* Tactile Frame Corners in Amber Gold */}
      <div className="pointer-events-none absolute inset-4 border border-[#e4b96a]/20 sm:inset-8 rounded-sm z-20" />
      <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-[#e4b96a] sm:left-8 sm:top-8 z-20" />
      <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-[#e4b96a] sm:right-8 sm:top-8 z-20" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-[#e4b96a] sm:bottom-8 sm:left-8 z-20" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-[#e4b96a] sm:bottom-8 sm:right-8 z-20" />

      {/* Top Center Title Tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-8 z-30 -translate-x-1/2 sm:top-12"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-[#e4b96a]/50 sm:w-10" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.45em] text-[#e4b96a]">
            EXHIBIT 00 — A SURPRISE
          </span>
          <span className="h-px w-6 bg-[#e4b96a]/50 sm:w-10" />
        </div>
      </motion.div>

      {/* MAIN CONTENT AREA */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center py-12"
      >
        {/* Background Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[26vw] font-bold tracking-widest text-[#e4b96a] sm:text-[18vw] md:text-[16rem]"
        >
          TANIA
        </motion.div>

        {/* Small Golden Prefix */}
        <div className="overflow-hidden py-1 mb-1">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-xl tracking-widest text-[#e4b96a] sm:text-3xl drop-shadow-[0_0_12px_rgba(228,185,106,0.3)]"
          >
            For
          </motion.p>
        </div>

        {/* MAIN GOLDEN GRADIENT HEADING */}
        <div className="overflow-hidden py-2 my-1">
          <motion.h1
            initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[4.2rem] font-normal leading-none tracking-tight sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem]"
            style={{
              background: "linear-gradient(180deg, #ffffff 20%, #f7d399 60%, #c89a52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 0px 30px rgba(200, 154, 82, 0.3))",
            }}
          >
            Miss Tania
          </motion.h1>
        </div>

        {/* Golden Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 h-px w-36 bg-gradient-to-r from-transparent via-[#e4b96a] to-transparent sm:mt-6 sm:w-64"
        />

        {/* Warm Subtitle */}
        <div className="overflow-hidden pt-4 sm:pt-6">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 0.9 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md font-sans text-xs font-light leading-relaxed tracking-widest text-[#f5e6d0] sm:text-sm md:text-base"
          >
            A personal interactive story,
            <br className="sm:hidden" /> crafted into a memory.
          </motion.p>
        </div>

        {/* GOLDEN BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14"
        >
          <button
            onClick={handleStart}
            disabled={isExiting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#e4b96a]/60 bg-[#16110a] px-9 py-4 shadow-[0_0_20px_rgba(228,185,106,0.15)] backdrop-blur-2xl transition-all duration-500 hover:border-[#e4b96a] hover:shadow-[0_0_35px_rgba(228,185,106,0.4)] focus:outline-none"
          >
            {/* Sweep Reflection */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#e4b96a]/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

            <span className="relative z-10 flex items-center gap-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-[#fff8e8] sm:text-xs">
              <span>Begin Experience</span>
              <motion.svg
                animate={{ x: isHovered ? 6 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-4 w-4 text-[#e4b96a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </motion.svg>
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Footer Year Stamp */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap sm:bottom-9"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#e4b96a]">
          TEACHER&apos;S DAY SPECIAL · 2026
        </p>
      </motion.div>
    </motion.main>
  );
}