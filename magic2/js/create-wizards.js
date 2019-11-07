(function() {
	var setup = document.querySelector('.setup');	
	var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); 
	var wizardList = document.querySelector('.setup-similar-list');
	var names  = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
	var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
	var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', ' rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

	var createWizards = function() {
		var array = [];

		for(var i =0; i < 4; i++) {
			var element = {};
			element.name = window.utils.randomValue(names) + ' ' + window.utils.randomValue(surnames);
			element.coatColor = window.utils.randomValue(coats);
			element.eyesColor = window.utils.randomValue(eyes);
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
})()