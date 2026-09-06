"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const memories = [
  {
    number: "01",
    label: "WORDS",
    title: "You helped me find the words.",
    detail: "Dialogue. Timing. Expression.",
  },
  {
    number: "02",
    label: "VOICE",
    title: "You helped me find my voice.",
    detail: "Not louder. Just more confident.",
  },
  {
    number: "03",
    label: "CHARACTER",
    title: "You helped me become the character.",
    detail: "A little acting. A little courage.",
  },
  {
    number: "04",
    label: "COURAGE",
    title: "You helped me believe I could do it.",
    detail: "And that part stayed with me.",
  },
];

export default function GuidanceScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const chapter = q(".guidance-chapter");
      const eyebrow = q(".guidance-eyebrow");
      const title = q(".guidance-title");
      const ghost = q(".guidance-ghost");
      const memoriesEl = q(".guidance-memory");
      const lines = q(".guidance-memory-line");
      const final = q(".guidance-final");
      const glow = q(".guidance-glow");

      gsap.set(chapter, {
        opacity: 0,
        y: 20,
      });

      gsap.set(eyebrow, {
        opacity: 0,
        y: 20,
      });

      gsap.set(title, {
        opacity: 0,
        y: 40,
      });

      gsap.set(ghost, {
        opacity: 0,
        scale: 0.92,
      });

      gsap.set(memoriesEl, {
        opacity: 0,
        y: 70,
      });

      gsap.set(lines, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(final, {
        opacity: 0,
        y: 60,
      });

      const intro = gsap.timeline();

      intro
        .to(chapter, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          ghost,
          {
            opacity: 0.07,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.7"
        );

      gsap.to(glow, {
        scale: 1.25,
        opacity: 0.75,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      memoriesEl.forEach((memory, index) => {
        const line = lines[index];

        timeline
          .to(memory, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            line,
            {
              scaleX: 1,
              duration: 0.7,
              ease: "power3.inOut",
            },
            "-=0.45"
          );

        if (index !== memoriesEl.length - 1) {
          timeline.to(memory, {
            opacity: 0.28,
            y: -25,
            duration: 0.6,
          });
        }
      });

      timeline
        .to(
          title,
          {
            opacity: 0.08,
            y: -40,
            duration: 0.7,
          },
          "-=0.4"
        )
        .to(
          ghost,
          {
            opacity: 0.025,
            scale: 1.08,
            duration: 0.7,
          },
          "<"
        )
        .to(
          memoriesEl,
          {
            opacity: 0,
            y: -70,
            duration: 0.8,
            stagger: 0.03,
          }
        )
        .to(
          final,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .to(
          glow,
          {
            scale: 1.7,
            opacity: 1,
            duration: 1,
          },
          "<"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#080604] px-6 text-[#fff8e8]"
    >
      {/* BACKGROUND SYSTEM */}
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-60" />

        <div className="guidance-glow absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a64c]/[0.045] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,6,4,0.28)_45%,#080604_100%)]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#d9a64c]/10 to-transparent" />
      </div>

      {/* CHAPTER NUMBER */}
      <div className="guidance-chapter absolute left-6 top-7 z-20 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-[#d9a64c]/55">
          CHAPTER
        </span>

        <span className="h-px w-8 bg-[#d9a64c]/30" />

        <span className="font-sans text-[10px] tracking-[0.25em] text-white/35">
          03
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="relative w-full max-w-6xl">
          {/* GIANT BACKGROUND WORD */}
          <div
            className="
              guidance-ghost
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              font-display
              text-[20vw]
              font-semibold
              uppercase
              leading-none
              tracking-[-0.08em]
              text-[#f0d49a]
              sm:text-[17vw]
            "
          >
            GUIDANCE
          </div>

          {/* HEADER */}
          <div className="relative">
            <p className="guidance-eyebrow font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/65 sm:text-[10px]">
              The person behind the confidence
            </p>

            <h2
              className="
                guidance-title
                mt-5
                max-w-4xl
                font-display
                text-[clamp(3.4rem,8vw,7.8rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.055em]
                text-[#fff8e8]
              "
            >
              You were there
              <br />
              <span className="italic text-[#f0d49a]">
                through every step.
              </span>
            </h2>
          </div>

          {/* MEMORY STREAM */}
          <div className="absolute left-0 right-0 top-[54%]">
            <div className="relative mx-auto w-full max-w-4xl">
              {memories.map((memory, index) => (
                <div
                  key={memory.number}
                  className="
                    guidance-memory
                    absolute
                    left-0
                    right-0
                    top-0
                    grid
                    grid-cols-[55px_1fr]
                    items-start
                    gap-5
                    sm:grid-cols-[90px_1fr]
                    sm:gap-8
                  "
                >
                  {/* NUMBER */}
                  <div>
                    <span className="font-display text-4xl font-medium text-[#d9a64c]/75 sm:text-6xl">
                      {memory.number}
                    </span>

                    <div className="mt-3 h-1 w-1 rounded-full bg-[#d9a64c]" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-[9px] font-semibold tracking-[0.4em] text-white/35">
                        {memory.label}
                      </span>

                      <span className="h-px w-12 bg-white/10" />
                    </div>

                    <h3 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.035em] text-[#fff8e8]">
                      {memory.title}
                    </h3>

                    <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.22em] text-white/30 sm:text-xs">
                      {memory.detail}
                    </p>

                    <div className="guidance-memory-line mt-7 h-px w-full bg-gradient-to-r from-[#d9a64c]/70 via-[#d9a64c]/20 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL GRATITUDE */}
          <div className="guidance-final pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center">
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/65">
              And that changed something
            </p>

            <h3 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.045em] text-[#fff8e8]">
              Sometimes someone
              <br />
              <span className="italic text-[#f0d49a]">
                believes in you
              </span>
              <br />
              before you do.
            </h3>

            <div className="mx-auto mt-9 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#d9a64c]/35" />

              <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/35">
                Thank you, Miss Tania
              </span>

              <span className="h-px w-10 bg-[#d9a64c]/35" />
            </div>
          </div>
        </div>
      </div>

      {/* CINEMATIC FRAME */}
      <div className="pointer-events-none absolute inset-4 z-20 border border-white/[0.035] sm:inset-7" />

      <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 -translate-x-1/2 font-sans text-[8px] uppercase tracking-[0.45em] text-white/20">
        keep going
      </div>
    </section>
  );
}