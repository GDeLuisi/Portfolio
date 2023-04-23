<template>
	<div
		class="flex flex-col items-center justify-around gap-2 h-full"
		@keyup.enter="
			() => {
				if (!disabled) waitForRegistration();
			}
		">
		<h1
			class="font-black capitalize font-sans self-center text-3xl justify-start text-center">
			registration
		</h1>
		<StyledInput
			type="text"
			placeholder="Username"
			v-model="username"
			class="self-center mx-auto bg-transparent"></StyledInput>
		<StyledInput
			:type="visible ? 'text' : 'password'"
			v-model="password"
			@icon-click="
				() => {
					visible = !visible;
				}
			"
			append-icon="icon-[mdi--eye-off-outline]"
			append-icon-after="icon-[mdi--eye-outline]"
			placeholder="Password"
			class="mx-auto self-center"></StyledInput>

		<button
			@click="
				() => {
					waitForRegistration();
				}
			"
			:class="
				disabled
					? 'opacity-70 rounded-lg mx-auto font-extrabold text-lg px-4 py-2 capitalize relative '
					: 'rounded-lg mx-auto font-extrabold text-lg px-4 py-2 capitalize relative after:absolute after:bottom-1 after:h-1 after:w-full after:right-full after:bg-indigo-400 hover:after:translate-x-full after:transition after:duration-300 overflow-hidden'
			"
			:disabled="disabled">
			sign in
		</button>
		<router-link
			:to="{ name: 'login' }"
			class="capitalize text-xs -mt-12 text-blue-400 font-medium"
			>log in</router-link
		>
	</div>
</template>
<script setup lang="ts">
	import { register } from "../router/auth";
	import { userStore } from "../pinia";
	import StyledInput from "../components/StyledInput.vue";
	import router from "../router";
	const username = ref("");
	const password = ref("");
	const error = ref(false);
	const visible = ref(false);
	const userstore = userStore();
	const disabled = ref(true);
	async function waitForRegistration() {
		register(username.value, password.value)
			.then(() => {
				console.log("reg success");
				router.push({ name: "homeview" });
				router.forward();
			})
			.catch((err) => {
				console.log(err);
			});
	}
	watch([password, username], () => {
		disabled.value = username.value.length < 1 || password.value.length < 1;
	});
</script>
