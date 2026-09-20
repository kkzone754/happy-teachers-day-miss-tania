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
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
