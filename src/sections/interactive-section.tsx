"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const InteractiveCube = dynamic(
  () => import("@/components/three/interactive-cube").then((mod) => mod.InteractiveCube),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-white/5" />,
  },
);

export function InteractiveSection() {
  return (
    <section className="px-6 py-24" id="interactive-3d">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-foreground text-3xl font-bold">3D Interactive</h2>
        <motion.div
          className="shadow-glass mt-8 h-[420px] overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <InteractiveCube />
        </motion.div>
      </div>
    </section>
  );
}
