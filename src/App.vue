<script setup lang="ts">
	import { PiniaVuePlugin } from "pinia";
	import { userStore } from "./pinia";
	import HelloWorld from "./components/HelloWorld.vue";
	import LoginPage from "./pages/LoginPage.vue";
	import { RouterView } from "vue-router";
	const loading = ref(true);

	onMounted(() => {
		userStore().reloadStrategy();
	});
</script>

<template>
	<router-view #default="{ Component }">
		<component :is="Component"></component>
	</router-view>
</template>

<style lang="scss" scoped></style>
