import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [
			vue({}),
			AutoImport({
				dts: true,
				imports: ["@vueuse/core", "vue", "vue-router", "pinia"],
			}),
		],
	};
});
