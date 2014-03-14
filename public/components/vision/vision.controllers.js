(function(ng){
	
	'use strict';
	
	var module = ng.module('vision.controllers', ['vision.services']);
	
	module.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide) {

        module.lazy = {
            controller: $controllerProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

	}]);
	
	//App Controller
    (function ($ng, $module) {

        function Controller($scope,$location, $window) {

            var $this = this;
            $this.$scope = $scope;

            $scope.setWindowTitle = function (title) {
                $scope.windowTitle = title;
            };

            return this;
        }
        
        function _capslockcheck(e){
            var s = String.fromCharCode(e.which);
            return (s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey);
        }

        Controller.prototype = {
        
            capslockCheck: function(event){
                if(_capslockcheck(event)){
                    angular.element('.text-error', '#CapslockError').text('Your CAPS LOCK is turned on');
                } else {
                    angular.element('.text-error', '#CapslockError').text('');
                }
            }
        };
        
        $module.controller('AppCtrl', ['$scope', '$location', '$window', Controller]);
        
    })(ng, module);
    
    
}(angular));