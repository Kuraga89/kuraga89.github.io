(function() {	
	var PIN_WIDTH = 65;
	var PIN_HEIGHT = 87;

	var noticeForm = document.querySelector('.notice__form');
	var address = noticeForm.querySelector('#address');
	var mapPinMain = document.querySelector('.map__pin--main');

	window.showAdressValue = function() {
		var top = mapPinMain.offsetTop + PIN_HEIGHT;
		var left = mapPinMain.offsetLeft;

		address.value = top + ', '+ left;
	}
})();