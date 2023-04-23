<template>
	<span
		:class="tIcon"
		:style="reload ? 'display:inline;' : 'display:none;'">
	</span>
	{{ tIcon }}
</template>
<script setup lang="ts">
	const prop = defineProps({
		icon: {
			type: String,
			required: true,
		},
	});
	const reload = ref(false);
	const tIcon = ref("");

	tIcon.value =
		"icon-[" +
		prop.icon.substring(0, prop.icon.indexOf("-")) +
		"--" +
		prop.icon.substring(prop.icon.indexOf("-") + 1) +
		"]";

	reload.value = true;

	watch(prop, () => {
		reload.value = false;
		tIcon.value =
			"icon-[" +
			prop.icon.substring(0, prop.icon.indexOf("-")) +
			"--" +
			prop.icon.substring(prop.icon.indexOf("-") + 1) +
			"]";
		reload.value = true;
	});
</script>
