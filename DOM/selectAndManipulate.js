var h1 = document.querySelector('h1');
h1.style.color = 'yellow';

var body = document.querySelector('body'); //select
var isBlue = false;

setInterval(function() {
	//manipulate
	if (isBlue) {
		body.style.background = 'white';
	} else {
		body.style.background = 'blue';
	}
	isBlue = !isBlue;
}, 1000);
