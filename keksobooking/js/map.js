var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде', 'Значения не должны повторяться'];

var types = ['palace', 'flat', 'house', 'bungalo'];
var checkinTime = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var map = document.querySelector('.map');
	//map.classList.remove('map--faded');

	var templateCard = document.querySelector('#template').content.querySelector('.map__card');
	var pinTemplate = document.querySelector('#template').content.querySelector('.map__pin');
	var mapPins = document.querySelector('.map__pins');
	var mainPin = map.querySelector('.map__pin--main');
	var noticeForm = document.querySelector('.notice__form');

	var PIN_DIAMETER = 65;
	var PIN_HEIGHT = 82;


//функция генерирующая случайное число из диапазона
var randomInteger = function(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}
		//функция генерирующая случайный элемент массива
		var randomValueRepeat = function(arr) {
			var rand = Math.floor(Math.random() * arr.length);
			return arr[rand];
		}

		//функция генерирующая случайный неповторяющийся элемент массива
		var randomValueNoRepeat = function(arr) {
			var rand = Math.floor(Math.random() * arr.length);
			var newRand = arr[rand];
			if(rand != 0) {
				arr.splice(rand, 1);
			}
			else {
				arr.splice(0, 1);
			}	
			return newRand;	
		}

		//функция создающая на основе массива новый массив с произвольным количеством элементов
		var randomArrayCount = function(arr) {   
			var newArr = arr.slice();   
			var array = [];   
			var countElement = this.randomInteger(0, newArr.length);   
			for(var i = 0; i < countElement; i++) {
				array[i] = this.randomValueNoRepeat(newArr);   
			}
			return array;
		}

		//функция создающая на основе массива новый массив, где элементы следуют в произвольном порядке
		var randomArray = function(arr) {
			var newArr = arr.slice(); 
			var array = [];  
			var count = newArr.length;
			for (var i = 0; i < count; i++) {
				array[i] = this.randomValueNoRepeat(newArr);  
			}
			return array;
		}

		function getCoords(elem) {
			let box = elem.getBoundingClientRect();

			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			};
		}

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


		var createPins = function() {
			var array = [];

			for(var i = 0; i < 8; i++) {
				var element = {};
				element.author = {};
				element.author.avatar = `img/avatars/user0${i+1}.png`;
				element.offer = {};
				element.offer.title = randomValueNoRepeat(titles);				
				element.offer.price = randomInteger(1000, 1000000);
				element.offer.type = randomValueRepeat(types);
				element.offer.rooms = randomInteger(1, 5);
				element.offer.guests = randomInteger(1, 15);
				element.offer.checkin = randomValueRepeat(checkinTime);
				element.offer.checkout = randomValueRepeat(checkinTime);
				element.offer.features = randomArrayCount(features);
				element.offer.descriptions = '';
				element.offer.photos = randomArray(photos);
				element.offer.location = {};
				element.offer.location.x = randomInteger(0, 1200);
				element.offer.location.y = randomInteger(130, 630);
				element.offer.address = `${element.offer.location.x}, ${element.offer.location.y}`;
				element.id = element.offer.location.x + element.offer.location.y + element.offer.type;

				array.push(element);
			}
			return array;
		}

		var pins = createPins(); // создаем метки 

		var showPin = function(pin) {
			var pinItem = pinTemplate.cloneNode(true);
			pinItem.style.left = pin.offer.location.x + 'px';
			pinItem.style.top = pin.offer.location.y+ 'px';
			pinItem.id = pin.id;

			pinItem.querySelector('img').src = pin.author.avatar;
			pinItem.querySelector('img').alt = pin.offer.title;

			return pinItem;
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

		var showAllPins = function(pins) {
			var fragment = document.createDocumentFragment();

			for(var i = 0; i < pins.length; i++) {
				fragment.appendChild(showPin(pins[i]));
			}
			mapPins.appendChild(fragment);
		}

		var fieldsets = document.querySelectorAll('.form__element');

		var disableFieldsetForm = function() {

			[].forEach.call(fieldsets, (e)=>{
				e.setAttribute('disabled', 'disabled');
			});
		}

		var enableFieldsetForm = function() {
			[].forEach.call(fieldsets, (e)=>{
				e.removeAttribute('disabled');
			});
		}

		var showAdress = function() {
			var input = noticeForm.querySelector('.input-address');
			pinLeftCoords = (getCoords(mainPin).left - getCoords(map).left) + PIN_DIAMETER/2;
			if(map.classList.contains('map--faded')) {				
				pinTopCoords = getCoords(mainPin).top + PIN_DIAMETER/2;
			}
			else {
				pinTopCoords = getCoords(mainPin).top + PIN_HEIGHT;
			}
			input.value = pinLeftCoords + ', ' + pinTopCoords;			
		}

		var deactivateForm = function() {
			disableFieldsetForm();
			showAdress();
		}


		var hiddenCard = function() {
			if(map.querySelector('.map__card')){
				map.querySelector('.map__card').remove();
			}
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

		var showCard = function() {

			// добавляем событие click на mapPins
			map.addEventListener('click', function(evt) {

				// target - элемент на котором кликнули
				var target = evt.target;

				// если элемент содержит класс map__pin и не содержит map__pin--main (главная метка)
				if(target.classList.contains('map__pin') && !target.classList.contains('map__pin--main')) {
					// то перебираем массив pins(с объектами)
					for(i in pins) {
						// если у элемента id совпадает c id элемнта массова
						if(pins[i].id == target.id) {
							// то удаляем карту, если она есть
							hiddenCard();
							// и вставляем новую карточку с новыми данными
							map.insertBefore(renderCard(pins[i]), document.querySelector('.map__filters-container'));
						}
					}
				}		
				closeCard();		
			})	
		}		

		var activateForm = function() {
			map.classList.remove('map--faded');
			noticeForm.classList.remove('notice__form--disabled');
			enableFieldsetForm();
			showAdress();
			showAllPins(pins);
			showCard();
		}

		deactivateForm();
		mainPin.addEventListener('mouseup', activateForm);

		