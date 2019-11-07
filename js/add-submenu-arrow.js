(function() {
  var mainMenuItems = document.querySelectorAll('.site-list__item');

  mainMenuItems.forEach(function(element) {
    if(element.children.length > 1) {
      element.classList.add('site-list__parent')
    };
  })
})();
