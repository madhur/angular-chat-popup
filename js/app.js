'use strict';
var chatApp = angular.module('chatApp', []);

chatApp
    .controller(
        'chatController', [
            '$scope',
            '$log',
            function($scope, $log) {



            }
        ]);


chatApp.directive('keyboardShortcut', function($http, $log, $templateCache, $compile, AppSettings, $timeout) {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        replace: false,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, elem, iAttrs, controller) {

            var newElem = '<div id="popupholder"></div>';

            var popupHolder = $(elem).before(newElem);

            var timer;

            bindKeys();

            $scope.level=1;

            function bindKeys() {
                $(elem).on('input', function() {

                    clearTimeout(timer);
                    var ms = 500; // milliseconds
                    var val = this.value;
                    timer = setTimeout(function() {
                        setupPopup(val);
                    }, ms);
                });


            }


            function setupPopup() {

                var text = $(elem).text(); // get the current value of the input field.

                if (text == "/") {
                    $log.debug("Setting up popup");

                    load();

                }
            }

            $scope.focusIndex = 0;

            $scope.open = function(index) {
                //var record = $scope.shownRecords[index]
                console.log('opening : ', record);
            };

            $scope.keys = [];
            $scope.keys.push({
                code: 13,
                action: function() {
                    $scope.open($scope.focusIndex);
                }
            });
            $scope.keys.push({
                code: 38,
                action: function() {
                    $scope.focusIndex--;
                }
            });
            $scope.keys.push({
                code: 40,
                action: function() {
                    $scope.focusIndex++;
                }
            });

            $scope.$on('keydown', function(msg, obj) {
                var code = obj.code;
                $scope.keys.forEach(function(o) {
                    if (o.code !== code) {
                        return;
                    }
                    o.action();
                    $scope.$apply();
                });
            });


            function load() {

                var firstPopup = $templateCache.get('popupmenu.html');


                $scope.commands = AppSettings.popupMenu;
                // elem.html(firstPopup);

                var linkFn = $compile(firstPopup);
                var content = linkFn($scope);
                $log.debug(content);

                $timeout(function() {
                    $('#popupholder').html(content);
                });



            }
        }
    }
});
