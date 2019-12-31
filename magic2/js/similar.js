(function() {
	var wizards = [];

	var successHandler = function(data) {
		wizards = data;
		window.render(wizards);
	}

	var errorHandler = function(errorMessage) {
		var node = document.createElement('div');
		node.classList.add('error');
		node.textContent = errorMessage;
		document.body.insertAdjacentElement('afterbegin', node);

		window.load()
	}
})()