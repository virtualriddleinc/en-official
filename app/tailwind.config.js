/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-subtle': 'var(--color-text-subtle)',
        'text-inverse': 'var(--color-text-inverse)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-subtle': 'var(--color-bg-subtle)',
        'bg-inverse': 'var(--color-bg-inverse)',
        
        // Dark theme colors
        'dark-text-primary': 'var(--color-dark-text-primary)',
        'dark-text-secondary': 'var(--color-dark-text-secondary)',
        'dark-text-subtle': 'var(--color-dark-text-subtle)',
        'dark-text-inverse': 'var(--color-dark-text-inverse)',
        'dark-bg-primary': 'var(--color-dark-bg-primary)',
        'dark-bg-subtle': 'var(--color-dark-bg-subtle)',
        'dark-bg-inverse': 'var(--color-dark-bg-inverse)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float-slow': 'float 3s ease-in-out infinite',
        'float-slow-reverse': 'floatReverse 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        scaleX: 'scaleX 0.5s ease-out forwards',
        counter: 'counter 2s linear forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0)' },
        },
        particle: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) scale(0)', opacity: '0' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleX: {
          '0%': {
            transform: 'scaleX(0)'
          },
          '100%': {
            transform: 'scaleX(1)'
          }
        },
        counter: {
          '0%': { '--num': '0' },
          '100%': { '--num': 'var(--end)' }
        }
      },
    },
  },
  plugins: [],
} 