"use client";

import { motion } from "motion/react";

export default function TeaScene() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <motion.div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-orange-200/8 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.35em] text-amber-200/60"
        >
          And then...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-4xl font-light text-amber-50 sm:text-6xl"
        >
          There was always tea. ☕
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-10 max-w-xl text-lg leading-8 text-white/60"
        >
          During those rehearsal days, I somehow developed a habit...
          <br />
          Whenever I got tea for myself,
          <br />
          I would get one for you too.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            type: "spring",
            stiffness: 100,
          }}
          className="mx-auto mt-12 w-fit rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-md"
        >
          <p className="text-xl text-amber-100">
            “Tum har waqt mujhe chai kyun pilate ho?”
          </p>

          <p className="mt-4 text-sm text-white/45">
            And my very simple answer was...
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mx-auto mt-10 max-w-lg text-lg leading-8 text-white/65"
        >
          “Bas aise hi... mera dil karta tha,
          <br />
          to aapke liye bhi le aata hun.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-12 text-sm text-amber-100/45"
        >
          Some memories are small.
          <br />
          Somehow, they stay.
        </motion.p>
      </div>
    </section>
  );
}