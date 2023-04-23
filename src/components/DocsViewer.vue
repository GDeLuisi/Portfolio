<template>
	<scroll
		v-if="docs.size > 0"
		class="p-12"
		@bottom-reached="
			() => {
				if (remNum > 0) {
					loadMore(docs.size, remNum).then((res) => {
						remNum = res.remaining;
						loadDocs(res.docs);
					});
				}
			}
		">
		<template #default>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<Card
					v-for="element in docs"
					class="snap-start max-h-min bg-white shadow-md rounded-xl overflow-hidden hover:scale-125 hover:z-10 transition-all"
					:key="element.originalname as string"
					:title="
						element.originalname.substring(
							0,
							element.originalname.lastIndexOf('.')
						)
					">
					<template #upperActions>
						<div class="">
							<span
								class="text-2xl"
								:class="decideIcon(element.originalname)"></span>
						</div>
					</template>
					<template #default>
						<div>
							<p>
								Uploaded:
								{{ formatDate(new Date(element.dateIn), "DD/MM/YYYY") }}
							</p>

							<p>Description: {{ element.description }}</p>
							<p>Keyword: {{ element.keyword }}</p>
							<p>Description: {{ element.description }}</p>
							<p>Groups: {{ element.group }}</p>
							<p>Owner: {{ element.owner }}</p>
							<p>Visibility: {{ element.private ? "private" : "public" }}</p>
						</div>
					</template>
					<template #actions>
						<div class="text-xl gap-3 flex justify-end flex-grow-0">
							<IconButton
								class="hover:scale-125 transition-all hover:text-green-400"
								icon="icon-[mdi--download]"
								@click="
									() =>
										downloadDoc(
											element.id,
											element.private,
											element.originalname
										)
								"></IconButton>

							<IconButton
								class="hover:scale-125 transition-all hover:text-red-400"
								icon="icon-[mdi--delete]"
								@click="() => deleteDoc(element)"></IconButton>
						</div>
					</template>
				</Card>
				<Card
					v-if="remNum > 0"
					class="snap-start max-h-min bg-white shadow-md rounded-xl overflow-hidden"
					><template #default> <LoadingView></LoadingView> </template
				></Card>
			</div>
		</template>
	</scroll>

	<!-- <div
		v-for="doc in docs"
		:key="doc">
		{{ doc }}
	</div> -->
</template>
<script setup lang="ts">
	import { AxiosProgressEvent } from "axios";
	import { userStore } from "../pinia";
	import { baseRequest } from "../router/auth";
	import Card from "./card.vue";
	import LoadingView from "../view/loadingView.vue";
	import { formatDate } from "@vueuse/shared";
	import { Icon } from "@iconify/vue";
	import IconButton from "./IconButton.vue";
	import { downloadFile, deleteFile } from "../composables/globalRequests";
	const store = userStore();
	const docs = ref(new Set<any>());
	const remNum = ref(0);

	const prop = defineProps({
		url: {
			type: String,
			required: false,
			default: ``,
		},
		method: {
			type: String,
			required: false,
			default: "POST",
		},
	});

	const data = (
		await baseRequest(
			prop.url == "" ? `/apis/docs/${store.username}` : prop.url,
			prop.method,
			{ loadingNum: 6 },
			undefined,
			undefined
		)
	).data;
	loadDocs(data.docs);
	remNum.value = data.remaining;
	const scroll = defineAsyncComponent(() => import("./InfiniteScroll.vue"));
	function deleteDoc(file: any) {
		deleteFile(file.id)
			.then(() => {
				docs.value.delete(file);
				console.log("success");
			})
			.catch(() => {
				console.log("error");
			});
	}
	function downloadDoc(id: string, privDoc: boolean, filename: string) {
		downloadFile(id, privDoc, filename, (load) => {
			if (load.lengthComputable) {
				var percentage = (load.loaded / load.total) * 100;
				console.log(percentage);
			}
		});
	}
	function decideIcon(filename: string): string {
		let ext = filename.substring(filename.lastIndexOf(".") + 1);
		//console.log(ext);
		switch (ext) {
			case "pdf":
				return "icon-[mdi--file-pdf-box]";
				break;
			case "jpg":
				return "icon-[mdi--image]";
				break;
			case "png":
				return "icon-[mdi--image]";
				break;
			case "jpeg":
				return "icon-[mdi--image]";
				break;
			case "mp4":
				return "icon-[mdi--video-vintage]";
				break;
			default:
				return "icon-[mdi--file]";
				break;
		}
	}
	function loadDocs(data: any[]) {
		for (var doc of data) docs.value.add(doc);
	}
	async function loadMore(skip: number, take: number): Promise<any> {
		return (
			await baseRequest(
				prop.url == "" ? `/apis/docs/${store.username}` : prop.url,
				prop.method,
				{ loadingNum: take, skip: skip },
				undefined,
				undefined,
				(progressEvent: AxiosProgressEvent) => console.log(progressEvent.loaded)
			)
		).data;
	}
</script>
