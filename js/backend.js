'use strict';

(function () {
  var commonErrorHandler = function (wrongXhr) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    var error;
    switch (wrongXhr.status) {
      case 400:
        error = 'Неверный запрос';
        break;
      case 401:
        error = 'Пользователь не авторизован';
        break;
      case 404:
        error = 'Ничего не найдено';
        break;
      default:
        error = 'Cтатус ответа: ' + wrongXhr.status + ' ' + wrongXhr.statusText;
    }

    node.textContent = error;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var load = function (loadHandler, errorHandler) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      try {
        loadHandler(xhr.response);
      } catch (err) {
        errorHandler(xhr);
      }
    });

    xhr.send();
  };

  var save = function (data, loadHandler, errorHandler) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      try {
        loadHandler(xhr.response);
      } catch (err) {
        errorHandler(xhr);
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save,
    commonErrorHandler: commonErrorHandler
  };
})();
