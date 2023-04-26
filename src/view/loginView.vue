<template>
	<div
		class="flex flex-col items-center justify-around gap-2 h-full"
		@keyup.enter="
			() => {
				if (!disabled) waitForLogin();
			}
		">
		<h1
			class="font-black font-sans self-center text-3xl justify-start text-center">
			Login
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
				async () => {
					await waitForLogin();
				}
			"
			@touchstart="
				async () => {
					touch = true;

					await waitForLogin();
				}
			"
			:class="
				disabled
					? 'opacity-70 rounded-lg mx-auto font-extrabold text-lg px-4 py-2 capitalize relative '
					: 'rounded-lg mx-auto font-extrabold text-lg px-4 py-2 capitalize relative after:absolute after:bottom-1 after:h-1 after:w-full after:right-full after:bg-indigo-400 hover:after:translate-x-full after:transition after:duration-300 overflow-hidden'
			"
			:disabled="disabled">
			log in
		</button>
		<!-- {{ touch }}{{ username }} {{ password }}{{ debug }} -->
		<router-link
			:to="{ name: 'register' }"
			class="capitalize text-xs -mt-12 text-blue-400 font-medium"
			>Sign up</router-link
		>
	</div>
	<div
		v-if="loading"
		class="w-screen h-screen flex absolute justify-center top-0 left-0 z-10 backdrop-blur-xl">
		<div
			class="bg-white items-center p-4 rounded-xl flex flex-col gap-10 justify-start w-max h-max self-center">
			<h1 class="text-2xl text-center font-extrabold">Logging in...</h1>
			<LoadingView></LoadingView>
		</div>
	</div>
</template>
<script setup lang="ts">
	import axios from "axios";
	import { login, docsSyncRequest } from "../router/auth";
	import { userStore } from "../pinia";
	import StyledInput from "../components/StyledInput.vue";
	import router from "../router";
	import Card from "../components/card.vue";
	import LoadingView from "./loadingView.vue";
	const debug = ref("");
	const username = ref("");
	const password = ref("");
	const touch = ref(false);
	const error = ref(false);
	const visible = ref(false);
	const userstore = userStore();
	const disabled = ref(true);
	const loading = ref(false);
	async function waitForLogin() {
		loading.value = true;
		if (await login(username.value, password.value)) {
			// await docsSyncRequest().then((res) => {
			// 	console.log("synced " + res.synced + " added " + res.added);

			// });Deprecated for now, need to re-do the api
			router.push({ name: "homeview" });
			loading.value = false;
			return router.forward();
		} else {
			debug.value = "errore";
		}
	}
	watch([password, username], () => {
		disabled.value = username.value.length < 1 || password.value.length < 1;
	});
</script>
