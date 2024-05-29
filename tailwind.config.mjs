/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'shell': '#fff3b0',
        'golden': '#e09f3e',
        'red': '#9e2a2b',
        'angry-red': '#540b0e',
        'anvil': '#335c67',

        'accent': '#ee6c4d',
        'cloud': '#e0fbfc',
        'sky': '#98c1d9',
        'deep-blue': '#3d5a80',
        'midnight': '#293241'
      }
    },
	},
	plugins: [],
}
