<template>
	<button
		type="button"
		class="group/tooltip self-center">
		<Icon
			:icon="prop.icon"
			class="text-center">
		</Icon>
		<span
			v-if="prop.tooltip"
			class="absolute w-32 -ml-16 py-2 px-1 invisible opacity-0 inline-block z-10 transition duration-300 bg-black text-white rounded-xl group-hover/tooltip:opacity-100 group-hover/tooltip:visible"
			>{{ prop.tooltip }}</span
		>
	</button>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	const prop = defineProps({
		icon: {
			required: true,

			type: String,
		},
		tooltip: {
			required: false,
			default: undefined,
			type: String,
		},
	});
</script>
