const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      primary: '#2563EB',
      secondary: '#1E3A8A',
      'secondary-dark': '#112D7D',
      background: '#262626',
      link: '#97B5F7',

      // Need better names for these
      'gray-200': '#E5E7Eb',
      'gray-300': '#D1D5DB',
      'gray-400': '#9CA3AF',
      'gray-700': '#374151',
      'gray-800': '#1F2937',
      'gray-900': '#111827'
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      transitionDuration: {
        3000: '3000ms'
      },
      aspectRatio: {
        'auto-square': 'auto 1/1'
      }
    }
  },
  plugins: []
}
