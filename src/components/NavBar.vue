<template>
	<div class="py-2 px-4 grid grid-cols-3 gap-4">
		<div>
			<slot
				class="flex gap-2"
				name="actionsLeft">
			</slot>
		</div>

		<p
			v-if="title"
			class="text-center col-start-2 font-sans font-black text-sm sm:text-lg md:text-xl">
			{{ title }}
		</p>
		<div class="justify-end flex">
			<slot
				class="flex gap-2"
				name="actionsRight">
			</slot>
		</div>
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
