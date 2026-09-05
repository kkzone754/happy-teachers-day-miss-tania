"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AladdinScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const curtainLeft = q(".curtain-left");
      const curtainRight = q(".curtain-right");
      const spotlight = q(".stage-spotlight");
      const theatre = q(".theatre-space");
      const eyebrow = q(".aladdin-eyebrow");
      const title = q(".aladdin-title");
      const location = q(".aladdin-location");
      const roleBox = q(".role-box");
      const finalText = q(".aladdin-final");
      const dust = q(".dust");

      gsap.set(
        [
          eyebrow,
          title,
          location,
          roleBox,
          finalText,
          spotlight,
          theatre,
        ],
        { opacity: 0 }
      );

      gsap.set([curtainLeft, curtainRight], { scaleX: 1 });
      gsap.set(roleBox, { y: 50, scale: 0.92 });
      gsap.set(finalText, { y: 35, scale: 0.94 });

      gsap.to(dust, {
        y: -45,
        x: 20,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });

      gsap.to(spotlight, {
        rotation: 3,
        scale: 1.08,
        opacity: 0.75,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const intro = gsap.timeline();

      intro
        .to(theatre, {
          opacity: 1,
          duration: 1,
        })
        .to(
          spotlight,
          {
            opacity: 0.65,
            duration: 1,
          },
          "-=0.5"
        )
        .to(
          curtainLeft,
          {
            scaleX: 0.15,
            transformOrigin: "left center",
            duration: 1.5,
            ease: "power4.inOut",
          },
          "-=0.7"
        )
        .to(
          curtainRight,
          {
            scaleX: 0.15,
            transformOrigin: "right center",
            duration: 1.5,
            ease: "power4.inOut",
          },
          "<"
        )
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          location,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .to(
          roleBox,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );

      const story = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1250",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      story
        .to(
          title,
          {
            y: -60,
            scale: 1.12,
            opacity: 0.12,
            duration: 0.8,
          }
        )
        .to(
          location,
          {
            y: -35,
            opacity: 0,
            duration: 0.5,
          },
          "<"
        )
        .to(
          roleBox,
          {
            y: -80,
            scale: 0.88,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.1"
        )
        .to(
          spotlight,
          {
            scale: 1.5,
            opacity: 0.9,
            duration: 0.9,
          },
          "-=0.4"
        )
        .to(
          curtainLeft,
          {
            scaleX: 0.03,
            duration: 0.6,
          },
          "<"
        )
        .to(
          curtainRight,
          {
            scaleX: 0.03,
            duration: 0.6,
          },
          "<"
        )
        .to(
          finalText,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.1"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050403] px-6 text-center text-amber-50"
    >
      {/* Theatre atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="theatre-space absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(217,166,76,0.08),transparent_35%)]" />

          <div className="stage-spotlight absolute left-1/2 top-[-20%] h-[120%] w-[45%] -translate-x-1/2 origin-top rotate-[1deg] bg-gradient-to-b from-amber-100/[0.13] via-amber-200/[0.035] to-transparent blur-3xl" />

          <div className="absolute bottom-0 left-1/2 h-[22%] w-[75%] -translate-x-1/2 rounded-[50%] bg-amber-200/[0.035] blur-3xl" />
        </div>

        {/* Curtain */}
        <div className="curtain-left absolute inset-y-0 left-0 w-[24%] origin-left bg-gradient-to-r from-[#130a05] via-[#24150b] to-transparent shadow-2xl" />

        <div className="curtain-right absolute inset-y-0 right-0 w-[24%] origin-right bg-gradient-to-l from-[#130a05] via-[#24150b] to-transparent shadow-2xl" />

        {/* Theatre floor */}
        <div className="absolute bottom-0 left-0 h-[18%] w-full bg-gradient-to-t from-[#020201] to-transparent" />

        {/* Dust */}
        <span className="dust absolute left-[18%] top-[30%] h-1 w-1 rounded-full bg-amber-100/40" />
        <span className="dust absolute left-[29%] top-[60%] h-1 w-1 rounded-full bg-amber-100/30" />
        <span className="dust absolute left-[43%] top-[25%] h-1 w-1 rounded-full bg-amber-100/40" />
        <span className="dust absolute left-[58%] top-[65%] h-1 w-1 rounded-full bg-amber-100/30" />
        <span className="dust absolute left-[72%] top-[35%] h-1 w-1 rounded-full bg-amber-100/40" />
        <span className="dust absolute left-[84%] top-[55%] h-1 w-1 rounded-full bg-amber-100/30" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-5xl">

          <p className="aladdin-eyebrow text-[10px] uppercase tracking-[0.5em] text-amber-200/55 sm:text-xs">
            One unforgettable memory
          </p>

          <h2 className="aladdin-title mt-7 text-5xl font-extralight tracking-[-0.05em] sm:text-7xl md:text-8xl">
            Aladdin
          </h2>

          <p className="aladdin-location mt-5 text-[10px] uppercase tracking-[0.25em] text-white/30 sm:text-xs sm:tracking-[0.35em]">
            Arts Council of Pakistan · Karachi
          </p>

          <div className="role-box mx-auto mt-12 max-w-xl rounded-[2rem] border border-amber-100/[0.1] bg-white/[0.035] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-100/[0.12] bg-amber-100/[0.045] text-2xl">
              🎭
            </div>

            <p className="mt-7 text-sm uppercase tracking-[0.3em] text-white/30">
              My roles
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-xl font-light text-amber-50 sm:text-2xl">
                Master Ji
              </p>

              <div className="mx-auto h-px w-12 bg-amber-100/15" />

              <p className="text-base font-light text-amber-100/70 sm:text-xl">
                Anjaani Khaufnaak Awaaz
              </p>
            </div>

            <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/35">
              My first real experience of standing on a stage,
              becoming a character, and letting myself perform.
            </p>
          </div>

          <div className="aladdin-final absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6">
            <p className="text-[10px] uppercase tracking-[0.45em] text-amber-200/45">
              And somewhere in those days...
            </p>

            <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-extralight leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
              I stopped being afraid
              <br />
              of the stage.
            </h3>

            <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
              I&apos;t know it at the time,
              <br />
              but something inside me was changing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}