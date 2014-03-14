module.exports = function(grunt){

	grunt.config.set('jshint', {
		build: {
			options: {
				jshintrc: '.jshintrc',
			},
			src: ['gruntfile.js', 'gruntbuild/**/*.js']
		},
		app: {
			options: {
				jshintrc: './.jshintrc'
			},
			src: ['public/components/vision/vision.directives.js']
		}
		/*,
		'test-unit': {
			options: {
				jshintrc: 'test/unit/.jshintrc'
			},
			src: ['test/unit/tests/*.js']
		},
		'test-integration': {
			options: {
				jshintrc: 'test/.jshintrc'
			},
			src: ['test/*.js']
		}*/
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};