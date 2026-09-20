"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeaScene() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070504] px-6 py-20 text-[#fff8e8] sm:px-10">
      {/* cinematic atmosphere */}
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

      {/* chapter marker */}
      <div className="absolute left-6 top-7 z-30 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-[#d9a64c]/75">CHAPTER</span>
        <span className="h-px w-10 bg-[#d9a64c]/40" />
        <span className="font-sans text-[10px] tracking-[0.25em] text-white/45">05</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1450px] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          {/* story / left side */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, ease }}
              className="font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/80 sm:text-[10px]"
            >
              A small memory
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.95, delay: 0.08, ease }}
              className="mt-6 max-w-3xl font-display text-[clamp(3.5rem,7.6vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]"
            >
              Some moments
              <br />
              are <span className="italic text-[#f0d49a]">small.</span>
              <br />
              <span className="text-white/88">They stay.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
              className="mt-9 h-px w-24 bg-gradient-to-r from-[#e4b96a] to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="mt-8 max-w-xl border-l border-[#d9a64c]/35 pl-5 font-display text-base leading-7 text-white/62 sm:pl-7 sm:text-lg sm:leading-8"
            >
              Between rehearsals, stage calls, and everything happening around us,
              <br className="hidden sm:block" />
              there was one little thing I still remember.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#d9a64c]/30" />
              <span className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">
                tea · a tiny tradition
              </span>
            </motion.div>
          </div>

          {/* cinematic memory object */}
          <div className="relative flex min-h-[540px] items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.1, ease }}
              className="relative w-full max-w-[610px]"
            >
              {/* orbit / stage */}
              <div className="absolute left-1/2 top-[42%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/10" />
              <div className="absolute left-1/2 top-[42%] h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/[0.07]" />
              <div className="absolute left-1/2 top-[42%] h-[2px] w-[440px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9a64c]/20 to-transparent" />

              {/* two cups — the unfinished plan */}
              <div className="relative z-10 flex items-end justify-center gap-7 sm:gap-12">
                <TeaCup delay={0} label="yours" />
                <TeaCup delay={0.65} label="mine" />
              </div>

              {/* memory card */}
              <motion.div
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
                className="relative z-20 mt-[-18px] rounded-[4px] border border-[#d9a64c]/20 bg-[#0c0906]/88 p-7 shadow-[0_30px_110px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-9"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e4b96a] to-transparent" />

                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-[#d9a64c]/60">
                  You asked me once
                </p>

                <p className="mt-5 font-display text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.1] text-[#fff8e8]">
                  “Tum har waqt mujhe chai kyun pilate ho?”
                </p>

                <div className="my-7 h-px bg-gradient-to-r from-[#d9a64c]/35 via-[#d9a64c]/10 to-transparent" />

                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/30">
                  My answer was simple
                </p>

                <p className="mt-4 font-display text-lg leading-7 text-[#f0d49a] sm:text-xl">
                  “Bas aise hi... mera dil karta tha,
                  <br />
                  to aapke liye bhi le aata hun.”
                </p>
              </motion.div>

              {/* last-day reveal */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.9, delay: 0.7, ease }}
                className="relative z-20 mt-8 border-l border-[#d9a64c]/35 pl-5 sm:pl-7"
              >
                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-[#d9a64c]/65">
                  The last day
                </p>
                <p className="mt-4 max-w-xl font-display text-xl leading-8 text-white/78 sm:text-2xl">
                  You said we&apos;d sit by the stage
                  <br className="hidden sm:block" />
                  and have tea together.
                </p>
                <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-white/38">
                  But the day moved too fast.
                  <br />
                  There was never enough time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 1, delay: 1.05, ease }}
                className="mt-8 text-center sm:text-left"
              >
                <p className="font-display text-2xl leading-tight text-[#fff8e8] sm:text-3xl">
                  We never got that tea.
                </p>
                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.3em] text-[#d9a64c]/55">
                  And somehow, I still remember it.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-4 z-30 border border-white/[0.045] sm:inset-7" />

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">scroll to continue</p>
        <div className="mx-auto mt-2 h-7 w-4 rounded-full border border-[#d9a64c]/45">
          <div className="mx-auto mt-1.5 h-1.5 w-0.5 rounded-full bg-[#d9a64c]/80" />
        </div>
      </div>
    </section>
  );
}

function TeaCup({ delay, label }: { delay: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease }}
      className="relative h-[155px] w-[145px] sm:h-[175px] sm:w-[165px]"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute bottom-4 left-1/2 h-[105px] w-[125px] -translate-x-1/2 rounded-[24px_24px_34px_34px] border border-[#d9a64c]/30 bg-gradient-to-b from-[#2a1c10] to-[#0d0906] shadow-[0_25px_70px_rgba(0,0,0,0.65)] sm:h-[120px] sm:w-[140px]"
      >
        <div className="absolute left-1/2 top-4 h-3 w-[82%] -translate-x-1/2 rounded-full bg-[#050302] shadow-[0_0_24px_rgba(217,166,76,0.12)]" />
        <div className="absolute -right-9 top-[30px] h-[54px] w-[45px] rounded-r-full border border-l-0 border-[#d9a64c]/25 sm:-right-11 sm:h-[62px] sm:w-[52px]" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.04, 0.22, 0.04], y: [10, -18, -38], x: [0, 5, -3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeOut", delay }}
        className="absolute left-1/2 top-[-8px] h-20 w-8 -translate-x-1/2 rounded-full bg-[#f0d49a]/10 blur-xl"
      />

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-sans text-[7px] uppercase tracking-[0.4em] text-white/20">
        {label}
      </span>
    </motion.div>
  );
}
