module.exports = function countdown(tic){
	let cnt =10;
	let timer = setInterval(_=>{
		tic(cnt--)
		if(cnt===0)
			clearInterval(timer)
		}, 500)
}