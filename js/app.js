/**
 * Application main file.
 * Place to setup and run the application.
 *
 * @author  Jose Macchi <jemacchi@yahoo.com.ar>
 */
define([
	'helpers/loghelper',
	'patterns/Runner',
  ],
  function(LogHelper, PatternsRunner) {
	
	log = new LogHelper();
	demosRunner = new PatternsRunner();
	
    var init = function() {
	  //var aPatternsRunner = new PatternsRunner();
	  //aPatternsRunner.runAbstractFactoryDemo();
	  //aPatternsRunner.runBuilderDemo();
    };

    return {
      init : init
    };
  }
);