<script setup lang="ts">
	import { ref } from "vue";
	import axios from "axios";
	defineProps<{ msg: string }>();

	function sendimagetest(ev: any) {
		console.log(ev.target.files[0]);
		const file = ev.target.files[0];
		const fd = new FormData();
		fd.append("image", file);
		fd.append("body", "ciao");

		axios
			.post(
				"http://localhost:3000/apis/photos/singleimageupload",
				{ userId: "Gerardo", private: false, image: file },
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then(() => {
				console.log("success");
			})
			.catch((err) => {
				console.log("error");
			});
	}
</script>

<template>
	<input
		type="file"
		@change="sendimagetest" />
</template>

