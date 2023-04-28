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
