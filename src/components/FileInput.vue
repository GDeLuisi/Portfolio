<template>
	<!-- <div class="p-8 self-center col-start-3 row-start-1">
	
		<h1 class="text-xl font-bold">File upload configuration</h1>
		<div class="my-2 flex justify-between border-b-2 border-gray-400">
			<label
				for="privateDoc"
				class="text-lg font-semibold"
				>Private directory</label
			>
			<input
				id="privateDoc"
				class="mx-4 self-baseline mt-2 accent-green-400 cursor-pointer h-4 w-4"
				type="checkbox"
				v-model="privDoc" />
		</div>
		<div class="my-2 border-b-2 py-1 flex justify-between border-gray-400">
			<label
				for="group"
				class="text-lg font-semibold"
				>Group</label
			>
			<input
				id="group"
				class="mx-4 self-baseline"
				type="text"
				v-model="group" />
		</div>
		<div class="my-2 border-b-2 flex justify-between py-1 border-gray-400">
			<label
				for="keyword"
				class="text-lg capitalize font-semibold"
				>keyword</label
			>
			<input
				id="keyword"
				class="mx-4 self-baseline"
				type="text"
				v-model="keyword" />
		</div>
		<div class="my-2 border-b-2 py-1 flex justify-between border-gray-400">
			<label
				for="description"
				class="text-lg capitalize font-semibold"
				>description</label
			>
			<input
				id="description"
				class="mx-4 self-baseline"
				type="text"
				v-model="description" />
		</div>

		<DropZone
			@change="select"
			@drop="drop"
			:loading="singleupload > 1 && singleUpload < 100"
			class="border-dashed w-3/4 mx-auto border-green-400 rounded-xl p-4 self-center">
			<template #loading>
				<div class="w-full bg-gray-300 rounded-xl h-4">
					<div
						class="bg-green-400 rounded-xl h-4"
						:style="`width:${Math.round(singleUpload)}%;`"></div>
				</div>
			</template>
		</DropZone>
	</div> -->
</template>
<script setup lang="ts"></script>
