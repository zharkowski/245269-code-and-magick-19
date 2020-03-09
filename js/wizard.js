'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
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

  var wizard = {
    coatChangeHandler: function () {},
    eyesChangeHandler: function () {}
  };

  var newColorIndex = newColorIndexHandler(coatColors.length);
  var changeColorHandler = function (element, colorArray, attribute) {
    var colorIndex = newColorIndex();
    element.style[attribute] = colorArray[colorIndex];
  };

  wizardCoat.addEventListener('click', function () {
    changeColorHandler(wizardCoat, coatColors, 'fill');
    wizard.coatChangeHandler(wizardCoat.style.fill);
  });

  wizardEyes.addEventListener('click', function () {
    changeColorHandler(wizardEyes, eyesColors, 'fill');
    wizard.eyesChangeHandler(wizardEyes.style.fill);
  });

  fireball.addEventListener('click', function () {
    changeColorHandler(fireball, fireballColors, 'background');
  });

  window.wizard = wizard;
})();
