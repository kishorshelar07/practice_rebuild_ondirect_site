/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        dm:   ["'DM Sans'", "sans-serif"],
      },
      colors: {
        // Dark backgrounds — rich deep navy-black with subtle warmth
        navy: {
          950: '#080B14',   // deepest — near-black with blue-black depth
          900: '#0D1120',   // very dark navy — main bg
          800: '#111827',   // dark section bg
          700: '#1A2235',   // card bg
          600: '#1F2A40',   // slightly lighter card
          500: '#263248',   // border / divider bg
        },
        // Primary brand red — unchanged
        electric: {
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
        },
        // Secondary accent — amber
        cyan: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        // Tertiary — orange
        violet: {
          400: '#FB923C',
          500: '#F97316',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        // Rich multi-layer hero mesh — deep navy + red glow
        'hero-mesh':
          'radial-gradient(at 20% 10%, hsla(220,80%,12%,0.95) 0, transparent 55%),' +
          'radial-gradient(at 80% 5%,  hsla(0,85%,45%,0.18)   0, transparent 45%),' +
          'radial-gradient(at 0%  60%, hsla(220,70%,8%,0.90)  0, transparent 60%),' +
          'radial-gradient(at 90% 80%, hsla(0,70%,35%,0.12)   0, transparent 45%),' +
          'radial-gradient(at 50% 50%, hsla(215,60%,10%,0.50) 0, transparent 70%)',

        // Section divider gradient
        'section-fade':
          'linear-gradient(to bottom, #080B14, #0D1120, #080B14)',

        // Card inner glow
        'card-glow':
          'radial-gradient(circle at 50% 0%, rgba(239,68,68,0.08), transparent 60%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      boxShadow: {
        'red-glow':   '0 0 40px rgba(239,68,68,0.25)',
        'red-sm':     '0 0 16px rgba(239,68,68,0.20)',
        'card':       '0 4px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.7), 0 0 24px rgba(239,68,68,0.12)',
      },
    },
  },
  plugins: [],
};