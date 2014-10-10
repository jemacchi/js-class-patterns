define([
	'class',
	'./adaptee'
  ],
  /**
   * Shipping class
   * @exports patters/structural/adapter  
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Adaptee) {
    'use strict';
   /**
    * AdvancedShipping class (new class)
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class AdvancedShipping
    * @cdxd.class AdapterPattern
    */	
    var AdvancedShipping = Adaptee.extend(
	/** @lends AdvancedShipping.prototype */
	{	
		login: function(credentials) { /* ... */ },
		setStart: function(start) { /* ... */ },
		setDestination: function(destination) { /* ... */ },
		calculate: function(weight) { return "$39.50"; },
    });
    return AdvancedShipping;
  }
);