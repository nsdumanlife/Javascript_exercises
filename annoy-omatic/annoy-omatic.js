// var answer = prompt('Are we there yet?');

// while (answer !== 'yes' && answer !== 'yeah') {
// 	var answer = prompt('Are we there yet?');
// }
// var msg = 'Yay, we finally made it!'; //last msg to user
// alert(msg);

//  VERSION 2.0

var answer = prompt('Are we there yet?');

while (answer.indexOf('yes') === -1) {
	var answer = prompt('Are we there yet?');
}
var msg = 'Yay, we finally made it!'; //last msg to user
alert(msg);
