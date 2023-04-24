<template>
	<main class="">
		<Suspense>
			<template #default>
				<DocsViewer
					class=""
					:url="
						param == 'public'
							? 'apis/docs/public'
							: `/apis/docs/${userStore().username}?group=${param}`
					" />
			</template>
			<template #fallback>
				<LoadingView></LoadingView>
			</template>
		</Suspense>
	</main>
</template>
<script setup lang="ts">
	import DocsViewer from "../components/DocsViewer.vue";
	import { userStore } from "../pinia";
	import LoadingView from "./loadingView.vue";

	const route = useRoute();
	const param = route.params.fname;
</script>
