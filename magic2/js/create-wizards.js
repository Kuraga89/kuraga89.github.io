(function() {
	var setup = document.querySelector('.setup');	
	var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); 
	var wizardList = document.querySelector('.setup-similar-list');
	var setupError = setup.querySelector('.setup-error');

	var renderWizard = function(wizard) {
		var wizardItem = wizardTemplate.cloneNode(true);
		wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
		wizardItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		wizardItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

		return wizardItem;
	}

	var onLoad = function(wizards) {
		var fragment = document.createDocumentFragment();

		for(var i = 0; i < 4; i++) {
			fragment.appendChild(renderWizard(window.utils.randomValue(wizards)));
		}

		wizardList.appendChild(fragment);
		document.querySelector('.setup-similar').classList.remove('hidden');
	}

	var onError = function(message) {
		setupError.textContent = ' ';
		setupError.textContent = message;
	}

	window.backend.load(onLoad, onError);
})()