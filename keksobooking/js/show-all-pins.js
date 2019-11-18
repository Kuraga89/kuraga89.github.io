(function() {
	var map = document.querySelector('.map');
	var pinTemplate = document.querySelector('#template').content.querySelector('.map__pin');
	var mapPins = map.querySelector('.map__pins');

	var showPin = function(pin) {
			var pinItem = pinTemplate.cloneNode(true);
			pinItem.style.left = pin.location.x + 'px';
			pinItem.style.top = pin.location.y+ 'px';

			pinItem.querySelector('img').src = pin.author.avatar;
			pinItem.querySelector('img').alt = pin.offer.title;

			return pinItem;
		}

		window.onLoad = function(pins) {
			window.pins = pins;
			var fragment = document.createDocumentFragment();

			pins.forEach(elem => fragment.appendChild(showPin(elem)));
			mapPins.appendChild(fragment);
		}

		window.onError = function(message) {
			console.error(message);
		}
})()