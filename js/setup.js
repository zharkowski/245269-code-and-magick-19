'use strict';

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
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var createWizardsArray = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    var wizard = {
      name: randomElement(wizardFirstNames) + ' ' + randomElement(wizardLastNames),
      coatColor: randomElement(coatColors),
      eyesColor: randomElement(eyesColors)
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

var wizards = createWizardsArray(4);
renderWizards(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');

var setupWindow = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var saveButton = document.querySelector('.setup-submit');
var setupForm = document.querySelector('.setup-wizard-form');

var setupOpenHandler = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      setupCloseHandler();
    }
  });
  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      setupCloseHandler();
    }
  });
};

setupOpenHandler();

var setupCloseHandler = function () {
  setupWindow.classList.add('hidden');
};

var setupFormSendHandler = function () {
  setupForm.submit();
};

setupOpenButton.addEventListener('click', function () {
  setupOpenHandler();
});

setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setupOpenHandler();
  }
});

setupCloseButton.addEventListener('click', function () {
  setupCloseHandler();
});

saveButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setupFormSendHandler();
  }
});

saveButton.addEventListener('click', function () {
  setupFormSendHandler();
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var newColorIndex = function (colorAmount) {
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

var newCoatColorIndex = newColorIndex(coatColors.length);
var changeColorHandler = function (element, colorArray, attribute) {
  var colorIndex = newCoatColorIndex();
  element.style[attribute] = colorArray[colorIndex];
};

wizardCoat.addEventListener('click', function () {
  changeColorHandler(wizardCoat, coatColors, 'fill');
});

wizardEyes.addEventListener('click', function () {
  changeColorHandler(wizardEyes, eyesColors, 'fill');
});

fireball.addEventListener('click', function () {
  changeColorHandler(fireball, fireballColors, 'background');
});
