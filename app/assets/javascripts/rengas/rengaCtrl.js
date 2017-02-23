angular.module('rengaApp').controller('RengaCtrl', [
  '$scope',
  '$stateParams',
  'rengas',
  'renga',
  function($scope, $stateParams, rengas, renga) {
    $scope.renga = renga;
  }
]);
