"use client";

import { MessageCircleMore } from "lucide-react";

export function FixedCta() {
  return (
    <div className="fixed right-4 bottom-5 z-[75] flex items-center gap-2">
      <a
        className="from-neon-blue to-neon-purple hover:shadow-neon inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-xs font-bold text-black transition hover:scale-[1.03]"
        href="#contact"
      >
        <MessageCircleMore size={14} />
        Vamos conversar
      </a>
      <a
        className="text-foreground hover:border-neon-green hover:text-neon-green rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-bold backdrop-blur-md transition"
        href="/cv.pdf"
      >
        Download CV
      </a>
    </div>
  );
}
