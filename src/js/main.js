
var upgrades = require('./upgrades');
var gameState = require('./gamestate');
var gameTimer = require('./gametimer');
var gainCalculator = require('./gaincalculator');
var functionBuilder = require('./functionbuilder');
var animatedFlyTip = require('./animatedflytip');
var favico = require('./favico');
var gameController = require('./gamecontroller');
var upgradeManager = require('./upgrademanager');

angular.module('c', ['ui.bootstrap', 'hljs', 'LocalStorageModule', 'ngTable', 'angularMoment'])

  .constant('Upgrades', upgrades)

  .constant('Version', '0.0.1')

  .service('favico', favico)

  .service('AnimatedFlyTip', animatedFlyTip)

  .service('GameState', gameState)

  .service('GameTimer', gameTimer)

  .service('UpgradeManager', upgradeManager)

  .service('GainCalculator', gainCalculator)

  .service('FunctionBuilder', functionBuilder)

  .controller('Game', gameController);