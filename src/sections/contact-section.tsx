"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

import { socialLinks } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="px-6 pt-20 pb-24" id="contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="shadow-glass rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-foreground text-3xl font-bold">Contact</h2>
          <p className="text-foreground/80 mt-3">
            Vamos construir algo de alto impacto. Me envie uma mensagem.
          </p>

          <form className="mt-8 grid gap-4">
            <input
              className="text-foreground focus:border-neon-blue rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm transition outline-none"
              name="name"
              placeholder="Seu nome"
              type="text"
            />
            <input
              className="text-foreground focus:border-neon-blue rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm transition outline-none"
              name="email"
              placeholder="Seu e-mail"
              type="email"
            />
            <textarea
              className="text-foreground focus:border-neon-blue min-h-32 rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm transition outline-none"
              name="message"
              placeholder="Sua mensagem"
            />
            <button
              className="from-neon-blue to-neon-purple hover:shadow-neon w-fit rounded-full bg-gradient-to-r px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.03]"
              type="submit"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <a
              className="text-foreground hover:border-neon-blue hover:text-neon-blue inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition"
              href={socialLinks.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              className="text-foreground hover:border-neon-green hover:text-neon-green inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition"
              href={socialLinks.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
