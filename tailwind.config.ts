import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bottomIn: 'bottomIn 1s ease-in-out ',
        fadeIn: 'fadeIn 1s ease-in-out ',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        bottomIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-desktop':
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)), url('../public/collection.jpg')",
        'gradient-linear': 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': '#2A254B',
        primary: '#4E4D93',
        'light-gray': '#F9F9F9',
        'border-gray': '#EBE8F4',
        'border-dark': '#CAC6DA',
      },
      fontFamily: {
        headings: ['var(--font-montserrat)', 'sans'],
        body: ['var(--font-dm_sans)', 'sans'],
      },
      fontSize: {
        sm: ['0.875rem', '150%'],
        md: ['1rem', '150%'],
        lg: ['1.25rem', '150%'],
        '3xl': ['2rem', '150%'],
      },
    },
  },
  plugins: [],
}
export default config
