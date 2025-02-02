/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#3B82F6',
				secondary: '#1E40AF',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			},
		},
	},
	plugins: [],
};
