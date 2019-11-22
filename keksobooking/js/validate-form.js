(function() {
	var form = document.querySelector('.notice__form');
	var userNameInput = form.querySelector('.user-name');
	var userRoomsInput = form.querySelector('.user-rooms');
	var userCapacityInput = form.querySelector('.user-capacity');
	var selectElements = form.querySelectorAll('select');
	var previousValues = {};

	var savePreviousValues = function() {
		selectElements.forEach(item => {
			previousValues[item.id] = item.querySelector('option[selected]').value;
		})
	}

	savePreviousValues();
	console.log(previousValues);

	/*var validateSelect = function() {
		userCapacityInput.value > userRoomsInput.value ? userCapacityInput.setCustomValidity('Слишком много гостей для этой комнаты!') : userCapacityInput.setCustomValidity('');
	}

	userNameInput.addEventListener('invalid', function() {
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

	validateSelect();

	form.addEventListener('submit', function(evt) {
		evt.preventDefault();
		window.backend.save(new FormData(form), function(response) {
			console.log('sss');
		}, window.onError)		
	});*/

})()