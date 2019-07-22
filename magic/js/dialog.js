(function(){
	var setupOpen = document.querySelector('.setup-open');
	window.setup = document.querySelector('.setup');
	var setupClose = setup.querySelector('.setup-close');

	window.onPopupPressEsc = function(evt) {
		window.util.isEscEvent(evt, closePopup);
	};

	setupOpen.addEventListener('click', function(){
		openPopup();
	});

	setupOpen.addEventListener('keydown', function(evt) {
		window.util.isEnterEvent(evt, openPopup);
	});

	setupClose.addEventListener('click', function(evt) {
		closePopup();
	});

	setupClose.addEventListener('keydown', function(evt) {
		window.util.isEnterEvent(evt, closePopup);
	});

	var openPopup = function() {
		setup.classList.remove('hidden');
		document.addEventListener('keydown', onPopupPressEsc);
	};

	var closePopup = function() {
		setup.classList.add('hidden');
		document.removeEventListener('keydown', onPopupPressEsc);
	};

})();