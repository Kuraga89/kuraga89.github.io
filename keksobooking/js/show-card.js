(function() {
	var map = document.querySelector('.map');
	var templateCard = document.querySelector('#template').content.querySelector('.map__card');

	var showType = function(type) {
			switch(type) {
				case 'flat':
				return 'Квартира';


				case 'bungalo':
				return 'Бунгало';

				case 'house':
				return 'Дом';

				default:
				return 'Дворец';
			}
		}


	var showFeaturesList = function(list, array) {
			for (var i = 0; i < array.lenght; i++) {
				var itemFeature = document.createElement('li');
				itemFeature.classList.add('feature');
				itemFeature.classList.add('feature--' + features[i]);
				list.appendchild(itemFeature);
			}
		}

		var showPhotosList = function(list, array) {
			for(var i = 0; i < array.length; i++) {
				var li = document.createElement('li');
				var img = document.createElement('img');
				img.src = array[i];
				li.appendChild(img);
				list.appendChild(li);
			}
		}

	var renderCard = function(card) {
		var cardItem = templateCard.cloneNode(true);
		cardItem.querySelector('.popup__avatar').src = card.author.avatar;
		cardItem.querySelector('.popup__title').textContent = card.offer.title;
		cardItem.querySelector('.popup__text--address').textContent = card.offer.address;
		cardItem.querySelector('.popup__price').textContent = card.offer.price;
		cardItem.querySelector('.popup__type').textContent = showType(card.offer.type);
		cardItem.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
		cardItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
		showFeaturesList(cardItem.querySelector('.popup__features'), card.offer.features);
		cardItem.querySelector('.popup__description').textContent = card.offer.descriptions;
		showPhotosList(cardItem.querySelector('.popup__pictures'), card.offer.photos);

		return cardItem;
	} 

	// функция для удаления карточки при нажатии на крестик
		var closeCard = function() {
			if(map.querySelector('.map__card')) {
				var popupClose = map.querySelector('.popup__close');
				popupClose.addEventListener('click', function() {
					map.querySelector('.map__card').remove();
				})

				popupClose.addEventListener('keydown', function(evt) {
					if(evt.keyCode == 13) {
						map.querySelector('.map__card').remove();
					}
				})
			}
		}

		var hiddenCard = function() {
			if(map.querySelector('.map__card')){
				map.querySelector('.map__card').remove();
			}
		}

		window.showCard = function() {
			// добавляем событие click на mapPins
			map.addEventListener('click', function(evt) {
				console.log(map.querySelector('.map__card'));

				// target - элемент на котором кликнули
				var target = evt.target.parentNode;

				// если элемент содержит класс map__pin и не содержит map__pin--main (главная метка)
				if(target.classList.contains('map__pin') && !target.classList.contains('map__pin--main')) {
					// то перебираем массив pins(с объектами)
					for(item of window.pins) {
						// если у элемента id совпадает c id элемнта массова
						if(toString(item.location.x) + toString(item.location.y) == toString(target.style.left) + toString(target.style.top) ) {
							// то удаляем карту, если она есть
							hiddenCard();
							// и вставляем новую карточку с новыми данными
							map.insertBefore(renderCard(item), document.querySelector('.map__filters-container'));
						}
					}
				}		
				closeCard();		
			})	
		}
})()