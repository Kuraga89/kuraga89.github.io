var setup = document.querySelector('.setup');	

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); 

console.log(wizardTemplate);

var wizardList = document.querySelector('.setup-similar-list');

var names  = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', ' rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
	if(evt.keyCode === 27) {
		closePopup();
	}
}

setupOpen.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 13) {
		openPopup();
	}
})

var openPopup = function() {
	setup.classList.remove('hidden');

	document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function() {
	setup.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function() {
	openPopup();
})

setupClose.addEventListener('click', function() {
	closePopup();
})

//изменение волшебника по клику
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', ' rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', ' #e848d5', '#e6e848'];

var setupWizard = setup.querySelector('.setup-wizard');

var changeWizardColorsByPress = function(evt) {
	var target = evt.target;

	if(target.classList.contains('wizard-coat')) {
		var color = randomValue(coatColors);
		target.style.fill = color;
		setup.querySelector('input[name="coat-color"]').value = color;
	}
	else if(target.classList.contains('wizard-eyes')) {
		var color = randomValue(eyesColors);
		target.style.fill = color;
		setup.querySelector('input[name="eyes-color"]').value = color;
	}
}

var setupColorFireball = setup.querySelector('.setup-fireball-wrap');

var changeWizardFireballsByPress = function() {
	setupColorFireball.style.backgroundColor = randomValue(fireballColors);
}

setupWizard.addEventListener('click', changeWizardColorsByPress);
setupColorFireball.addEventListener('click', changeWizardFireballsByPress);


var randomValue = function(array) {
	return array[Math.floor(Math.random()*array.length)];
}

var createWizards = function() {
	var array = [];

	for(var i =0; i < 4; i++) {
		var element = {};
		element.name = randomValue(names) + ' ' + randomValue(surnames);
		element.coatColor = randomValue(coats);
		element.eyesColor = randomValue(eyes);
		array.push(element);
	}

	return array;
}

var wizards = createWizards();

var renderWizard = function(wizard) {
	var wizardItem = wizardTemplate.cloneNode(true);
	wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return wizardItem;
}

var fragment = document.createDocumentFragment();

for(var i = 0; i < 4; i++) {
	fragment.appendChild(renderWizard(wizards[i]));
}

wizardList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
