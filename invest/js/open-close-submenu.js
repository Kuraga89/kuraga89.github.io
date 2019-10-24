(function() {
  var siteList = document.querySelector('.site-list');
  siteList.addEventListener('click', function(evt) {
    var target = evt.target;
    var parent= target.parentNode;

    if(parent.classList.contains('site-list__parent')) {
      console.log('jjj');
    }

    if(parent.classList.contains('site-list__parent')) {
      if(parent.classList.contains('site-list__item--open')) {
        parent.classList.remove('site-list__item--open');
      }
      else {
        if(document.querySelector('.site-list__item--open')) {
          document.querySelector('.site-list__item--open').classList.remove('site-list__item--open');
        }
         parent.classList.add('site-list__item--open');
        }
      }
  })
})();
