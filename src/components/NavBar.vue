<template>
	<div class="py-2 grid grid-cols-3 gap-4">
		<slot name="actionsLeft"> </slot>

		<p
			v-if="title"
			class="text-center col-start-2 font-sans font-black text-sm sm:text-lg md:text-xl">
			{{ title }}
		</p>
		<slot name="actionsRight"> </slot>
	</div>
</template>
<script setup lang="ts">
	const prop = defineProps({
		title: {
			type: String,
			required: false,
			default: undefined,
		},
	});
</script>
