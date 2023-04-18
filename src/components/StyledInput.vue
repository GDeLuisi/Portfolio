<template>
	<!-- TODO=> redo -->
	<div class="flex rounded-md relative">
		<input
			:type="type"
			class="peer border-b-2 bg-inherit border-gray-400 focus:outline-none focus:border-green-400 transition duration-200 placeholder-transparent"
			id="input"
			:value="modelValue"
			@input="(e)=>{emit('update:modelValue',(e.target as HTMLInputElement).value)}"
			:disabled="disabled"
			:placeholder="placeholder" />
		<label
			for="input"
			class="absolute opacity-100 pointer-events-none text-sm -top-full peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:top-0 peer-placeholder-shown:opacity-70 left-0 transition-all peer-focus:text-sm peer-placeholder-shown:peer-focus:-translate-y-full"
			>{{ placeholder }}</label
		>
		<IconButton
			v-if="appendIcon != ''"
			@click="
				() => {
					iconActive = !iconActive;
					emit('iconClick');
				}
			"
			class="hover:text-green-600 transition-all absolute left-full bottom-1/4"
			:icon="iconActive ? appendIconAfter : appendIcon"></IconButton>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	import IconButton from "./IconButton.vue";
	const prop = defineProps({
		modelValue: {
			required: false,
			default: undefined,
			type: String,
		},
		type: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},

		appendIcon: {
			required: false,
			default: "",
			type: String,
		},
		appendIconAfter: {
			required: false,
			default: "",
			type: String,
		},
		placeholder: {
			required: false,
			default: "",
			type: String,
		},
	});

	const emit = defineEmits(["update:modelValue", "iconClick"]);
	const icon = ref("");
	const iconActive = ref(false);
	prop.type !== "password"
		? (icon.value = prop.appendIcon)
		: (icon.value = "mdi-eye-off-outline");
</script>
