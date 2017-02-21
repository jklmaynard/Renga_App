angular.module('rengaApp', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('rengas', {
      url: '/rengas/{id}',
      templateUrl: '/rengas.html',
      controller: 'RengaCtrl'
    });
    // $urlRouterProvider.otherwise('home');
  }
])
.factory('rengas', function(){
  var obj = {
    rengas: [
      {title: 'renga 1',
      stanzas: [
        {
          ordinal: 1,
          is_hokku: true,
          is_waki: false,
          is_daisan: false,
          is_ageku: false,
          line_one: "so much depends",
          line_two: "upon",
          line_three: "a red wheel barrow"
        },
        {
          ordinal: 2,
          is_hokku: false,
          is_waki: true,
          is_daisan: false,
          is_ageku: false,
          line_one: "glazed with",
          line_two: "rain water",
          line_three: null
        },
        {
          ordinal: 3,
          is_hokku: false,
          is_waki: false,
          is_daisan: true,
          is_ageku: true,
          line_one: "beside the white",
          line_two: "chickens",
          line_three: null
        }
      ]
    },
      {title: 'renga 2',
      stanzas: [
        {
          ordinal: 1,
          is_hokku: true,
          is_waki: false,
          is_daisan: false,
          is_ageku: false,
          line_one: "so much depends",
          line_two: "upon",
          line_three: "a red wheel barrow"
        },
        {
          ordinal: 2,
          is_hokku: false,
          is_waki: true,
          is_daisan: false,
          is_ageku: false,
          line_one: "glazed with",
          line_two: "rain water",
          line_three: null
        },
        {
          ordinal: 3,
          is_hokku: false,
          is_waki: false,
          is_daisan: true,
          is_ageku: true,
          line_one: "beside the white",
          line_two: "chickens",
          line_three: null
        }
      ]
    }]
  };
  return obj;
})
.controller('RengaCtrl', [
  '$scope',
  '$stateParams',
  'rengas',
  function($scope, $stateParams, rengas) {
    $scope.renga = rengas.rengas[$stateParams.id];
  }
])
.controller('MainCtrl', [
  '$scope',
  'rengas',
  function($scope, rengas) {
    $scope.rengas = rengas.rengas;
}]);
