'use strict';

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
                  '<a class="toggle-nav txt-center" ng-click="toggle()">'+
                    '<i class="ico ico-bars pull-left"></i> {{title}}'+
                  '</a>'+
                  '<ul id="{{name}}">'+
                    '<ng-transclude></ng-transclude>'+
                  '</ul>'+
                '</nav>'
  };
};

module.exports = Navbar;