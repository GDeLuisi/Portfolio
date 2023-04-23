<template>
	<NavBar
		class="bg-alabaster-100 shadow-sm"
		:title="'Welcome back ' + store.username">
		<template #actionsLeft>
			<IconButton
				class="text-lg sm:text-xl rounded-xl p-2 hover:bg-gray-200 transition duration-300"
				icon="icon-[mdi--logout]"
				@click="logout"
				@touchstart="logout"></IconButton>
		</template>
		<template #actionsRight>
			<IconButton
				class="text-lg sm:text-xl rounded-xl p-2 hover:bg-gray-200 transition duration-300"
				icon="icon-[mdi--menu]"
				@click="() => (sidebar = !sidebar)"></IconButton> </template
	></NavBar>
	<div v-if="sidebar">sidebar</div>
	<main class="bg-alabaster-400 flex flex-col gap-4">
		<router-view #default="{ Component }">
			<Transition name="fade">
				<component :is="Component"></component>
			</Transition>
		</router-view>
	</main>
</template>
<script setup lang="ts">
	import IconButton from "../components/IconButton.vue";
	import NavBar from "../components/NavBar.vue";
	import { userStore } from "../pinia";
	import { logout } from "../router/auth";
	import LoadingView from "../view/loadingView.vue";
	const sidebar = ref(false);
	const store = userStore();
</script>
