define(['./module'], function (controllers) {
    'use strict';
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
    
    controllers.controller('AppCtrl', ['$scope', '$location', '$window', Controller]);
});