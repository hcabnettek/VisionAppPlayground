module.exports = function(grunt){
	
	grunt.config.set('watch', {
		jshintrc: {
			files: ['**/.jshintrc'],
			tasks: ['jshint']
		},

		scripts: {
			files: ['<%= jshint.app.src %>'],
			tasks: ['jshint:app']
		},
		
		tests: {
			files: ['test/*'],
			tasks: ['jshint:test-integration', 'test']
		}
	
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
};