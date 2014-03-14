module.exports = function(grunt){
	
	grunt.config.set('env', {
		test: { NODE_ENV: 'TEST' },
		coverage: { NODE_ENV: 'COVERAGE' }
	});
	
	grunt.loadNpmTasks('grunt-env'); 
};