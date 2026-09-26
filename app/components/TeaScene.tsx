"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeaScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const hero = q(".tea-hero");
      const object = q(".tea-object");
      const memory = q(".tea-memory");
      const lastDay = q(".tea-last-day");
      const ending = q(".tea-ending");
      const steam = q(".tea-depth-steam");

      gsap.set([hero, object, memory, lastDay, ending], { opacity: 0 });
      gsap.set(hero, { y: 45, rotateX: 8 });
      gsap.set(object, { y: 35, scale: 0.82, rotateY: -10 });
      gsap.set(memory, { y: 45, scale: 0.94 });
      gsap.set(lastDay, { y: 55, opacity: 0 });
      gsap.set(ending, { y: 40, scale: 0.92 });

      gsap.to(steam, { y: -45, x: 18, opacity: 0.65, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const intro = gsap.timeline();
      intro
        .to(hero, { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: "power4.out" })
        .to(object, { opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 1.2, ease: "power4.out" }, "-=0.55")
        .to(memory, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.5");

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: section, start: "top top", end: "+=2200", scrub: 1, pin: true, anticipatePin: 1 },
      });

      timeline
        .to(hero, { y: -90, opacity: 0, scale: 1.08, rotateX: -5, duration: 0.55, ease: "power3.inOut" })
        .to(object, { y: -45, scale: 1.08, rotateY: 7, duration: 0.5 }, "<")
        .to(memory, { y: -40, opacity: 0.18, scale: 1.04, duration: 0.5 }, "<")
        .to(memory, { y: -120, opacity: 0, filter: "blur(10px)", duration: 0.65, ease: "power3.inOut" })
        .to(lastDay, { opacity: 1, y: 0, duration: 0.9, ease: "power4.out" }, "-=0.15")
        .to(object, { scale: 1.16, rotateY: -4, y: -5, duration: 0.75 }, "<")
        .to(lastDay, { y: -70, opacity: 0, duration: 0.75, ease: "power3.inOut" }, "+=0.25")
        .to(ending, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }, "-=0.1")
        .to(object, { scale: 1.3, opacity: 0.35, y: -20, duration: 1 }, "<");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#070504] px-6 py-20 text-[#fff8e8] sm:px-10" style={{ perspective: "1500px" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-25" />
        <motion.div
          className="absolute left-[72%] top-[48%] h-[46vw] w-[46vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a64c]/[0.07] blur-[130px]"
          animate={{ scale: [1, 1.16, 1], opacity: [0.38, 0.72, 0.38] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(217,166,76,0.12),transparent_25%),linear-gradient(90deg,#070504_0%,rgba(7,5,4,0.9)_50%,rgba(7,5,4,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_24%,rgba(0,0,0,0.72)_100%)]" />
      </div>

      <div className="absolute left-6 top-7 z-30 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-[#d9a64c]/75">CHAPTER</span>
        <span className="h-px w-10 bg-[#d9a64c]/40" />
        <span className="font-sans text-[10px] tracking-[0.25em] text-white/45">05</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1450px] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <div className="tea-hero max-w-3xl [transform-style:preserve-3d]">
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.7, ease }} className="font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/80 sm:text-[10px]">A small memory</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.95, delay: 0.08, ease }} className="mt-6 max-w-3xl font-display text-[clamp(3.5rem,7.6vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">
              Some moments<br />are <span className="italic text-[#f0d49a]">small.</span><br /><span className="text-white/88">They stay.</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0, transformOrigin: "left" }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.7, delay: 0.22, ease }} className="mt-9 h-px w-24 bg-gradient-to-r from-[#e4b96a] to-transparent" />
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.8, delay: 0.28, ease }} className="mt-8 max-w-xl border-l border-[#d9a64c]/35 pl-5 font-display text-base leading-7 text-white/62 sm:pl-7 sm:text-lg sm:leading-8">
              Between rehearsals, stage calls, and everything happening around us,<br className="hidden sm:block" /> there was one little thing I still remember.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#d9a64c]/30" /><span className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">tea · a tiny tradition</span>
            </motion.div>
          </div>

          <div className="relative flex min-h-[540px] items-center justify-center [transform-style:preserve-3d]">
            <motion.div className="tea-object relative w-full max-w-[610px]" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.1, ease }}>
              <div className="tea-depth-steam pointer-events-none absolute left-1/2 top-[8%] h-40 w-24 -translate-x-1/2 rounded-full bg-[#f5dfb1]/[0.04] blur-3xl" />
              <div className="absolute left-1/2 top-[42%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/10" />
              <div className="absolute left-1/2 top-[42%] h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/[0.07]" />
              <div className="absolute left-1/2 top-[42%] h-[2px] w-[440px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9a64c]/20 to-transparent" />
              <div className="relative z-10 flex items-end justify-center gap-7 sm:gap-12">
                <TeaCup delay={0} label="yours" />
                <TeaCup delay={0.65} label="mine" />
              </div>

              <motion.div className="tea-memory relative z-20 mt-[-18px] rounded-[4px] border border-[#d9a64c]/20 bg-[#0c0906]/88 p-7 shadow-[0_30px_110px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-9" initial={{ opacity: 0, y: 28, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9, delay: 0.35, ease }}>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e4b96a] to-transparent" />
                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-[#d9a64c]/60">You asked me once</p>
                <p className="mt-5 font-display text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.1] text-[#fff8e8]">“Tum har waqt mujhe chai kyun pilate ho?”</p>
                <div className="my-7 h-px bg-gradient-to-r from-[#d9a64c]/35 via-[#d9a64c]/10 to-transparent" />
                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/30">My answer was simple</p>
                <p className="mt-4 font-display text-lg leading-7 text-[#f0d49a] sm:text-xl">“Bas aise hi... mera dil karta tha,<br />to aapke liye bhi le aata hun.”</p>
              </motion.div>

              <motion.div className="tea-last-day relative z-20 mt-8 border-l border-[#d9a64c]/35 pl-5 sm:pl-7" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.9, delay: 0.7, ease }}>
                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-[#d9a64c]/65">The last day</p>
                <p className="mt-4 max-w-xl font-display text-xl leading-8 text-white/78 sm:text-2xl">You said we&apos;d sit by the stage<br className="hidden sm:block" />and have tea together.</p>
                <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-white/38">But the day moved too fast.<br />There was never enough time.</p>
              </motion.div>

              <motion.div className="tea-ending mt-8 text-center sm:text-left" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 1, delay: 1.05, ease }}>
                <p className="font-display text-2xl leading-tight text-[#fff8e8] sm:text-3xl">We never got that tea.</p>
                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.3em] text-[#d9a64c]/55">And somehow, I still remember it.</p>
              </motion.div>
            </motion.div>
          </div>
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

function TeaCup({ delay, label }: { delay: number; label: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 1, ease: "easeOut" }} className="relative h-52 w-44 sm:h-60 sm:w-52">
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/25 bg-gradient-to-br from-[#f0d49a]/10 to-transparent shadow-[0_0_80px_rgba(217,166,76,0.12)] sm:h-40 sm:w-40" />
      <div className="absolute left-1/2 top-[48%] h-20 w-24 -translate-x-1/2 rounded-b-[2rem] rounded-t-[0.9rem] border border-[#e4b96a]/35 bg-[#0f0a06]/90 shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:h-24 sm:w-28" />
      <div className="absolute left-1/2 top-[43%] h-5 w-28 -translate-x-1/2 rounded-full border border-[#e4b96a]/35 bg-[#050403] sm:w-32" />
      <div className="absolute left-1/2 top-[42%] h-2 w-20 -translate-x-1/2 rounded-full bg-[#d9a64c]/20 blur-sm sm:w-24" />
      <div className="absolute left-[69%] top-[51%] h-11 w-8 rounded-r-full border border-l-0 border-[#e4b96a]/30" />
      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-sans text-[8px] uppercase tracking-[0.38em] text-white/25">{label}</p>
    </motion.div>
  );
}
