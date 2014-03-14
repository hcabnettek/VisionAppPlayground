module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadTasks('gruntbuild');

  grunt.registerTask('test', [ 'env:test','cafemocha:test' ]);

  grunt.registerTask('setup-dev',
    'Prepare development environment',
    ['jshint', 'test', 'clean:prod', 'ngtemplates:vision']);

  grunt.registerTask('dev',
    'Compile and start a dev webserver.',
    ['setup-dev', 'watch']);

 
  grunt.registerTask('coverage', [ 'env:coverage', 'jscoverage', 'cafemocha:coverage' ]);
};
