import type { Project } from "@/types/project";

export const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Playwright", level: 88 },
  { name: "Cypress", level: 90 },
  { name: "Three.js", level: 78 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 93 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "QA Automation Hub",
    description:
      "Plataforma para orquestrar testes end-to-end com dashboards em tempo real e relatórios inteligentes.",
    image: "/projects/project-1.svg",
    techStack: ["Next.js", "TypeScript", "Playwright", "Docker"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/qa-automation-hub",
  },
  {
    id: 2,
    title: "Neon Commerce",
    description:
      "E-commerce headless com experiência premium, checkout otimizado e métricas de conversão.",
    image: "/projects/project-2.svg",
    techStack: ["Next.js", "Tailwind", "Stripe", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/neon-commerce",
  },
  {
    id: 3,
    title: "3D Product Showcase",
    description:
      "Showcase interativo com renderização 3D, animações suaves e carregamento otimizado para web.",
    image: "/projects/project-3.svg",
    techStack: ["Three.js", "R3F", "Drei", "GSAP"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/3d-showcase",
  },
];

export const timeline = [
  {
    year: "2022",
    title: "QA Engineer",
    description: "Automação de regressão e integração contínua em ambientes críticos.",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    description:
      "Entrega de interfaces escaláveis, acessíveis e com foco em performance.",
  },
  {
    year: "2026",
    title: "3D Web Specialist",
    description: "Experiências imersivas com WebGL para produtos digitais premium.",
  },
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/seu-usuario",
  github: "https://github.com/seu-usuario",
};
