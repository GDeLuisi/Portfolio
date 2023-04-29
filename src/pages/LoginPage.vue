<template>
	<main class="bg-loginbg min-h-screen grid place-items-center">
		<!-- Try to center it -->

		<router-view></router-view>
	</main>
</template>
<script setup lang="ts">
	import IconButton from "../components/IconButton.vue";
	import NavBar from "../components/NavBar.vue";
	import Card from "../components/card.vue";
	import LoginView from "../view/loginView.vue";
</script>

<style lang="css">
	.backgradient {
		background: #11998e; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#38ef7d,
			#11998e
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#38ef7d,
			#11998e
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
</style>
