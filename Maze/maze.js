var start_flag = false;
var wall_flag = false;
var isCheat = false;

window.onload = function() {
	var start = document.getElementById("start");
	var end = document.getElementById("end");
	var imformation = document.getElementById("imformation");
	//var wall = document.getElementsByClass("wall");
	start.onmouseenter = function() {
		start_flag = true;
		wall_flag = false;
		isCheat = true;
		imformation.innerHTML = "";
	}
	end.onmouseenter = function() {
		if(isCheat == true || start_flag == false) {
			imformation.innerHTML = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
		}
		else if(wall_flag == false) {
			imformation.innerHTML = "You win!";
		}
		start_flag = false;
	}
	document.getElementById("right_up_wall").onmouseenter = losewall;
	document.getElementById("left_up_wall").onmouseenter = losewall;
	document.getElementById("up_wall").onmouseenter = losewall;
	document.getElementById("middle_wall").onmouseenter = losewall;
	document.getElementById("down_wall").onmouseenter = losewall;
	//document.getElementsByClass("wall").onmouseout = reset;
	document.getElementById("right_up_wall").onmouseout = reset;
	document.getElementById("right_up_wall").onmouseout = reset;
	document.getElementById("left_up_wall").onmouseout = reset;
	document.getElementById("up_wall").onmouseout = reset;
	document.getElementById("middle_wall").onmouseout = reset;
	document.getElementById("down_wall").onmouseout = reset;
	document.getElementById("detect_cheat").onmouseenter = function() {
		isCheat = false;
	}
}
function losewall() {
		if(start_flag == true) {
			//this.style.backgroundColor = "red";
			event.target.className = "red_wall";
			wall_flag = true;
			imformation.innerHTML = "You lose!";
		}
	}
function reset() {
		event.target.className = "wall";
		start_flag = false;
}