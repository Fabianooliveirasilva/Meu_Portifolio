"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.25,
  });

  return (
    <motion.div
      className="from-neon-blue via-neon-purple to-neon-green fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r"
      style={{ scaleX }}
    />
  );
}
