"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          alt={project.title}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          src={project.image}
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-foreground text-xl font-bold">{project.title}</h3>
        <p className="text-foreground/80 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border-neon-blue/30 bg-neon-blue/10 text-neon-blue rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          <a
            className="from-neon-blue to-neon-purple hover:shadow-neon rounded-full bg-gradient-to-r px-4 py-2 text-xs font-bold text-black transition"
            href={project.demoUrl}
            rel="noreferrer"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            className="text-foreground hover:border-neon-green hover:text-neon-green rounded-full border border-white/20 px-4 py-2 text-xs font-bold transition"
            href={project.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
