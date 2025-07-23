/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Archivo"', "sans-serif"], // Usage: class="font-sans"
        sans: ['"Onest"', "sans-serif"], // Usage: class="font-heading"
        mono: ['"Fira Code"', "monospace"], // Usage: class="font-mono"
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // Light Theme Colors
        light: {
          bg: '#ffffff',
          text: '#000000',
          primary: '#3B0764',

        },
        // Dark Theme Colors  
        dark: {
          bg: '#3B0764',
          text: '#ffffff',
          primary: '#F3E8FF',
        },
        // Dynamic theme colors using CSS custom properties
        theme: {
          bg: 'var(--theme-bg)',
          text: 'var(--theme-text)',
          primary: 'var(--theme-primary)',
          secondary: 'var(--theme-secondary)',
          cardText: 'var(--theme-secondary)',
          accent: 'var(--theme-accent)',
          card: 'var(--theme-card)',
          border: 'var(--theme-border)',
        }
      },
      fontSize: {
        giant: "7.5rem",
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
        slideIn: 'slideIn 0.3s ease-out'
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}