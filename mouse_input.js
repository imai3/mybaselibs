mouse_btn_cnt = 2

for (i=0;i<mouse_btn_cnt;i++){
	eval(
	`mouse_${i} = false
	mouse_ex_${i} = false
	mousedown_${i} = ()=>{}
	mouseup_${i} = ()=>{}`)
}

window.addEventListener("keydown", (e)=>{	
	for (i=0;i<mouse_btn_cnt;i++){
		if (e.button == i) eval(`key_${i} = true`)
	}
})

window.addEventListener("keyup", (e)=>{	
	for (i=0;i<mouse_btn_cnt;i++){
		if (e.button == i) eval(`key_${i} = false`)
	}
})

setInterval(()=>{
	for (i=0;i<mouse_btn_cnt;i++){
		eval(`if (mouse_ex_${i} == false && mouse_${i} == true) mousedown_${i}()
			  if (mouse_ex_${i} == true && mouse_${i} == false) mouseup_${i}()
	 		  mouse_ex_${i} = mouse_${i}`)
	}
})