module.exports = function(grunt){
	
	grunt.config.set('jscoverage', {
		options: {
			inputDirectory: 'lib',
			outputDirectory: 'lib-cov',
			highlight: true
		}
	});
	
	grunt.loadNpmTasks('grunt-jscoverage'); 
};