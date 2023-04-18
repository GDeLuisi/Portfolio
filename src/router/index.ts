import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import LoginPageVue from "../pages/LoginPage.vue";
import pages from "../pages";
import { isLogged } from "./auth";
const routes: RouteRecordRaw[] = [...pages];

const router = createRouter({
	routes: routes,
	history: createWebHistory(),
});

router.beforeResolve(async (to) => {
	if (to.meta.loginRequired && !(await isLogged())) {
		router.push({ name: "login" });
		router.forward();
	}
});

export default router;
