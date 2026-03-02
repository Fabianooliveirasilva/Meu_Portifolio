"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="px-6 py-24" id="skills">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-foreground text-3xl font-bold">Skills</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.article
              key={skill.name}
              className="hover:border-neon-blue/60 hover:shadow-neon rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition"
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="text-neon-green" size={18} />
                  <h3 className="text-foreground font-semibold">{skill.name}</h3>
                </div>
                <span className="text-neon-blue text-xs font-bold">{skill.level}%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10">
                <motion.div
                  className="from-neon-blue to-neon-purple h-full rounded-full bg-gradient-to-r"
                  initial={{ width: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  viewport={{ once: true }}
                  whileInView={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
