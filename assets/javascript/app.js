setTimeout(timeUp, 10000);

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
	}, 1000);
	time = 10
	$("#timer").html("02:00");


	function countDown() {
		time--;
		currentTime = timeConverter(time);
		$("#timer").html(currentTime);
	}
	counter = setInterval(countDown, 1000);

})


function timeUp() {
	$(".digits").replaceWith("<h2><center>Time's<br>Up!<center></h2>");
	$(".headline").replaceWith("<h3><center>How did you do?<center></h3>");
	$(".questions").replaceWith("<h1><center>Test</center></h1>");
	//	console.log("Time's Up!");
	//	console.log("How did you do?")
	if (time <= 1) {
		clearInterval(counter);
	}
	$(".question1").click(function () {
		$("#optionsRadios4").attr("checked", "checked");
		if ($('#optionsRadios4').is('checked')) {
			alert("it's checked");
			console.log("work damn you work");
		}
	});

}

//Nothing to see here, move along
//if(timer == 0){
//       setInterval(countdown, 0);
//			 console.log("Time's Up!");
//}

//if (minutes = 0) and (seconds = 0) {
//	counter = setInterval(0);
//}