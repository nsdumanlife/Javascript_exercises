var todoList = [];

window.setTimeout(function() {
	var inputTodo = prompt('What would you like to do?', 'Select one of them: "new","list","quit"');

	while (inputTodo !== 'quit') {
		if (inputTodo === 'new') {
			//ask for new todo
			var newTodo = prompt('Enter new todo to add your list');
			//add to todoList
			todoList.push(newTodo);
		} else if (inputTodo === 'list') {
			console.log(todoList);
		} else {
			prompt('Please enter the valid value');
		}
		//ask again for new input
		inputTodo = prompt('What would you like to do?', 'Select one of them: "new","list","quit"');
	}
	prompt('OK, you quit the app');
}, 500);
