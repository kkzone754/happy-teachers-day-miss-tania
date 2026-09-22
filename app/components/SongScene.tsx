"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SongScene() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const intro = q(".song-intro");
      const detail = q(".song-detail");
      const opportunity = q(".song-opportunity");
      const spark = q(".song-spark");
      const ending = q(".song-ending");
      const stage = q(".song-stage");
      const waveform = q(".song-waveform");

      gsap.set([detail, opportunity, ending], { opacity: 0, y: 70 });
      gsap.set(stage, { opacity: 0, scale: 1.08 });
      gsap.set(spark, { scale: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=2300",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(intro, { opacity: 0, y: -80, duration: 1.2, ease: "power2.inOut" })
        .to(stage, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "<")
        .to(spark, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(2)" })
        .to(detail, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .to(opportunity, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" })
        .to(waveform, { scaleX: 1.15, opacity: 0.9, duration: 1, ease: "sine.inOut" }, "<")
        .to([detail, opportunity], { opacity: 0, y: -55, duration: 1.1, stagger: 0.08 })
        .to(ending, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .to(stage, { scale: 1.04, opacity: 0.35, duration: 1.2 }, "<")
        .to(spark, { scale: 1.5, opacity: 0, duration: 1 }, "<");

      gsap.to(q(".song-light"), { x: "16vw", rotation: 7, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(q(".song-particle"), { y: -70, opacity: 0.15, duration: 2.8, stagger: 0.18, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen min-h-[760px] overflow-hidden bg-[#050403] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(217,166,76,0.12),transparent_35%),linear-gradient(180deg,#050403_0%,#090705_50%,#030302_100%)]" />
      <div className="song-light pointer-events-none absolute -left-[18vw] top-[18%] h-[60vh] w-[38vw] rotate-[-12deg] bg-[linear-gradient(90deg,transparent,rgba(217,166,76,0.16),transparent)] blur-3xl" />

      <div className="song-stage pointer-events-none absolute left-1/2 top-[47%] h-[58vh] w-[62vw] -translate-x-1/2 -translate-y-1/2 [perspective:1400px]">
        <div className="absolute inset-0 border border-[#d9a64c]/15 bg-[#0b0805]/55 shadow-[0_0_100px_rgba(217,166,76,0.09)] [transform:rotateX(8deg)_rotateY(-3deg)]" />
        <div className="absolute left-1/2 top-[18%] h-1/2 w-[45%] -translate-x-1/2 rounded-full bg-[#d9a64c]/10 blur-3xl" />
        <div className="absolute bottom-[18%] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#d9a64c]/45 to-transparent" />
        <div className="absolute bottom-[12%] left-[20%] right-[20%] h-24 rounded-[50%] border border-[#d9a64c]/10 [transform:rotateX(68deg)]" />
      </div>

      <span className="song-particle absolute left-[13%] top-[22%] h-1 w-1 rounded-full bg-[#d9a64c]/70" />
      <span className="song-particle absolute left-[24%] top-[68%] h-1 w-1 rounded-full bg-[#d9a64c]/60" />
      <span className="song-particle absolute left-[39%] top-[18%] h-1 w-1 rounded-full bg-[#d9a64c]/70" />
      <span className="song-particle absolute left-[57%] top-[74%] h-1 w-1 rounded-full bg-[#d9a64c]/60" />
      <span className="song-particle absolute left-[72%] top-[24%] h-1 w-1 rounded-full bg-[#d9a64c]/70" />
      <span className="song-particle absolute left-[86%] top-[62%] h-1 w-1 rounded-full bg-[#d9a64c]/60" />

      <div className="song-intro absolute left-1/2 top-[31%] z-20 w-[720px] max-w-[78vw] -translate-x-1/2 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.55em] text-[#d9a64c]/60">Chapter 06 · The Song</p>
        <h2 className="mt-6 font-serif text-6xl font-medium tracking-[-0.045em] text-white/95">Sometimes, someone sees the spark.</h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-white/45">And gives you another reason to let it shine.</p>
      </div>

      <div className="song-detail absolute left-[12%] top-[25%] z-20 w-[470px]">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d9a64c]/55">A few days later</p>
        <h3 className="mt-5 font-serif text-4xl leading-tight text-white/95">You told me about a small program happening at the Head Office.</h3>
        <p className="mt-6 font-sans text-base leading-8 text-white/50">You said I could perform my song there too.</p>
      </div>

      <div className="song-opportunity absolute right-[11%] top-[34%] z-20 w-[390px] border-l border-[#d9a64c]/35 pl-7">
        <p className="font-sans text-[9px] uppercase tracking-[0.42em] text-[#d9a64c]/60">What your appreciation gave me</p>
        <p className="mt-5 font-serif text-2xl leading-9 text-white/80">Your appreciation genuinely made me happy.</p>
        <p className="mt-4 font-sans text-sm leading-7 text-white/40">It gave me a new kind of motivation — a feeling that I should keep going and keep improving.</p>
        <p className="mt-5 font-serif text-xl leading-8 text-[#d9a64c]/85">It gave me the courage to believe I could do even better.</p>
      </div>

      <div className="song-spark absolute left-1/2 top-[55%] z-30 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/35 bg-[#d9a64c]/8 shadow-[0_0_80px_rgba(217,166,76,0.2)]" />

      <div className="song-waveform absolute bottom-[22%] left-1/2 z-10 flex h-12 w-[420px] -translate-x-1/2 items-center justify-center gap-1 opacity-45">
        <span className="h-3 w-px bg-[#d9a64c]/60" /><span className="h-7 w-px bg-[#d9a64c]/60" /><span className="h-5 w-px bg-[#d9a64c]/60" /><span className="h-10 w-px bg-[#d9a64c]/60" /><span className="h-6 w-px bg-[#d9a64c]/60" /><span className="h-9 w-px bg-[#d9a64c]/60" /><span className="h-4 w-px bg-[#d9a64c]/60" /><span className="h-8 w-px bg-[#d9a64c]/60" /><span className="h-5 w-px bg-[#d9a64c]/60" /><span className="h-10 w-px bg-[#d9a64c]/60" /><span className="h-6 w-px bg-[#d9a64c]/60" />
      </div>

      <div className="song-ending absolute left-1/2 top-[34%] z-30 w-[760px] max-w-[82vw] -translate-x-1/2 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#d9a64c]/60">What stayed with me</p>
        <h3 className="mt-7 font-serif text-5xl leading-tight tracking-[-0.035em] text-white/95">You didn’t just appreciate what I could do.</h3>
        <p className="mx-auto mt-7 max-w-2xl font-serif text-2xl leading-10 text-[#d9a64c]/85">You gave me the feeling that I could do even more.</p>
        <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-white/40">And that encouragement became a new spark inside me — to keep trying, keep learning, and keep getting better.</p>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">scroll to continue</p>
        <div className="mx-auto mt-2 h-7 w-4 rounded-full border border-[#d9a64c]/45"><div className="mx-auto mt-1.5 h-1.5 w-0.5 rounded-full bg-[#d9a64c]/80" /></div>
      </div>
    </section>
  );
}
