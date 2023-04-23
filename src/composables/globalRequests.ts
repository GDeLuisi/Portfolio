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
	request.responseType = "blob";
	if (cb != undefined) request.addEventListener("progress", cb);
	request.onreadystatechange = () => {
		if (request.readyState == 4) {
			const res = request.response;
			const url = window.URL.createObjectURL(new Blob([res]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", desiredFilename);
			document.body.appendChild(link);
			link.click();
			link.remove();
			window.URL.revokeObjectURL(url);
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
