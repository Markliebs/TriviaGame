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
	time = 120
	$("#timer").html("02:00");

	function countDown() {
		time--;
		currentTime = timeConverter(time);
		$("#timer").html(currentTime);
	}
	counter = setInterval(countDown, 1000);
})