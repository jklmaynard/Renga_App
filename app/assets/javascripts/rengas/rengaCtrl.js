angular.module('rengaApp').controller('RengaCtrl', [
  '$scope',
  '$stateParams',
  'rengas',
  function($scope, $stateParams, rengas) {
    $scope.renga = rengas.rengas[$stateParams.id];
  }
]);
