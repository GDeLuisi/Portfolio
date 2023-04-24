<template>
	<div class="fixed top-0 z-50 transition-all">
		<slot name="icon"></slot>
		<ul class="flex flex-col gap-4 mt-4">
			<slot></slot>
		</ul>
	</div>
</template>
<script setup lang="ts"></script>
