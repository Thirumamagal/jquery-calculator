$(document).ready(function () {

	var inputs = [""];
	var totalString;  // string to store current input string,that displays on calculator.

	var operatorsBasic = ["+", "-", "/", "*"];
	var operatorsDot = ["."];
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function getValue(input) {
		if (operatorsDot.includes(inputs[inputs.length - 1]) === true && input === ".") {
			console.log("Error:Duplicate'.'");  //cant have 2dots
		}
		else if (inputs.length === 1 && operatorsBasic.includes(input) === false) {//first entered value- number valid, dot invalid
			inputs.push(input);// valid-add to array
		}
		else
			if (operatorsBasic.includes(inputs[inputs.length - 1]) === false) {//last value-not basic operator
				inputs.push(input);
			}
			else if (nums.includes(Number(input))) { // number converts to String
				inputs.push(input);
			}
		update();
	}

	function update() {
		totalString = inputs.join("");
		$("#Zero").html(totalString);
	}
	
	function getTotal() {
		totalString = inputs.join('');
		var result = "=" + eval(totalString);
		inputs.push(result);
		$('#Zero').html((totalString).concat(result));
		
	}

	function getsqrt() {
		totalString = inputs.join("");
		var result = Math.sqrt(eval(totalString));
		$('#Zero').html(result);
		inputs = [];
		inputs.push(result);
	}

	function getpi() {
		totalString = inputs.join("");
		var result = Math.PI * eval(totalString);
		$('#Zero').html(result);
		inputs = [];
		inputs.push(result);
	}

	$("a").on("click", function () {
		if (this.id === "clearAll") {
			inputs = [];
			$('#Zero').html("0");
		}
		else if (this.id === "clearLast") {
			inputs.pop();
			if (!inputs.length) {
				inputs = [];
				$('#Zero').html(0, inputs.length - 1);
			}
			else {
				$('#Zero').html("0");
				update();
			}
		}
		else if (this.id === "sqrt") {
			getsqrt();
			// update();
		}
		else if (this.id == "pi") {
			getpi();
			// update();
		}
		else if (this.id === "total") {
			result = "";
			getTotal();
		}
		else {
			getValue(this.id);

		}
	});
});