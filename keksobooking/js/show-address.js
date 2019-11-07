(function() {
	var map = document.querySelector('.map');
	var mainPin = map.querySelector('.map__pin--main');
	var noticeForm = document.querySelector('.notice__form');
	var PIN_DIAMETER = 65;
	var PIN_HEIGHT = 82;

		window.showAddress = function() {
			var input = noticeForm.querySelector('.input-address');
			pinLeftCoords = (window.utils.getCoords(mainPin).left - window.utils.getCoords(map).left) + PIN_DIAMETER/2;
			if(map.classList.contains('map--faded')) {				
				pinTopCoords = window.utils.getCoords(mainPin).top + PIN_DIAMETER/2;
			}
			else {
				pinTopCoords = window.utils.getCoords(mainPin).top + PIN_HEIGHT;
			}
			input.value = pinLeftCoords + ', ' + pinTopCoords;			
		}
})()