function image(url, width = 100) {
	let img = document.createElement("img");
	img.src = url
	img.width = width
	document.body.appendChild(img);
	return img
}