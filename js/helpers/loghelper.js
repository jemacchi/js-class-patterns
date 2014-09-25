define([
    'class',
  ],
  /**
   * Log helper
   * @exports helpers   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Log helper
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class LogHelper
    */	
    var LogHelper = Class.extend(
	/** @lends LogHelper.prototype */
	{
	    init: function() {},
	    log : '',
	   /**
		* Add messages to log
		*/
		add: function (msg) { this.log += msg + "\n"; },
	   /**
		* Show stack of messages
		*/		
		show: function () { alert(this.log); this.log = ""; }
    });

    return LogHelper;
  }
);