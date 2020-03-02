'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var newColorIndexHandler = function (colorAmount) {
    var currentColorIndex = 0;
    return function () {
      if (currentColorIndex === (colorAmount - 1)) {
        currentColorIndex = 0;
      } else {
        currentColorIndex++;
      }
      return currentColorIndex;
    };
  };

  var newColorIndex = newColorIndexHandler(window.setup.coatColors.length);
  var changeColorHandler = function (element, colorArray, attribute) {
    var colorIndex = newColorIndex();
    element.style[attribute] = colorArray[colorIndex];
  };

  wizardCoat.addEventListener('click', function () {
    changeColorHandler(wizardCoat, window.setup.coatColors, 'fill');
  });

  wizardEyes.addEventListener('click', function () {
    changeColorHandler(wizardEyes, window.setup.eyesColors, 'fill');
  });

  fireball.addEventListener('click', function () {
    changeColorHandler(fireball, fireballColors, 'background');
  });
})();
