import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5FB',
          100: '#E8F0FE',
          200: '#D9E9FB',
          300: '#B3CDF2',
          400: '#7F9FDF',
          500: '#2F55D4',
          600: '#1A4FBF',
          700: '#0F2E7D',
          800: '#0A1F52',
          900: '#051027',
        },
        secondary: {
          50: '#EAF0FE',
          100: '#D7E3FD',
          500: '#2F55D4',
        },
        success: {
          50: '#E8F9EF',
          100: '#C2F0D2',
          500: '#22A06B',
          600: '#1B8B57',
        },
        navy: '#0D1B4B',
        light: '#E8F0FE',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 35px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
