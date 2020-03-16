(function() {
  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__list');
  var sliderItems = sliderList.querySelectorAll('.slider__item');
  var templateToggle = document.querySelector('#template').content.querySelector('.slider__toggle');
  var togglesContainer = slider.querySelector('.slider__toggles');
  var SLIDE_WIDTH = 860;
  //показываем переключатели снизу
  //создаем фрагмент
  var fragment = document.createDocumentFragment();

  // в зависимости от количества слайдов добавляем в фрагмент копию шаблона переключателя
  [].forEach.call(sliderItems, function(item, index, array) {
    var elem = templateToggle.cloneNode(true);
    var toggleClass = 'toggle-'+ index;
    elem.classList.add(toggleClass);
    fragment.appendChild(elem);
    togglesContainer.appendChild(fragment);
  });


  [].forEach.call(togglesContainer.querySelectorAll('.slider__toggle'), function(item, index) {
    item.addEventListener('click', function(evt) {
      sliderList.style.left = -(index * SLIDE_WIDTH) + 'px';
      var target = evt.target;
      [].forEach.call(togglesContainer.querySelectorAll('.slider__toggle'), function(item) {
        if(item.classList.contains('slider__toggle--active')) {
          item.classList.remove('slider__toggle--active');
        }
      });
      target.classList.add('slider__toggle--active');
    })
  })


  /*for(var i of sliderItems) {
    fragment.appendChild(templateToggle.cloneNode(true));
    // добавляем фрагмент с переключателями в togglesContainer
    togglesContainer.appendChild(fragment);
  }*/
  // первому из переключателей добавляем класс active
  togglesContainer.querySelector('.slider__toggle').classList.add('slider__toggle--active');


})()
