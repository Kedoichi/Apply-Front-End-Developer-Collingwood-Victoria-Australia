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
        'bellroy-blue': {
          DEFAULT: '#1F4E6E',
          light: '#5C8EAE',
        },
        'bellroy-tan': '#D2A87D',
        'bellroy-orange': '#E77C40',
        'bellroy-offwhite': '#F7F6F4',
        'bellroy-gray': '#333333',
      },
    },
  },
  plugins: [],
}