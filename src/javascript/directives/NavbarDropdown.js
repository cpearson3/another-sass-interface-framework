'use strict';

var NavbarDropdown = function () {
  return {
      restrict: 'EA',
      transclude: true,
       scope: {
          title: "@"
      },
      template: '<li class="toggle-dropdown">' +
                  '<a>{{title}} &#9660;</a>' +
                  '<ul class="menu-dropdown">' +
                    '<ng-transclude></ng-transclude>' +
                  '</ul>' +
                '</li>'
  };
};

module.exports = NavbarDropdown;