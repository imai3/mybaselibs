key = ["q","w","e","r","t","y","u","i",
	   "o","p","a","s","d","f","g","h",
	   "j","k","l","z","x","c","v","b",
	   "n","m","1","2","3","4","5","6",
	   "7","8","9","0"]

for (i=0;i<key.length;i++){
	eval(
	`key_${key[i]} = false
	key_ex_${key[i]} = false
	keydown_${key[i]} = ()=>{}
	keyup_${key[i]} = ()=>{}`)
}

window.addEventListener("keydown", (e)=>{	
	for (i=0;i<key.length;i++){
		if (e.key == key[i]) eval(`key_${key[i]} = true`)
	}
})

window.addEventListener("keyup", (e)=>{	
	for (i=0;i<key.length;i++){
		if (e.key == key[i]) eval(`key_${key[i]} = false`)
	}
})

setInterval(()=>{
	for (i=0;i<key.length;i++){
		eval(`if (key_ex_${key[i]} == false && key_${key[i]} == true) keydown_${key[i]}()
			  if (key_ex_${key[i]} == true && key_${key[i]} == false) keyup_${key[i]}()
	 		  key_ex_${key[i]} = key_${key[i]}`)
	}
})