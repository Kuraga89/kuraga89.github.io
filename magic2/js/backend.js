(function() {
	var URL = {
		LOAD: 'https://js.dump.academy/code-and-magick/data',
		SAVE: 'https://js.dump.academy/code-and-magick'
	}
	var URL_LOAD = '';
	window.backend = {
		load: function(onLoad, onError) {
			var xhr = new XMLHttpRequest();

			xhr.responseType = 'json';

			xhr.addEventListener('load', function() {
				if(xhr.status === 200) {
					onLoad(xhr.response);
				} else {
					onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
				}
			})

			xhr.addEventListener('error', function() {
				onError('Произошла ошибка соединения');
			});

			xhr.addEventListener('timeout', function() {
				onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
			});

			xhr.timeout = 10000;

			xhr.open('GET',  URL.LOAD);
			xhr.send();
		},
		
		save: function(data, onLoad, onError) {
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';

			xhr.addEventListener('load', function() {
				if(xhr.status === 200) {
					onLoad(xhr.response);
				} else {
					onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
				}
			})

			xhr.open('POST', URL.SAVE);
			xhr.send(data);

		}
	}
})()