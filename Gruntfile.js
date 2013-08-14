/* global module */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'ftp-deploy': {
      build: {
        auth: {
          host: 'startcontinue.com',
          port: 21,
          authKey: 'key1'
        },
        src: '.',
        dest: 'incompl',
        exclusions: ['Gruntfile.js',
                     'package.json',
                     '.git',
                     'node_modules',
                     '.gitignore']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Default task(s).
  grunt.registerTask('deploy', ['ftp-deploy']);

};