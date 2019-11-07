(function() {
	var setup = document.querySelector('.setup');	
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = setup.querySelector('.setup-close');
	var ESC_KEYCODE = 27;
	var ENTER_KEYCODE = 13;

	var onPopupEscPress = function(evt) {
		if(evt.keyCode === ESC_KEYCODE) {
			closePopup();
		}
	}

	setupOpen.addEventListener('keydown', function(evt) {
		if(evt.keyCode === ENTER_KEYCODE) {
			openPopup();
		}
	})

	var openPopup = function() {
		setup.classList.remove('hidden');

		document.addEventListener('keydown', onPopupEscPress);
	}

	var closePopup = function() {
		setup.classList.add('hidden');
		document.removeEventListener('keydown', onPopupEscPress);
	}

	setupOpen.addEventListener('click', function() {
		openPopup();
	})

	setupClose.addEventListener('click', function() {
		closePopup();
	})
})()