const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			'dark-gray': '#111827',
			primary: '#2563EB'
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
