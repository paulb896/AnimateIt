var app = angular.module('AnimateBox', ['ngAnimate', 'ngTouch']);
app.controller('boxController', ['$scope', function($scope) {
  $scope.initialize = function() {
    $scope.template = {id: 'box'};
    $scope.showBox = true;
  };
  $scope.flipBoxes = function() {
    $scope.boxFlipped = !$scope.boxFlipped;
    if ($scope.template.id == 'box') {
      $scope.template.id = 'box-flipped';
    } else {
      $scope.template.id = 'box';
    }
  };
}]);
