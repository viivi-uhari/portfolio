/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blue': '9px 10px 0px #0400E0',
        'orange': '9px 10px 0px #FF9839',
      },
      borderColor: {
        'blue': '#0400E0',
        'orange': '#FF9839',
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  safelist: [
    'border-blue',
    'border-orange',
    'shadow-blue',
    'shadow-orange',
  ],
  plugins: [],
}
