"use client";

import { motion } from "motion/react";

type IntroProps = {
  onStart: () => void;
};

export default function Intro({ onStart }: IntroProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-amber-300/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="mb-6 text-xs uppercase text-amber-200/70"
        >
          A little surprise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-5xl font-light tracking-tight text-amber-50 sm:text-7xl"
        >
          For Miss Tania
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mx-auto mt-7 max-w-md text-base leading-7 text-white/55 sm:text-lg"
        >
          A little memory, turned into an experience.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 35px rgba(217,166,76,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="mt-10 rounded-full border border-amber-200/30 bg-amber-100/5 px-7 py-3 text-sm text-amber-100 backdrop-blur-md transition-colors hover:bg-amber-100/10"
        >
          Begin the story
        </motion.button>
      </motion.div>
    </main>
  );
}