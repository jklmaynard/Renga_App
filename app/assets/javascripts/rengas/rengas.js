angular.module('rengaApp')
.factory('rengas', ['$http', function($http) {
  var obj = {rengas: []};
  obj.getAll = function() {
    return $http.get('/rengas.json').then(function(data) {
      angular.copy(data.data, obj.rengas);
    });
  };
  obj.create = function(renga) {
    return $http.post('/rengas.json', renga).then(function(data){
      obj.rengas.push(data.data)
    });
  };
return obj;
}]);
