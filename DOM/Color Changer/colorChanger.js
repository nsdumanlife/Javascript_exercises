var button = document.querySelector('button');
var isPurple = false;

button.addEventListener('click', colorChanger);

function colorChanger() {
	if (isPurple) {
		document.body.style.background = 'white';
	} else {
		document.body.style.background = 'purple';
	}
	isPurple = !isPurple;
}
