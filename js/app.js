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
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        replace: false,
        link: function($scope, elem, iAttrs, controller) {

            var newElem = '<div id="popupholder" tabindex="0"></div>';

            var popupHolder = $(elem).before(newElem);

            var arrayCommands;

            var timer;

            bindKeys();

            setupCanned(AppSettings.canned);

            function setupCanned(hashData) {
                if (!hashData.canned)
                    return;

                var hashDL = hashData.canned.length;

                var commands = [];


                // var simplifiedHD = {};

                for (var i = 0; i < hashDL; i++) {

                    var obj = getMacroCommandByShortCutId(hashData.canned[i].shortcutId);

                    if (!obj.id) {
                        obj.id = hashData.canned[i].shortcutId;
                        obj.text = hashData.canned[i].shortcutText;
                        obj.desc = "";
                        obj.commands = [];

                        AppSettings.popupMenu[0].commands.push(obj);
                    }
                    obj.commands.push({
                        id: hashData.canned[i].responseId,
                        text: hashData.canned[i].responseText,
                        desc: "",
                        action_type: 'share_macro'
                    });



                }

                $log.debug("init");
            }



            function getMacroCommandByShortCutId(shortcutId) {


                for (var i = 0; i < AppSettings.popupMenu[0].commands.length; ++i) {
                    if (AppSettings.popupMenu[0].commands[i].id == shortcutId)
                        return AppSettings.popupMenu[0].commands[i];
                }

                return {};
            }


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

            $scope.level = 0;

            $scope.open = function(selectedCommand) {
                //var record = $scope.shownRecords[index]
                if (selectedCommand.action_type) {
                    // command exists and is a leaf node

                    executeAction(selectedCommand);


                } else if (selectedCommand.commands && selectedCommand.commands.length > 0) {
                    // not a leaf node, switch to level 1
                    if ($scope.level == 0)
                        $scope.commands1 = selectedCommand.commands;
                    else if ($scope.level == 1)
                        $scope.commands2 = selectedCommand.commands;


                    $scope.cmdArray.push(selectedCommand.commands);

                    $scope.level++;
                    $scope.focusIndex = 0;

                    $scope.selectedCommand = selectedCommand.commands[0];

                }
            };

            function executeAction(selectedCommand) {
                if (selectedCommand.action_type == 'share_macro') {
                    // do name replacement and company
                    destroyPopup(selectedCommand.text);
                } else {
                    if (selectedCommand.action_type == 'rate_card') {

                    } else if (selectedCommand.action_type == 'upload_image') {

                    } else if (selectedCommand.action_type == 'address_card') {

                    } else if (selectedCommand.action_type == 'share_whatsapp') {

                    } else if (selectedCommand.action_type == 'share_messenger') {

                    } else if (selectedCommand.action_type == 'share_facebook') {

                    } else if (selectedCommand.action_type == 'share_twitter') {

                    } else if (selectedCommand.action_type == 'share_gplus') {

                    }
                    destroyPopup(null);
                }

                $log.debug("Executing: " + selectedCommand.action_type);
                $("#exec").text("Executed: " + selectedCommand.action_type);


            }

            $scope.keys = [];

            // Enter key
            $scope.keys.push({
                code: [13 /*enter*/ , 39 /*right*/ ],
                action: function() {
                    $scope.open($scope.selectedCommand);
                }
            });

            // Up arrow
            $scope.keys.push({
                code: [38],
                action: function() {

                    var commands;
                    commands = $scope.cmdArray[$scope.level];

                    if ($scope.focusIndex > 0) {
                        $scope.focusIndex--;
                        $scope.selectedCommand = commands[$scope.focusIndex];
                    }
                }
            });

            //Down arrow
            $scope.keys.push({
                code: [40],
                action: function() {
                    var commands;

                    commands = $scope.cmdArray[$scope.level];

                    if ($scope.focusIndex < commands.length - 1) {
                        $scope.focusIndex++;

                        $scope.selectedCommand = commands[$scope.focusIndex];
                    }
                }
            });

            //left key
            $scope.keys.push({
                code: [37],
                action: function() {
                    if ($scope.level == 0) {

                    } else if ($scope.level == 1) {
                        // decrement level
                        $scope.level--;


                    } else if ($scope.level == 2) {

                        $scope.level--;
                    }

                    $scope.focusIndex = 0;

                }
            });

            // Escape key
            $scope.keys.push({
                code: [27],
                action: function() {

                    destroyPopup();
                }
            });

            function destroyPopup(text) {
                $('#popupholder').hide();
                $("#popupholder").off();
                elem.focus();

                if (text)
                    $("#msgdiv").text(text);
                else
                    $("#msgdiv").empty();

                $scope.focusIndex = 0;
                $scope.level = 0;

            }


            function load() {

                var firstPopup = $templateCache.get('popupmenu.html');

                $scope.commands = AppSettings.popupMenu;

                // First command is defualt selected command
                $scope.selectedCommand = $scope.commands[0];

                $scope.cmdArray = [$scope.commands]

                var linkFn = $compile(firstPopup);
                var content = linkFn($scope);
                $log.debug(content);

                $timeout(function() {
                    $('#popupholder').html(content);

                    $('#popupholder').on('keydown', function(event) {

                        var code = event.keyCode

                        $scope.keys.forEach(function(o) {
                            if ($.inArray(code, o.code) == -1) {
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
