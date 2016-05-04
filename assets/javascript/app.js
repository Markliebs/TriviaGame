setTimeout(timeUp, 120000);

function timeConverter(t) {
	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes === 0) {
		minutes = "00";
	} else if (minutes < 10) {
		minutes = "0" + minutes;
	}
	return minutes + ":" + seconds;
}
$(document).ready(function () {
	setTimeout(function () {
		alert("Close this window to begin");
	},1000);
	time = 120
	$("#timer").html("02:00");
	

	function countDown() {
		time--;
		currentTime = timeConverter(time);
		$("#timer").html(currentTime);
	}
	counter = setInterval(countDown, 1000);
	
})


function timeUp(){
	$("#timer").html("Time's Up!");
	console.log("time's up!");
	if(time <= 1){
    
      clearInterval(counter)
	}
	
}


//if(timer == 0){
//       setInterval(countdown, 0);
//			 console.log("Time's Up!");
//}

//if (minutes = 0) and (seconds = 0) {
//	counter = setInterval(0);
//}