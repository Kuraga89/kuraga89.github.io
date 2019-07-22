(function(){

	var mapTemplate = document.querySelector('#map-template').content.querySelector('.map__pin');
	var mapList = document.querySelector('.map__pins');
	var mapObjectLength = window.mapDate.length;

	//создаем заготовки для отображаемых меток карты
	var renderMapElement = function(element) {
		var mapElement = mapTemplate.cloneNode(true);
		mapElement.style.left = element.offer.location.x + 'px';
		mapElement.style.top = element.offer.location.y + 'px';
		mapElement.querySelector('.pin__image').src = element.author.avatar;
		mapElement.querySelector('.pin__image').alt = element.offer.title;

		return mapElement;
	};

	//добавляем все метки на карту
	window.showPins = function() {
		var fragment = document.createDocumentFragment();
		for(var i = 0; i < mapObjectLength; i++) {
			fragment.appendChild(renderMapElement(mapDate[i]));
		}
		mapList.appendChild(fragment); 
		
	};
})();