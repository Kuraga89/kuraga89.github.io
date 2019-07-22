(function(){
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

	var createDate = function(title, type, time, features, photos) {
		var arr = [];
		var newTitle = title;
		for(var i = 0; i < 8; i++) {
			var element = {};
			element.author = {};
			element.author.avatar = 'img/avatars/user0' + (i+1) + '.png';
			element.offer = {}; 
			element.offer.title = window.util.randomValueNoRepeat(newTitle);
			element.offer.price = window.util.randomInteger(1000, 1000000); 
			element.offer.type = window.util.randomValueRepeat(type); 
			element.offer.rooms = window.util.randomInteger(1, 5);
			element.offer.guests = window.util.randomInteger(1, 15); 
			element.offer.checkin = window.util.randomValueRepeat(time); 
			element.offer.checkout = window.util.randomValueRepeat(time);
			element.offer.features = window.util.randomArrayCount(features); 
			element.offer.description = '';
			element.offer.photos = window.util.randomArray(photos);
			element.offer.location = {};
			element.offer.location.x = window.util.randomInteger(0, 1200);
			element.offer.location.y = window.util.randomInteger(130, 630);
			element.offer.address = element.offer.location.x + ', ' + element.offer.location.y;

			arr[i] = element; 
		}
		return arr;
	}

	window.mapDate = createDate(TITLE_HOUSE, TYPE_HOUSE, CHECK_TIME, FEATURES_INCLUDE, PHOTOS_URL);
})();