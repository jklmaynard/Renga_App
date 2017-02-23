angular.module('rengaApp').controller('MainCtrl', [
  '$scope',
  'rengas',
  function($scope, rengas) {
    $scope.rengas = rengas.rengas;
    $scope.addRenga = function() {
      rengas.create({
        title: $scope.title,
        likes: 0
      });
    };
}]);
