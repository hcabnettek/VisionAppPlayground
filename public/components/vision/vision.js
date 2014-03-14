define([
        'angular',
        'uiRouter',
        'restangular',
        'uiBootstrap',
        'uiUtils',
        'angularLodash',
        'angularMoment', 
        'vision/controllers/index'
    ], function($){
        'use strict';
        /*jslint browser:true */

        var _modules = [
            'restangular',
            'ui.router',
            'ui.bootstrap',
            'ui.utils',
            'angular-lodash',
            'angularMoment',
            'vision.controllers'
        ]; 

        return angular.module('vision', _modules); 
    /*
        .run([function(){

                var UID = Date.now();
                angular.element.fn.setUniqueId = function(){
                return this.each(function(){
                    if( !this.id ){
                        this.id = (UID++).toString(36);
                    }
                });
            };
        }])
        .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/projects');

            $stateProvider
                .state('project', {
                    url: '/projects',
                    templateProvider: ['$templateFactory', function($templateFactory){
                        return $templateFactory.fromUrl('/templates/projects.html');
                    }],
                    controller: function($scope, Restangular){
                        $scope.projects = Restangular.all('project').getList().$object;

                    }
                });
               
                .state('state1.list', {
                    url: '/list',
                    templateProvider: ['$templateFactory', function($templateFactory){
                        return $templateFactory.fromUrl('');
                    }],
                    controller: function($scope){
                        $scope.items = ['List', 'of', 'items'];
                    }
                })
                .state('state2', {
                    url: '/state2',
                    templateProvider: ['$templateFactory', function($templateFactory){
                        return $templateFactory.fromUrl('');
                    }]
                })
                .state('state2.list', {
                    url: '/state2',
                    templateProvider: ['$templateFactory', function($templateFactory){
                        return $templateFactory.fromUrl('');
                    }]
                    controller: function($scope){
                        $scope.items = ['List', 'of', 'items'];
                    }
                });
                */
        });

    //angular.element(document).ready(function(){
       // angular.bootstrap(document, _.union(['vision'], _modules));
 
    //});

//});