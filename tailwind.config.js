/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Core colors
				primary: {
					light: '#1E201E',  // Dark grey for light mode
					dark: '#FFFFFF',   // White for dark mode
				},
				background: {
					light: '#FFFFFF',  // White for light mode
					dark: '#000000',   // Pure black for dark mode
				},
				text: {
					light: '#1E201E',  // Dark grey for light mode
					dark: '#FFFFFF',   // White for dark mode
				},
				accent: {
					light: '#4A4A4A',  // Medium grey for light mode
					dark: '#E5E5E5',   // Light grey for dark mode
				},
				// Gray scale
				gray: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				}
			},
			backgroundColor: {
				'black-true': '#000000',
				'white-true': '#FFFFFF',

			},
			textColor: {
				'dark-primary': '#FFFFFF',
				'dark-secondary': '#E5E7EB',
				'dark-tertiary': '#9CA3AF',
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
