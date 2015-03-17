module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'test.js']
    },

    watch: {
      jshint: {
        files: 'test.js',
        tasks: 'jshint'
      },
    },

    jasmine: {
      files: 'TestSpec.js'
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
