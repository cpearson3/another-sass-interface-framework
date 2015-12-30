'use strict';

var ImageBox = function() {
    return {
        restrict: 'EA',
        scope: {
            url: '@'
        },
        replace: true, // Replace with the template below
        link: function (scope, element, attrs) {
            scope.modalShown = false;
            scope.showMe = function() {
                var src = attrs.src;
                scope.modalShown = true;
                console.log(src);
            };
        },
        template:
            '<div style="cursor: pointer">'+
                '<img src={{url}} class="img bordered" ng-click="showMe()">'+
                '<modal-dialog show="modalShown">' +
                    '<img src="{{url}}" class="img center bordered">'+
                '</modal-dialog>'+
            '</div>'
    };
};

module.exports = ImageBox;