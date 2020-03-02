'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var createWizardsArray = function (number) {
    var wizards = [];
    for (var i = 0; i < number; i++) {
      var wizard = {
        name: window.utils.randomElement(wizardFirstNames) + ' ' + window.utils.randomElement(wizardLastNames),
        coatColor: window.utils.randomElement(coatColors),
        eyesColor: window.utils.randomElement(eyesColors)
      };
      wizards.push(wizard);
    }
    return wizards;
  };

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
  };

  var createList = function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(createWizardElement(array[i]));
    }
    return fragment;
  };

  var renderWizards = function (wizards) {
    similarListElement.appendChild(createList(wizards));
  };

  window.setup = {
    coatColors: coatColors,
    eyesColors: eyesColors
  };

  var wizards = createWizardsArray(4);
  renderWizards(wizards);
})();
