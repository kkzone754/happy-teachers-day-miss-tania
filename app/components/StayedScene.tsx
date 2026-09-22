"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StayedScene() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const intro = q(".stayed-intro");
      const fragments = q(".stayed-fragment");
      const statement = q(".stayed-statement");
      const memoryCore = q(".stayed-core");
      const orbitA = q(".stayed-orbit-a");
      const orbitB = q(".stayed-orbit-b");
      const ending = q(".stayed-ending");
      const light = q(".stayed-light");
      const dust = q(".stayed-dust");

      gsap.set([fragments, statement, ending], { opacity: 0, y: 70 });
      gsap.set(memoryCore, { opacity: 0, scale: 0.55 });
      gsap.set([orbitA, orbitB], { opacity: 0, scale: 0.65 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=2600",
          scrub: 1.25,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(intro, {
        opacity: 0,
        y: -80,
        duration: 1.1,
        ease: "power2.inOut",
      })
        .to(memoryCore, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }, "<0.15")
        .to([orbitA, orbitB], {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
        }, "<0.1")
        .to(fragments, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.28,
          ease: "power3.out",
        })
        .to(fragments, {
          opacity: 0,
          y: -45,
          duration: 1.1,
          stagger: 0.08,
          ease: "power2.inOut",
        })
        .to(statement, {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "power3.out",
        })
        .to(memoryCore, {
          scale: 1.35,
          opacity: 0.72,
          duration: 1.3,
          ease: "power2.inOut",
        }, "<")
        .to([orbitA, orbitB], {
          rotation: 24,
          scale: 1.18,
          duration: 1.5,
          ease: "power2.inOut",
        }, "<")
        .to(statement, {
          opacity: 0,
          y: -55,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(ending, {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "power3.out",
        })
        .to(memoryCore, {
          scale: 1.65,
          opacity: 0.28,
          duration: 1.4,
          ease: "power2.inOut",
        }, "<")
        .to([orbitA, orbitB], {
          rotation: 48,
          scale: 1.45,
          opacity: 0.35,
          duration: 1.4,
          ease: "power2.inOut",
        }, "<");

      gsap.to(light, {
        x: "18vw",
        y: "5vh",
        rotation: 8,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(dust, {
        y: -90,
        x: (i) => (i % 2 === 0 ? 18 : -14),
        opacity: 0.12,
        duration: 3.2,
        stagger: 0.16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen min-h-[760px] overflow-hidden bg-[#050403] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(217,166,76,0.12),transparent_32%),linear-gradient(180deg,#050403_0%,#080604_48%,#030302_100%)]" />
      <div className="stayed-light pointer-events-none absolute -left-[22vw] top-[14%] h-[68vh] w-[42vw] rotate-[-13deg] bg-[linear-gradient(90deg,transparent,rgba(217,166,76,0.15),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute inset-[7%] border border-[#d9a64c]/[0.06]" />
      <div className="pointer-events-none absolute left-[7%] top-1/2 h-px w-[86%] bg-gradient-to-r from-transparent via-[#d9a64c]/10 to-transparent" />

      <div className="stayed-core pointer-events-none absolute left-1/2 top-[52%] z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/30 bg-[#d9a64c]/[0.07] shadow-[0_0_110px_rgba(217,166,76,0.2)]">
        <div className="absolute inset-4 rounded-full border border-[#d9a64c]/15" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9c37a] shadow-[0_0_24px_rgba(233,195,122,0.9)]" />
      </div>

      <div className="stayed-orbit-a pointer-events-none absolute left-1/2 top-[52%] z-10 h-[300px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d9a64c]/15 [transform:translateX(-50%)_translateY(-50%)_rotateX(64deg)_rotateZ(-12deg)]" />
      <div className="stayed-orbit-b pointer-events-none absolute left-1/2 top-[52%] z-10 h-[430px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d9a64c]/10 [transform:translateX(-50%)_translateY(-50%)_rotateX(70deg)_rotateZ(22deg)]" />

      <span className="stayed-dust absolute left-[12%] top-[23%] h-1 w-1 rounded-full bg-[#d9a64c]/70" />
      <span className="stayed-dust absolute left-[20%] top-[72%] h-1 w-1 rounded-full bg-[#d9a64c]/55" />
      <span className="stayed-dust absolute left-[34%] top-[18%] h-1 w-1 rounded-full bg-[#d9a64c]/65" />
      <span className="stayed-dust absolute left-[67%] top-[21%] h-1 w-1 rounded-full bg-[#d9a64c]/65" />
      <span className="stayed-dust absolute left-[79%] top-[68%] h-1 w-1 rounded-full bg-[#d9a64c]/55" />
      <span className="stayed-dust absolute left-[89%] top-[37%] h-1 w-1 rounded-full bg-[#d9a64c]/65" />

      <div className="stayed-intro absolute left-1/2 top-[31%] z-20 w-[780px] max-w-[80vw] -translate-x-1/2 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.55em] text-[#d9a64c]/60">Chapter 07 · What Stayed</p>
        <h2 className="mt-6 font-serif text-6xl font-medium tracking-[-0.045em] text-white/95">Some things end when the moment ends.</h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-white/45">Some don’t.</p>
      </div>

      <div className="stayed-fragment absolute left-[15%] top-[29%] z-20">
        <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#d9a64c]/55">Memory 01</p>
        <p className="mt-4 font-serif text-4xl text-white/85">The stage.</p>
      </div>
      <div className="stayed-fragment absolute right-[14%] top-[38%] z-20 text-right">
        <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#d9a64c]/55">Memory 02</p>
        <p className="mt-4 font-serif text-4xl text-white/85">The rehearsals.</p>
      </div>
      <div className="stayed-fragment absolute left-[21%] top-[61%] z-20">
        <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#d9a64c]/55">Memory 03</p>
        <p className="mt-4 font-serif text-4xl text-white/85">The conversations.</p>
      </div>
      <div className="stayed-fragment absolute right-[18%] top-[66%] z-20 text-right">
        <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#d9a64c]/55">Memory 04</p>
        <p className="mt-4 font-serif text-4xl text-white/85">The little moments in between.</p>
      </div>

      <div className="stayed-statement absolute left-1/2 top-[30%] z-30 w-[850px] max-w-[84vw] -translate-x-1/2 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#d9a64c]/60">What remained</p>
        <h3 className="mt-7 font-serif text-5xl leading-tight tracking-[-0.04em] text-white/95">I may forget some of the details.</h3>
        <p className="mx-auto mt-7 max-w-2xl font-serif text-3xl leading-[1.35] text-[#d9a64c]/90">But I won’t forget how you made me feel.</p>
      </div>

      <div className="stayed-ending absolute left-1/2 top-[28%] z-30 w-[900px] max-w-[86vw] -translate-x-1/2 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#d9a64c]/60">The things that stayed</p>
        <h3 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.04em] text-white/95">You helped me believe in myself.</h3>
        <p className="mt-5 font-serif text-3xl leading-[1.35] text-[#d9a64c]/90">You gave me confidence. You gave me courage.</p>
        <p className="mx-auto mt-7 max-w-2xl font-sans text-sm leading-8 text-white/42">And somehow, those things stayed — long after the moment was over.</p>
        <div className="mx-auto mt-9 h-px w-24 bg-[#d9a64c]/40" />
        <p className="mt-6 font-serif text-xl italic text-white/55">Some memories don’t need to be loud to last.</p>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">scroll to continue</p>
        <div className="mx-auto mt-2 h-7 w-4 rounded-full border border-[#d9a64c]/45"><div className="mx-auto mt-1.5 h-1.5 w-0.5 rounded-full bg-[#d9a64c]/80" /></div>
      </div>
    </section>
  );
}
