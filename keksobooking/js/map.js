var TITLE_HOUSE = ['Большая уютная квартира',
									'Маленькая неуютная картира',
									'Огромный прекрасный дворец',
									'Маленький ужасный дворец',
									'Красивый гостевой домик',
									'Некрасивый негостеприимный домик',
									'Уютное бунгало далеко от моря',
									'Неуютное бунгало по колено в воде'];

var TYPE_HOUSE = ['palace', 'flat', 'house', 'bungalo'];
var CHECK_TIME = ['12:00', '13:00', '14:00'];
var FEATURES_INCLUDE = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS_URL = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
									'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
									'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var randomArrayCount = function(arr) {   
	var newArr = arr.slice();   
	var array = [];   
	var countElement = randomInteger(0, newArr.length);   
	for(var i = 0; i < countElement; i++) {
	 array[i] = randomValueNoRepeat(newArr);   
	}
	return array;
}

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

var randomArray = function(arr) {
	var newArr = arr.slice(); 
	var array = [];  
	var count = newArr.length;
	for (var i = 0; i < count; i++) {
	 array[i] = randomValueNoRepeat(newArr);  
	}
	return array;
}

var randomValueRepeat = function(arr) {
	var rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

var createDate = function(title, type, time, features, photos) {
	var arr = [];
	var newTitle = title;
	for(var i = 0; i < 8; i++) {
		var element = {};
		element.author = {};
		element.author.avatar = 'img/avatars/user0' + (i+1) + '.png';

		element.offer = {}; 
		element.offer.title = randomValueNoRepeat(newTitle);
		element.offer.price = randomInteger(1000, 1000000); 
		element.offer.type = randomValueRepeat(type); element.offer.rooms = randomInteger(1, 5);
		element.offer.quests = randomInteger(1, 15); 
		element.offer.checkin = randomValueRepeat(time); element.offer.checkout = randomValueRepeat(time);
		element.offer.features = randomArrayCount(features); 
		element.offer.description = '';
		element.offer.photos = randomArray(photos);
		element.offer.location = {};
		element.offer.location.x = randomInteger(0, 1200);
		element.offer.location.y = randomInteger(130, 630);
		element.offer.address = element.offer.location.x + ', ' + element.offer.location.y;

		arr[i] = element; 
	}

	return arr;
}

var mapDate = createDate(TITLE_HOUSE, TYPE_HOUSE, CHECK_TIME, FEATURES_INCLUDE, PHOTOS_URL);

var mapList = document.querySelector('.map__pins');

var mapTemplate = document.querySelector('#map-template').content.querySelector('.map__pin');

var mapContainer = document.querySelector('.map');
mapContainer.classList.remove('map--faded');

var renderMapElement = function(element) {
	var mapElement = mapTemplate.cloneNode(true);
	mapElement.style.left = element.offer.location.x + 'px';
	mapElement.style.top = element.offer.location.y + 'px';
	mapElement.querySelector('.pin__image').src = element.author.avatar;
	mapElement.querySelector('.pin__image').alt = element.offer.title;

	return mapElement;
}

var fragment = document.createDocumentFragment();

for(var i = 0; i < mapDate.length; i++) {
	fragment.appendChild(renderMapElement(mapDate[i]));
}

mapList.appendChild(fragment);

