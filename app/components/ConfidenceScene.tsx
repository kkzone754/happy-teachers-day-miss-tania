"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ConfidenceScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const eyebrow = q(".confidence-eyebrow");
      const intro = q(".confidence-intro");
      const divider = q(".confidence-divider");
      const support = q(".support-lines");
      const quote = q(".confidence-quote");
      const reveal = q(".confidence-reveal");
      const glow = q(".confidence-glow");
      const ring = q(".confidence-ring");
      const particles = q(".confidence-particle");

      gsap.set(
        [
          eyebrow,
          intro,
          divider,
          support,
          quote,
          reveal,
          glow,
          ring,
        ],
        { opacity: 0 }
      );

      gsap.set(intro, { y: 35, scale: 0.96 });
      gsap.set(support, { y: 30 });
      gsap.set(quote, { y: 35, scale: 0.97 });
      gsap.set(reveal, { y: 40, scale: 0.8 });

      const entrance = gsap.timeline();

      entrance
        .to(eyebrow, {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          intro,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          divider,
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          support,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          quote,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        );

      gsap.to(glow, {
        scale: 1.25,
        opacity: 0.8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(ring, {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: index % 2 === 0 ? -35 : 35,
          x: index % 3 === 0 ? 20 : -15,
          opacity: index % 2 === 0 ? 0.7 : 0.25,
          duration: 4 + (index % 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      const transformation = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      transformation
        .addLabel("memory")

        .to(
          intro,
          {
            y: -70,
            scale: 1.08,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "memory"
        )

        .to(
          eyebrow,
          {
            y: -40,
            opacity: 0,
            duration: 0.5,
          },
          "memory"
        )

        .to(
          support,
          {
            y: -35,
            opacity: 0,
            duration: 0.7,
          },
          "memory+=0.1"
        )

        .to(
          quote,
          {
            scale: 1.05,
            y: -25,
            opacity: 0.2,
            duration: 0.8,
          },
          "memory+=0.2"
        )

        .to(
          glow,
          {
            scale: 1.5,
            opacity: 1,
            duration: 1,
          },
          "memory+=0.2"
        )

        .to(
          ring,
          {
            scale: 1.5,
            opacity: 0.7,
            duration: 1,
          },
          "memory+=0.2"
        )

        .to(
          quote,
          {
            opacity: 0,
            filter: "blur(12px)",
            scale: 1.2,
            duration: 0.7,
          },
          "+=0.1"
        )

        .to(
          reveal,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.2"
        )

        .to(
          glow,
          {
            scale: 1.8,
            opacity: 0.55,
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
      className="relative h-screen overflow-hidden bg-[#070605] px-6 text-center text-amber-50"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="confidence-glow absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.06] blur-[110px]" />

        <div className="confidence-ring absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-100/[0.06] sm:h-[480px] sm:w-[480px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.8)_100%)]" />

        <span className="confidence-particle absolute left-[12%] top-[28%] h-1 w-1 rounded-full bg-amber-100/40" />
        <span className="confidence-particle absolute left-[24%] top-[70%] h-1 w-1 rounded-full bg-amber-100/30" />
        <span className="confidence-particle absolute left-[72%] top-[25%] h-1 w-1 rounded-full bg-amber-100/40" />
        <span className="confidence-particle absolute left-[86%] top-[65%] h-1 w-1 rounded-full bg-amber-100/30" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto w-full max-w-4xl">

          <p className="confidence-eyebrow text-[10px] uppercase tracking-[0.45em] text-amber-200/55 sm:text-xs">
            Then something changed
          </p>

          <h2 className="confidence-intro mt-8 text-4xl font-extralight leading-tight tracking-[-0.04em] sm:text-6xl md:text-7xl">
            I discovered something
            <br />
            I didn&apos;t know I had.
          </h2>

          <div className="confidence-divider mx-auto my-10 h-px w-24 origin-center scale-x-0 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

          <div className="support-lines mx-auto max-w-xl space-y-3 text-base leading-8 text-white/50 sm:text-lg">
            <p>You helped me with the dialogue.</p>
            <p>You helped me with the voice.</p>
            <p>You helped me learn how to perform.</p>
          </div>

          <p className="confidence-quote mx-auto mt-10 max-w-2xl text-lg leading-9 text-amber-100/85 sm:text-2xl sm:leading-10">
            “Aapki wajah se mere andar woh confidence aaya,
            jo mujhe khud nahi pata tha ke mere andar ho bhi sakta hai.”
          </p>

          <div className="confidence-reveal pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-amber-200/50">
              What I found
            </p>

            <h3 className="mt-5 text-5xl font-extralight tracking-[-0.05em] text-amber-50 sm:text-7xl md:text-8xl">
              Confidence.
            </h3>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/40 sm:text-base">
              I stopped wondering whether I could do it.
              <br />
              I was simply doing it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}