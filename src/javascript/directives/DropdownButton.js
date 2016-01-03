'use strict';

var DropdownButton = function() {
    return {
        restrict: 'EA',
        scope: {
            type: '@',
            title: '@'
        },
        transclude: true,
        link: function (scope, element, attrs) {
            scope.class = scope.type ? 'btn-'+scope.type : 'btn';
        },
        replace: true,
        template:   
            '<button class="{{class}} toggle-dropdown">'+
                '{{title}} &#9660;' +
                '<ul class="menu-dropdown">' +
                    '<ng-transclude></ng-transclude>' +
                 '</ul>'+
            '</button>'
    };
};

module.exports = DropdownButton;