'use strict';

var ShowcaseCtrl = function($scope) {
  
  $scope.modalShown = false;
  
  $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
      console.log($scope.modalShown);
  };
  
  $scope.sayHello = function() {
    console.log('hello world');
  };
  
};

module.exports = ShowcaseCtrl;