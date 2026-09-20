"use client";

import { motion } from "motion/react";

export default function TeaScene() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070504] px-6 py-20 text-[#fff8e8] sm:px-10">
      {/* cinematic atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-30" />
        <motion.div
          className="absolute left-[72%] top-[48%] h-[42vw] w-[42vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a64c]/[0.07] blur-[120px]"
          animate={{ scale: [1, 1.16, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(217,166,76,0.11),transparent_25%),linear-gradient(90deg,#070504_0%,rgba(7,5,4,0.88)_48%,rgba(7,5,4,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.68)_100%)]" />
      </div>

      {/* chapter marker */}
      <div className="absolute left-6 top-7 z-20 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-[#d9a64c]/75">
          CHAPTER
        </span>
        <span className="h-px w-10 bg-[#d9a64c]/40" />
        <span className="font-sans text-[10px] tracking-[0.25em] text-white/45">05</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* story */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d9a64c]/80 sm:text-[10px]"
            >
              One small gesture
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 max-w-3xl font-display text-[clamp(3.8rem,8vw,8.4rem)] font-medium leading-[0.84] tracking-[-0.07em]"
            >
              Sometimes
              <br />
              <span className="italic text-[#f0d49a]">kindness</span>
              <br />
              is simple.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 h-px w-24 bg-gradient-to-r from-[#e4b96a] to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl border-l border-[#d9a64c]/35 pl-5 font-display text-base leading-7 text-white/62 sm:pl-7 sm:text-lg sm:leading-8"
            >
              Rehearsals were busy. There were lines to remember,
              <br className="hidden sm:block" />
              scenes to repeat, and a lot happening around us.
              <br className="hidden sm:block" />
              Somehow, one little gesture became a familiar moment.
            </motion.p>
          </div>

          {/* tea / quote composition */}
          <div className="relative flex min-h-[470px] items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, type: "spring", stiffness: 70, damping: 15 }}
              className="relative w-full max-w-[470px]"
            >
              {/* ambient rings */}
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/10" />
              <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a64c]/[0.07]" />

              {/* abstract cup */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto mb-[-55px] h-[155px] w-[190px] rounded-[28px_28px_42px_42px] border border-[#d9a64c]/35 bg-gradient-to-b from-[#2a1c10] to-[#0d0906] shadow-[0_30px_90px_rgba(0,0,0,0.6),0_0_70px_rgba(217,166,76,0.08)]"
              >
                <div className="absolute left-1/2 top-5 h-3 w-[125px] -translate-x-1/2 rounded-full bg-[#050302] shadow-[0_0_25px_rgba(217,166,76,0.14)]" />
                <div className="absolute -right-12 top-[42px] h-[70px] w-[65px] rounded-r-full border border-l-0 border-[#d9a64c]/30" />
                <motion.div
                  animate={{ opacity: [0.05, 0.28, 0.05], y: [8, -18, -35] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeOut" }}
                  className="absolute left-[38%] top-[-65px] h-20 w-8 rounded-full bg-[#f0d49a]/10 blur-xl"
                />
                <motion.div
                  animate={{ opacity: [0.03, 0.2, 0.03], y: [5, -22, -42], x: [0, 8, -3] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                  className="absolute left-[57%] top-[-70px] h-24 w-7 rounded-full bg-[#f0d49a]/10 blur-xl"
                />
              </motion.div>

              <div className="relative overflow-hidden rounded-[4px] border border-[#d9a64c]/20 bg-[#0c0906]/85 p-7 shadow-[0_25px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-9">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e4b96a] to-transparent" />
                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-[#d9a64c]/60">
                  A little question
                </p>
                <p className="mt-5 font-display text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.1] text-[#fff8e8]">
                  “Tum har waqt mujhe chai kyun pilate ho?”
                </p>

                <div className="my-7 h-px bg-gradient-to-r from-[#d9a64c]/35 via-[#d9a64c]/10 to-transparent" />

                <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/30">
                  The answer was simple
                </p>
                <p className="mt-4 font-display text-lg leading-7 text-[#f0d49a] sm:text-xl">
                  “Bas aise hi... mera dil karta tha,
                  <br />
                  to aapke liye bhi le aata hun.”
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-7 text-center font-sans text-[9px] uppercase tracking-[0.38em] text-white/25"
              >
                Some memories are small. Somehow, they stay.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-4 z-30 border border-white/[0.045] sm:inset-7" />

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-white/25">
          scroll to continue
        </p>
        <div className="mx-auto mt-2 h-7 w-4 rounded-full border border-[#d9a64c]/45">
          <div className="mx-auto mt-1.5 h-1.5 w-0.5 rounded-full bg-[#d9a64c]/80" />
        </div>
      </div>
    </section>
  );
}
