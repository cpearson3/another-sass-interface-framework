// Due to some weirdness, all templates are inline
// - ng-show does not work with templates loaded externally

'use strict';

var Slideout = function() {
    return {
        restrict: 'EA',
        scope: {
            show: '=',
            type: '@'
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            if (scope.type == '' ) {
                scope.type = "left";
            }
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        template:   '<div class="slideout-{{type}}" ng-show="show">'+
                        '<div class="modal-close" ng-click="hideModal()"></div>'+
                        '<div ng-transclude></div>'+
                    '</div>'
    };
};

module.exports = Slideout;