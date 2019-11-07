(function() {
  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__list');
  var sliderItems = sliderList.querySelectorAll('.slider__item');
  var sliderButtonPrev = slider.querySelector('.slider__button--prev');
  var sliderButtonNext = slider.querySelector('.slider__button--next');
  var SLIDE_WIDTH = 860;
  var templateToggle = document.querySelector('#template').content.querySelector('.slider__toggle');
  var togglesContainer = slider.querySelector('.slider__toggles');

  var showActiveToggle = function(left) {
    var elem = Math.abs(parseInt(left)) / SLIDE_WIDTH;
    var toggles = togglesContainer.querySelectorAll('.slider__toggle');
    toggles.forEach((e) => {
      if(e.classList.contains('slider__toggle--active')) {
        e.classList.remove('slider__toggle--active');
      }
    })
    toggles[elem].classList.add('slider__toggle--active');
  }

  window.showNextSliderItem = function() {
    var left = parseInt(sliderList.style.left) - SLIDE_WIDTH + 'px';

    if(parseInt(sliderList.style.left) <= -(SLIDE_WIDTH * (sliderItems.length-1))) {
     sliderList.style.left = 0;
   }
   else {
    sliderList.style.left = left;
  }

  showActiveToggle(sliderList.style.left);
};

var showPrevSliderItem = function() {
  var left = parseInt(sliderList.style.left) + SLIDE_WIDTH + 'px';

  if(parseInt(sliderList.style.left) == 0) {
    sliderList.style.left = -(SLIDE_WIDTH * (sliderItems.length-1)) + 'px';
  }
  else {
    sliderList.style.left = left;
  }
};

sliderButtonNext.addEventListener('click', showNextSliderItem);
sliderButtonPrev.addEventListener('click', showPrevSliderItem);
})()

