const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			primary: '#2563EB',
			background: '#262626',

			// Need better names for these
			'gray-200': '#e5e7eb',
			'gray-300': '#d1d5db',
			'gray-400': '#9ca3af',
			'gray-700': '#374151',
			'gray-800': '#1f2937'
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			transitionDuration: {
				'3000': '3000ms'
			}
		},
	},
	plugins: [],
}
