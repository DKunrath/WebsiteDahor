/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          dark: '#1a1a1a',
          gray: {
            900: '#111111',
            800: '#1f1f1f',
            700: '#2d2d2d',
            600: '#404040',
            500: '#666666',
            400: '#999999',
            300: '#cccccc',
            200: '#e5e5e5',
            100: '#f5f5f5',
          }
        },
        white: '#ffffff',
        // Verde para destaques estratégicos
        'strategic-green': '#81b64c',
        'strategic-green-light': '#a3d160',
        chess: {
          dark: '#1a1a1a',
          light: '#f8f8f8',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'chess-pattern': `
          linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
          linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
          linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)
        `,
        'chess-subtle': `
          linear-gradient(45deg, rgba(26, 26, 26, 0.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(26, 26, 26, 0.1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(26, 26, 26, 0.1) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(26, 26, 26, 0.1) 75%)
        `,
        'strategic-gradient': `
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(128, 128, 128, 0.05) 0%, transparent 50%)
        `,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'chess-move': 'chess-move 15s ease-in-out infinite',
        'strategic-pulse': 'strategic-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' },
        },
        'chess-move': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '33%': { transform: 'rotate(90deg) scale(1.1)' },
          '66%': { transform: 'rotate(180deg) scale(0.9)' },
        },
        'strategic-pulse': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
