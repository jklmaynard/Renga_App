angular.module('rengaApp')
.factory('rengas', ['$http', function($http) {
  var obj = {rengas: []};
  obj.getAll = function() {
    return $http.get('/rengas.json').then(function(data) {
      angular.copy(data.data, obj.rengas);
    });
  };
return obj;
}]);
