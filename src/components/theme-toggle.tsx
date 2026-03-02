"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Alternar tema"
      className="text-foreground hover:border-neon-blue/60 hover:text-neon-blue fixed top-4 right-5 z-[75] rounded-full border border-white/20 bg-black/30 p-2 backdrop-blur-md transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
