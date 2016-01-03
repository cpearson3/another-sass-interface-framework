'use strict';

var ListLink = function () {
  return {
      restrict: 'EA',
      transclude: true,
      template: '<li><a href="{{href}}"><ng-transclude></ng-transclude></a></li>',
      scope: {
          href: "@"
      }
  };
};

module.exports = ListLink;