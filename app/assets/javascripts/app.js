angular.module('rengaApp', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        rengaPromise: ['rengas', function(rengas) {
          return rengas.getAll();
        }]
      }
    });
    $stateProvider.state('rengas', {
      url: '/rengas/{id}',
      templateUrl: 'rengas/_rengas.html',
      controller: 'RengaCtrl'
    });
    $stateProvider.state('new_renga', {
      url: '/new-poem',
      templateUrl: 'static/_new-renga.html',
      controller: 'MainCtrl'
    });
    $urlRouterProvider.otherwise('home');
  }
]);
