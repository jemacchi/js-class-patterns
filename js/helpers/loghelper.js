define([
    'class',
    'jquery'
  ],
  /**
   * Log helper
   * @exports helpers   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, $) {
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
		add: function (msg) { this.log += msg + "<br/>"; },
	   /**
		* Show stack of messages
		*/		
		show: function () { 
      var dialog = $('#logModal');
      dialog.find('.modal-body').html(this.log);
      dialog.modal('show');
      this.log = "";
    },
    /**
    * Return stack of messages
    */    
    get: function () { return this.log; }
    });

    return LogHelper;
  }
);