(function() {
var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.slider__list');
var sliderItems = sliderList.querySelectorAll('.slider__item');
var sliderButtonPrev = slider.querySelector('.slider__button--prev');
var sliderButtonNext = slider.querySelector('.slider__button--next');
var SLIDE_WIDTH = 860;
var templateToggle = document.querySelector('#template').content.querySelector('.slider__toggle');
var togglesContainer = slider.querySelector('.slider__toggles');




togglesContainer.addEventListener('click', function(evt) {
  var target = evt.target;

  if(target.classList.contains('slider__toggle')){
    console.log('ddd');
  }
})

})();
