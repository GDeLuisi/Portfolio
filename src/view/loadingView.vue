<template>
	<div class="max-w-max max-h-max self-center justify-self-center p-4">
		<slot>
			<Icon
				icon="mdi-loading"
				class="animate-spin text-5xl font-bold"></Icon>
		</slot>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	import Card from "../components/card.vue";
</script>
