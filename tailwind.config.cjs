/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "512px",
			md: "768px",
			lg: "1200px",
			xl: "1440px",
		},
		extend: {
			colors: {
				"lightBlue-100": "#EEF4F6",
				"lightBlue-200": "#D3DBE5",
				"lightBlue-300": "#b3bdc9",
				"primary-900": "#2B1B9A",
				primary: "rgb(67, 143, 249)",
				secondary: "rgb(16, 26, 35)",
			},

			boxShadow: {
				primary: "0px 6px 15px #438FF973",
			},

			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
