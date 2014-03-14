define(['./vision'], function(vision){
	'use strict';
	return vision.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider
			.when('/p?id', '/projects/:id')
			.when('/proj/:id', '/projects/:id')
			.otherwise('/projects');
		$stateProvider
			.state('projects', {
				abstract: true,
				url: '/projects',
				templateUrl: '/templates/projects.html',
				resolve: {
					projects: ['Restangular', function(Restangular){
						return Restangular.all('project'); //.getList().$object;
					}]
				},
				controller: ['$scope', '$state', 'projects', function($scope, $state, projects){
					
					$scope.projects = projects.getList().$object;

					$scope.add = function(){
						projects.post($scope.newProject).then(function(newResource){
							$scope.projects.push(newResource);
						});
					};
				}]
			}).state('projects.list', {
				
				url: '',
				templateUrl: '/templates/projects.list.html'
				
			}).state('projects.detail', {
				
				url: '/{projectId:[0-9a-fA-F]{24}$}',
				views: {
					'': {
						templateUrl: '/templates/projects.detail.html',
						controller: ['$scope', '$stateParams', 'Restangular', function($scope, $stateParams, Restangular){
							//$scope.project = $scope.projects[0];
							Restangular.one('project', $stateParams.projectId).get().then(function(proj){
								
								var currProject = $scope.pick(proj, ['name', 'token', 'user', 'created', 'repositories']);
								$scope.project = currProject;
								console.log($scope.project);
							
							});
							

						}]
					},
					//populate a named view up in the chain
					'repos@':{
						templateUrl: '/templates/repositories.list.html',
						resolve: {
							repos: ['$stateParams','Restangular', function($stateParams, Restangular){
								return Restangular.one('project', $stateParams.projectId).getList('repos').$object;
							}]
						},
						controller: ['$scope', 'repos', function($scope, repos){
							$scope.repos = repos;
							console.log($scope.repos);
							
						}]
					}
				}
				
				
			});

			//$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!');
	});
});