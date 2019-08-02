var bt_p1 = document.querySelector('#p1'); // "Player One" button
var bt_p2 = document.querySelector('#p2'); // "Player Two" button
var bt_reset = document.querySelector('#reset'); // "Reset" button
var num_input = document.querySelector('input');
var ending_score_txt = document.querySelector('#ending_score_txt');
var score_p1 = 0; // score counter for player one
var score_p2 = 0; // score counter for player two

var game_over = false;
var ending_score = 5;

bt_p1.addEventListener('click', function() {
	if (!game_over) {
		score_p1++;
		if (score_p1 === ending_score) {
			game_over = true;
			score_p1_txt.classList.add('winner');
			// score_p1_txt.style.color = 'green';
		}
	}
	score_p1_txt.textContent = score_p1;
});

bt_p2.addEventListener('click', function() {
	if (!game_over) {
		score_p2++;
		if (score_p2 === ending_score) {
			game_over = true;
			score_p2_txt.classList.add('winner');
			// score_p2_txt.style.color = 'green';
		}
	}
	score_p2_txt.textContent = score_p2;
});

bt_reset.addEventListener('click', function() {
	reset();
});

function reset() {
	score_p1 = 0;
	score_p2 = 0;
	score_p1_txt.textContent = score_p1;
	score_p2_txt.textContent = score_p2;
	game_over = false;
	// score_p1_txt.style.color = 'black';
	score_p1_txt.classList.remove('winner');
	// score_p2_txt.style.color = 'black';
	score_p2_txt.classList.remove('winner');
}

num_input.addEventListener('change', function() {
	ending_score_txt.textContent = this.value;
	ending_score = Number(this.value);
	reset();
});
