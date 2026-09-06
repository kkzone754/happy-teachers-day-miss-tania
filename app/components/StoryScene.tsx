"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const particles = [
  { left: "8%", top: "18%", size: 2 },
  { left: "16%", top: "72%", size: 3 },
  { left: "27%", top: "35%", size: 2 },
  { left: "39%", top: "80%", size: 2 },
  { left: "52%", top: "20%", size: 3 },
  { left: "63%", top: "68%", size: 2 },
  { left: "74%", top: "30%", size: 3 },
  { left: "86%", top: "76%", size: 2 },
  { left: "94%", top: "42%", size: 2 },
];

export default function StoryScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const chapter = q(".chapter-label");
      const title = q(".stage-title");
      const location = q(".location-label");

      const memoryIntro = q(".memory-intro");
      const memoryDetail = q(".memory-detail");
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
          title,
          location,
          memoryIntro,
          memoryDetail,
          fear,
          hint,
          frame,
        ],
        { opacity: 0 }
      );

      gsap.set(chapter, { y: 20 });
      gsap.set(title, { y: 35, scale: 0.94 });
      gsap.set(location, { y: 15 });
      gsap.set(memoryIntro, { y: 25, scale: 0.96 });
      gsap.set(memoryDetail, { y: 20 });
      gsap.set(fear, { scale: 0.8 });

      // --------------------------------------------------
      // INTRO
      // --------------------------------------------------

      const intro = gsap.timeline();

      intro
        .to(chapter, {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
          "-=0.45"
        )
        .to(
          location,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          memoryIntro,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          memoryDetail,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
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
          "-=0.3"
        )
        .to(
          hint,
          {
            opacity: 1,
            duration: 0.6,
          },
          "-=0.15"
        );

      // --------------------------------------------------
      // MOVING LIGHT
      // --------------------------------------------------

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

      // --------------------------------------------------
      // FLOATING DUST
      // --------------------------------------------------

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

      // --------------------------------------------------
      // CINEMATIC SCROLL STORY
      // --------------------------------------------------

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

        // -------------------------------
        // OPENING
        // -------------------------------

        .addLabel("opening")

        .to(
          title,
          {
            scale: 1.18,
            y: -75,
            opacity: 0.12,
            letterSpacing: "0.04em",
            duration: 1,
            ease: "power2.inOut",
          },
          "opening"
        )

        .to(
          chapter,
          {
            y: -35,
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

        // -------------------------------
        // FREE FLOATING MEMORY TEXT
        // -------------------------------

        .to(
          memoryIntro,
          {
            y: -30,
            opacity: 1,
            scale: 1.05,
            duration: 0.7,
            ease: "power3.out",
          },
          "opening+=0.1"
        )

        .to(
          memoryDetail,
          {
            y: 15,
            opacity: 0.8,
            duration: 0.7,
          },
          "opening+=0.15"
        )

        // -------------------------------
        // FEAR MOMENT
        // -------------------------------

        .to(
          memoryIntro,
          {
            y: -100,
            opacity: 0,
            scale: 1.15,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "opening+=0.65"
        )

        .to(
          memoryDetail,
          {
            y: -60,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.7,
          },
          "opening+=0.7"
        )

        .to(
          fear,
          {
            scale: 1.28,
            opacity: 1,
            letterSpacing: "0.08em",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "opening+=0.75"
        )

        // -------------------------------
        // LIGHTS FADE
        // -------------------------------

        .to(
          spotlight,
          {
            opacity: 0.04,
            scale: 0.7,
            duration: 0.8,
          },
          "opening+=0.7"
        )

        .to(
          spotlightTwo,
          {
            opacity: 0.04,
            scale: 0.7,
            duration: 0.8,
          },
          "opening+=0.7"
        )

        // -------------------------------
        // CINEMATIC FRAME
        // -------------------------------

        .to(
          frame,
          {
            opacity: 0.85,
            scale: 1.025,
            duration: 0.8,
          },
          "opening+=0.75"
        )

        // -------------------------------
        // FEAR DISAPPEARS
        // -------------------------------

        .to(
          fear,
          {
            opacity: 0,
            scale: 1.6,
            filter: "blur(16px)",
            letterSpacing: "0.3em",
            duration: 0.85,
            ease: "power3.in",
          },
          "+=0.15"
        )

        // -------------------------------
        // FINAL TRANSITION
        // -------------------------------

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
      {/* ==================================================
          AMBIENT CINEMATIC BACKGROUND
      ================================================== */}

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
            }}
          />
        ))}
      </div>

      {/* ==================================================
          CINEMATIC BORDER
      ================================================== */}

      <div className="cinematic-frame pointer-events-none absolute inset-4 rounded-[2rem] border border-amber-100/[0.08] sm:inset-8 sm:rounded-[2.5rem]" />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="w-full max-w-6xl text-center">

          {/* Chapter */}

          <p className="chapter-label text-[10px] uppercase tracking-[0.5em] text-amber-200/55 sm:text-xs">
            Chapter One
          </p>

          {/* Tiny cinematic divider */}

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

          {/* Main title */}

          <h2 className="stage-title mt-8 text-5xl font-extralight tracking-[-0.04em] text-amber-50 sm:text-7xl md:text-8xl">
            The First Stage
          </h2>

          {/* Location */}

          <p className="location-label mt-5 text-[10px] uppercase tracking-[0.24em] text-white/30 sm:text-xs sm:tracking-[0.35em]">
            Aladdin · Arts Council of Pakistan · Karachi
          </p>

          {/* ==================================================
              IMPORTANT:
              NO CARD / NO RECTANGLE HERE
          ================================================== */}

          <div className="memory-intro mx-auto mt-16 max-w-4xl">
            <div className="flex items-center justify-center gap-4 text-amber-200/35">
              <span className="h-px w-8 bg-amber-200/20 sm:w-14" />

              <span className="text-[9px] uppercase tracking-[0.45em] sm:text-[10px]">
                A memory
              </span>

              <span className="h-px w-8 bg-amber-200/20 sm:w-14" />
            </div>

            <p className="mt-7 text-3xl font-extralight tracking-[-0.025em] text-white/90 sm:text-5xl md:text-6xl">
              My first stage performance.
            </p>
          </div>

          {/* Supporting memory */}

          <div className="memory-detail mx-auto mt-7 max-w-2xl">
            <p className="text-sm font-light leading-7 text-white/40 sm:text-base sm:leading-8">
              I had never stood on a stage like that before.
            </p>

            <p className="mt-2 text-sm font-light leading-7 text-white/30 sm:text-base">
              The lights were on. People were watching.
            </p>

            <p className="mt-4 text-sm italic text-amber-100/45 sm:text-base">
              And honestly...
            </p>
          </div>

          {/* Fear */}

          <p className="fear-text mx-auto mt-8 text-xl font-light tracking-[0.08em] text-amber-100 sm:text-3xl">
            I was scared.
          </p>

          {/* Scroll */}

          <div className="scroll-hint mt-10 text-[9px] uppercase tracking-[0.4em] text-white/25 sm:text-[10px]">
            Keep scrolling
          </div>
        </div>
      </div>
    </section>
  );
}