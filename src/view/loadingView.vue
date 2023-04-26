<template>
	<div class="max-w-max max-h-max items-center flex justify-center p-4">
		<slot>
			<span class="loader"></span>
		</slot>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	import Card from "../components/card.vue";
</script>
