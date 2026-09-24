"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ExperienceAtmosphere() {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const move = (event: MouseEvent) => {
      gsap.to(light, {
        x: event.clientX - 180,
        y: event.clientY - 180,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={lightRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-[360px] w-[360px] rounded-full bg-[#d9a64c]/[0.035] blur-[90px] md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[80] opacity-[0.035] mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(228,185,106,0.18) 0 0.7px, transparent 0.9px), radial-gradient(circle at 72% 68%, rgba(255,248,232,0.12) 0 0.6px, transparent 0.9px), radial-gradient(circle at 42% 82%, rgba(228,185,106,0.10) 0 0.5px, transparent 0.8px)",
          backgroundSize: "13px 17px, 19px 23px, 29px 31px",
        }}
      />
    </>
  );
}
