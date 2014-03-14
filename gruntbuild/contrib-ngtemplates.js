module.exports = function(grunt){
	
	grunt.config.set('ngtemplates', {
		vision: {
			src: 'templates/*.html',
			dest: 'public/components/vision/templates.js',
			options: {
				prefix: '/',

				
				bootstrap: function(module, script){
					return 'define([\''+ module +'\/' + module +'\'], function(' + module + '){ \n\t'
						+ module + '.run([\'$templateCache\', function($templateCache) {\n\t'+ script + '}]);});';
				}
				
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-angular-templates'); 
};

/*
angular.module('vision').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/templates/projects.html',
    "<ul id=\"projects-list\"  class=\"nav nav-list\">\n" +
    "\t<li ng-repeat=\"project in projects\">\n" +
    "\t\t<a>{{project.name}}</a>\n" +
    "\t\t<button class=\"delete btn btn-mini btn-primary list-btn\">del</button>\n" +
    "\t\t<button class=\"edit btn btn-mini btn-primary list-btn spacer \">edit</button>\n" +
    "\t</li>\n" +
    "</ul>\n"
  );

}]); */