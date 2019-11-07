(function() {
	var map = document.querySelector('.map');
	var pinTemplate = document.querySelector('#template').content.querySelector('.map__pin');
	var mapPins = map.querySelector('.map__pins');

	var showPin = function(pin) {
			var pinItem = pinTemplate.cloneNode(true);
			pinItem.style.left = pin.offer.location.x + 'px';
			pinItem.style.top = pin.offer.location.y+ 'px';
			pinItem.id = pin.id;

			pinItem.querySelector('img').src = pin.author.avatar;
			pinItem.querySelector('img').alt = pin.offer.title;

			return pinItem;
		}

		window.showAllPins = function(pins) {
			var fragment = document.createDocumentFragment();

			for(var i = 0; i < pins.length; i++) {
				fragment.appendChild(showPin(pins[i]));
			}
			mapPins.appendChild(fragment);
		}
})()