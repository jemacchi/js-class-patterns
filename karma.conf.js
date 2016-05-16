// Karma configuration
module.exports = function(config) {
  'use strict';
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: './',


    // frameworks to use
    frameworks: ['mocha','requirejs','chai'], 
	
    // list of files / patterns to load in the browser
    files: [
      './lib/underscore.min.js',
      './lib/jquery.min.js',
      './lib/karma-e2e-dsl.js',
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'js/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},
      {pattern: 'test/**/*E2e.js', included: true},
      'test/test-main.js',
    ],

    // list of files to exclude
    exclude: [
      'js/main.js'
    ],

    proxies: {
      '/app/': 'http://localhost:8000/app/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    //reporters: ['progress', 'coverage', 'junit'],
  	reporters: ['progress','coverage', 'junit'],
  	
    preprocessors: { 
	    //'js/**/*.js': ['jshint','complexity'],
      'js/core/*.js' : ['coverage'] ,
      'js/helpers/*.js' : ['coverage'] ,
      'js/patterns/creational/abstractFactory/*.js' : ['coverage'] ,
      'js/patterns/creational/builder/*.js' : ['coverage'] ,
      'js/patterns/creational/factoryMethod/*.js' : ['coverage'] ,
      'js/patterns/creational/prototype/*.js' : ['coverage'] ,
      'js/patterns/creational/singleton/*.js' : ['coverage'] ,
      'js/patterns/structural/adapter/*.js' : ['coverage'] ,
  	},
  	
	
	/*jshintPreprocessor: {
      jshintrc: './.jshintrc',
	  stopOnError: false
    },*/
	
	complexityConfig:{
	  dir:'./reports/complexity/',
	  logicalor:true,
	  switchace:true,
	  forin:true,
	  trycatch:true,
	  newmi:true
	},
  	// optionally, configure the reporter
    coverageReporter: {
      type : 'lcov',
      dir : './reports/coverage/'
    },
  	
  	// the default configuration
    junitReporter: {
      outputFile: './reports/qunit/TEST-results.xml',
      suite: ''
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    //browsers: ['Chrome'],

    // Reference to make it working with e2e:
    // https://groups.google.com/forum/#!topic/angular/VeqlVgUa6Wo
    browsers: ['phantomJS_without_security'],
    
    customLaunchers: {
        chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
        },
        phantomJS_without_security: {
          base: 'PhantomJS',
          options: {
            windowName: 'my-window',
            settings: {
              webSecurityEnabled: false
            }
          },
          //flags: ['--remote-debugger-port=9000']
        }
    },

    urlRoot: '/__karma/',

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,	

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

