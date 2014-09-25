/**
 * Application main file.
 * Place to setup and run the application.
 *
 * @author  Jose Macchi <jemacchi@yahoo.com.ar>
 */
define([
	'helpers/loghelper',
  ],
  function(LogHelper) {
	
    var init = function() {
	  var aLogHelper = new LogHelper();
	  aLogHelper.add('Hello World !!!');
	  aLogHelper.show();
    };

    return {
      init : init
    };
  }
);