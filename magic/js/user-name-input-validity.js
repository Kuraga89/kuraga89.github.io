(function(){
	var userNameInput = window.setup.querySelector('.setup-user-name');

	userNameInput.addEventListener('focus', function() {
		document.removeEventListener('keydown', window.onPopunPressEsc);
	});

	userNameInput.addEventListener('blur', function() {
		document.addEventListener('keydown', window.onPopunPressEsc);
	});

	userNameInput.addEventListener('invalid', function(evt){
		if(userNameInput.validity.tooShort) {
			userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
		}
		else if(userNameInput.validity.tooLong) {
			userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
		}
		else if(userNameInput.validity.valueMissing) {
			userNameInput.setCustomValidity('Обязательное поле');
		}
		else {
			userNameInput.setCustomValidity('');
		}
	});
})();