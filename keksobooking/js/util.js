(function() {
	var ESC_KEYCODE = 27;
	
	window.util = {
		//функция, которая проверяет была ли нажата клавиша esc
		isEscEvent: function(evt, action) {
			if(evt.keyCode == ESC_KEYCODE) {
				action();
			}
		},

		//функция генерирующая случайное число из диапазона
		randomInteger: function(min, max) {
			var rand = min - 0.5 + Math.random() * (max - min + 1);
			rand = Math.round(rand);
			return rand;
		},

		//функция генерирующая случайный элемент массива
		randomValueRepeat: function(arr) {
			var rand = Math.floor(Math.random() * arr.length);
			return arr[rand];
		},

		//функция генерирующая случайный неповторяющийся элемент массива
		randomValueNoRepeat: function(arr) {
			var rand = Math.floor(Math.random() * arr.length);
			var newRand = arr[rand];
			if(rand != 0) {
				arr.splice(rand, 1);
			}
			else {
				arr.splice(0, 1);
			}	
			return newRand;	
		},

		//функция создающая на основе массива новый массив с произвольным количеством элементов
		randomArrayCount: function(arr) {   
			var newArr = arr.slice();   
			var array = [];   
			var countElement = this.randomInteger(0, newArr.length);   
			for(var i = 0; i < countElement; i++) {
				array[i] = this.randomValueNoRepeat(newArr);   
			}
			return array;
		},

		//функция создающая на основе массива новый массив, где элементы следуют в произвольном порядке
		randomArray: function(arr) {
			var newArr = arr.slice(); 
			var array = [];  
			var count = newArr.length;
			for (var i = 0; i < count; i++) {
				array[i] = this.randomValueNoRepeat(newArr);  
			}
			return array;
		},

		// определение координат элемента 
		getCoords: function(elem) { // кроме IE8-
			var box = elem.getBoundingClientRect();
			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			};
		},

		//удаление элемента из списка детей родителя
		removeElement: function(classElem, parent) {
			if(document.querySelector(classElem)) {
				var item = document.querySelector(classElem);
				parent.removeChild(item);		
			};
		}	
	}
})();