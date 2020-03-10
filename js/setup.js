'use strict';

(function () {
  var SIMILAR_WIZARDS_AMOUNT = 4;
  var similarWizards = [];
  var coatColor;
  var eyesColor;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // var createWizardsArray = function (number) {
  //   var wizards = [];
  //   for (var i = 0; i < number; i++) {
  //     var wizard = {
  //       name: window.utils.randomElement(wizardFirstNames) + ' ' + window.utils.randomElement(wizardLastNames),
  //       coatColor: window.utils.randomElement(coatColors),
  //       eyesColor: window.utils.randomElement(eyesColors)
  //     };
  //     wizards.push(wizard);
  //   }
  //   return wizards;
  // };

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    document.querySelectorAll('.setup-similar-item').
    forEach(function (item) {
      item.remove();
    });

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < SIMILAR_WIZARDS_AMOUNT; i++) {
      fragment.appendChild(createWizardElement(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank++;
    }
    return rank;
  };

  var updateWizards = function () {
    renderWizards(similarWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (!rankDiff) {
        rankDiff = namesComparator(left, right);
      }
      return rankDiff;
    }));
  };

  window.wizard.coatChangeHandler = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.eyesChangeHandler = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    similarWizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.backend.commonErrorHandler);

})();
