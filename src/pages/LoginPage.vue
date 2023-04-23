<template>
	<main
		class="h-screen overflow-hidden bg-gradient-to-b origin-top from-green-500 via-green-400 to-slate-300 flex flex-col justify-start">
		<NavBar
			title="Your Document Manager"
			class="shadow-md bg-white max-h-max">
		</NavBar>
		<!-- Try to center it -->
		<div
			class="h-3/4 px-8 md:w-1/3 mt-8 self-center bg-wave bg-cover rounded-xl overflow-hidden shadow-md">
			<router-view></router-view>
		</div>
	</main>
</template>
<script setup lang="ts">
	import IconButton from "../components/IconButton.vue";
	import NavBar from "../components/NavBar.vue";
	import Card from "../components/card.vue";
	import LoginView from "../view/loginView.vue";
</script>
