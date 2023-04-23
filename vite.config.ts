import { build, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite"; //https://vitejs.dev/config/

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
