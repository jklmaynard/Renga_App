angular.module('rengaApp').controller('MainCtrl', [
  '$scope',
  '$state',
  'rengas',
  function($scope, $state, rengas) {
    $scope.rengas = rengas.rengas;
    $scope.addRenga = function() {
      rengas.create({
        title: $scope.title,
        likes: 0
      });
    };
}]);
