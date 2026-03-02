"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(
  () => import("@/components/three/hero-canvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-white/5" />,
  },
);

export function HeroSection() {
  return (
    <section
      className="bg-hero-gradient relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-10"
      id="hero"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-neon-blue mb-4 text-sm font-medium tracking-[0.2em] uppercase">
            2026 QA Engineer
          </p>
          <h1 className="text-foreground text-4xl leading-tight font-black sm:text-6xl">
            FABIANO <span className="text-neon-blue">OlIVEIRA SILVA</span>
          </h1>
          <p className="text-foreground/80 mt-4 max-w-xl text-lg sm:text-xl">
            QA Engineer
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="from-neon-blue to-neon-purple hover:shadow-neon rounded-full bg-gradient-to-r px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="border-neon-blue/50 text-foreground hover:border-neon-green hover:text-neon-green rounded-full border bg-white/5 px-6 py-3 text-sm font-bold transition"
              href="/cv.pdf"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.92 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="shadow-glass h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl sm:h-[440px]"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
