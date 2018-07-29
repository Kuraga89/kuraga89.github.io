var linkMap = document.querySelector(".contacts-button-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt){
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt){
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27) {

		if(popupMap.classList.contains("modal-show")){
			evt.preventDefault();
			popupMap.classList.remove("modal-show");
		}
	}
});