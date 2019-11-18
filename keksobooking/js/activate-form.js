(function() {
	var map = document.querySelector('.map');
	var mainPin = map.querySelector('.map__pin--main');
	var noticeForm = document.querySelector('.notice__form');
	if(map.classList.contains('map--faded')) {
		mainPin.addEventListener('mousedown', function(evt) {
			var onMouseMove = function(moveEvt) {
				moveEvt.preventDefault();
				

				var shift = {
					x: startCoords.x - moveEvt.clientX,
					y: startCoords.y - moveEvt.clientY
				}

				startCoords = {
					x: moveEvt.clientX,
					y: moveEvt.clientY
				}

				mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
				mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
			}

			var onMouseUp = function(upEvt) {
				upEvt.preventDefault();
				map.classList.remove('map--faded');
				noticeForm.classList.remove('notice__form--disabled');
				window.switchFieldsetForm.enable();
				window.showAddress();
				window.backend.load(window.onLoad, window.onError);
				window.showCard();

				document.removeEventListener('mousemove', onMouseMove);
				document.removeEventListener('mouseup', onMouseUp);
			}

			evt.preventDefault();

			var startCoords = {
				x: evt.clientX,
				y: evt.clientY
			}

			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		});
	}
	

})()