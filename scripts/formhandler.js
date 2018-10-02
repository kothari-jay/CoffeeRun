(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('could not find element with selector:' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('setting submitHandler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = $(this).serializeArray();
      console.log(data);
      fn(data);

    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
