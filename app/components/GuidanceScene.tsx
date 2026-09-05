"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const memories = [
  {
    number: "01",
    title: "Dialogue",
    text: "You helped me find the words.",
    icon: "01",
  },
  {
    number: "02",
    title: "Voice",
    text: "You helped me find my voice.",
    icon: "02",
  },
  {
    number: "03",
    title: "Acting",
    text: "You helped me become the character.",
    icon: "03",
  },
  {
    number: "04",
    title: "Stage",
    text: "You helped me believe I could do it.",
    icon: "04",
  },
];

export default function GuidanceScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const heading = q(".guidance-heading");
      const subtitle = q(".guidance-subtitle");
      const cards = q(".memory-item");
      const finalLine = q(".guidance-final");
      const glow = q(".guidance-glow");

      gsap.set(heading, { opacity: 0, y: 50 });
      gsap.set(subtitle, { opacity: 0, y: 25 });
      gsap.set(cards, { opacity: 0, y: 70, scale: 0.9 });
      gsap.set(finalLine, { opacity: 0, y: 30 });

      const entrance = gsap.timeline();

      entrance
        .to(heading, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        })
        .to(
          subtitle,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        );

      gsap.to(glow, {
        scale: 1.3,
        opacity: 0.75,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1450",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(cards[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(cards[0], {
          y: -25,
          scale: 0.96,
          opacity: 0.45,
          duration: 0.5,
        })
        .to(cards[1], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(cards[1], {
          y: -25,
          scale: 0.96,
          opacity: 0.45,
          duration: 0.5,
        })
        .to(cards[2], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(cards[2], {
          y: -25,
          scale: 0.96,
          opacity: 0.45,
          duration: 0.5,
        })
        .to(cards[3], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(
          heading,
          {
            opacity: 0.15,
            y: -35,
            duration: 0.7,
          },
          "-=0.5"
        )
        .to(
          subtitle,
          {
            opacity: 0,
            y: -25,
            duration: 0.5,
          },
          "<"
        )
        .to(cards, {
          opacity: 0,
          y: -40,
          scale: 0.9,
          duration: 0.8,
          stagger: 0.05,
        })
        .to(
          finalLine,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .to(glow, {
          scale: 1.7,
          opacity: 0.9,
          duration: 1,
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#080604] px-6 text-center text-amber-50"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="guidance-glow absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.055] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.8)_100%)]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-amber-100/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-5xl">

          <p className="guidance-heading text-[10px] uppercase tracking-[0.5em] text-amber-200/55 sm:text-xs">
            The person behind the confidence
          </p>

          <h2 className="guidance-heading mt-6 text-4xl font-extralight tracking-[-0.04em] sm:text-6xl">
            You were there
            <br />
            through every step.
          </h2>

          <p className="guidance-subtitle mt-5 text-sm text-white/35 sm:text-base">
            And somehow, every little thing mattered.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
            {memories.map((memory) => (
              <div
                key={memory.number}
                className="memory-item group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 text-left backdrop-blur-xl transition-colors duration-500 hover:border-amber-100/[0.18] hover:bg-white/[0.06] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.25em] text-amber-200/35">
                    {memory.number}
                  </span>

                  <span className="text-[9px] text-white/20">
                    {memory.icon}
                  </span>
                </div>

                <h3 className="mt-10 text-lg font-light text-amber-50 sm:text-xl">
                  {memory.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/35 sm:text-sm">
                  {memory.text}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-200/40 transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="guidance-final absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6">
            <p className="text-[10px] uppercase tracking-[0.45em] text-amber-200/45">
              And that changed everything
            </p>

            <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-extralight leading-tight tracking-[-0.04em] text-amber-50 sm:text-5xl md:text-6xl">
              Sometimes,
              <br />
              a little encouragement
              <br />
              changes a lot.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}