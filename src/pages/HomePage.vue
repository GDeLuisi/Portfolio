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
				:icon="sidebar ? 'icon-[mdi--close]' : 'icon-[mdi--menu]'"
				@click="() => (sidebar = !sidebar)"></IconButton> </template
	></NavBar>
	<SideBar
		class="bg-white px-4 py-8 max-w-[20ch] rounded-tr-xl shadow-lg rounded-br-xl fixed"
		:class="sidebar ? 'left-0' : '-left-1/2'"
		@click="
			() => {
				sidebar = !sidebar;
			}
		">
		<template #icon> <p class="font-bold">Select a function</p></template>
		<template #default>
			<router-link :to="{ name: 'homeview' }">
				<li
					class="sm:hover:scale-110 hover:text-green-500 rounded-lg p-2 hover:bg-gray-100">
					<span class="text-lg icon-[mdi--home] mr-2"></span> Home
				</li>
			</router-link>
			<router-link :to="{ name: 'folders' }">
				<li
					class="sm:hover:scale-110 hover:text-green-500 rounded-lg p-2 hover:bg-gray-100">
					<span class="text-lg icon-[mdi--folder-star] mr-2"></span> Folders
				</li>
			</router-link>
			<router-link :to="{ name: 'search' }">
				<li
					class="sm:hover:scale-110 hover:text-green-500 rounded-lg p-2 hover:bg-gray-100">
					<span class="text-lg icon-[mdi--magnify] mr-2"></span> Search
				</li>
			</router-link>
			<router-link :to="{ name: 'addfiles' }">
				<li
					class="sm:hover:scale-110 hover:text-green-500 rounded-lg p-2 hover:bg-gray-100">
					<span class="text-lg icon-[mdi--file-document-plus] mr-2"></span>Add
					files
				</li>
			</router-link>
		</template>
	</SideBar>
	<main class="bg-alabaster-400 min-h-screen flex flex-col gap-4">
		<router-view #default="{ Component }">
			<component :is="Component"></component>
		</router-view>
	</main>
</template>
<script setup lang="ts">
	import IconButton from "../components/IconButton.vue";
	import NavBar from "../components/NavBar.vue";
	import SideBar from "../components/SideBar.vue";
	import { userStore } from "../pinia";
	import { logout } from "../router/auth";
	import LoadingView from "../view/loadingView.vue";
	const sidebar = ref(false);
	const store = userStore();
</script>
