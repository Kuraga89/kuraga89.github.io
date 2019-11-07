(function() {
	window.utils = {
		randomValue: function(array) {
			return array[Math.floor(Math.random()*array.length)];
		}
	}
})()