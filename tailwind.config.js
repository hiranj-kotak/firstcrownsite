/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
}