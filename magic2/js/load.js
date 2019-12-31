(function() {
	var wizardList = document.querySelector('.setup-similar-list');

	var onLoad = function(wizards) {
		var fragment = document.createDocumentFragment();

		for(var i = 0; i < 4; i++) {
			fragment.appendChild(renderWizard(window.utils.randomValue(wizards)));
		}

		wizardList.appendChild(fragment);
		document.querySelector('.setup-similar').classList.remove('hidden');
	}
})()