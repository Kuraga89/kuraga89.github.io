'use strict';

(function(){
	var setupPlayer = document.querySelector('.setup-player');
	var wizardCoat = setupPlayer.querySelector('.wizard-coat');
	var coatColors = ['rgb(101, 137, 164)',
	'rgb(241, 43, 107)',
	'rgb(146, 100, 161)',
	'rgb(56, 159, 117)',
	'rgb(215, 210, 55)',
	'rgb(0, 0, 0)'];

	var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
	var setupFireballColor = document.querySelector('.setup-fireball-wrap');

	var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
	var wizardEyes = setupPlayer.querySelector('.wizard-eyes');

	//изменяем цвет плаща волшебника
	var changeWizardCoatColor = function() {
		var color = window.util.randomValue(coatColors);
		wizardCoat.style.fill = color;
	};

	wizardCoat.addEventListener('click', changeWizardCoatColor);

//изменяем цвет файербола волшебника
var changeWizardFireballColor = function() {
	var color = window.util.randomValue(fireballColor);
	setupFireballColor.style.backgroundColor = color;
}

setupFireballColor.addEventListener('click', changeWizardFireballColor);

//изменяем цвет глаз волшебника
var changeWizardEyeslColor = function() {
	var color = window.util.randomValue(eyesColor);
	wizardEyes.style.fill = color;
}

wizardEyes.addEventListener('click', changeWizardEyeslColor);
})();
