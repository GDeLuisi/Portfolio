<template>
	<div class="card__container">
		<div
			class="card"
			:switchside="switchside">
			<div class="absolute z-10 right-4 top-4">
				<slot name="switcher">
					<label class="switch">
						<input
							type="checkbox"
							v-model="switchside" />
						<span class="slider"></span>
					</label>
				</slot>
			</div>
			<div
				class="card__front"
				:style="`background-color:${prop.frontground};`">
				<div class="title">
					<slot name="titlefront"> front</slot>
				</div>
				<main>
					<slot name="mainContentFront"></slot>
				</main>
			</div>
			<div
				class="card__back"
				:style="`background-color:${prop.background};`">
				<div class="title">
					<slot name="titleback"></slot>
				</div>
				<main>
					<slot name="mainContentBack"></slot>
				</main>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	const prop = defineProps({
		background: {
			type: String,
			required: true,
			default: "white",
		},
		frontground: {
			type: String,
			required: true,
			default: "white",
		},
	});
	const switchside = ref(false);
</script>
<style lang="css">
	.card__container {
		--level-one: translateZ(3rem);
		--level-two: translateZ(6rem);

		--level-three: translateZ(9rem);
	}
	.card__container {
		text-align: center;
	}
	.card[switchside="true"] {
		transform: rotateY(0.5turn);
	}
	.card {
		position: relative;

		transition: transform 1.5s;
		transform-style: preserve-3d;
	}
	.card__front,
	.card__back {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 2rem;
		min-height: max-content;
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}

	.card__back {
		transform: rotateY(0.5turn);
	}

	.title {
		transform: var(--level-three);
	}
</style>
