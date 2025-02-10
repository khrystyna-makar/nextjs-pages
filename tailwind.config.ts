import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helv: ['var(--font-helv)'],
      },
      fontSize: {
        h1: [
          '48px',
          {
            lineHeight: '1.2',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ],
        h2: [
          '40px',
          {
            lineHeight: '1.25',
            letterSpacing: '0',
            fontWeight: '600',
          },
        ],
        h3: [
          '32px',
          {
            lineHeight: '1.3',
            letterSpacing: '0',
            fontWeight: '600',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '1.33',
            letterSpacing: '0',
            fontWeight: '600',
          },
        ],
        h5: [
          '20px',
          {
            lineHeight: '1.4',
            letterSpacing: '0',
            fontWeight: '600',
          },
        ],
        quote: [
          '18px',
          {
            lineHeight: '1.6',
            letterSpacing: '0.36px',
            fontWeight: '500',
          },
        ],
        body: [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        key: [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0',
            fontWeight: '500',
          },
        ],
        preheader: [
          '16px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.8px',
            fontWeight: '300',
          },
        ],
        small: [
          '14px',
          {
            lineHeight: '1.4',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        info: [
          '12px',
          {
            lineHeight: '1.33',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        large: [
          '20px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.4px',
            fontWeight: '500',
          },
        ],
        medium1: [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.32px',
            fontWeight: '500',
          },
        ],
        medium2: [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.32px',
            fontWeight: '400',
          },
        ],
        small1: [
          '14px',
          {
            lineHeight: '1.4',
            letterSpacing: '0',
            fontWeight: '500',
          },
        ],
        small2: [
          '12px',
          {
            lineHeight: '1.33',
            letterSpacing: '0.36px',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        grey: {
          50: "#FAFAFA",
          100: "#F4F4F4",
          200: "#E8E8E8",
          300: "#D1D1D1",
          400: "#B5B5B5",
          500: "#9A9A9A",
          600: "#7A7A7A",
          700: "#5A5A5A"
        },
        primary: {
          100: "#D4E3F9",
          200: "#A4C2EC",
          300: "#789BDA",
          400: "#5A7CC0",
          500: "#3D5EA7",
          700: "#1E3770"
        },
        accent: {
          300: "#FEEB93",
          500: "#E9BA65",
          700: "#B07A4E"
        },
        font: {
          primary: "#0F1B40",
          accent: "#162655",
          secondary: "#3D5EA7",
          tertiary: "#8B5E3C",
          white: "#FFFFFF"
        },
        buttons: {
          cta: {
            active: "#D4A017",
            hover: "#C49415"
          },
          secondary: {
            active: "#2D4A8F",
            hover: "#162655"
          }
        },
        icons: {
          active: "#1E3770",
          hover: "#3D5EA7",
          grey: "#9A9A9A",
        },
        status: {
          success: "#4CAF50",
          danger: "#E53935",
          warning: "#FFA726",
          info: "#6EA8FE",
          link: "#006ABB",
        },
        background: "#FEF7F1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
