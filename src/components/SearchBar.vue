<template>
	<div class="px-20 flex justify-center">
		<div class="bg-white rounded-l-xl w-min">
			<span
				class="icon-[mdi--magnify] z-10 text-gray-400 transition-all text-lg translate-y-2"></span>
		</div>
		<input
			type="search"
			:placeholder="placeholder"
			:value="modelValue"
			@input="
				(ev) => {
					emit('update:modelValue', (ev.target as HTMLInputElement).value);
				}
			"
			class="w-1/2 py-1 rounded-r-xl bg-white focus:outline-none" />
	</div>
</template>
<script setup lang="ts">
	const prop = defineProps({
		placeholder: {
			type: String,
			default: "Search here...",
			required: false,
		},
		modelValue: {
			type: String,
			required: true,
		},
	});
	const emit = defineEmits(["update:modelValue"]);
</script>
