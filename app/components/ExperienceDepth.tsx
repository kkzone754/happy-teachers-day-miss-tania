"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

const layers = [
  { size: 260, left: "12%", top: "20%", depth: 1, opacity: 0.12 },
  { size: 420, left: "74%", top: "18%", depth: 1.7, opacity: 0.08 },
  { size: 180, left: "64%", top: "72%", depth: 2.4, opacity: 0.1 },
];

export default function ExperienceDepth() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 24, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 24, mass: 0.8 });

  const { scrollYProgress } = useScroll();

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.16, 0.09, 0.07, 0.12]);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [pointerX, pointerY]);

  const cursorGlow = useMotionTemplate`radial-gradient(520px circle at ${useTransform(smoothX, [-0.5, 0.5], ["20%", "80%"])} ${useTransform(smoothY, [-0.5, 0.5], ["20%", "80%"])}, rgba(228,185,106,0.075), transparent 68%)`;

  return (
    <div className="pointer-events-none fixed inset-0 z-[35] overflow-hidden" aria-hidden="true">
      <motion.div className="absolute inset-0" style={{ background: cursorGlow }} />

      <motion.div
        className="absolute inset-[-12%] opacity-[0.16]"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          backgroundImage:
            "linear-gradient(rgba(228,185,106,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(228,185,106,0.10) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 68%)",
        }}
      />

      <motion.div
        className="absolute inset-x-[-10%] bottom-[-18%] h-[72vh]"
        style={{
          y: gridY,
          opacity: gridOpacity,
          transform: "perspective(900px) rotateX(64deg)",
          transformOrigin: "center bottom",
          backgroundImage:
            "linear-gradient(rgba(228,185,106,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(228,185,106,0.12) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
          maskImage: "linear-gradient(to top, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent 78%)",
        }}
      />

      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-[#e4b96a]/20 bg-[#d9a64c]/[0.025] blur-[0.2px]"
          style={{
            width: layer.size,
            height: layer.size,
            left: layer.left,
            top: layer.top,
            opacity: layer.opacity,
            x: useTransform(smoothX, [-0.5, 0.5], [-14 * layer.depth, 14 * layer.depth]),
            y: useTransform(smoothY, [-0.5, 0.5], [-10 * layer.depth, 10 * layer.depth]),
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 38 + index * 12, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.32)_100%)]" />
    </div>
  );
}
