angular.module('rengaApp').controller('RengaCtrl', [
  '$scope',
  '$stateParams',
  'rengas',
  'renga',
  function($scope, $stateParams, rengas, renga) {
    $scope.renga = renga;
    $scope.addStanza = function() {
      if ($scope.first_line = '') {
        return;
      }
      stanza_number = renga.stanzas.length;
      rengas.addStanza(renga.id, {
        ordinal: stanza_number + 1,
        line_one: $scope.line_one,
        line_two: $scope.line_two,
        line_three: $scope.line_three,
        is_hokku: stanza_number === 0 ? true : false,
        is_waki: stanza_number === 1 ? true : false,
        is_daisan: stanza_number === 2 ? true : false,
        renga_id: renga.id
      }).then(function(stanza) {
        $scope.renga.stanzas.push(stanza);
      });
      $scope.line_one = '';
      $scope.line_two = '',
      $scope.line_three = ''
    }
  }
]);
