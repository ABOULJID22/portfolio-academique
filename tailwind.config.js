/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a3c6e',
        'primary-light': '#2563eb',
        accent: '#0ea5e9',
        accent2: '#06b6d4',
        gold: '#f59e0b',
        dark: '#0f172a',
        text: '#334155',
        'text-light': '#64748b',
        bg: '#f8fafc',
        border: '#e2e8f0',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(26,60,110,0.08)',
        md: '0 8px 32px rgba(26,60,110,0.14)',
        lg: '0 20px 60px rgba(26,60,110,0.18)',
      },
      borderRadius: {
        card: '16px',
        sm: '10px',
      },
      backgroundImage: {
        gradient1: 'linear-gradient(135deg, #1a3c6e 0%, #2563eb 50%, #0ea5e9 100%)',
        gradient2: 'linear-gradient(135deg, #0f172a 0%, #1a3c6e 100%)',
      },
      keyframes: {
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 12s linear infinite',
      },
    },
  },
  plugins: [],
};
