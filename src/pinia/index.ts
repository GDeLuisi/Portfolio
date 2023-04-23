import axios from "axios";
export const userStore = defineStore("store", () => {
	//ON CHANGE reset the cookie with stored in memory refresh token
	const token = ref("");
	const username = ref("");
	if (localStorage.getItem("username"))
		username.value = localStorage.getItem("username") as string;
	function setRefreshToken(s: string) {
		token.value = s;
	}
	function revokeRefreshToken() {
		token.value = "";
	}
	function reloadStrategy() {
		axios
			.get("/auth/refreshtoken", {
				withCredentials: true,
			})
			.then((res) => {
				const data = res.data;
				setRefreshToken(data.accessToken);
				username.value = localStorage.getItem("username") as string;
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function getToken(): string {
		return token.value;
	}
	return {
		revokeRefreshToken,
		reloadStrategy,
		getToken,
		setRefreshToken,
		username,
	};
});
