'use strict';
 
module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          base: './'
        },
        /*runtime: {
            options: {
                middleware: function (connect) {
                    return [
                        lrSnippet,
                        mountFolder(connect, 'instrumented'),
                        mountFolder(connect, '.......')
                    ];
                }
            }
        }*/
      }
    },
    watch: {
      test: {
        files: ['./test/abstractFactoryE2e.js', './lib/karma-e2e-dsl.js'],
        tasks: ['connect', 'uglify:build', 'karma:e2e']
      },
    },
    karma: {
      e2e: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    uglify: {
      options: {
        report: 'min',
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        files: {
          'dist/karma-e2e-dsl.min.js': ['./lib/karma-e2e-dsl.js']
        }
      },
    },
    //instrument: {
    //    files: 'js/**/*.js',
    //    options: {
    //    lazy: true,
    //       basePath: "instrumented"
    //    }
    //},
    /*protractor_coverage: {
        options: {
            keepAlive: true,
            noColor: false,
            coverageDir: 'reports/protractor/coverage',
            args: {
                baseUrl: 'http://localhost:9000'
            }
        },
        local: {
            options: {
                configFile: 'test/protractor-local.conf.js'
            }
        },
        travis: {
            options: {
                configFile: 'test/protractor-travis.conf.js'
            }
        }
    },*/
   // makeReport: {
   //     src: 'reports/protractor/coverage/**/*.json',
    //    options: {
   //         type: 'lcov',
    //        dir: 'reports/protractor/html/',
   //         print: 'detail'
    //    }
    //}
  });
 
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-protractor-coverage');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
 
  // Default task.
  grunt.registerTask('test', ['connect', 'uglify', 'karma:e2e']);
 
};