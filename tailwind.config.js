import { addDynamicIconSelectors } from "@iconify/tailwind";

const icons = [
	"mdi-home",
	"mdi-login",
	"mdi-logout",
	"mdi-eye-outline",
	"mdi-eye-off-outline",
	"mdi-file-pdf-box",
	"mdi-image",
	"mdi-video-vintage",
	"mdi-download",
	"mdi-delete",
];

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
				wave: "url('../wave.svg')",
				loginbg: "url('../loginbg.png')",
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
				beige: {
					100: "#fdfcfc",
					200: "#fbf9f9",
					300: "#faf7f7",
					400: "#f8f4f4",
					500: "#f6f1f1",
					600: "#c5c1c1",
					700: "#949191",
					800: "#626060",
					900: "#313030",
				},
				blueishgray: {
					100: "#eff6f9",
					200: "#dfedf3",
					300: "#cfe5ee",
					400: "#bfdce8",
					500: "#afd3e2",
					600: "#8ca9b5",
					700: "#697f88",
					800: "#46545a",
					900: "#232a2d",
				},

				lightblue: {
					100: "#d1edf5",
					200: "#a3dceb",
					300: "#75cae2",
					400: "#47b9d8",
					500: "#19a7ce",
					600: "#1486a5",
					700: "#0f647c",
					800: "#0a4352",
					900: "#052129",
				},
				darkblueish: {
					100: "#d0e2ea",
					200: "#a1c4d4",
					300: "#72a7bf",
					400: "#4389a9",
					500: "#146c94",
					600: "#105676",
					700: "#0c4159",
					800: "#082b3b",
					900: "#04161e",
				},
			},
			keyframes: {
				animloader: {
					"0%": {
						"box-shadow": "-72px 0 #000 inset",
					},
					"100%": {
						"box-shadow": "48px 0 #000 inset",
					},
				},
			},
			animation: {
				moveShadow: "animloader 1s ease-in-out infinite",
			},
		},
	},

	plugins: [
		addDynamicIconSelectors({
			iconSets: icons,
		}),
	],
};
