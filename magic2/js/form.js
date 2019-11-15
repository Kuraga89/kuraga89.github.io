(function(){
	var setup = document.querySelector('.setup');
	var form = setup.querySelector('.setup-wizard-form');
	var setupError = setup.querySelector('.setup-error');

	var onError = function(message) {
		setupError.textContent = ' ';
		setupError.textContent = message;
	};

	form.addEventListener('submit', function(evt) {
		window.backend.save(new FormData(form), function(response) {
			setup.classList.add('hidden');
		}, onError);
		evt.preventDefault();
	})
})();