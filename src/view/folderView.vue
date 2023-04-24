<template>
	<h1 class="text-3xl font-extrabold capitalize text-center">your folders</h1>
	<div
		v-if="groups.length > 0"
		class="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-around gap-4 m-4">
		<div
			v-for="group in groups"
			:key="group"
			@click="
				() => {
					goTo(group);
				}
			"
			class="bg-white shadow-md rounded-xl text-center max-w-[20ch] min-w-[15ch] p-2">
			<h1 class="capitalize text-2xl font-extrabold">{{ group }}</h1>
			<span class="icon-[mdi--folder] text-8xl"></span>
		</div>
	</div>
	<div
		v-else
		class="flex justify-center">
		<Card class="bg-gray-200 text-center rounded-lg">
			<template #default>
				<p class="font-bold text-2xl">Loading...</p>
			</template>
			<template #actions>
				<LoadingView class="text-6xl font-bold"></LoadingView>
			</template>
		</Card>
	</div>
</template>
<script setup lang="ts">
	import Card from "../components/card.vue";
	import { baseRequest } from "../router/auth";
	import LoadingView from "./loadingView.vue";
	const router = useRouter();
	const groups = ref([] as any[]);

	baseRequest("/apis/docs/groups", "GET")
		.then((res) => {
			groups.value = res.data;
			groups.value.push("public");
		})
		.catch((err) => {});

	function goTo(to: string) {
		console.log(router);
		router.push({
			name: "folder",
			params: {
				fname: to,
			},
		});
		router.forward();
	}
</script>
