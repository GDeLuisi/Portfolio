<template>
	<div class="w-full py-2 grid grid-cols-3 gap-4 min-w-[350px]">
		<div class="z-10 ml-2 justify-start self-center col-start-0">
			<slot name="actionsLeft"> </slot>
		</div>
		<p
			v-if="title"
			class="justify-self-center self-center col-start-2 font-sans font-black text-sm sm:text-lg md:text-xl">
			{{ title }}
		</p>
		<span class="z-10 col-end-0 flex justify-end mr-2">
			<slot name="actionsRight"> </slot>
		</span>
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
