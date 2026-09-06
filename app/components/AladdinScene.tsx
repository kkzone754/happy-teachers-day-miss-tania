"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AladdinScene() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // -------------------------------------------------
      // INITIAL STATE
      // -------------------------------------------------

      gsap.set(
        [
          ".aladdin-kicker",
          ".aladdin-title",
          ".aladdin-location",
          ".aladdin-intro",
          ".role-master",
          ".role-voice",
          ".role-climax",
          ".aladdin-final",
          ".aladdin-line",
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(".aladdin-stage-image", {
        scale: 1.04,
      });

      gsap.set(".aladdin-stage-glow", {
        opacity: 0.35,
      });

      gsap.set(".aladdin-particle", {
        opacity: 0,
      });

      // -------------------------------------------------
      // BACKGROUND MOVEMENT
      // -------------------------------------------------

      gsap.to(".aladdin-stage-image", {
        scale: 1.1,
        duration: 12,
        ease: "none",
      });

      gsap.to(".aladdin-stage-glow", {
        opacity: 0.65,
        scale: 1.08,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // -------------------------------------------------
      // FLOATING DUST
      // -------------------------------------------------

      gsap.to(".aladdin-particle", {
        opacity: "random(0.15, 0.55)",
        y: "random(-120, -30)",
        x: "random(-40, 40)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      // -------------------------------------------------
      // INTRO
      // -------------------------------------------------

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(".aladdin-kicker", {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })
        .to(
          ".aladdin-title",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
          },
          "-=0.35"
        )
        .to(
          ".aladdin-location",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.55"
        )
        .to(
          ".aladdin-intro",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.35"
        );

      // -------------------------------------------------
      // SCROLL STORY
      // -------------------------------------------------

      const story = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1450",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // INTRO LEAVES
      story
        .to(".aladdin-kicker", {
          opacity: 0,
          y: -30,
          duration: 0.45,
        })
        .to(
          ".aladdin-title",
          {
            opacity: 0,
            y: -45,
            scale: 0.94,
            duration: 0.55,
          },
          "<"
        )
        .to(
          ".aladdin-location",
          {
            opacity: 0,
            y: -25,
            duration: 0.4,
          },
          "<"
        )
        .to(
          ".aladdin-intro",
          {
            opacity: 0,
            y: -20,
            duration: 0.4,
          },
          "<"
        )

        // -------------------------------------------------
        // EMPTY STAGE
        // -------------------------------------------------

        .to(".aladdin-stage-glow", {
          opacity: 0.9,
          duration: 0.5,
        })
        .to(
          ".role-master",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "+=0.15"
        )

        // -------------------------------------------------
        // MASTER JI
        // -------------------------------------------------

        .to(".role-master", {
          opacity: 0,
          y: -35,
          duration: 0.55,
        })

        // -------------------------------------------------
        // UNKNOWN VOICE
        // -------------------------------------------------

        .to(
          ".role-voice",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.1"
        )

        .to(".role-voice", {
          opacity: 0,
          y: -35,
          duration: 0.55,
        })

        // -------------------------------------------------
        // CLIMAX
        // -------------------------------------------------

        .to(
          ".role-climax",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.1"
        )
        .to(
          ".aladdin-stage-glow",
          {
            opacity: 1,
            scale: 1.2,
            duration: 0.8,
          },
          "<"
        )

        .to(".role-climax", {
          opacity: 0,
          y: -25,
          duration: 0.5,
        })

        // -------------------------------------------------
        // FINAL EMOTIONAL LINE
        // -------------------------------------------------

        .to(
          ".aladdin-final",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.05"
        )
        .to(
          ".aladdin-line",
          {
            opacity: 1,
            width: "76px",
            duration: 0.5,
          },
          "-=0.45"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-[#fff7e6]"
    >
      {/* =================================================
          REAL STAGE IMAGE
      ================================================== */}

      <div
        className="aladdin-stage-image absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/aladdin-stage.jpg')",
        }}
      />

      {/* =================================================
          DARK CINEMATIC OVERLAY
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,2,8,0.68)_0%,rgba(5,2,5,0.18)_35%,rgba(3,1,2,0.38)_65%,rgba(2,0,1,0.88)_100%)]" />

      {/* Side vignette */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0.78)_100%)]" />

      {/* =================================================
          WARM STAGE LIGHT
      ================================================== */}

      <div
        className="aladdin-stage-glow pointer-events-none absolute left-1/2 top-[42%] h-[55vh] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-[90px]"
      />

      {/* =================================================
          GOLDEN LIGHT BEAMS
      ================================================== */}

      <div className="pointer-events-none absolute left-[34%] top-0 h-[72%] w-[12%] -skew-x-[12deg] bg-gradient-to-b from-amber-100/10 via-amber-300/10 to-transparent blur-2xl" />

      <div className="pointer-events-none absolute right-[34%] top-0 h-[72%] w-[12%] skew-x-[12deg] bg-gradient-to-b from-amber-100/10 via-amber-300/10 to-transparent blur-2xl" />

      {/* =================================================
          DUST PARTICLES
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="aladdin-particle absolute h-1 w-1 rounded-full bg-amber-100"
            style={{
              left: `${8 + ((index * 17) % 84)}%`,
              top: `${42 + ((index * 13) % 38)}%`,
            }}
          />
        ))}
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="w-full max-w-4xl">

          {/* KICKER */}

          <p className="aladdin-kicker text-[10px] uppercase tracking-[0.45em] text-amber-200/75 sm:text-xs">
            One unforgettable memory
          </p>

          {/* TITLE */}

          <h2 className="aladdin-title mt-4 text-6xl font-light tracking-[-0.04em] text-[#fff4d6] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] sm:text-8xl md:text-9xl">
            Aladdin
          </h2>

          {/* LOCATION */}

          <p className="aladdin-location mt-5 text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">
            Arts Council of Pakistan · Karachi
          </p>

          {/* INTRO */}

          <div className="aladdin-intro mx-auto mt-12 max-w-xl">
            <div className="mx-auto mb-5 h-px w-10 bg-amber-300/50" />

            <p className="text-sm uppercase tracking-[0.3em] text-white/65 sm:text-base">
              And then came
            </p>

            <p className="mt-2 font-serif text-3xl text-amber-100 sm:text-5xl">
              the stage.
            </p>
          </div>

          {/* =================================================
              ROLE 1
          ================================================== */}

          <div className="role-master absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:w-full">
            <p className="text-[10px] uppercase tracking-[0.45em] text-amber-200/60">
              My role
            </p>

            <h3 className="mt-4 font-serif text-4xl text-white sm:text-6xl md:text-7xl">
              Master Ji
            </h3>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              My first time stepping into a character
              <br className="hidden sm:block" />
              and performing in front of an audience.
            </p>
          </div>

          {/* =================================================
              ROLE 2
          ================================================== */}

          <div className="role-voice absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:w-full">
            <p className="text-[10px] uppercase tracking-[0.45em] text-amber-200/60">
              And then...
            </p>

            <h3 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
              Anjaani Khofnaak Awaaz
            </h3>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              A strange, frightening voice...
              <br />
              probably not the most normal role. 😄
            </p>
          </div>

          {/* =================================================
              CLIMAX
          ================================================== */}

          <div className="role-climax absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:w-full">
            <p className="text-[10px] uppercase tracking-[0.5em] text-amber-200/65">
              The moment
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-tight text-amber-50 sm:text-6xl md:text-7xl">
              I stopped being afraid.
            </h3>
          </div>

          {/* =================================================
              FINAL
          ================================================== */}

          <div className="aladdin-final absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:w-full">
            <p className="text-[10px] uppercase tracking-[0.45em] text-amber-200/65">
              Looking back
            </p>

            <h3 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-5xl md:text-6xl">
              I didn&apos;t know I could do it.
            </h3>

            <div className="aladdin-line mx-auto mt-7 h-px w-0 bg-amber-300" />

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              But somewhere between the rehearsals,
              <br className="hidden sm:block" />
              the stage lights and the performance...
            </p>

            <p className="mt-5 text-base text-amber-100 sm:text-lg">
              I just did it.
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          BOTTOM CINEMATIC EDGE
      ================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}