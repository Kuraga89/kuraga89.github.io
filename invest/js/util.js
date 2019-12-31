(function() {
  window.util = {
    isEscEvent: function(evt, action) {
      if(evt.keyCode == window.Code.ESC) {
        action();
      }
    },
    isEnterEvent: function(evt, action) {
      if(evt.keyCode == window.Code.ESC) {
        action();
      }
    }
  }
})()
