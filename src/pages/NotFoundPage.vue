<template>
	<div
		class="flex flex-col justify-start items-center h-full py-10 bg-slate-500 gap-10">
		<h1 class="uppercase text-3xl font-black">route not found</h1>
		<button
			type="button"
			class="shadow-xl bg-indigo-400 hover:bg-indigo-200 text-xl font-bold py-2 px-4 rounded-xl"
			@click="backHome">
			Go Back
		</button>
	</div>
</template>
<script setup lang="ts">
	import { useRouter } from "vue-router";
	const router = useRouter();

	function backHome() {
		router.push({ name: "homeview" });
		router.forward();
	}
</script>
