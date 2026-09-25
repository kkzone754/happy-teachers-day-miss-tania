"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

const particles = Array.from({ length: 26 }, (_, index) => ({
  left: `${(index * 37) % 96 + 2}%`,
  top: `${(index * 61) % 88 + 4}%`,
  size: 1 + (index % 3),
  depth: 0.5 + (index % 5) * 0.35,
  duration: 5 + (index % 6) * 1.2,
  delay: (index % 7) * 0.45,
}));

type ParticleProps = {
  particle: (typeof particles)[number];
  index: number;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
};

function Particle({ particle, index, smoothX, smoothY }: ParticleProps) {
  const particleX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-18 * particle.depth, 18 * particle.depth]
  );

  const particleY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-14 * particle.depth, 14 * particle.depth]
  );

  return (
    <motion.span
      className="absolute rounded-full bg-[#f0d49a]"
      style={{
        left: particle.left,
        top: particle.top,
        width: particle.size,
        height: particle.size,
        opacity: 0.12 + (index % 4) * 0.045,
        x: particleX,
        y: particleY,
        filter: `blur(${index % 4 === 0 ? 0.8 : 0}px)`,
      }}
      animate={{
        y: [0, -18 - (index % 4) * 8, 0],
        x: [
          0,
          (index % 2 === 0 ? 1 : -1) * (8 + (index % 3) * 4),
          0,
        ],
        opacity: [0.08, 0.3, 0.08],
        scale: [0.7, 1.25, 0.7],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function ExperienceParticles() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 40,
    damping: 22,
    mass: 0.8,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 40,
    damping: 22,
    mass: 0.8,
  });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });

    return () =>
      window.removeEventListener("pointermove", onPointerMove);
  }, [pointerX, pointerY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[34] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <Particle
          key={index}
          particle={particle}
          index={index}
          smoothX={smoothX}
          smoothY={smoothY}
        />
      ))}
    </div>
  );
}