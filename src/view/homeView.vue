<template>
	<main class="grid sm:grid-cols-3 gap-4 px-4">
		<div class="bg-darkblueish-800 text-white sm:col-span-3">
			table with last login download/upload
		</div>
		<FlippingCard
			class="sm:col-span-2 sm:row-span-2 text-white"
			frontground="rgb(8 43 59)"
			background="rgb(8 43 59)">
			<template #titlefront>
				<h1>chart with per-type memory occupation</h1>
			</template>
			<template #titleback> More infos about files </template></FlippingCard
		>
	</main>
	<!-- <main class="flex flex-col lg:grid lg:grid-cols-3 gap-4">
		<Suspense>
			<template #default>
				<docView
					class="overflow-hidden md:col-start-1 md:col-span-2 transition-colors max-w-screen-xl max-h-80 sm:max-h-screen"
					:key="reload" />
			</template>
			<template #fallback>
				<Card class="bg-white h-40 w-40 text-center items-center rounded-lg">
					<template #default>
						<p class="font-bold text-2xl">Loading...</p>
					</template>
					<template #actions>
						<LoadingView></LoadingView>
					</template>
				</Card>
			</template>
		</Suspense>
	</main> -->
</template>

<script setup lang="ts">
	import { baseRequest } from "../router/auth";
	import LoadingView from "./loadingView.vue";
	import docView from "../components/DocsViewer.vue";
	import DropZone from "../components/DropZone.vue";
	import Card from "../components/card.vue";
	import FlippingCard from "../components/flippingCard.vue";

	const privDoc = ref(true);
	const singleUpload = ref(0);
	const multipleUpload = ref(0);
	const reload = ref(0);
	const group = ref("");
	const keyword = ref("");
	const description = ref("");

	function select(e: any) {
		//console.log(e.target.files[0]);
		baseRequest(
			"/apis/docs/singleupload",
			"POST",
			{
				group: group.value,
				description: description.value,
				keyword: keyword.value,
				private: privDoc.value,
				doc: e.target.files[0],
			},
			{
				"Content-Type": "multipart/form-data",
			},
			undefined,
			(progress) => {
				singleUpload.value =
					(progress.loaded / (progress.total as number)) * 100;
			}
		)
			.then(() => {
				reload.value++;
				console.log("success");
				singleUpload.value = 0;
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function drop(ev: any) {
		//console.log(ev.dataTransfer.files[0]);
		const file = ev.dataTransfer.files[0];
		baseRequest(
			"/apis/docs/singleupload",
			"POST",
			{
				group: group.value,
				description: description.value,
				keyword: keyword.value,
				private: privDoc.value,
				doc: file,
			},
			{
				"Content-Type": "multipart/form-data",
			},
			undefined,
			(progress) => {
				console.log((progress.loaded / (progress.total as number)) * 100);
			}
		)
			.then(() => {
				reload.value++;
				console.log("success");
				singleUpload.value = 0;
			})
			.catch((err) => {
				console.log(err);
			});
	}
</script>
