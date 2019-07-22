(function(){

	var cardTemplate = document.querySelector('#map-template').content.querySelector('.map__card');
	var mapFiltersContainer = document.querySelector('.map__filters-container');
	var mapContainer = document.querySelector('.map');

	//даём типам жилья русские названия
	var showType = function(element) {
		switch(element) {
			case 'palace': 
			return 'дворец';
			case 'flat':
			return 'квартира';
			case 'bungalo':
			return 'бунгало';
			case 'house':
			return 'дом';
		}
	};

	//создаём список преимуществ
	var showFeatures = function(list, array) {
		var featuresList = list;

		for(var i = 0; i < array.length; i++) {
			var li = document.createElement('li');
			li.classList.add('feature');
			li.classList.add('feature--' + array[i]);
			featuresList.appendChild(li);
		}
	};

	//создаем заготовку для карточки
	var renderCardElement = function(element) {
		var cardElement = cardTemplate.cloneNode(true);
		cardElement.querySelector('.popup__avatar').src = element.author.avatar;
		cardElement.querySelector('.popup__title').textContent = element.offer.title;
		cardElement.querySelector('.popup__address').textContent = element.offer.address; 
		cardElement.querySelector('.popup__price').textContent = element.offer.price + '₽/ночь';
		cardElement.querySelector('.popup__type').textContent = showType(element.offer.type);
		cardElement.querySelector('.popup__capacity').textContent = element.offer.rooms + ' комнаты для ' + element.offer.guests + ' гостей';
		cardElement.querySelector('.popup__time').textContent = 'Заезд после ' + element.offer.checkin + ', выезд до ' + element.offer.checkout;
		showFeatures(cardElement.querySelector('.popup__features'), element.offer.features);

		return cardElement;
	};

	var closeCard= function() {
		var card = document.querySelector('.map__card')
		mapContainer.removeChild(card);

		document.addEventListener('keydown', function(evt) {
			window.util.isEscEvent(evt, closeCard);
		});
	}

	window.showCard = function() {
		var list = document.querySelectorAll('.map__pin');

		for(var i = 0; i < list.length; i++) {
			var item = list[i];

			//если метка не является главной
			if(!item.classList.contains('map__pin--main')) {
				//клик на метке
				item.addEventListener('click', function(evt) {
					var target = evt.target;
					var fragment = document.createDocumentFragment();			

					//находим объект из мессива с данными, у которого заголовок совпадает с alt нажатой метки
					for(var j = 0; j < window.mapDate.length; j++) {
						if(target.alt === mapDate[j].offer.title) {
							//если карточка уже открыта, то удаляем её
							window.util.removeElement('.map__card', mapContainer);		

							//создаем карточку с данными из объекта и добавляем на страницу
							fragment.appendChild(renderCardElement(window.mapDate[j]));
							mapContainer.insertBefore(fragment, mapFiltersContainer);

							//при клике на крестик удаляем карточку
							var popupClose = document.querySelector('.map__card').querySelector('.popup__close');
							popupClose.addEventListener('click', closeCard);							
						}					
					}	
				})
			}
		}		
	};
})();