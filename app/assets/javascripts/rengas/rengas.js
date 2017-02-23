angular.module('rengaApp')
.factory('rengas', ['$http', '$state', function($http, $state) {
  var obj = {rengas: []};
  obj.getAll = function() {
    return $http.get('/rengas.json').then(function(res) {
      angular.copy(res.data, obj.rengas);
    });
  };
  obj.get = function(id) {
    return $http.get('/rengas/' + id + '.json').then(function(res){
      return res.data;
    })
  };
  obj.create = function(renga) {
    return $http.post('/rengas.json', renga).then(function(res){
      obj.rengas.push(res.data);
      $state.go('rengas', {id: res.data.id});
    });
  };
return obj;
}]);
