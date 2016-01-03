'use strict';

var Button = function() {
    return {
        restrict: 'EA',
        scope: {
            type: '@'
        },
        transclude: true,
        link: function (scope, element, attrs) {
            scope.class = scope.type ? 'btn-'+scope.type : 'btn';
        },
        replace: true,
        template: '<a class="{{class}}"><ng-transclude></ng-transclude></a>'
    };
};

module.exports = Button;