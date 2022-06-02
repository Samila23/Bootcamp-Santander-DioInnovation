var currentNumberWhapper = document.getElementById('currentNumber')
var currentNumber = 0;
function increment(){
	currentNumber = currentNumber + 1;
	currentNumberWhapper.innerHTML = currentNumber;
}
function decrement(){
	currentNumber = currentNumber - 1;
	currentNumberWhapper.innerHTML = currentNumber;
}