import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        signal: "var(--signal)",
        gold: "var(--gold)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter-tight)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(45, 212, 191, 0.15)",
        panel: "0 32px 90px rgba(0, 0, 0, 0.5)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "12%": { opacity: "0.2" },
          "88%": { opacity: "0.2" },
          "100%": { transform: "translateY(100%)", opacity: "0" }
        }
      },
      animation: {
        scan: "scan 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
