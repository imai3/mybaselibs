
function load_sound(url) {
	let sound = document.createElement("audio");
	sound.src = url
	document.body.appendChild(sound);
	return sound
}

function play_sound() {
	sound.currentTime = 0
	sound.play();
}