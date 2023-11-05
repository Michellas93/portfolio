/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				backgroundL: "#ddbea9",
				colorL: " #ddbea9",
				darkGreen: "#6b705c",
				darkBrown: " #cb997e",
				backgroundLight: "#ffe8d6",
				colorLightGreen: "#a5a58d",
			},
		},
		plugins: [require("@tailwindcss/line-clamp")],
	},
	plugins: [],
};
