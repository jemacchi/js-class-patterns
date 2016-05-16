/**
 * Main require file.
 * Place to load the require configuration and start the application.
 *
 * @author  Jose Macchi <jemacchi@yahoo.com.ar>
 */
require.config({
  shim: {
    'app': {
      deps: ['./config/require.config'],
      exports: 'app'
    }
  }
});
require(['require.config','app'],
  function(config, app) {
    app.init();
  }
);