'use strict';

var Button = function() {
    return {
        restrict: 'EA',
        scope: {
            type: '@'
        },
        transclude: true,
        link: function (scope, element, attrs) {
            
            if (scope.type == 'flat' ) {
                scope.class = "btn-flat";
            }  else {
                scope.class = 'btn';
            }
            
        },
        replace: true,
        template: '<a class="{{class}}"><ng-transclude></ng-transclude></a>'
    };
};

module.exports = Button;