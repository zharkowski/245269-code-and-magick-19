'use strict';

(function () {
  var SIMILAR_WIZARDS_AMOUNT = 4;

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

  var createList = function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < SIMILAR_WIZARDS_AMOUNT; i++) {
      fragment.appendChild(createWizardElement(window.utils.randomElement(array)));
    }
    return fragment;
  };

  var renderWizards = function (wizards) {
    similarListElement.appendChild(createList(wizards));
  };

  window.backend.load(renderWizards, window.backend.commonErrorHandler);
})();
