var writePopup = document.querySelector(".modal-write");
var mapPopup = document.querySelector(".modal-map");
var catalogMenu = document.querySelector(".catalog-menu");
var closeWrite = writePopup.querySelector(".modal-close");
var closeMap = mapPopup.querySelector(".modal-close");
var writeLink = document.querySelector(".button-writepop");
var mapLink = document.querySelector(".index-map");
var catalogLink = document.querySelector(".catalog-menu-title");
var writeName = writePopup.querySelector("[name=name");
var image = document.querySelector(".catalog-item-image");
var overlay = document.querySelector("img-overlay");


catalogLink.addEventListener("click", function(evt){
	evt.preventDefault();
	catalogMenu.classList.toggle("catalog-menu-hidden");
});


writeLink.addEventListener("click", function(evt){
	evt.preventDefault();
	writePopup.classList.add("modal-show");
	writeName.focus();
});

closeWrite.addEventListener("click", function(evt){
	evt.preventDefault();
	writePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();

		if(writePopup.classList.contains("modal-show")) {
			writePopup.classList.remove("modal-show");
		}
	}
});

mapLink.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();

		if(mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});

