import { AxiosProgressEvent } from "axios";
import { userStore } from "../pinia";
import { baseRequest } from "../router/auth";
import fileDownload from "js-file-download";
const user = userStore();

export function downloadFile(
	docId: string,
	privateDoc: boolean,
	desiredFilename: string,
	cb?: (load: ProgressEvent<XMLHttpRequestEventTarget>) => void
) {
	const request = new XMLHttpRequest();
	request.open(
		"GET",
		`${
			import.meta.env.VITE_API_IP != "/" ? import.meta.env.VITE_API_IP : ""
		}/apis/docs/download/${user.username}/${docId}`
	);
	request.setRequestHeader("Authorization", `bearer ${user.getToken()}`);
	if (cb != undefined) request.addEventListener("progress", cb);
	// var hasTouchScreen = false;
	// //should check if it's a mobile
	// if ("maxTouchPoints" in navigator) {
	// 	hasTouchScreen = navigator.maxTouchPoints > 0;
	// }

	request.responseType = "blob";

	request.onreadystatechange = () => {
		if (request.readyState == 4) {
			const res = request.response;
			//console.log(res);

			const url = window.URL.createObjectURL(
				new Blob([res], { type: res.type })
			);

			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", desiredFilename);
			document.body.appendChild(link);
			link.click();
			setTimeout(() => {
				link.remove();
				window.URL.revokeObjectURL(url);
			}, 200);

			// var wnd: Window | null;
			// wnd = window.open(url, "_blank");
			// setTimeout(() => {
			// 	wnd!.document.title = desiredFilename;
			// }, 10);
		}
	};

	request.send();
}

export function deleteFile(fileId: string): Promise<void> {
	return baseRequest("/apis/docs/delete", "DELETE", { id: fileId })
		.then(() => {
			return;
		})
		.catch(() => {
			return;
		});
}
