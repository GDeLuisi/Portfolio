import HomePageVue from "./HomePage.vue";
import { RouteRecordRaw } from "vue-router";
import loadingViewVue from "../view/loadingView.vue";

export default [
	{
		path: "/",
		name: "home",
		component: HomePageVue,
		meta: { loginRequired: true },
		children: [
			{
				path: "/",
				name: "homeview",
				component: () => import("../view/homeView.vue"),
			},
		],
	},
	{
		path: "/auth",

		component: () => import("./LoginPage.vue"),
		children: [
			{
				path: "/register",
				name: "register",
				component: () => import("./RegisterPage.vue"),
			},
			{
				path: "/login",
				name: "login",
				component: () => import("../view/loginView.vue"),
			},
		],
	},

	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("./NotFoundPage.vue"),
	},
] as RouteRecordRaw[];
