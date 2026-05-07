import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── HXOVA Design Tokens ────────────────────────────────────────
      colors: {
        white: '#FFFFFF',
        navy: {
          DEFAULT: '#0C1D32',
          2: '#091525',
          3: '#112740',
        },
        teal: {
          pale: '#EDF7F5',
          DEFAULT: '#26B5A5',
          2: '#1E9C8E',
          3: '#48CFC0',
        },
        ink: {
          DEFAULT: '#0C1D32',
          2: '#2E4057',
          3: '#5A7184',
          4: '#8FA3B4',
        },
        gray: {
          1: '#F2F4F7',
          2: '#F0F4F8',
        },
        line: {
          DEFAULT: '#DDE4EC',
          soft: '#EBF0F5',
        },
        yellow: '#F5C518',
      },
      fontFamily: {
        sans:  ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        en:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['10px', { letterSpacing: '0.2em', lineHeight: '1.4' }],
      },
      borderRadius: {
        DEFAULT: '10px',
        sm: '5px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      maxWidth: {
        wrap: '1360px',
      },
      backgroundImage: {
        'teal-grad': 'linear-gradient(110deg, #48CFC0 0%, #26B5A5 50%, #1A8A7C 100%)',
      },
      keyframes: {
        tickMove: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        logoScroll: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'tick':        'tickMove 32s linear infinite',
        'logo-scroll': 'logoScroll 28s linear infinite',
        'fade-in-down': 'fadeInDown 0.18s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
