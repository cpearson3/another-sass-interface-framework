'use strict';

var NavbarLink = function () {
  return {
      restrict: 'EA',
      transclude: true,
      template: '<li><a href="{{href}}"><ng-transclude></ng-transclude></a></li>',
      //templateUrl: '/views/components/NavbarLink.html',
      scope: {
          href: "@"
      }
  };
};

module.exports = NavbarLink;