import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#eaeaea",
        neon: {
          blue: "#00f0ff",
          purple: "#7b2ff7",
          green: "#00ff9d",
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        neon: "0 0 20px rgba(0, 240, 255, 0.45)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(0,240,255,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(123,47,247,0.2), transparent 38%), linear-gradient(180deg, #0f0f0f 0%, #090909 100%)",
      },
      animation: {
        glow: "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(0,240,255,0.3)" },
          "100%": { boxShadow: "0 0 24px rgba(123,47,247,0.45)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
