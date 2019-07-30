function findMin(x, y) {
	while (x !== y) {
		var min = Boolean(x < y);
		if (min) {
			return x;
		} else {
			return y;
		}
	}
	if (x === y) {
		console.log('They are equal.');
	}
}
