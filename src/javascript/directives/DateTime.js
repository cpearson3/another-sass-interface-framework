'use strict';

// Depends on $interval
var DateTime = function($interval) {
    return {
        restrict: 'EA',
        replace: true, // Replace with the template below
        link: function(scope, element, attrs) {
            var tick = function() {
                scope.today = Date.now();
            };
            
            tick();
            $interval(tick, 1000);
            
        },
        template:
            '<div>{{ today | date:"hh:mm:ss a" }}<br>'+
            '{{ today | date:"EEEE, MMMM d, y" }}</div>'

    };
};

module.exports = DateTime;