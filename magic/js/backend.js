(function() {

	

	window.backend = {
		load: function(onSuccess, onError) {
			var URL = 'https://js.dump.academy/code-and-magick/data';
			var xhr  = new XMLHttpRequest();
			xhr.responseType = 'json';			

			xhr.addEventListener('load', function() {
				var error;
				switch (xhr.status) {
					case 200: 
					onSuccess(xhr.response);
					break;
					case 400:
					error = 'Неверный запрос';
					break;
					case 401:
					error = 'Пользователь не авторизирован';
					break;
					case 404:
					error = 'Ничего не найдено';
					break;
					default:
					error = 'Статус ответа: : ' + xhr.status + ' ' + xhr.statusText;
				};

				if(error) {
					window.onError(error);
				};			
			});
			xhr.open('GET', URL);
			xhr.send();
		},

		save: function(data, onSuccess, onError) {
			var URL = 'https://js.dump.academy/code-and -magick';
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';

			xhr.addEventListener('load', function() {
				var error;
				switch (xhr.status) {
					case 200: 
					onSuccess(xhr.response);
					break;
					case 400:
					error = 'Неверный запрос';
					break;
					case 401:
					error = 'Пользователь не авторизирован';
					break;
					case 404:
					error = 'Ничего не найдено';
					break;
					default:
					error = 'Статус ответа: : ' + xhr.status + ' ' + xhr.statusText;
				};

				if(error) {
					window.onError(error);
				}		
			});

			xhr.open('POST', URL);
			xhr.send(data);
		}
	}
})();