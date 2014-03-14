define([
	'require',
	'angular',
	'vision/vision',
	'vision/routes',
	'vision/templates'], 
	function(require, $ng, vision){
		'use strict';

		vision.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){

			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			
		}]);

		require(['domReady!'], function(document){
			$ng.bootstrap(document, ['vision']);
		});
	});