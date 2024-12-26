import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        footerForeground: "var(--footer-foreground)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      animation: {
        slideInLeft: "slide-in-left 0.5s ease-in-out 0s forwards",
        slideInRight: "slide-in-right 0.5s ease-in-out",
        slideOutLeft: "slideOutLeft 0.5s ease-in-out",
        slideOutRight: "slide-out-right 0.5s ease-in-out 0s forwards",
      }
    },
    fontFamily: {
      roboto: "var(--font-roboto)",
      custom: "var(--font-custom)",
      pdisplay: "var(--font-playfair-display)"
    }
  },
  plugins: [],
} satisfies Config;
