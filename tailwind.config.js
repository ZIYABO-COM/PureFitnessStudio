/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black:   '#0a0a0a',
        white:   '#f5f2ee',
        accent:  '#e8ff3e',
        accent2: '#ff4d1c',
        gray: {
          1: '#141414',
          2: '#1a1a1a',
          3: '#252525',
          4: '#333333',
          5: '#555555',
        },
        muted: '#888888',
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
        heading:  ['var(--font-heading)', 'sans-serif'],
        body:     ['var(--font-body)', 'sans-serif'],
        sans:     ['var(--font-body)', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      animation: {
        'ticker':     'ticker 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'shimmer':    'shimmer 2s linear infinite',
      },
      boxShadow: {
        'accent':    '0 0 30px rgba(232,255,62,0.15)',
        'accent-md': '0 0 50px rgba(232,255,62,0.25)',
      },
      brightness: {
        40: '.40',
        70: '.70',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}