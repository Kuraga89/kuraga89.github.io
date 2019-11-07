(function() {
	var setup = document.querySelector('.setup');
	var dialogHandler = setup.querySelector('.setup-user-pic');

	

	dialogHandler.addEventListener('mousedown', function(evt) { //при нажатии мыши

		var onMouseMove = function(moveEvt) { // функция, которая срабатывает при каждом движении мыши
			console.log('ddd');
		moveEvt.preventDefault(); // отменяем действия по умолчанию

		var shift = {
			x: startCoords.x - moveEvt.clientX, // смещение курсора за одно событие mouseMove
			y: startCoords.y - moveEvt.clientY
		}

		startCoords = {
			x: moveEvt.clientX, // переопределяем стартовые координаты на новые - на которых сейчас находится курсор
			y: moveEvt.clientY
		}
		// смещаем блок setup при каждом движении мыши с зажатой кнопкой
		setup.style.top = (setup.offsetTop - shift.y) + 'px'; 	// offsetTop, offsetLeft - расстояние текущего элемента
		setup.style.left = (setup.offsetLeft - shift.x) + 'px'; // относительно родительского элемента
	}

	var onMouseUp = function(upEvt) { // функция, которая срабатывает при отпускании мыши
		upEvt.preventDefault(); // отменяем действия по умолчанию

		document.removeEventListener('mousemove', onMouseMove); // при отпускании удаляем событие mousemove
		document.removeEventListener('mouseup', onMouseUp); // при отпускании удаляем событие mouseup
	}
		
		evt.preventDefault(); // отменяем действия по умолчанию

		var startCoords = {
			x: evt.clientX, // определяем стартовые координаты - это координаты на которых находится курсор при нажатии мыши
			y: evt.clientY
		};

		document.addEventListener('mousemove', onMouseMove); // при движении мыша с нажатием срабатывает ф-ия onMouseMove
		document.addEventListener('mouseup', onMouseUp); // при отпускании мыши срабатывает ф-ия onMouseMove
})
})()