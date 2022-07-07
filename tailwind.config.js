/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	screens: {
		sm: "480px",
		md: "768px",
		lg: "1024px",
		xl: "1440px",
	},
	daisyui: {
		themes: [],
	},
	theme: {
		extend: {
			colors: {
				primary: "#FF4D67",
				secondary: "#09101D",
				tertiary: "#FD788C",
				white: "#fff",
				lightGray: "#E5E5E5",
				darkBlue: "#1A1B22",
			},
		},
		fontFamily: {
			sourceSansPro: ["Source Sans Pro", "sans-serif"],
		},
	},
	plugins: [require("daisyui")],
};
