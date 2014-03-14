module.exports = function(grunt){
	
	grunt.config.set('requirejs', {
		
		prod : {
			options: {
				baseUrl: '.',
				mainConfigFile: 'src/requirejs/config.js',
				insertRequire: ['src/main'],
				name: 'public/components/almond/almond',
				out:'prod/vision.prod.js',
				optimize: 'uglify2',
				preserveLicenseComments: false
			}
		}
		
	
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');
};