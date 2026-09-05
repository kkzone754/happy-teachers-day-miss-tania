"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const particles = [
  { left: "8%", top: "18%", size: 2, delay: 0 },
  { left: "16%", top: "72%", size: 3, delay: 1 },
  { left: "27%", top: "35%", size: 2, delay: 2 },
  { left: "39%", top: "80%", size: 2, delay: 0.5 },
  { left: "52%", top: "20%", size: 3, delay: 1.5 },
  { left: "63%", top: "68%", size: 2, delay: 2.5 },
  { left: "74%", top: "30%", size: 3, delay: 0.8 },
  { left: "86%", top: "76%", size: 2, delay: 1.8 },
  { left: "94%", top: "42%", size: 2, delay: 0.3 },
];

export default function StoryScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const title = q(".stage-title");
      const chapter = q(".chapter-label");
      const location = q(".location-label");
      const card = q(".memory-card");
      const fear = q(".fear-text");
      const hint = q(".scroll-hint");
      const spotlight = q(".spotlight");
      const spotlightTwo = q(".spotlight-two");
      const glow = q(".main-glow");
      const particlesEls = q(".particle");
      const frame = q(".cinematic-frame");

      gsap.set(
        [
          chapter,
          location,
          title,
          card,
          fear,
          hint,
          spotlight,
          spotlightTwo,
          glow,
          frame,
        ],
        { opacity: 0 }
      );

      const intro = gsap.timeline();

      intro
        .to(chapter, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .to(
          location,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          card,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          fear,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          hint,
          {
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2"
        );

      gsap.to(spotlight, {
        x: 90,
        rotation: 5,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(spotlightTwo, {
        x: -100,
        rotation: -6,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glow, {
        scale: 1.18,
        opacity: 0.75,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      particlesEls.forEach((particle, index) => {
        gsap.to(particle, {
          y: index % 2 === 0 ? -45 : 35,
          x: index % 3 === 0 ? 18 : -14,
          opacity: index % 2 === 0 ? 0.8 : 0.35,
          duration: 4 + (index % 4),
          repeat: -1,
          yoyo: true,
          delay: index * 0.15,
          ease: "sine.inOut",
        });
      });

      const cinematic = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1150",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      cinematic
        .addLabel("opening")
        .to(
          title,
          {
            scale: 1.18,
            y: -80,
            opacity: 0.15,
            letterSpacing: "0.04em",
            duration: 1,
            ease: "power2.inOut",
          },
          "opening"
        )
        .to(
          chapter,
          {
            y: -40,
            opacity: 0,
            duration: 0.6,
          },
          "opening"
        )
        .to(
          location,
          {
            y: -25,
            opacity: 0,
            duration: 0.6,
          },
          "opening"
        )
        .to(
          card,
          {
            y: 100,
            scale: 0.92,
            opacity: 0,
            rotateX: -8,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "opening+=0.1"
        )
        .to(
          fear,
          {
            scale: 1.3,
            opacity: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "opening+=0.35"
        )
        .to(
          spotlight,
          {
            opacity: 0.05,
            scale: 0.7,
            duration: 0.8,
          },
          "opening+=0.1"
        )
        .to(
          spotlightTwo,
          {
            opacity: 0.05,
            scale: 0.7,
            duration: 0.8,
          },
          "opening+=0.1"
        )
        .to(
          fear,
          {
            letterSpacing: "0.35em",
            scale: 1.05,
            duration: 0.5,
          },
          "+=0.1"
        )
        .to(
          frame,
          {
            opacity: 0.8,
            scale: 1.03,
            duration: 0.8,
          },
          "<"
        )
        .to(
          fear,
          {
            opacity: 0,
            scale: 1.6,
            filter: "blur(14px)",
            duration: 0.8,
            ease: "power3.in",
          },
          "+=0.15"
        )
        .to(
          glow,
          {
            opacity: 1,
            scale: 1.4,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          frame,
          {
            opacity: 0,
            scale: 1.15,
            duration: 0.8,
          },
          "<"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050403] text-amber-50"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="main-glow absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.07] blur-[120px]" />

        <div className="spotlight absolute left-[18%] top-[-25%] h-[125%] w-[16%] origin-top rotate-[8deg] bg-gradient-to-b from-amber-100/[0.11] via-amber-200/[0.035] to-transparent blur-3xl" />

        <div className="spotlight-two absolute right-[18%] top-[-25%] h-[125%] w-[15%] origin-top rotate-[-8deg] bg-gradient-to-b from-amber-100/[0.09] via-amber-200/[0.025] to-transparent blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.72)_100%)]" />

        {particles.map((particle, index) => (
          <span
            key={index}
            className="particle absolute rounded-full bg-amber-100/50"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Cinematic border */}
      <div className="cinematic-frame pointer-events-none absolute inset-4 rounded-[2rem] border border-amber-100/[0.08] sm:inset-8 sm:rounded-[2.5rem]" />

      {/* Main content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="w-full max-w-5xl text-center">

          <p className="chapter-label translate-y-4 text-[10px] uppercase tracking-[0.5em] text-amber-200/55 sm:text-xs">
            Chapter One
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

          <h2 className="stage-title mt-8 translate-y-8 scale-[0.94] text-5xl font-extralight tracking-[-0.04em] text-amber-50 sm:text-7xl md:text-8xl">
            The First Stage
          </h2>

          <p className="location-label mt-5 translate-y-4 text-[10px] uppercase tracking-[0.24em] text-white/30 sm:text-xs sm:tracking-[0.35em]">
            Aladdin · Arts Council of Pakistan · Karachi
          </p>

          <div
            className="memory-card mx-auto mt-12 max-w-2xl translate-y-14 rounded-[2rem] border border-white/[0.09] bg-white/[0.035] p-7 opacity-0 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mt-14 sm:p-12"
            style={{ perspective: "1000px" }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-100/[0.12] bg-amber-100/[0.045] text-xl shadow-[0_0_50px_rgba(217,166,76,0.08)] sm:h-16 sm:w-16 sm:text-2xl">
              🎭
            </div>

            <p className="mt-7 text-lg font-light leading-8 text-white/75 sm:text-2xl sm:leading-10">
              My first stage performance.
            </p>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
              I had never performed on a stage like that before.
              <br />
              And honestly...
            </p>
          </div>

          <p className="fear-text mx-auto mt-8 scale-[0.8] text-xl font-light tracking-[0.08em] text-amber-100 sm:text-3xl">
            I was scared.
          </p>

          <div className="scroll-hint mt-10 opacity-0 text-[9px] uppercase tracking-[0.4em] text-white/25 sm:text-[10px]">
            Keep scrolling
          </div>
        </div>
      </div>
    </section>
  );
}