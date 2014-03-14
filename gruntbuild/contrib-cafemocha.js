module.exports = function(grunt){
	
	grunt.config.set('cafemocha', {
		test: {
          src: 'test/*.js',
          options: {
              ui: 'bdd',
              reporter: 'spec',
          },
      },
      coverage: {
         src: 'test/*.js',
          options: {
            ui: 'bdd',
            reporter: 'html-cov',
            coverage: {
                output: 'coverage.html'
            }
          }
      }
	});
	
	grunt.loadNpmTasks('grunt-cafe-mocha'); 
};