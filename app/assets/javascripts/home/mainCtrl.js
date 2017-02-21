angular.module('rengaApp').controller('MainCtrl', [
  '$scope',
  'rengas',
  function($scope, rengas) {
    $scope.rengas = rengas.rengas;
}]);
