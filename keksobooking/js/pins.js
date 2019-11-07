(function() {
	var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде', 'Значения не должны повторяться'];

	var types = ['palace', 'flat', 'house', 'bungalo'];
	var checkinTime = ['12:00', '13:00', '14:00'];
	var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
	var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
	'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
	'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


	var createPins = function() {
		var array = [];

		for(var i = 0; i < 8; i++) {
			var element = {};
			element.author = {};
			element.author.avatar = `img/avatars/user0${i+1}.png`;
			element.offer = {};
			element.offer.title = window.utils.randomValueNoRepeat(titles);				
			element.offer.price = window.utils.randomInteger(1000, 1000000);
			element.offer.type = window.utils.randomValueRepeat(types);
			element.offer.rooms = window.utils.randomInteger(1, 5);
			element.offer.guests = window.utils.randomInteger(1, 15);
			element.offer.checkin = window.utils.randomValueRepeat(checkinTime);
			element.offer.checkout = window.utils.randomValueRepeat(checkinTime);
			element.offer.features = window.utils.randomArrayCount(features);
			element.offer.descriptions = '';
			element.offer.photos = window.utils.randomArray(photos);
			element.offer.location = {};
			element.offer.location.x = window.utils.randomInteger(0, 1200);
			element.offer.location.y = window.utils.randomInteger(130, 630);
			element.offer.address = `${element.offer.location.x}, ${element.offer.location.y}`;
			element.id = element.offer.location.x + element.offer.location.y + element.offer.type;

			array.push(element);
		}
		return array;
	}

	window.pins = createPins(); // создаем метки 

})()