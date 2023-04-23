import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { locate } from "@iconify/json";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname } from "path";
import { getIcons, stringToIcon, minifyIconSet } from "@iconify/utils";
const pinia = createPinia();

createApp(App)
	.use(pinia)
	.use(router)

	.mount("#app");
