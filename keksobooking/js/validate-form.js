(function() {
	var form = document.querySelector('.notice__form');
	var userNameInput = form.querySelector('.user-name');
	var userRoomsInput = form.querySelector('.user-rooms');
	var userCapacityInput = form.querySelector('.user-capacity');
	var selectElements = form.querySelectorAll('select');
	var previousValues = {};

	/*var savePreviousValues = function() {
		selectElements.forEach(item => {
			previousValues[item.id] = item.querySelector('option[selected]').value;
		})
		return previousValues;
	}

	var validateSelect= function() {
		userCapacityInput.value > userRoomsInput.value ? userCapacityInput.setCustomValidity('Слишком много гостей для этой комнаты!') : userCapacityInput.setCustomValidity('');
	}

	userNameInput.addEventListener('invalid', function(evt) {
		if(userNameInput.validity.tooShort) {
			userNameInput.setCustomValidity('Слишком коротко!!!');
		}
	})

	userCapacityInput.addEventListener('change', function() {
		[].forEach.call(userCapacityInput.options, elem => {
			elem.removeAttribute('selected');
		});
		var index = userCapacityInput.selectedIndex;
		userCapacityInput.options[index].setAttribute('selected', '');
		validateSelect();
	});

	validateSelect(); */
	var onError = function(message) {
		console.log(message);
	};

	form.addEventListener('submit', function(evt) {
		window.backend.save(new FormData(form), function(response) {
			console.log('111');
		}, onError);
		evt.preventDefault();
	})

})()