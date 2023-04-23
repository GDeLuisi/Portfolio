<template>
	<div class="max-w-max max-h-max self-center justify-self-center p-4">
		<slot>
			<span class="icon-[mdi--loading]"></span>
		</slot>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	import Card from "../components/card.vue";
</script>
