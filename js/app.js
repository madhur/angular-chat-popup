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

            var newElem = '<div id="popupholder" tabindex="0"></div>';

            var popupHolder = $(elem).before(newElem);

            var timer;

            bindKeys();


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

            $scope.level = 1;

            $scope.open = function(index) {
                //var record = $scope.shownRecords[index]

                for(var i=0;i<$scope.commands.length;++i)
                {

                    if($scope.commands[i].id==index)
                    {
                        if(AppSettings.menuActions[$scope.commands[i].id])
                        {
                            // command exists and is a leaf node

                            break;
                        }
                        else if($scope.commands[i].commands && $scope.commands[i].commands.length > 0)
                        {
                            // not a leaf node, switch to level 2
                            $scope.selcmd1 = $scope.commands[i];
                            $scope.level = 2;
                            $scope.focusIndex = 0;

                            break;
                        }
                    }
                }
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

            $scope.keys.push({
                code: 27,
                action: function() {
                    if ($scope.level == 1) {
                        $('#popupholder').hide();
                        $("#popupholder").off();
                        elem.focus();
                        $("#msgdiv").empty();
                    } else if ($scope.level == 2) {
                        // decrement level
                        $scope.level--;


                    } else if ($scope.level == 3) {

                        $scope.level--;
                    }

                     $scope.focusIndex=0;

                }
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

                    $('#popupholder').on('keydown', function(event) {

                        var code = event.keyCode

                        $scope.keys.forEach(function(o) {
                            if (o.code !== code) {
                                return;
                            }

                            event.preventDefault();
                            o.action();
                            $scope.$apply();
                        });
                    });

                    $('#popupholder').show();
                    $('#popupholder').focus();


                });




            }
        }
    }
});
