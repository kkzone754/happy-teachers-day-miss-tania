"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const moments = [
  {
    number: "01",
    label: "THE DOUBT",
    title: "At first, I was scared.",
    detail: "A first stage. A strange place. Too many eyes.",
  },
  {
    number: "02",
    label: "THE PUSH",
    title: "You told me to keep going.",
    detail: "One more rehearsal. One more try. One more step.",
  },
  {
    number: "03",
    label: "THE SHIFT",
    title: "And slowly, I stopped being afraid.",
    detail: "The fear was still there. But it no longer controlled me.",
  },
];

export default function ConfidenceScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const chapter = q(".confidence-chapter");
      const eyebrow = q(".confidence-eyebrow");
      const title = q(".confidence-title");
      const ghost = q(".confidence-ghost");
      const momentsEl = q(".confidence-moment");
      const final = q(".confidence-final");
      const glow = q(".confidence-glow");

      gsap.set(chapter, { autoAlpha: 0, y: 15 });
      gsap.set(eyebrow, { autoAlpha: 0, y: 18 });
      gsap.set(title, { autoAlpha: 0, y: 35 });
      gsap.set(ghost, { autoAlpha: 0, scale: 0.96 });
      gsap.set(momentsEl, { autoAlpha: 0, x: 55, y: 0, scale: 0.985 });
      gsap.set(final, { autoAlpha: 0, y: 40, scale: 0.97 });

      const intro = gsap.timeline();
      intro
        .to(chapter, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" })
        .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.25")
        .to(title, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power4.out" }, "-=0.3")
        .to(ghost, { autoAlpha: 0.055, scale: 1, duration: 1 }, "-=0.55");

      gsap.to(glow, {
        scale: 1.2,
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
          end: "+=2100",
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(title, { autoAlpha: 0.08, y: -35, filter: "blur(5px)", duration: 0.7, ease: "power3.inOut" })
        .to(eyebrow, { autoAlpha: 0, y: -18, duration: 0.4 }, "<")
        .to(ghost, { autoAlpha: 0.025, scale: 1.04, duration: 0.6 }, "<");

      momentsEl.forEach((moment, index) => {
        timeline
          .to(moment, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          })
          .to({}, { duration: 0.55 });

        if (index !== momentsEl.length - 1) {
          timeline.to(moment, {
            autoAlpha: 0,
            x: -40,
            scale: 0.985,
            filter: "blur(5px)",
            duration: 0.6,
            ease: "power3.inOut",
          });
        }
      });

      timeline
        .set(momentsEl, { autoAlpha: 0 })
        .to(final, { autoAlpha: 1, y: 0, scale: 1, duration: 0.95, ease: "power4.out" })
        .to(glow, { scale: 1.45, opacity: 0.9, duration: 1 }, "<");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#080604] px-6 text-[#fff8e8]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-45" />
        <div className="confidence-glow absolute left-[62%] top-[46%] h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a64c]/[0.055] blur-[125px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(217,166,76,0.08),transparent_27%),linear-gradient(90deg,#080604_0%,rgba(8,6,4,0.8)_55%,rgba(8,6,4,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.58)_100%)]" />
      </div>

      <div className="confidence-chapter absolute left-6 top-7 z-30 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-[#d9a64c]/75">CHAPTER</span>
        <span className="h-px w-10 bg-[#d9a64c]/40" />
        <span className="font-sans text-[10px] tracking-[0.25em] text-white/45">02</span>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:gap-20">
          <div className="relative flex min-h-[500px] items-center">
            <div className="confidence-ghost pointer-events-none absolute left-[-3%] top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[25vw] font-semibold uppercase leading-none tracking-[-0.1em] text-[#f0d49a] opacity-5 sm:text-[18vw] lg:text-[15vw]">
              COURAGE
            </div>

            <div className="relative z-10 max-w-4xl">
              <p className="confidence-eyebrow font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/80 sm:text-[10px]">
                The moment fear became courage
              </p>

              <h2 className="confidence-title mt-5 font-display text-[clamp(3.8rem,7.8vw,8.4rem)] font-medium leading-[0.82] tracking-[-0.065em] text-[#fff8e8]">
                You helped me
                <br />
                <span className="italic text-[#f0d49a]">believe.</span>
              </h2>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-20 bg-gradient-to-r from-[#e4b96a] to-transparent" />
                <span className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/30">
                  confidence is built, not found
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[500px]">
            <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-[#d9a64c]/20 via-[#d9a64c]/45 to-transparent" />

            <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
              {moments.map((moment) => (
                <article
                  key={moment.number}
                  className="confidence-moment absolute left-0 right-0 top-0 -translate-y-1/2"
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  <div className="relative overflow-hidden border border-[#d9a64c]/[0.18] bg-[#0c0906]/80 px-6 py-7 shadow-[0_22px_80px_rgba(0,0,0,0.42)] backdrop-blur-md sm:px-8 sm:py-8">
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e4b96a] to-transparent" />
                    <div className="absolute right-0 top-0 h-px w-24 bg-gradient-to-l from-[#e4b96a]/60 to-transparent" />

                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <span className="font-display text-4xl text-[#d9a64c]/80 sm:text-5xl">
                          {moment.number}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-[8px] font-semibold tracking-[0.4em] text-white/40">
                            {moment.label}
                          </span>
                          <span className="h-px w-8 bg-[#d9a64c]/35" />
                        </div>

                        <h3 className="mt-4 font-display text-[clamp(1.8rem,3.3vw,3.35rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#fff8e8]">
                          {moment.title}
                        </h3>

                        <p className="mt-4 max-w-xl font-sans text-[10px] uppercase leading-5 tracking-[0.16em] text-white/35 sm:text-[11px]">
                          {moment.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="confidence-final pointer-events-none absolute left-1/2 top-1/2 z-20 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center">
        <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/75">
          What changed
        </p>
        <h3 className="mx-auto mt-6 font-display text-[clamp(2.8rem,6vw,6.1rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[#fff8e8]">
          I was still afraid.
          <br />
          <span className="italic text-[#f0d49a]">But I did it.</span>
        </h3>
        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#d9a64c]/35" />
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/35">That was the beginning.</span>
          <span className="h-px w-12 bg-[#d9a64c]/35" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-4 z-30 border border-white/[0.045] sm:inset-7" />

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">keep going</p>
      </div>
    </section>
  );
}