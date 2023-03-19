function canvas(width = 400, height = 400) {
	let cnv = document.createElement("canvas");
	cnv.width = width
	cnv.height = height
	document.body.appendChild(cnv);
	return cnv
}

function load_image_oncanvas(url) {
	let chara = new Image();
	chara.src = url;
	return chara
}

function draw_image_oncanvas(cnv, chara, xy = [0, 0], width = 100, height = 100) {
	let cnt = cnv.getContext('2d');
	cnt.drawImage(chara, xy[0], xy[1], width, height)
}

function color(r, g, b) {
	return "rgb(" + r + "," + g + "," + b + ")"
}

function text_oncanvas(cnv, txt, xy = [0, 0], font = '48px serif', rgb = color(0, 0, 0)) {
	var ctx = cnv.getContext('2d');
	ctx.fillStyle = rgb
	ctx.font = font;
	ctx.fillText(txt, xy[0], xy[1]);
}

function sikaku(cnv, xy = [0, 0], w = 50, h = 50, rgb = color(100, 100, 100)) {
	let cnt = cnv.getContext('2d');
	cnt.beginPath();
	cnt.fillStyle = rgb;
	cnt.fillRect(xy[0], xy[1], w, h);
}

function maru(cnv, xy = [0, 0], r = 50, rgb = color(100, 100, 100)) {
	let cnt = cnv.getContext('2d');
	cnt.beginPath();
	cnt.fillStyle = rgb;
	cnt.arc(xy[0], xy[1], r, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
	cnt.fill();
}
