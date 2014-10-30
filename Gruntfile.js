module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    traceur: {
      options: {
        generators: 'parse',
        forOf: 'parse',
        blockBinding: 'parse',
        script: true
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['*.js'],
          dest: 'compiled'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-traceur');

  // Default task(s).
  grunt.registerTask('default', ['traceur']);

};
