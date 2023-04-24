<template>
	<main class="p-4 flex flex-col">
		<div class="flex justify-between row-start-1">
			<h1
				v-if="title"
				class="font-black text-sm truncate w-1/3">
				{{ prop.title }}
			</h1>
			<div class="">
				<slot name="upperActions"></slot>
			</div>
		</div>
		<div class="w-full row-start-2 max-h-min truncate py-4">
			<slot> </slot>
		</div>
		<div class="row-start-3 max-h-min">
			<slot name="actions"></slot>
		</div>
	</main>
</template>
<script setup lang="ts">
	const prop = defineProps({
		shadow: {
			type: String,
			required: false,
			default: "md",
		},
		background: {
			type: String,
			required: false,
			default: "white",
		},
		rounded: {
			type: String,
			required: false,
			default: "lg",
		},
		title: {
			type: String,
			required: false,
			default: undefined,
		},
	});
</script>
