'use strict';

// jQuery
var $ = require('jquery');

var Navbar = function () {
  return {
      restrict: 'EA',
      transclude: true,
      scope: {
          name: "@",
          title: "@"
      },
      controller: function($scope) {
        $scope.toggle = function () {
          //$('#'+$scope.name).toggle();
          var el=$('#'+$scope.name);
          el.slideToggle("fast");
        };
      },
      template: '<nav class="nav">' +
                  '<div class="nav-title">{{title}}</div>'+
                  '<a class="menu-toggle txt-center" ng-click="toggle()">'+
                    '<i class="fa fa-bars pull-left"></i> {{title}}'+
                  '</a>'+
                  '<ul id="{{name}}">'+
                    '<ng-transclude></ng-transclude>'+
                  '</ul>'+
                '</nav>'
  };
};

module.exports = Navbar;