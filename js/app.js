/**
 * Application main file.
 * Place to setup and run the application.
 *
 * @author  Jose Macchi <jemacchi@yahoo.com.ar>
 */
define([
	'helpers/loghelper',
	'patterns/runner',
  ],
  function(LogHelper, PatternsRunner) {
	
	log = new LogHelper();
	
    var init = function() {
	  var aPatternsRunner = new PatternsRunner();
	  aPatternsRunner.runAbstractFactoryDemo();
    };

    return {
      init : init
    };
  }
);