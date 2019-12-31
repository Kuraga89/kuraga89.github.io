(function() {
  var feedbackButton = document.querySelector('.feedback-buttons__item--feedback');
  var feedbackModal = document.querySelector('.modal-feedback');
  var feedbackClose = feedbackModal.querySelector('.modal__close');

  var onModalEscPress = function(evt) {
    window.util.isEscEvent(evt, modalClose);
  }

  var modalClose = function() {
    feedbackModal.classList.remove('modal-show');
  }

  var modalOpen = function() {
    feedbackModal.classList.add('modal-show');
    document.addEventListener('keydown', onModalEscPress);
  }

  feedbackButton.addEventListener("click", function(evt) {
    modalOpen();
  });

  feedbackModal.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, modalOpen);
  })

  feedbackClose.addEventListener("click", function(evt) {
    modalClose();
  });
})();
