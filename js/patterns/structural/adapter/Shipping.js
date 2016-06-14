define([
	'class',
  ],
  /**
   * Shipping class
   * @exports patters/structural/adapter  
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Customer) {
    'use strict';
   /**
    * Shipping class (old implementation)
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Shipping
    * @cdxd.class AdapterPattern
    */	
    var Shipping = Class.extend(
	/** @lends Shipping.prototype */
	{	
		request: function(zipStart, zipEnd, weight) {
        return "$49.75";
    },
    });
    return Shipping;
  }
);