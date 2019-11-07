(function() {
	var fieldsets = document.querySelectorAll('.form__element');
	
	window.switchFieldsetForm = {
		disable: function() {
			[].forEach.call(fieldsets, (e)=>{
				e.setAttribute('disabled', 'disabled');
			});
		},

		enable: function() {
			[].forEach.call(fieldsets, (e)=>{
				e.removeAttribute('disabled');
			});
		}
	}
})()