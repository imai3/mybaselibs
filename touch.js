touch = []
touch_ex = []
get_touch = (e) => {
	touch = [e.touches[0].clientX, e.touches[0].clientY]
}
touchstart = ()=>{}
touchend = ()=>{}
window.addEventListener("touchstart", get_touch)
window.addEventListener("touchmove", get_touch)
window.addEventListener("touchend", () => { touch = [] })

setInterval(()=>{
	if (touch_ex.length == 0 && touch.length != 0) touchstart()
	if (touch_ex.length != 0 && touch.length == 0) touchend()
	touch_ex = touch.concat()
})