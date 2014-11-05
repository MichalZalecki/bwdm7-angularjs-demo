/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    sass: {
      dev: {
        options: {
          lineNumbers: true,
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'app/css/scss',
          src: ['**/*.scss'],
          dest: 'app/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 9'],
        map: true
      },
      dev: {
        src: ['app/css/**/*.css', '!app/css/**/*.min.css']
      }
    },
    uncss: {
       dist: {
          options: {
             ignore: [/js-.+/, '.added-at-runtime', /table.+/, 'td'],
             //ignoreSheets: [/fonts.googleapis/, /cdn/]
             stylesheets  : ['css/style.css'],
          },
          files: {
             'app/css/unused-removed.css': ['app/index.html']
          }
       }
    },
    cssmin: {
      options: {
        //banner: '<%= banner %>',
        keepSpecialComments: 0
      },
      prod: {
        files: [{
          expand: true,
          cwd: 'app/css',
          src: ['*.css', '!*.min.css'],
          dest: 'app/css',
          ext: '.min.css'
        }]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
        	angular: true,
            console: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      app_test: {
        src: ['app/js/src/**/*.js']
      },
      test_test: {
        src: ['test/**/*.js'],
        options: {
          undef: false
        }
      }
    },
    uglify: {
      prod: {
        files: {
          'app/js/scripts.min.js': '<%= jshint.app_test.src %>'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true,
        singleRun: false,
        autoWatch: false
      }
    },
    watch: {
      options: {
        livereload: true,
        interrupt: true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      styles: {
        files: ['app/css/scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'uncss', 'cssmin']
      },
      html: {
        files: ['app/index.html'],
        tasks: []
      },
      app_test: {
        files: '<%= jshint.app_test.src %>',
        tasks: ['jshint:app_test', 'karma:unit:run', 'uglify:prod']
      },
      test_test: {
        files: '<%= jshint.test_test.src %>',
        tasks: ['jshint:test_test', 'karma:unit:run']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
