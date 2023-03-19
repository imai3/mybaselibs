mousewheel_up = ()=>{}
mousewheel_down = ()=>{}
window.onmousewheel = ()=>{
	if (event.wheelDelta<0) mousewheel_down()
	if (event.wheelDelta>0) mousewheel_up()
}