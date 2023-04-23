import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}",
		"./src/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
		extend: {
			backgroundImage: {
				wave: "url('./src/assets/wave.svg')",
			},
			colors: {
				alabaster: {
					100: "#fcfbf8",
					200: "#f9f6f1",
					300: "#f7f2e9",
					400: "#f4ede2",
					500: "#f1e9db",
					600: "#c1baaf",
					700: "#918c83",
					800: "#605d58",
					900: "#302f2c",
				},
			},
			keyframes: {
				linear: {
					"100%": {
						transform: "translate-x-full",
					},
				},
			},
			animation: {
				linear: "linear infinite",
			},
		},
	},

	plugins: [addDynamicIconSelectors()],
};
