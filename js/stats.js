'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_SHADOW_GAP = 10;
var TEXT_X = 110;
var TEXT_Y = 30;
var TEXT_GAP = 20;
var FONT_SIZE = 16;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_MAX_HEIGHT = 150;
var HISTOGRAM_GAP = 50;
var HISTOGRAM_Y = 100;

var getMaxTime = function (times) {
  var maxTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + CLOUD_SHADOW_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000000';
  ctx.font = FONT_SIZE + 'px "PT Mono"';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_GAP);

  for (var i = 0; i < names.length; i++) {
    var barHeight = (HISTOGRAM_MAX_HEIGHT * times[i]) / getMaxTime(times);

    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + (i + 1) * HISTOGRAM_GAP + i * HISTOGRAM_WIDTH, HISTOGRAM_Y + (HISTOGRAM_MAX_HEIGHT - barHeight) - TEXT_GAP, HISTOGRAM_WIDTH + HISTOGRAM_GAP);

    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, 100%, ' + (Math.random() * 100) + '%)';
    ctx.fillRect(CLOUD_X + (i + 1) * HISTOGRAM_GAP + i * HISTOGRAM_WIDTH, HISTOGRAM_Y + (HISTOGRAM_MAX_HEIGHT - barHeight), HISTOGRAM_WIDTH, barHeight);

    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + (i + 1) * HISTOGRAM_GAP + i * HISTOGRAM_WIDTH, HISTOGRAM_Y + HISTOGRAM_MAX_HEIGHT + (TEXT_GAP - FONT_SIZE), HISTOGRAM_WIDTH + HISTOGRAM_GAP);
  }
};
