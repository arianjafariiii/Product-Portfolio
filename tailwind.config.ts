import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        paper: '#f8fafc',
        accent: '#1f4d3f',
        accentSoft: '#dfece7',
        line: '#dfe4ea',
      },
      boxShadow: {
        soft: '0 18px 48px -24px rgba(15, 23, 42, 0.18)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
