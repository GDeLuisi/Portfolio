import { build, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import { addCollection } from "@iconify/vue/dist/offline";
import { locate, loadCollection } from "@iconify/json";
//https://vitejs.dev/config/

const target = "./src/assets/icons-bundle.js";
const icons = [
	"mdi:home",
	"mdi:account",
	"mdi:login",
	"mdi:logout",
	"mdi:eye-outline",
	"mdi-eye-off-outline",
	"mdi-file-pdf-box",
	"mdi-image",
	"mdi-video-vintage",
	"mdi-download",
	"mdi-delete",
];

loadCollection(locate("mdi")).then((md) => {
	const added = addCollection(md);
});

export default defineConfig({
	publicDir: "./src/assets",
	plugins: [
		vue({}),
		AutoImport({
			dts: true,
			imports: ["@vueuse/core", "vue", "vue-router", "pinia"],
		}),
	],
});
