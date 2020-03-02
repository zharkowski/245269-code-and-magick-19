'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = document.querySelector('.setup-close');
  var saveButton = document.querySelector('.setup-submit');
  var setupForm = document.querySelector('.setup-wizard-form');
  var upload = document.querySelector('.upload');

  var setupOpenHandler = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', function (evt) {
      if (evt.key === window.utils.ESC_KEY) {
        setupCloseHandler();
      }
    });
    setupCloseButton.addEventListener('keydown', function (evt) {
      if (evt.key === window.utils.ENTER_KEY) {
        setupCloseHandler();
      }
    });
  };

  var setupCloseHandler = function () {
    setupWindow.classList.add('hidden');
  };

  var setupFormSendHandler = function () {
    setupForm.submit();
  };

  document.querySelector('.setup-similar').classList.remove('hidden');
  setupOpenHandler();

  setupOpenButton.addEventListener('click', function () {
    setupOpenHandler();
  });

  setupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      setupOpenHandler();
    }
  });

  setupCloseButton.addEventListener('click', function () {
    setupCloseHandler();
  });

  saveButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      setupFormSendHandler();
    }
  });

  saveButton.addEventListener('click', function () {
    setupFormSendHandler();
  });

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var isDragged = false;

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (isDragged) {
        var clickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          upload.removeEventListener('click', clickPreventDefaultHandler);
        };
        upload.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();
