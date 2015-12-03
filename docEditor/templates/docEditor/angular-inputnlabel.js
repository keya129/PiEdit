'use strict';
/*****
This directive will allow any HTML div tag to be able to act both as an input as well as a labelto display the value without the borders in a clean way
****/

angular.module('angular-inputnlabel', [])

.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        replace: true,
        link: function(scope, elm, attrs, ctrl) {
            // view to model
            elm.on('keyup', function() {
                scope.$apply(function() {
                    console.log(elm.html())
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model to view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };

            // load init value from DOM
            ctrl.$setViewValue(elm.html());
        }
    };
});
