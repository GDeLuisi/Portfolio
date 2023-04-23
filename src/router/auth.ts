import axios, {
	AxiosBasicCredentials,
	AxiosHeaders,
	AxiosProgressEvent,
	AxiosResponse,
} from "axios";
import { userStore } from "../pinia";
import router from ".";
//TODO->register
export function isLogged(): Promise<boolean> {
	return baseRequest("auth/refreshtoken", "GET")
		.then((data) => {
			userStore().setRefreshToken(data.data.accessToken);
			return localStorage.getItem("username") != null;
		})
		.catch(() => {
			localStorage.clear();
			return false;
		});
}

export function login(username: string, password: string): Promise<boolean> {
	return baseRequest("auth/login", "GET", undefined, undefined, {
		username: username,
		password: password,
	})
		.then((res) => {
			const userstore = userStore();
			userstore.setRefreshToken(res.data.accessToken as string);
			userstore.username = username;
			localStorage.setItem("username", username);
			//console.log(userstore.getToken());
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
}
export function docsSyncRequest(): Promise<{ synced: number; added: number }> {
	return baseRequest("/apis/docs/sync", "GET")
		.then((res) => {
			const body = {
				synced: +res.data.synced,
				added: +res.data.synced,
			};
			return body;
		})
		.catch((err) => {
			return Promise.reject(err);
		});
}

export function logout() {
	baseRequest("/auth/logout", "GET", undefined, {
		Authorization: `bearer ${userStore().getToken()}`,
	})
		.then(() => {
			localStorage.clear();
			router.push({ name: "login" });
			router.forward();
		})
		.catch((err) => {
			console.log(err);
		});
}
export function register(
	username: string,
	password: string
): Promise<AxiosResponse> {
	return baseRequest("/auth/register", "POST", undefined, undefined, {
		username: username,
		password: password,
	}).then((res) => {
		const userstore = userStore();
		userstore.setRefreshToken(res.data.accessToken as string);
		userstore.username = username;
		localStorage.setItem("username", username);

		return res;
	});
}
export function baseRequest(
	url: string,
	method: string,
	data?: {},
	headers?: {},
	auth?: { username: string; password: string },
	progressCallback?: (progressEvent: AxiosProgressEvent) => void
): Promise<AxiosResponse> {
	const head: any = { Authorization: "" };
	if (!auth) {
		head["Authorization"] = `bearer ${userStore().getToken()}`;
	}
	for (var field in headers) head[field] = (headers as any)[field as string];
	return axios
		.request({
			method: method,
			data: data,
			baseURL: import.meta.env.VITE_API_IP,
			url: url,
			headers: head,
			auth: auth,
			onUploadProgress: progressCallback,
			onDownloadProgress: progressCallback,
			withCredentials: true,
		})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return Promise.reject(err);
		});
}
