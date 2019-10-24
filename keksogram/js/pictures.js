var picturesContainer = document.querySelector('.pictures');
var templatePicture = document.querySelector('#picture-template').content.querySelector('.picture');
var galleryOwerlay = document.querySelector('.gallery-overlay');


var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var descriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

var randomFromMinMax = function(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

var randomFromArray = function(array) {
	return array[Math.floor(Math.random * array.length)];
}

var createPicture = function() {
	var array = [];

	for (var i = 0; i < 25; i++) {
		var element = {};
		element.url = `photos/${i}.jpg`;
		element.likes = randomFromMinMax(15, 200);
		element.comments = randomFromArray(comments);
		element.description = randomFromArray(descriptions);
		array.push(element);
	}
	return array;
}

var pictures = createPicture();

var renderPicture = function(photo) {
	var pictureItem = templatePicture.cloneNode(true);
	pictureItem.querySelector('.picture-image').src = photo.url;
	pictureItem.querySelector('.picture-likes').textContent = photo.likes;
	pictureItem.querySelector('.picture-comments').textContent = photo.comments;

	return pictureItem;
}

var showBigPicture = function() {
	galleryOwerlay.classList.remove('hidden');

	var picture = pictures[1];
	galleryOwerlay.querySelector('.gallery-overlay-image').src = picture.url;
	galleryOwerlay.querySelector('.likes-count').textContent = picture.likes;
	galleryOwerlay.querySelector('.comments-count').textContent = picture.likes;
}

var showPictures = function() {
	var fragment = document.createDocumentFragment();

	for(var i = 0; i < 25; i++) {
		fragment.appendChild(renderPicture(pictures[i]));
	}
	picturesContainer.appendChild(fragment);

	showBigPicture();
}

showPictures();


