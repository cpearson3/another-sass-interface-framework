// Due to some weirdness, all templates are inline
// - ng-show does not work with templates loaded externally

'use strict';

var Modal = function() {
    return {
        restrict: 'EA',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width) {
                scope.dialogStyle.width = attrs.width;
            }
            if (attrs.height) {
                scope.dialogStyle.height = attrs.height;
            }
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        template:   '<div class="modal" ng-show="show">'+
                        '<div class="modal-overlay" ng-click="hideModal()"></div>'+
                        '<div class="modal-dialog" ng-style="dialogStyle">'+
                            '<div class="modal-close" ng-click="hideModal()"></div>'+
                            '<div class="modal-dialog-content" ng-transclude></div>'+
                        '</div>'+
                    '</div>'
    };
};

module.exports = Modal;