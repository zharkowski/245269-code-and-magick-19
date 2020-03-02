'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var randomNumber = function (end, start) {
    if (start === undefined) {
      start = 0;
    }
    return Math.floor(start + Math.random() * (end + 1 - start));
  };

  var randomElement = function (array) {
    return array[randomNumber(array.length - 1)];
  };

  window.utils = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    randomNumber: randomNumber,
    randomElement: randomElement
  };
})();
