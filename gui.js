function button(text = null) {
	let btn = document.createElement("button");
	btn.innerHTML = text;
	document.body.appendChild(btn);
	return btn
}


function slider(min = 0, max = 100, step = 1, init = 50) {
	let slide = document.createElement("input");
	slide.type = "range"
	slide.min = min
	slide.max = max
	slide.step = step
	slide.value = init
	document.body.appendChild(slide);
	return slide
}

function text(txt) {
	let t = document.createTextNode(txt)
	document.body.appendChild(t)
	return t
}
function div() {
	let d = document.createElement("div");
	document.body.appendChild(d);
	return d
}