(function() {
	var setup = document.querySelector('.setup');	
	var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', ' rgb(0, 0, 0)'];
	var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
	var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', ' #e848d5', '#e6e848'];

	var setupWizard = setup.querySelector('.setup-wizard');

	var changeWizardColorsByPress = function(evt) {
		var target = evt.target;

		if(target.classList.contains('wizard-coat')) {
			var color = window.utils.randomValue(coatColors);
			target.style.fill = color;
			setup.querySelector('input[name="coat-color"]').value = color;
		}
		else if(target.classList.contains('wizard-eyes')) {
			var color = window.utils.randomValue(eyesColors);
			target.style.fill = color;
			setup.querySelector('input[name="eyes-color"]').value = color;
		}
	}

	var setupColorFireball = setup.querySelector('.setup-fireball-wrap');

	var changeWizardFireballsByPress = function() {
		setupColorFireball.style.backgroundColor = window.utils.randomValue(fireballColors);
	}

	setupWizard.addEventListener('click', changeWizardColorsByPress);
	setupColorFireball.addEventListener('click', changeWizardFireballsByPress);
})()