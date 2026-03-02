"use client";

import { motion } from "framer-motion";
import {
  Bug,
  ClipboardCheck,
  FlaskConical,
  Gauge,
  GitPullRequestArrow,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Planejamento de testes",
    description:
      "Mapeamento de fluxos críticos, critérios de aceitação e definição de estratégia baseada em risco.",
  },
  {
    icon: FlaskConical,
    title: "Execução manual + exploratória",
    description:
      "Validação funcional profunda para antecipar falhas de usabilidade, regras de negócio e integração.",
  },
  {
    icon: Bug,
    title: "Gestão de bugs",
    description:
      "Registro com evidências claras, priorização por impacto e acompanhamento até correção.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Automação E2E",
    description:
      "Cobertura dos cenários mais sensíveis com Cypress para reduzir regressão manual repetitiva.",
  },
  {
    icon: Gauge,
    title: "Qualidade mensurável",
    description:
      "Acompanhamento de estabilidade de build, taxa de falhas e confiança para release.",
  },
  {
    icon: ShieldCheck,
    title: "Decisão de release",
    description:
      "Go/No-Go com base técnica e alinhamento com time de produto e desenvolvimento.",
  },
];

export function QaCaseSection() {
  return (
    <section className="px-6 py-24" id="qa-case">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-foreground text-3xl font-bold"
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Case QA: do requisito ao release
        </motion.h2>
        <p className="text-foreground/80 mt-3 max-w-3xl">
          Fluxo aplicado para aumentar previsibilidade, reduzir riscos de produção e
          acelerar entregas com qualidade.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                className="hover:border-neon-blue/60 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition"
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
              >
                <Icon className="text-neon-blue" size={20} />
                <h3 className="text-foreground mt-3 font-semibold">{step.title}</h3>
                <p className="text-foreground/75 mt-2 text-sm">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
