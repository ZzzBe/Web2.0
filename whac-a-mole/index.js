window.onload = function() {
	var gameground = document.getElementById("gameground");
	var input_array = document.createDocumentFragment();
	/*create the holes*/
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 10; j++) {
			var hole = document.createElement('input');
			hole.type = "radio";
			hole.className = "holes";
			hole.disabled = true;
			input_array.appendChild(hole);
			hole.addEventListener('click', hit);
		}
	}
	gameground.appendChild(input_array);
	var start_button = document.getElementById("my_start");
	var score = document.getElementById("score");
	var time = document.getElementById("time");
	var status = document.getElementById("status");
	var holes = document.getElementsByClassName('holes');
	var start_flag = false;
	var pause_flag;
	var timer = null;
	var random = Math.floor(Math.random()*(60));
	var cur_hole = holes[random];
	start_button.onclick = function (e) {
		if (!start_flag) {
			start_flag = true;
			pause_flag = false;
			if (time.value == '0') {
				time.value =  "30";
				score.value = '0';
				cur_hole.checked = 'checked';
				status.value = "Playing";
			}
			status.value = "Playing";
			cur_hole.checked = 'checked';
			for (var i = 0; i < holes.length; i++) {
				holes[i].disabled = false;
			}
			timer = setInterval(clock,1000);
		} else {
			pause();
		}
	}
	function pause() {
		clearTimeout(timer);
		start_flag = false;
		pause_flag = true;
		status.value = "Pause";
		for (var i = 0; i < holes.length; i++) {
			holes[i].disabled = true;
		}
	}
	function clock() {
		if(!start_flag){
			return;
		}
		if (time.value == '0') {
			end();
		} else  {
			time.value = parseInt(time.value)-1;
		}
	}
	function end() {
		clearTimeout(timer);
			//score.value = '0';
			start_flag = false;
			status.value = 'Game Over';
			cur_hole.checked = false;
			for (var i = 0; i < holes.length; i++) {
				holes[i].disabled = true;
			}
			var numscore = score.value;
			alert('Game Over! \n Your Score is :' + numscore);
	}
	function hit (e) {
		if (start_flag) {
		if (e.target == cur_hole) {
			e.target.checked = false;
			score.value = parseInt(score.value) +1;
			random = Math.floor(Math.random()*(60));
			cur_hole = holes[random];
			cur_hole.checked = 'checked';
		} else {
			//if (score.value > '0') {
			score.value = parseInt(score.value)-1;
			//}
			e.target.checked = false;
		}
	}
	}
}