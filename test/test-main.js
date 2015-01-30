var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    paths: {
        'jquery': '../lib/jquery.min',
        'underscore': '../lib/underscore.min',
        'class': 'core/class.inheritance',
        'chai': '../lib/chai',
        'karma': '../lib/karma-e2e-dsl'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'class': {
            exports: 'Class'
        },
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});