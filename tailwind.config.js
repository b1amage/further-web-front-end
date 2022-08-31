/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	screens: {
		sm: "480px",
		md: "768px",
		lg: "1284px",
		xl: "1440px",
	},
	daisyui: {
		themes: [],
	},
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#FF4D67",
					80: "#FF4D50",
					50: "#FD788C",
				},
				secondary: "#FFB800",
				tertiary1: "#6D5FFD",
				tertiary2: "#FF1843",
				black: "#000",
				white: "#fff",
				gray: "#EBEEF2",
				dark: {
					1: "#23252F",
					2: "#1A1B22",
					3: "#2A2B39",
					4: "#282C49",
				},
				gray2: "#6D7580",
				gray3: "#CED2D9",
				gray4: "#9098A1",
				darkBlue: "#2C3A4B",
				required: "#DA1414",
				gray5:"#F4F6F9",
			},
		},
		fontFamily: {
			sourceSansPro: ["Source Sans Pro", "sans-serif"],
			curve: ["Pacifico", "cursive"],
		},
	},
	plugins: [],
};
