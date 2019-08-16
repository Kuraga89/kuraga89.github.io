(function() {

	var setup = document.querySelector('.setup');

	window.onError = function(message) {
		var container = window.setup.appendChild(document.createElement('p'));
		container.textContent = message;
	}

})();