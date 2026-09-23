"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeachersDayScene() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const prelude = q(".td-prelude");
      const date = q(".td-date");
      const title = q(".td-title");
      const name = q(".td-name");
      const message = q(".td-message");
      const signature = q(".td-signature");
      const halo = q(".td-halo");
      const ringA = q(".td-ring-a");
      const ringB = q(".td-ring-b");
      const light = q(".td-light");
      const dust = q(".td-dust");
      const line = q(".td-line");
      const finalGlow = q(".td-final-glow");
      const finalWords = q(".td-final-word");
      const corner = q(".td-corner");

      gsap.set([date, title, name, message, signature], { opacity: 0, y: 55 });
      gsap.set(halo, { opacity: 0, scale: 0.45 });
      gsap.set([ringA, ringB], { opacity: 0, scale: 0.65 });
      gsap.set(line, { scaleX: 0, transformOrigin: "50% 50%" });
      gsap.set(finalGlow, { opacity: 0, scale: 0.7 });
      gsap.set(finalWords, { opacity: 0, y: 35, letterSpacing: "0.08em" });
      gsap.set(corner, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=3000",
          scrub: 1.25,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(prelude, {
        opacity: 0,
        y: -65,
        duration: 0.9,
        ease: "power2.inOut",
      })
        .to(halo, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }, "<0.15")
        .to([ringA, ringB], {
          opacity: 1,
          scale: 1,
          duration: 1.15,
          stagger: 0.12,
          ease: "power3.out",
        }, "<")
        .to(date, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
        })
        .to(line, {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        }, "<0.25")
        .to(name, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        })
        .to(message, {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "power3.out",
        })
        .to(signature, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        })
        .to([date, title, name, message, line], {
          opacity: 0,
          y: -35,
          duration: 1.15,
          stagger: 0.06,
          ease: "power2.inOut",
        })
        .to(finalGlow, {
          opacity: 1,
          scale: 1.15,
          duration: 1.2,
          ease: "power2.inOut",
        }, "<")
        .to(signature, {
          opacity: 0,
          y: -20,
          duration: 0.7,
        }, "<")
        .to(finalWords, {
          opacity: 1,
          y: 0,
          letterSpacing: "0.22em",
          duration: 1.3,
          ease: "power3.out",
        })
        .to(corner, { opacity: 1, duration: 0.5 }, "<0.2")
        .to([halo, ringA, ringB], {
          scale: 1.45,
          opacity: 0.32,
          duration: 1.4,
          ease: "power2.inOut",
        }, "<");

      gsap.to(light, {
        x: "20vw",
        y: "4vh",
        rotation: 9,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(dust, {
        y: -85,
        x: (i) => (i % 2 === 0 ? 16 : -16),
        opacity: 0.08,
        duration: 3.4,
        stagger: 0.14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen min-h-[760px] overflow-hidden bg-[#050403] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(217,166,76,0.16),transparent_30%),linear-gradient(180deg,#050403_0%,#090705_50%,#020201_100%)]" />
      <div className="td-light pointer-events-none absolute -left-[22vw] top-[10%] h-[72vh] w-[44vw] rotate-[-14deg] bg-[linear-gradient(90deg,transparent,rgba(217,166,76,0.17),transparent)] blur-3xl" />
      <div className="td-final-glow pointer-events-none absolute left-1/2 top-[45%] h-[62vh] w-[62vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a64c]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute inset-[6%] border border-[#d9a64c]/[0.07]" />
      <div className="td-corner pointer-events-none absolute left-[7%] top-[7%] z-40 font-sans text-[8px] uppercase tracking-[0.45em] text-white/25">A small tribute · 2026</div>
      <div className="td-corner pointer-events-none absolute right-[7%] top-[7%] z-40 font-sans text-[8px] uppercase tracking-[0.45em] text-white/25">For Miss Tania</div>

      <div className="td-halo pointer-events-none absolute left-1/2 top-[47%] z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/35 bg-[#d9a64c]/[0.07] shadow-[0_0_150px_rgba(217,166,76,0.24)]">
        <div className="absolute inset-5 rounded-full border border-[#d9a64c]/15" />
        <div className="absolute inset-12 rounded-full bg-[#e9c37a]/20 blur-xl" />
      </div>

      <div className="td-ring-a pointer-events-none absolute left-1/2 top-[47%] z-10 h-[330px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d9a64c]/15 [transform:translateX(-50%)_translateY(-50%)_rotateX(66deg)_rotateZ(-12deg)]" />
      <div className="td-ring-b pointer-events-none absolute left-1/2 top-[47%] z-10 h-[470px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d9a64c]/10 [transform:translateX(-50%)_translateY(-50%)_rotateX(70deg)_rotateZ(19deg)]" />

      <span className="td-dust absolute left-[12%] top-[24%] h-1 w-1 rounded-full bg-[#d9a64c]/70" />
      <span className="td-dust absolute left-[22%] top-[70%] h-1 w-1 rounded-full bg-[#d9a64c]/55" />
      <span className="td-dust absolute left-[36%] top-[17%] h-1 w-1 rounded-full bg-[#d9a64c]/65" />
      <span className="td-dust absolute left-[64%] top-[19%] h-1 w-1 rounded-full bg-[#d9a64c]/65" />
      <span className="td-dust absolute left-[78%] top-[71%] h-1 w-1 rounded-full bg-[#d9a64c]/55" />
      <span className="td-dust absolute left-[90%] top-[39%] h-1 w-1 rounded-full bg-[#d9a64c]/65" />

      <div className="td-prelude absolute left-1/2 top-[31%] z-30 w-[760px] max-w-[80vw] -translate-x-1/2 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.58em] text-[#d9a64c]/60">Chapter 08 · The Finale</p>
        <h2 className="mt-6 font-serif text-6xl font-medium tracking-[-0.05em] text-white/95">And now, there is only one thing left to say.</h2>
      </div>

      <div className="absolute left-1/2 top-[24%] z-30 w-[900px] max-w-[86vw] -translate-x-1/2 text-center">
        <p className="td-date font-sans text-[10px] uppercase tracking-[0.58em] text-[#d9a64c]/65">5 October 2026</p>
        <h1 className="td-title mt-6 font-serif text-7xl font-medium tracking-[-0.06em] text-white/95">Happy Teacher’s Day</h1>
        <div className="td-line mx-auto mt-8 h-px w-28 bg-[#d9a64c]/55" />
        <p className="td-name mt-8 font-serif text-5xl text-[#e9c37a]">Miss Tania</p>
        <p className="td-message mx-auto mt-9 max-w-2xl font-sans text-base leading-8 text-white/55">
          Thank you for every word, every rehearsal, every little push,
          every moment of encouragement — and for helping me become more confident in myself.
        </p>
      </div>

      <div className="td-signature absolute left-1/2 top-[67%] z-30 w-[720px] max-w-[82vw] -translate-x-1/2 text-center">
        <p className="font-serif text-3xl leading-relaxed text-white/78">
          Some teachers teach a lesson.
          <br />
          Some leave something behind.
        </p>
        <p className="mt-7 font-serif text-2xl italic text-[#d9a64c]/90">You did both.</p>
        <p className="mt-8 font-sans text-[9px] uppercase tracking-[0.5em] text-white/30">With gratitude · Kamran</p>
      </div>

      <div className="td-final-word pointer-events-none absolute left-1/2 top-[47%] z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.5em] text-[#d9a64c]/55">A chapter ends</p>
        <p className="mt-5 font-serif text-6xl tracking-[-0.04em] text-white/90">Thank you.</p>
      </div>
    </section>
  );
}
