angular.module('rengaApp')
.factory('rengas', ['$http', function($http) {
  var obj = {
    rengas: []
};
return obj;
}]);
