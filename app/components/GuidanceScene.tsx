"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const memories = [
  { number: "01", label: "WORDS", title: "You helped me find the words.", detail: "Dialogue. Timing. Expression.", icon: "book" },
  { number: "02", label: "VOICE", title: "You helped me find my voice.", detail: "Not louder. Just more confident.", icon: "mic" },
  { number: "03", label: "CHARACTER", title: "You helped me become the character.", detail: "A little acting. A little courage.", icon: "mask" },
  { number: "04", label: "COURAGE", title: "You helped me believe I could do it.", detail: "And that part stayed with me.", icon: "star" },
];

function MemoryIcon({ type }: { type: string }) {
  const common = "h-7 w-7 sm:h-8 sm:w-8";
  if (type === "book") return <svg viewBox="0 0 24 24" fill="none" className={common}><path d="M4 5.5C6.4 4.7 8.8 5 11 6.3V19c-2.2-1.3-4.6-1.6-7-.8V5.5Z" stroke="currentColor" strokeWidth="1.4"/><path d="M20 5.5c-2.4-.8-4.8-.5-7 .8V19c2.2-1.3 4.6-1.6 7-.8V5.5Z" stroke="currentColor" strokeWidth="1.4"/><path d="M12 6.5V19" stroke="currentColor" strokeWidth="1.4"/></svg>;
  if (type === "mic") return <svg viewBox="0 0 24 24" fill="none" className={common}><rect x="9" y="3.5" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4M8.5 21h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
  if (type === "mask") return <svg viewBox="0 0 24 24" fill="none" className={common}><path d="M4 7.5c2.7-1.8 5.4-2 8-1.1 2.6-.9 5.3-.7 8 1.1v5.2c0 4.1-3.3 6.8-8 7.8-4.7-1-8-3.7-8-7.8V7.5Z" stroke="currentColor" strokeWidth="1.3"/><path d="M7.5 11.5c.8-.7 1.7-.7 2.5 0M14 11.5c.8-.7 1.7-.7 2.5 0M9 15.5c2 1.1 4 1.1 6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" className={common}><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>;
}

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
      const introLine = q(".guidance-intro-line");
      const memoriesEl = q(".guidance-memory");
      const final = q(".guidance-final");
      const glow = q(".guidance-glow");
      const beam = q(".guidance-beam");
      const spine = q(".guidance-spine");
      const dots = q(".guidance-progress-dot");

      // One active card only. Everything starts hidden.
      gsap.set(memoriesEl, { autoAlpha: 0, x: 70, y: 0, scale: 0.985 });
      gsap.set(final, { autoAlpha: 0, y: 45, scale: 0.97 });
      gsap.set(spine, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(dots, { autoAlpha: 0.25, scale: 0.7 });

      gsap.timeline()
        .to(chapter, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .to(title, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power4.out" }, "-=0.3")
        .to(introLine, { scaleX: 1, duration: 0.6 }, "-=0.4")
        .to(ghost, { autoAlpha: 0.055, scale: 1, duration: 1.1 }, "-=0.65");

      gsap.to(glow, { scale: 1.18, opacity: 0.75, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(beam, { x: 65, opacity: 0.7, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2600",
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Leave the opening composition before cards begin.
      timeline
        .to(title, { autoAlpha: 0.08, y: -35, filter: "blur(5px)", duration: 0.7, ease: "power3.inOut" })
        .to(eyebrow, { autoAlpha: 0, y: -18, duration: 0.4 }, "<")
        .to(introLine, { autoAlpha: 0, duration: 0.25 }, "<")
        .to(ghost, { autoAlpha: 0.025, scale: 1.04, duration: 0.6 }, "<");

      memoriesEl.forEach((memory, index) => {
        const dot = dots[index];

        // ENTER — only this card becomes visible.
        timeline
          .to(memory, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
          })
          .to(dot, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(2)" }, "<");

        // HOLD — gives the user time to read.
        timeline.to({}, { duration: 0.65 });

        // EXIT — IMPORTANT: completely hide the card before the next card enters.
        if (index !== memoriesEl.length - 1) {
          timeline
            .to(memory, {
              autoAlpha: 0,
              x: -45,
              scale: 0.985,
              filter: "blur(5px)",
              duration: 0.65,
              ease: "power3.inOut",
            })
            .to(dot, { autoAlpha: 0.25, scale: 0.7, duration: 0.25 }, "<")
            .to({}, { duration: 0.18 });
        }
      });

      timeline
        .to(spine, { scaleY: 1, duration: 1.1, ease: "power2.out" }, "-=0.3")
        // Guarantee every card is gone before the final message.
        .set(memoriesEl, { autoAlpha: 0 })
        .to(ghost, { autoAlpha: 0.02, scale: 1.08, duration: 0.55 })
        .to(final, { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }, "-=0.1")
        .to(glow, { scale: 1.5, opacity: 0.9, duration: 1 }, "<");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#070504] px-6 text-[#fff8e8]">
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-35" />
        <div className="guidance-glow absolute left-[72%] top-[42%] h-[44vw] w-[44vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a64c]/[0.07] blur-[120px]" />
        <div className="guidance-beam absolute right-[-12%] top-[-18%] h-[125%] w-[42%] rotate-[17deg] bg-gradient-to-b from-[#f2c56b]/[0.14] via-[#d9a64c]/[0.025] to-transparent blur-[45px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(217,166,76,0.09),transparent_25%),radial-gradient(circle_at_20%_75%,rgba(217,166,76,0.045),transparent_25%),linear-gradient(90deg,#070504_0%,rgba(7,5,4,0.82)_48%,rgba(7,5,4,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute bottom-[-15%] left-[-4%] h-[45%] w-[30%] rounded-full bg-[#d9a64c]/[0.035] blur-[70px]" />
      </div>

      <div className="guidance-chapter absolute left-6 top-7 z-30 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-[#d9a64c]/75">CHAPTER</span>
        <span className="h-px w-10 bg-[#d9a64c]/40" />
        <span className="font-sans text-[10px] tracking-[0.25em] text-white/45">03</span>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(480px,0.82fr)] lg:gap-16">
          <div className="relative flex min-h-[500px] items-center">
            <div className="guidance-ghost pointer-events-none absolute left-[4%] top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[24vw] font-semibold uppercase leading-none tracking-[-0.1em] text-[#f0d49a] sm:text-[18vw] lg:left-[-5%] lg:text-[15vw]">
              CONFIDENCE
            </div>

            <div className="relative z-10 max-w-3xl">
              <p className="guidance-eyebrow font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/80 sm:text-[10px]">
                The person behind the confidence
              </p>

              <h2 className="guidance-title mt-5 max-w-3xl font-display text-[clamp(3.7rem,7.4vw,7.9rem)] font-medium leading-[0.82] tracking-[-0.065em] text-[#fff8e8]">
                You were there
                <br />
                <span className="italic text-[#f0d49a]">through every</span>
                <br />
                step.
              </h2>

              <div className="guidance-intro-line mt-9 h-px w-24 bg-gradient-to-r from-[#e4b96a] to-transparent" />

              <div className="mt-8 max-w-lg border-l border-[#d9a64c]/35 pl-5 sm:pl-7">
                <p className="font-display text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  You didn&apos;t just teach me.
                  <br />
                  You stood beside me — in every doubt,
                  <br className="hidden sm:block" />
                  in every practice, in every small win
                  <br className="hidden sm:block" />
                  and every big dream.
                </p>
              </div>

              <div className="mt-10 hidden items-center gap-4 sm:flex">
                <span className="h-px w-10 bg-[#d9a64c]/35" />
                <span className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">TEACHER&apos;S DAY SPECIAL · 2026</span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[430px] lg:min-h-[500px]">
            <div className="guidance-spine absolute left-3 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#d9a64c]/60 to-transparent sm:left-5" />

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 sm:flex">
              {memories.map((memory, index) => (
                <span key={memory.number} className="guidance-progress-dot absolute right-0 h-1.5 w-1.5 rounded-full border border-[#d9a64c]/80 bg-[#070504]" style={{ top: `${index * 108 + 42}px` }} />
              ))}
            </div>

            <div className="relative h-full pl-9 sm:pl-14">
              {memories.map((memory) => (
                <article
                  key={memory.number}
                  className="guidance-memory absolute left-9 right-0 top-1/2 -translate-y-1/2 sm:left-14"
                  style={{ willChange: "transform, opacity, filter", top: `${memories.findIndex((item) => item.number === memory.number) * 108}px` }}
                >
                  <div className="group relative overflow-hidden rounded-[3px] border border-[#d9a64c]/[0.18] bg-[#0c0906]/75 px-5 py-5 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-md sm:px-7 sm:py-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d9a64c]/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e4b96a] to-transparent" />

                    <div className="relative flex items-start gap-4 sm:gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9a64c]/45 bg-[#0a0705] text-[#e4b96a] shadow-[0_0_32px_rgba(217,166,76,0.12)] sm:h-[68px] sm:w-[68px]">
                        <MemoryIcon type={memory.icon} />
                      </div>

                      <div className="min-w-0 flex-1 pt-1">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-2xl font-medium text-[#f0d49a] sm:text-3xl">{memory.number}</span>
                          <span className="h-px w-9 bg-[#d9a64c]/35" />
                          <span className="font-sans text-[8px] font-semibold tracking-[0.4em] text-white/40">{memory.label}</span>
                        </div>

                        <h3 className="mt-3 font-display text-[clamp(1.35rem,2.2vw,2.35rem)] font-medium leading-[1] tracking-[-0.035em] text-[#fff8e8]">
                          {memory.title}
                        </h3>

                        <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
                          {memory.detail}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-5 h-px w-full bg-gradient-to-r from-[#d9a64c]/45 via-[#d9a64c]/10 to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="guidance-final pointer-events-none absolute left-1/2 top-1/2 z-20 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center">
        <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/75">And that changed something</p>
        <h3 className="mx-auto mt-6 font-display text-[clamp(2.7rem,6vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[#fff8e8]">
          Sometimes someone
          <br />
          <span className="italic text-[#f0d49a]">believes in you</span>
          <br />
          before you do.
        </h3>
        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#d9a64c]/35" />
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/35">Thank you, Miss Tania</span>
          <span className="h-px w-12 bg-[#d9a64c]/35" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-4 z-30 border border-white/[0.045] sm:inset-7" />

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">scroll to continue</p>
        <div className="mx-auto mt-2 h-7 w-4 rounded-full border border-[#d9a64c]/45"><div className="mx-auto mt-1.5 h-1.5 w-0.5 rounded-full bg-[#d9a64c]/80" /></div>
      </div>
    </section>
  );
}