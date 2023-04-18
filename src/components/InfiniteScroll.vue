<template>
	<div
		class="relative snap-y md:snap-none snap-proximity overflow-x-hidden overflow-y-scroll"
		@scroll="emitFunction">
		<slot>
			<Card
				class="snap-start mb-8 mx-4 max-h-min bg-white shadow-md rounded-xl"
				v-for="element in prop.elements"
				:key="element">
				<template #default>
					<p
						v-for="prp in element"
						key="prp">
						{{ prp }}
					</p>
				</template>
			</Card>
		</slot>
	</div>
</template>
<script setup lang="ts">
	import Card from "./card.vue";

	const prop = defineProps({
		elements: {
			type: Array<any>,
			required: false,
			default: [],
		},
		properties: {
			type: Array<string>,
			required: false,
			default: undefined,
		},
	});
	const emit = defineEmits(["bottomReached"]);
	function emitFunction(e: UIEvent) {
		if (findBottom(e)) emit("bottomReached");
	}
	function debug(e: UIEvent) {
		console.log(findBottom(e));
	}
	function findBottom(e: UIEvent): boolean {
		const element = e.target as HTMLDivElement;
		return (
			element.scrollHeight -
				Math.round(element.scrollTop) -
				element.clientHeight <
			1
		);
	}
</script>
