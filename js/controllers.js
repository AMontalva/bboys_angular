var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.albums = data;
    $scope.albumOrder = 'year'; // helps show as default option for select
  });
}]);

