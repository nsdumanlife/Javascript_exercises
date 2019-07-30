function kebabToSnake(str) {
	var regex = /-/gi; // gi means global and ignore
	var new_str = str.replace(regex, '_'); // replace function changes the first "-" to "_"
	return new_str;
}
