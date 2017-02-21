angular.module('rengaApp', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('rengas', {
      url: '/rengas/{id}',
      templateUrl: 'rengas/_rengas.html',
      controller: 'RengaCtrl'
    });
    $urlRouterProvider.otherwise('home');
  }
]);
