"use client";

import { motion } from "framer-motion";

import { useMousePosition } from "@/hooks/use-mouse-position";

export function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        aria-hidden
        className="border-neon-blue/70 bg-neon-blue/10 pointer-events-none fixed top-0 left-0 z-[80] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-sm md:block"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 650, damping: 35, mass: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="bg-neon-green pointer-events-none fixed top-0 left-0 z-[79] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        animate={{ x, y }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      />
    </>
  );
}
