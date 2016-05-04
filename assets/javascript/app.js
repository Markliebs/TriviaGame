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
	});
	time = 10
	$("#timer").html("02:00");
	

	function countDown() {
		time--;
		currentTime = timeConverter(time);
		$("#timer").html(currentTime);
	}
	counter = setInterval(countDown, 1000);
	
})

if(timer == 0){
	time = 0
       setInterval(countdown, 0);
			 console.log("Time's Up!");
}

//if (minutes = 0) and (seconds = 0) {
//	counter = setInterval(0);
//}