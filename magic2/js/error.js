(function() {
	var setup = document.querySelector('.setup');		
	var setupError = setup.querySelector('.setup-error');	

	var onError = function(message) {
		setupError.textContent = ' ';
		setupError.textContent = message;
	}

	window.backend.load(onLoad, onError);
})()