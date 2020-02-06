'use strict';

var randomElement = function (array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [
  {
    name: randomElement(WIZARD_FIRST_NAMES) + ' ' + randomElement(WIZARD_LAST_NAMES),
    coatColor: randomElement(COAT_COLORS),
    eyesColor: randomElement(EYES_COLORS)
  },
  {
    name: randomElement(WIZARD_FIRST_NAMES) + ' ' + randomElement(WIZARD_LAST_NAMES),
    coatColor: randomElement(COAT_COLORS),
    eyesColor: randomElement(EYES_COLORS)
  },
  {
    name: randomElement(WIZARD_FIRST_NAMES) + ' ' + randomElement(WIZARD_LAST_NAMES),
    coatColor: randomElement(COAT_COLORS),
    eyesColor: randomElement(EYES_COLORS)
  },
  {
    name: randomElement(WIZARD_FIRST_NAMES) + ' ' + randomElement(WIZARD_LAST_NAMES),
    coatColor: randomElement(COAT_COLORS),
    eyesColor: randomElement(EYES_COLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  return wizardElement;
};

var createList = function (array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i]));
  }
  return fragment;
};

similarListElement.appendChild(createList(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');
