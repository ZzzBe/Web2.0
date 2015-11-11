window.onload = calculator;
function calculator() {
	var getans = false;
	var liEle = document.getElementsByTagName("li");
	var len = liEle.length;
	var isOp = false;
	for (var i = 0; i <= len-1; i++) {
		liEle[i].onclick = function() {
			var getele = this.innerHTML;
			var display = document.getElementById('display');
			var printans = display.innerHTML;
			var len_dis = display.length;
			var len_printans = printans.length;
			if (len_printans > 16) {
				if (getele != 'CE' && getele != '←' && getele != '=') {
					alert("Your input is too long!");
					return;
				}
			}
			
			if (getele == 'CE') {
				var strCE = 0;
				printans = strCE;
			} else if (getele == '←') {
				if (len_printans <= 0) {
					alert("No element");
				}
				var str=printans;
				var sstr = str.substring(0,str.length-1);	
				printans = sstr;				
			}
			else if (getele == '.') {
				var numdot = printans;
				var index = numdot.indexOf('.');
				if (index != -1) {
					return;
				}
				printans = printans+'.';
			}
			else if (getele == '=') {
				if (isOp) {
					if (printans != '0') {
						getans = true;
						isOp = false;
						try {
							var result = eval(printans);
							var sresult = eval(printans).toFixed(3);
							//alert(printans);
							var a = result.toString();
							var lenResult = a.length;
							//alert(sresult);
							if (lenResult >= 8) {
								printans = sresult;
							} else {
								printans = result;
							}
						} 
						catch (exception) {
							alert("Invalid input string!");
						}
					}
				}
			}
			else {
				if (getele == '+') {
					isOp = true;
				}
				if (getele == '-') {
					isOp = true;
				}
				if (getele == '*') {
					isOp = true;
				}
				if (getele == '/') {
					isOp = true;
				}
				if (printans != '0') {
					printans = printans+getele;
					
				}
				else {
					printans = getele;
				}
			}
			display.innerHTML = printans;
		}
		getans = false;
	}
}
