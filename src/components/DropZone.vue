<template>
	<div
		class="group border-dashed border-2 min-w-[265px] max-w-[500px] flex flex-col gap-4 items-center justify-end"
		:class="active ? 'bg-green-400  text-white' : ''"
		@dragenter.prevent="toggleActive"
		@dragleave.prevent="toggleActive"
		@dragexit.prevent="toggleActive"
		@dragover.prevent=""
		@drop.prevent="toggleActive">
		<Icon
			icon="mdi-file"
			class="text-center text-4xl text-green-400 group-hover:animate-pulse"
			:class="active ? ' text-white' : ''"></Icon>
		<h1 class="font-bold justify-self-center text-md sm:text-xl">
			Drag and Drop your file
		</h1>
		<h1 class="font-bold">OR</h1>

		<label
			for="fileIn"
			class="cursor-pointer bg-green-400 h-max w-max shadow-md text-md sm:text-lg text-center px-4 py-1 rounded-md uppercase font-bold"
			:class="active ? 'bg-white text-green-400' : ''"
			>Select a file
		</label>
		<input
			id="fileIn"
			type="file"
			@change="(ev)=>file=(ev.target as HTMLInputElement).value"
			class="hidden"
			:disabled="prop.loading" />
		<slot
			v-if="prop.loading"
			name="loading">
		</slot>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	const file = ref();
	const active = ref(false);
	const prop = defineProps({
		loading: {
			type: Boolean,
			required: false,
			default: false,
		},
	});
	function toggleActive(ev: any) {
		active.value = !active.value;
		if (prop.loading) ev.stop();
	}
</script>
