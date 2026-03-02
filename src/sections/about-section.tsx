"use client";

import { motion } from "framer-motion";

import { timeline } from "@/lib/data";

const skillTags = [
  "Test Automation",
  "Front-End Architecture",
  "Web Performance",
  "UI Engineering",
  "Three.js",
  "CI/CD",
];

export function AboutSection() {
  return (
    <section className="px-6 py-24" id="about">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="shadow-glass rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 22 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-foreground text-3xl font-bold">About</h2>
          <p className="text-foreground/80 mt-4 max-w-3xl">
            Desenvolvedor focado em QA e Front-End com forte atuação em automação,
            qualidade de software e experiências web modernas. Construo interfaces
            escaláveis, acessíveis e com estética premium orientada a resultados.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <ul className="space-y-5">
              {timeline.map((item) => (
                <li key={item.year} className="relative pl-6">
                  <span className="bg-neon-blue absolute top-2 left-0 h-2.5 w-2.5 rounded-full" />
                  <div className="text-neon-green text-sm">{item.year}</div>
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                  <p className="text-foreground/75 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 self-start">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="border-neon-purple/40 bg-neon-purple/10 text-neon-purple rounded-full border px-4 py-2 text-xs font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
