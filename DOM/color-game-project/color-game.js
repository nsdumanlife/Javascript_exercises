var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var messageDisplay = document.querySelector('#message');
var headerDisplay = document.querySelector('#header');
var isOver = false;
var resetButton = document.querySelector('#resetBt');
var colorDisplay = document.querySelector('h1');
colorDisplay.textContent = pickedColor;
//var easyBt = document.querySelector('#easyBttn');
//var hardBt = document.querySelector('#hardBttn');
//hardBt.classList.add('selected');
var modeBt = document.querySelectorAll('.mode');

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	//mode buttuns event listeners
	for (var i = 0; i < modeBt.length; i++) {
		modeBt[i].addEventListener('click', function() {
			modeBt[0].classList.remove('selected');
			modeBt[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'EASY' ? (numSquares = 3) : (numSquares = 6);
			//if(this.textContent === "Easy"){
			//numSquares = 3;
			//} else{
			//	numSquares=6;
			//}
			reset();
		});
	}
}
function setupSquares() {
	if (!isOver) {
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			//add click listeners to squares
			squares[i].addEventListener('click', function() {
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
				if (clickedColor === pickedColor) {
					messageDisplay.textContent = 'Correct!';
					changeColors(clickedColor);
					resetButton.textContent = 'Play Again?';
				} else {
					this.style.backgroundColor = '#232323';
					messageDisplay.textContent = 'Try Again!';
				}
			});
		}
	} else {
		playAgainDisplay.textContent = 'Play Again?';
	}
}

//easyBt.addEventListener('click', function() {
//	numSquares = 3;
//	hardBt.classList.remove('selected');
//	messageDisplay.textContent = '';
//	easyBt.classList.add('selected');
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	headerDisplay.style.backgroundColor = 'steelblue';
//	colorDisplay.textContent = pickedColor;
//	for (var i = 0; i < squares.length; i++) {
//		if (colors[i]) {
//			squares[i].style.backgroundColor = colors[i];
//		} else {
//			squares[i].style.display = 'none';
//		}
//	}
//});

//hardBt.addEventListener('click', function() {
//	numSquares = 6;
//	easyBt.classList.remove('selected');
//	hardBt.classList.add('selected');
//	colors = generateRandomColors(numSquares);
//	messageDisplay.textContent = '';
//	pickedColor = pickColor();
//	headerDisplay.style.backgroundColor = 'steelblue';
//	colorDisplay.textContent = pickedColor;
//	for (var i = 0; i < squares.length; i++) {
//		squares[i].style.backgroundColor = colors[i];
//		squares[i].style.display = 'block';
//	}
//});

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	headerDisplay.style.backgroundColor = color;
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change header background color to default
	headerDisplay.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
}
resetButton.addEventListener('click', function() {
	reset();
});
