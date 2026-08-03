import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0F1E3A',
        'navy-mid': '#1E2F4F',
        'gray-muted': '#A7B6D0',
        'gray-light': '#F8F9FB',
        'border-light': 'rgba(167, 182, 208, 0.2)',
        'border-dark': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
