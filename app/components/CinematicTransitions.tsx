"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function CinematicTransitions() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 22, mass: 0.7 });

  const scale = useTransform(smooth, [0, 1], [0.75, 1.45]);
  const rotate = useTransform(smooth, [0, 1], [-8, 10]);
  const opacity = useTransform(
    smooth,
    [0, 0.08, 0.18, 0.34, 0.5, 0.66, 0.82, 0.94, 1],
    [0.2, 0.08, 0.16, 0.05, 0.14, 0.05, 0.13, 0.05, 0.12],
  );
  const lineX = useTransform(smooth, [0, 1], ["-12%", "12%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[32] overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[48vw] w-[48vw] min-h-[360px] min-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4b96a]/20"
        style={{
          scale,
          rotate,
          opacity,
          boxShadow: "0 0 100px rgba(228,185,106,0.06), inset 0 0 100px rgba(228,185,106,0.035)",
        }}
      />
      <motion.div
        className="absolute left-[-20%] right-[-20%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#e4b96a]/20 to-transparent"
        style={{ x: lineX, opacity }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
          background:
            "radial-gradient(circle at 50% 50%, rgba(228,185,106,0.055), transparent 32%), linear-gradient(90deg, transparent 0%, rgba(228,185,106,0.018) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
