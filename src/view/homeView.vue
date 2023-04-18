<template>
	<main class="w-full flex flex-col lg:grid lg:grid-cols-3 gap-4">
		<div class="p-8 h-3/4 self-center col-start-3 row-start-1">
			<h1 class="text-xl font-bold">File upload configuration</h1>
			<div class="my-2 border-b-2 border-gray-400">
				<label
					for="privateDoc"
					class="text-lg font-semibold"
					>Private directory</label
				>
				<input
					id="privateDoc"
					class="mx-4 self-baseline accent-green-400 cursor-pointer h-4 w-4"
					type="checkbox"
					v-model="privDoc" />
			</div>
			<DropZone
				@change="select"
				@drop="drop"
				:loading="singleUpload > 1 && singleUpload < 100"
				class="border-dashed w-3/4 mx-auto border-green-400 rounded-xl p-4 self-center">
				<template #loading>
					<div class="w-full bg-gray-300 rounded-xl h-4">
						<div
							class="bg-green-400 rounded-xl h-4"
							:style="`width:${Math.round(singleUpload)}%;`"></div>
					</div>
				</template>
			</DropZone>
		</div>
		<Suspense>
			<template #default>
				<docView
					class="overflow-hidden md:col-start-1 md:col-span-2 transition-colors max-w-screen-xl max-h-80 sm:max-h-screen"
					:key="reload" />
			</template>
			<template #fallback>
				<loader></loader>
			</template>
		</Suspense>
	</main>
</template>
<script setup lang="ts">
	import { baseRequest } from "../router/auth";
	import loader from "../view/loadingView.vue";
	import docView from "../components/DocsViewer.vue";
	import DropZone from "../components/DropZone.vue";
	const privDoc = ref(true);
	const singleUpload = ref(0);
	const multipleUpload = ref(0);
	const reload = ref(0);
	function select(e: any) {
		//console.log(e.target.files[0]);
		baseRequest(
			"/apis/docs/singleupload",
			"POST",
			{
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
