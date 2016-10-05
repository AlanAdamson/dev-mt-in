angular.module('devMtIn').controller('cntrlr', function($scope, srvces) {

  $scope.test = "Connected";

  $scope.profiles = srvces.getProfile();

});
