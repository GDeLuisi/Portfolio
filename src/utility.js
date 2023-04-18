export function encode(s) {
	const buffer = new Buffer(s);
	return buffer.toString("base64");
}
